export const qrCodeDownload = (qrCodeRef: React.RefObject<HTMLDivElement | null>) => {
  if(!qrCodeRef.current) return;

  const canvas = qrCodeRef.current.querySelector("canvas");

  if(!canvas) return;

  const link = document.createElement("a");

  link.href = canvas.toDataURL("image/png");
  link.download = "qrcode.png";
  link.click();
}