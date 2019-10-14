import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import "./Footer.css";

const Footer = () => {
  return (
    <MDBFooter color="blue" className="font-small pt-4 mt-4 footer">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="6"></MDBCol>
          <MDBCol md="6">
            <h5 className="title"></h5>
            <ul></ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </MDBFooter>
  );
};

export default Footer;
