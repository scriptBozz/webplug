import React, { useState } from "react";

export default function Showcv() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const pdfUrl = "/files/cv.pdf"; // Replace with your actual PDF path

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      
          <img
        
        width="50"
        height="50"
        src="https://img.icons8.com/3d-fluency/94/view.png"
        alt="view"
        onClick={openModal}
      />
      {isModalOpen && (
        <div style={styles.modalOverlay}>
          <div style={styles.modalContent}>
            <iframe
              src={pdfUrl}
              width="100%"
              height="600px"
              title="PDF Viewer"
              style={styles.iframe}
            />
            <button onClick={closeModal} style={styles.closeButton}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

const styles = {
  modalOverlay: {
    position: "fixed" as "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000 as 1000,
  },
  modalContent: {
    position: "relative" as "relative",
    width: "80%",
    maxWidth: "800px",
    backgroundColor: "#fff",
    borderRadius: "8px",
    padding: "20px",
    boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.3)",
  },
  iframe: {
    borderRadius: "8px",
    border: "none",
  },
  closeButton: {
    position: "absolute" as "absolute",
    top: "10px",
    right: "10px",
    backgroundColor: "blue",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    padding: "10px",
    cursor: "pointer",
  },
};

