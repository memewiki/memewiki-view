import axios from "axios"

class FileDownloader {
    download = async (url) => {
      const axiosResponse = await axios.get(url, { responseType: "blob" });

      const aElem = document.createElement("a");

      const blobFile = window.URL.createObjectURL(new Blob([axiosResponse.data]));
      aElem.href = blobFile;

      const contentDisposition = axiosResponse.headers["content-disposition"];
      if (contentDisposition) {
        const filename = contentDisposition.split(";")[1].trim().split("=");
        aElem.download = filename[1];
      }

      document.body.appendChild(aElem);
      aElem.click();
      setTimeout(() => {
        aElem.remove();
      }, 3000);
    };

  
}

export default new FileDownloader();