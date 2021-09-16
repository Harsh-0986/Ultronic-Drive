import { faFile } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function File({ file }) {
  return (
    <a
      href={file.url}
      target="_blank"
      className="btn btn-outline-dark text-truncate w-100"
      rel="noreferrer"
    >
      <FontAwesomeIcon icon={faFile} className="m-2 mt-0 mb-0" />
      {file.name}
    </a>
  );
}
