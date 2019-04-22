import React, { Component } from "react";
import styled from "@emotion/styled";
import image from "./dwWscMNW_400x400.jpg";
import FaMapMarker from "react-icons/lib/fa/map-marker";
import FaPhoneSquare from "react-icons/lib/fa/phone-square";
import FaEnvelopeO from "react-icons/lib/fa/envelope-o";

const Container = styled.div({
  //   height: "20vh",
  position: "sticky",
  top: "0",
  margin: "0 10vw",
  //   padding: "15px 15vw 0 10vw",
  display: "flex",
  flexDirection: "column"
});
const HeaderSection = styled.div({
  //   width: "100%",
  backgroundColor: "#fff",
  display: "flex",
  flexDirection: "column",
  width: "100%"
});

const HeaderSectionName = styled.div({
  color: "#fff",
  float: "right",
  fontSize: 53,
  textAlign: "right",
  fontFamily: "Arial, Helvetica, sans-serif",
  padding: "20px 20vw 20px 0",
  backgroundColor: "#90438a"
});

const HeaderSectionTitle = styled.h2({
  color: "#fff",
  textAlign: "center",
  fontFamily: "Arial, Helvetica, sans-serif",
  backgroundColor: "hotpink",
  margin: "2px 0 0 0"
});

const ImageContainer = styled.div({
  position: "absolute",
  left: "15vw",
  top: "2vh"
});

const LeftContainer = styled.div({
  //   background: "red",
  flex: 3
});

const RightContainer = styled.div({
  background: "pink",
  flex: 7
});

const Cell = styled.div({
  padding: 4,
  display: "flex"
});

class Layout extends Component {
  render() {
    return (
      <div>
        <Container>
          <HeaderSection>
            <HeaderSectionName>HEBA AHMAD </HeaderSectionName>
            <HeaderSectionTitle> Front End Engineer </HeaderSectionTitle>
          </HeaderSection>
          <ImageContainer>
            <img src={image} alt="my-pic" width={150} height={150} />
          </ImageContainer>
        </Container>
        <div
          style={{
            margin: "0 10vw",
            display: "flex",
            flexDirection: " row"
          }}
        >
          <LeftContainer>
            <div style={{ flex: 1, padding: "10px 6px" }}>
              <h3>ABOUT ME</h3>
              <p>
                Front-end Engineer with a working experience in web and mobile
                development. Skilled in SQL, JavaScript react,redux, Agile
                Methodologies, and git. with a Bachelor's degree focused in
                Computer Science from Cairo University and user interface
                development diploma.
              </p>
            </div>
            <div style={{ flex: 1, padding: "10px 6px" }}>
              <h3>CONTACTS</h3>

              <Cell>
                <FaMapMarker style={{ marginRight: 6 }} />
                <span>
                  appartment 3, 1, Square G, 15 May City, Cairo, Egypt
                </span>
              </Cell>
              <Cell>
                <FaPhoneSquare style={{ marginRight: 6 }} />{" "}
                <span>(0020) (106) (104 9718)</span>
              </Cell>
              <Cell>
                <FaEnvelopeO style={{ marginRight: 6 }} />{" "}
                <span>Hebaahmadsaleh@gmail.com</span>
              </Cell>
            </div>
            <div style={{ flex: 3, padding: "10px 6px" }}>part 3</div>
          </LeftContainer>
          <RightContainer>
            asdasdasasd
            <br />
            asdasdasasd
            <br /> asdasdasasd
            <br /> asdasdasasd
            <br /> asdasdasasd
            <br /> asdasdasasd
            <br /> asdasdasasd
            <br /> asdasdasasd
            <br /> asdasdasasd
            <br /> asdasdasasd
            <br /> asdasdasasd
            <br /> asdasdasasd
            <br /> asdasdasasd
            <br /> asdasdasasd
            <br /> asdasdasasd
            <br /> asdasdasasd
            <br /> asdasdasasd
            <br /> asdasdasasd
            <br /> asdasdasasd
            <br /> asdasdasasd
            <br /> asdasdasasd
            <br /> asdasdasasd
            <br /> asdasdasasd
            <br /> asdasdasasd
            <br /> asdasdasasd
            <br /> asdasdasasd
            <br /> asdasdasasd
            <br /> asdasdasasd
            <br /> asdasdasasd
            <br /> asdasdasasd
            <br /> asdasdasasd
            <br /> asdasdasasd
            <br /> asdasdasasd
            <br /> asdasdasasd
            <br />
            <br /> asdasdasasd
            <br /> asdasdasasd
            <br /> asdasdasasd
            <br /> asdasdasasd
            <br /> asdasdasasd
            <br /> asdasdasasd
            <br /> asdasdasasd
            <br /> asdasdasasd
            <br /> asdasdasasd
            <br /> asdasdasasd
            <br />
          </RightContainer>
        </div>
      </div>
    );
  }
}

export default Layout;
