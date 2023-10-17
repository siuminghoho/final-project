import { useCallback, useEffect, useState } from "react";
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
  const mediaConstraints = { facingMode: "environment" };
  const [data, setData] = useState("No result");

  const [devices, setDevices] = useState<any[]>([]);
  const codeReader = new BrowserQRCodeReader();

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
          setData(uuid!);
          controls.stop();
        }
        if (error && !(error instanceof TypeError)) {
          // console.error(error);
          setData("error");
        }
      }
    );
  };

  if (devices.length > 0) {
    scan();
  }

  return (
    <div className="container">
      <h1> Admin Scan</h1>
      {devices.length > 0 && (
        <div>
          <Webcam audio={false} videoConstraints={mediaConstraints} />
        </div>
      )}
      Data:{data}
    </div>
  );
}
