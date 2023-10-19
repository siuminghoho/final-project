import { useCallback, useEffect, useState } from "react";
import Webcam from "react-webcam";
import { BrowserQRCodeReader } from "@zxing/browser";
import { AdminMenu } from "../component/AdminMenu";
// import "..page/AdminMenu.css";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store";
import { setUuid } from "../slice/uuidSlice";
import { useNavigate } from "react-router-dom";

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
  const uuid = useSelector((state: RootState) => state.uuid.uuid);
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

          setTimeout(() => { navigate("/admin/orderRecord") }, 1000);
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

  return (
    <>
      <div className="container">
        <AdminMenu />
        <h1> Admin Scan</h1>
        {devices.length > 0 && (
          <div>
            <Webcam audio={false} videoConstraints={mediaConstraints} />
          </div>
        )}
        Scanned Result:{uuid}
      </div>
    </>
  );
}
