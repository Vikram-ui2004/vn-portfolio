import React from "react";
import "./Certificate.css"; // Assuming you add styles in this CSS file

const certifications = [
  {
    id: 1,
    title: "Certificate 1",
    image: "https://i.ibb.co/Q6JfLD4/c.jpg",
    description: "Description of certificate 1"
  },
  {
    id: 2,
    title: "Certificate 2",
    image: "https://i.ibb.co/L8D3MXV/java.jpg",
    description: "Description of certificate 2"
  },
  {
    id: 3,
    title: "Certificate 3",
    image: "https://i.ibb.co/yyNBVHh/ml.jpg",
    description: "Description of certificate 3"
  },
  {
    id: 4,
    title: "Certificate 4",
    image: "https://i.ibb.co/z7SX0qJ/python.jpg",
    description: "Description of certificate 4"
  }
];

const Certificate = () => {
  return (
    <div className="certifications-section">
      <h2 className="section-title" id="cert">Certifications</h2>
      <div className="certificates-container">
        {certifications.map((cert) => (
          <div key={cert.id} className="certificate-card">
            <img src={cert.image} alt={cert.title} className="certificate-image" />
            <h3>{cert.title}</h3>
            <p>{cert.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certificate;
