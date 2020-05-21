import React from "react";

const CertificateList = () => {
  const certificateList = [
    {
      name: "The Modern JavaScript Bootcamp",
      courseURL: "https://www.udemy.com/share/1013A0BkoecltWRn4=/",
      organization: "Udemy",
      instructor: "Andrew Mead",
      receivingDate: "04/2020",
      url:
        "https://www.udemy.com/certificate/UC-9b2fa8c5-6f75-4e6a-a8ed-3e0bafb30751/",
    },
    {
      name: "Complete React Developer Course",
      courseURL: "https://www.udemy.com/share/101XgIBkoecltWRn4=/",
      organization: "Udemy",
      instructor: "Andrew Mead",
      receivingDate: "02/2020",
      url:
        "https://www.udemy.com/certificate/UC-f96ab820-3b2a-4eb0-bf1a-40f0b0f192ba/",
    },
    {
      name: "The Complete 2020 Web Development Bootcamp",
      courseURL: "https://www.udemy.com/share/1013gGBkoecltWRn4=/",
      organization: "Udemy",
      instructor: "Angela Yu",
      receivingDate: "02/2020",
      url:
        "https://www.udemy.com/certificate/UC-360b9f4b-81db-4c01-b58c-9acddbf0f175/",
    },
    {
      name: "JavaScript (Basic) Certificate",
      courseURL: "https://www.hackerrank.com/",
      organization: "HackerRank",
      instructor: "HackerRank",
      receivingDate: "05/2020",
      url: "https://www.hackerrank.com/certificates/064127529ac8",
    },
  ];

  return certificateList.map((certificate) => {
    return (
      <div className="cv-certificates__item" key={certificate.url}>
        <div className="cv-certificates__item__header">
          <h4>
            <a
              href={certificate.courseURL}
              className="nav-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              {certificate.name}
            </a>
          </h4>
          <a
            href={certificate.url}
            className="nav-link certificate-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Check
          </a>
        </div>
        <div className="cv-certificates__item__content">
          <p>Organization: {certificate.organization}</p>
          <p>Instructor: {certificate.instructor}</p>
          <p>Receiving Date: {certificate.receivingDate}</p>
        </div>
      </div>
    );
  });
};
export default CertificateList;
