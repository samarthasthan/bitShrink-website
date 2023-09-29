import { VERSION_1_0_1 } from "../constants";
function DownloadFile(value) {
  const downloadLink = document.createElement("a");
  if (value === "apple") {
    downloadLink.href = VERSION_1_0_1.mac;
  } else {
    downloadLink.href = VERSION_1_0_1.windows;
  }
  downloadLink.download = "desired-filename.ext"; // Specify the desired file name
  document.body.appendChild(downloadLink);
  downloadLink.click();
  document.body.removeChild(downloadLink);
}

export default DownloadFile;
