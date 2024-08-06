import React from 'react'

export default function Downloadcv() {
    const cvUrl = "/ files/cv.pdf"
    const downloadHandler = () => {
        const link = document.createElement("a")
        link.href = cvUrl;
        link.download = "UCs_cv.pdf"
        document.body.appendChild(link)
        link.click();
        document.body.removeChild(link)
    }
  return (
    <div>
      <img
        width="50"
        height="50"
        src="https://img.icons8.com/3d-fluency/94/download-from-cloud.png"
              alt="download-from-cloud"
              onClick={downloadHandler}
      />
    </div>
  );
}
