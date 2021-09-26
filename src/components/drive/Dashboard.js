import React from "react";
import { useFolder } from "../../hooks/useFolder";
import NavBar from "./Navbar";
import { Container } from "react-bootstrap";
import AddFolderButton from "./AddFolderButton";
import AddFileButton from "./AddFileButton";
import Folder from "./Folder";
import { useParams, useLocation } from "react-router-dom";
import FolderBreadcrumbs from "./FolderBreadcrumbs";
import File from "./File";

export default function Dashboard() {
  const { folderId } = useParams();
  const { state = {} } = useLocation();
  const { folder, childFolders, childFiles } = useFolder(
    folderId,
    state.folder
  );
  console.log(childFiles);

  return (
    <div style={{ overflow: "hidden", height: "100vh" }}>
      <NavBar></NavBar>

      <div className="d-flex flex-column ">
        <Container fluid>
          <div className="d-flex align-items-center ">
            <FolderBreadcrumbs currentFolder={folder}></FolderBreadcrumbs>
            <AddFileButton currentFolder={folder}></AddFileButton>
            <AddFolderButton currentFolder={folder}></AddFolderButton>
          </div>

          {childFolders.length > 0 && (
            <div className="d-flex flex-wrap">
              {childFolders.map((childFolder) => (
                <div
                  key={childFolder.id}
                  style={{ maxWidth: "40vw" }}
                  className="p-2"
                >
                  <Folder folder={childFolder}></Folder>
                </div>
              ))}
            </div>
          )}

          {childFolders.length > 0 && childFiles.length > 0 && <hr />}

          {childFiles.length > 0 && (
            <div className="d-flex flex-wrap">
              {childFiles.map((childFile) => (
                <div
                  key={childFile.id}
                  style={{ maxWidth: "40vw" }}
                  className="p-2"
                >
                  <File file={childFile}></File>
                </div>
              ))}
            </div>
          )}
        </Container>
      </div>
      <footer style={{ position: "fixed", bottom: 0, width: "100vw" }}>
        <div className="text-center p-1">
          Copyright © 2021
          <a
            href="https://github.com/Harsh-0986"
            style={{ textDecoration: "none", color: "black" }}
          >
            &nbsp;Harsh Shah
          </a>
        </div>
      </footer>
    </div>
  );
}
