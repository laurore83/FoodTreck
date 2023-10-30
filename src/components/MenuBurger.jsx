import React, { useState } from "react";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import {
  MDBContainer,
  MDBCollapse,
  MDBNavbar,
  MDBNavbarToggler,
  MDBIcon,
  MDBBtn,
} from "mdb-react-ui-kit";
import "./MenuBurger.css";
export default function MenuBurger() {
  const [showNavExternal, setShowNavExternal] = useState(false);

  return (
    <>
      <MDBNavbar>
        <MDBContainer fluid>
          <MDBNavbarToggler
            type="button"
            data-target="#navbarToggleExternalContent"
            aria-controls="navbarToggleExternalContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => setShowNavExternal(!showNavExternal)}
          >
            <MDBIcon icon="bars" fas />
          </MDBNavbarToggler>
        </MDBContainer>
      </MDBNavbar>

      <MDBCollapse show={showNavExternal}>
        <div className="bg-light shadow-3 p-4">
          <MDBBtn block className="border-bottom m-0" color="link">
            TICTOCOOK
          </MDBBtn>
          <MDBBtn block className="border-bottom m-0" color="link">
            A PROPOS
          </MDBBtn>
          <MDBBtn block className="border-bottom m-0" color="link">
            CONTACT
          </MDBBtn>
        </div>
      </MDBCollapse>
    </>
  );
}
