import React, { useEffect, useState } from "react";
import { useFolder } from "../../hooks/useFolder";
import NavBar from "./Navbar";
import { Container } from "react-bootstrap";
import AddFolderButton from "./AddFolderButton";
import AddFileButton from "./AddFileButton";
import Folder from "./Folder";
import { useParams, useLocation } from "react-router-dom";
import FolderBreadcrumbs from "./FolderBreadcrumbs";
import File from "./File";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

export default function Dashboard() {
  const { folderId } = useParams();
  const { state = {} } = useLocation();
  const { folder, childFolders, childFiles } = useFolder(
    folderId,
    state.folder
  );
  const [darkMode, setDarkMode] = useState(
    JSON.parse(localStorage.getItem("darkMode"))
  );

  useEffect(() => {
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  return (
    <div
      style={{ overflow: "hidden", height: "100vh" }}
      className={darkMode ? "bg-dark" : "bg-light"}
    >
      <NavBar className={darkMode ? "bg-dark" : "bg-light"}></NavBar>

      <div className="d-flex flex-column ">
        <Container fluid>
          <div className="d-flex align-items-center ">
            <FolderBreadcrumbs
              currentFolder={folder}
              className={darkMode ? "bg-dark" : "bg-light"}
            ></FolderBreadcrumbs>
            <AddFileButton
              className={darkMode ? "bg-dark" : "bg-light"}
              currentFolder={folder}
            ></AddFileButton>
            <AddFolderButton
              className={darkMode ? "bg-dark" : "bg-light"}
              currentFolder={folder}
            ></AddFolderButton>
            <label
              className={`btn ${
                darkMode ? "btn-outline-light" : "btn-outline-success"
              } btn-sm m-2 mt-0 mb-0`}
            >
              {darkMode ? (
                <FontAwesomeIcon
                  icon={faSun}
                  onClick={() => setDarkMode(false)}
                />
              ) : (
                <FontAwesomeIcon
                  icon={faMoon}
                  onClick={() => setDarkMode(true)}
                />
              )}
            </label>
          </div>

          {childFolders.length > 0 && (
            <div className="d-flex flex-wrap">
              {childFolders.map((childFolder) => (
                <div
                  key={childFolder.id}
                  style={{ maxWidth: "40vw" }}
                  className="p-2"
                >
                  <Folder darkMode={darkMode} folder={childFolder}></Folder>
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
                  <File darkMode={darkMode} file={childFile}></File>
                </div>
              ))}
            </div>
          )}
        </Container>
      </div>
      <footer
        className={darkMode ? "bg-dark text-white" : "bg-light text-black"}
        style={{ position: "fixed", bottom: 0, width: "100vw" }}
      >
        <div className="text-center p-1">
          Copyright ?? 2022
          <a
            href="https://github.com/Harsh-0986"
            style={{ textDecoration: "none" }}
            className={darkMode ? "text-white" : "text-black"}
          >
            &nbsp;Harsh Shah
          </a>
        </div>
      </footer>
    </div>
  );
}
