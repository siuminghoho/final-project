import { useCallback, useEffect, useState } from "react";
import { AdminMenu } from "../component/AdminMenu";
import { useSelector, useDispatch } from "react-redux";
import { IRootState } from "../store";
import { setUuid } from "../slice/uuidSlice";
import { useNavigate } from "react-router-dom";
import styles from "./AdminScan.module.css";
import Swal from "sweetalert2";

//library for read and decode QR code
import Webcam from "react-webcam";
import { BrowserQRCodeReader } from "@zxing/browser";

function extractUUID(urlString: string) {
  // We create a URL object from the URL string to handle parsing correctly.
  const url = new URL(urlString);

  // URLSearchParams object allows us to work with the query parameters.
  const params = new URLSearchParams(url.search);

  // Get the UUID from the query parameters
  const uuid = params.get("uuid");

  return uuid;
}

export function AdminScan() {
  const uuid = useSelector((state: IRootState) => state.uuid.uuid);
  const dispatch = useDispatch();
  const mediaConstraints = { facingMode: "environment" };

  const [devices, setDevices] = useState<any[]>([]);
  const codeReader = new BrowserQRCodeReader();

  const navigate = useNavigate();

  const handleDevices = useCallback(
    (mediaDevices: any) =>
      setDevices(
        mediaDevices.filter((item: any) => item.kind === "videoinput")
      ),
    [setDevices]
  );

  useEffect(() => {
    navigator.mediaDevices.enumerateDevices().then(handleDevices);

    // if (devices.length > 0) {
    //   scan();
    // }
  }, [handleDevices]);

  const scan = async () => {
    console.log("hello check");
    await codeReader.decodeFromVideoDevice(
      devices[0].deviceId,
      undefined,
      (result, error, controls) => {
        if (result) {
          console.log(result);

          const uuid = extractUUID(result.getText());

          dispatch(setUuid(uuid!));
          controls.stop();

          setTimeout(() => {
            if (uuid) {
              navigate("/admin/orderRecord");
            } else {
              Swal.fire({
                icon: "error",
                title: "錯誤",
                text: "請掃描正確的QR code",
              });
            }
          }, 1000);
        }
        if (error && !(error instanceof TypeError)) {
          console.error(error);
        }
      }
    );
  };

  if (devices.length > 0) {
    scan();
  }

  //fetch the generated uuid to the backend, to route http://localhost:8080/orderingrecord/insertuuid

  return (
    <>
      <div className={styles.container}>
        <AdminMenu />
        <h1>掃描下單/查單</h1>
        {devices.length > 0 && (
          <div className={styles.webcamContainer}>
            {" "}
            {/* use new style */}
            <div className={styles.webcamInner}>
              {" "}
              {/* use new style */}
              <Webcam
                audio={false}
                videoConstraints={mediaConstraints}
                // style={{ width: '100%', height: '100%' }}
              />
            </div>
          </div>
        )}
        Scanned Result: {uuid}
      </div>
    </>
  );
}
