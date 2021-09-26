import React from "react";
import { Breadcrumb } from "react-bootstrap";
import { ROOT_FOLDER } from "../../hooks/useFolder";
import { Link } from "react-router-dom";
import "./style.css";

export default function FolderBreadcrumbs({ className, currentFolder }) {
  let path = currentFolder === ROOT_FOLDER ? [] : [ROOT_FOLDER];
  if (currentFolder) path = [...path, ...currentFolder.path];
  return (
    <Breadcrumb
      className="flex-grow-1"
      listProps={{
        className: `${
          className === "bg-white" ? "bg-white" : "bg-black"
        } p-2 m-0`,
      }}
    >
      {path.map((folder, index) => (
        <Breadcrumb.Item
          key={folder.id}
          linkAs={Link}
          linkProps={{
            to: {
              pathname: folder.id ? `/folder/${folder.id}` : "/",
              state: { folder: { ...folder, path: path.slice(1, index) } },
            },
          }}
          className={`${
            className === "bg-dark" ? "text-white" : "text-black"
          } text-truncate d-inline-block`}
          style={{
            maxWidth: "30vw",
            color: "black",
          }}
        >
          {folder.name}
        </Breadcrumb.Item>
      ))}
      {currentFolder && (
        <Breadcrumb.Item
          className={`${
            className === "bg-dark" ? "text-white" : "text-black"
          } text-truncate d-inline-block`}
          style={{
            maxWidth: "50vw",
            color: "black",
          }}
          active
        >
          {currentFolder.name}
        </Breadcrumb.Item>
      )}
    </Breadcrumb>
  );
}
