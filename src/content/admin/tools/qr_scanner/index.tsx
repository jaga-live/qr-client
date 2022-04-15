import { CustomButton, PageTitleHeader, PageTitleWrapper } from "@/components";
import { styled } from "@mui/material/styles";
import { useState } from "react";
import { QrReader } from "react-qr-reader";

const QRScannerContainer = styled("div")`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
  align-items: center;
`;

const ViewFinder = styled("div")`
  width: 500px;
  height: 500px;
`;

export const QRScanner = () => {
  const [data, setData] = useState(null);
  const [isScanning, setIsScanning] = useState(false);

  const handleScanEnd = (result, error) => {
    if (!!result) {
      setData(result?.text);
    }
    if (!!error) {
      window.flash({
        message: "Error Occured while scanning",
        variant: "error",
      });
      setData(null);
    }
    setIsScanning(false);
  };

  return (
    <>
      <PageTitleWrapper>
        <PageTitleHeader
          title="QR Code Scanner"
          description="Show him a QR code"
        />
      </PageTitleWrapper>
      <QRScannerContainer>
        {isScanning && (
          <QrReader
            onResult={handleScanEnd}
            containerStyle={{ width: "500px", height: "500px" }}
            videoContainerStyle={{
              width: "500px",
              height: "500px",
              paddingTop: 0,
            }}
            constraints={{ facingMode: "user" }}
            ViewFinder={ViewFinder}
          />
        )}
        <CustomButton
          color={isScanning ? "error" : "primary"}
          onClick={() => setIsScanning((prev) => !prev)}
        >
          {isScanning ? "Stop Scanning" : "Scan Qr Code"}
        </CustomButton>
      </QRScannerContainer>
    </>
  );
};
