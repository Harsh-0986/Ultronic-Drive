import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolder } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

export default function Folder({ folder, darkMode }) {
  return (
    <Button
      to={{ pathname: `/folder/${folder.id}`, state: { folder: folder } }}
      variant={`${darkMode ? "outline-light" : "outline-dark"}`}
      className="text-truncate w-100"
      as={Link}
    >
      <FontAwesomeIcon
        icon={faFolder}
        className="m-2 mt-0 mb-0"
      ></FontAwesomeIcon>
      {folder.name}
    </Button>
  );
}
