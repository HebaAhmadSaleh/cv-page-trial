import React, { Component } from "react";
import styled from "@emotion/styled";
import image from "./dwWscMNW_400x400.jpg";
import FaMapMarker from "react-icons/lib/fa/map-marker";
import FaPhoneSquare from "react-icons/lib/fa/phone-square";
import FaEnvelopeO from "react-icons/lib/fa/envelope-o";
import FaLinkedinSquare from "react-icons/lib/fa/linkedin-square";
import FaGithub from "react-icons/lib/fa/github";
import FaFacebookSquare from "react-icons/lib/fa/facebook-square";

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
  flex: 3,
  padding: "2vh 2vw"
});

const RightContainer = styled.div({
  flex: 7,
  padding: "2vh 10vw"
});

const Cell = styled.div({
  padding: 4,
  display: "flex"
});

const ExperienceCell = styled.div({
  padding: "0 6px 6px",
  display: "flex"
});
const ExperienceDate = styled.span({
  marginRight: 10
});

const ExperienceInfo = styled.span({
  flex: 1
});

const SocialCell = styled.div({
  padding: 4,
  cursor: "pointer"
});
class Layout extends Component {
  goTo = link => (window.location.href = link);

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
            flexDirection: " row",
            border: "1px",
            borderStyle: "double",
            borderColor: "lightgrey",
            borderTop: 0
          }}
        >
          <LeftContainer>
            <div style={{ flex: 1 }}>
              <h3>ABOUT ME</h3>
              <p>
                Front-end Engineer with a working experience in web and mobile
                development. Skilled in SQL, JavaScript react,redux, Agile
                Methodologies, and git. with a Bachelor's degree focused in
                Computer Science from Cairo University and user interface
                development diploma.
              </p>
            </div>

            <div style={{ flex: 1 }}>
              <h3>CONTACTS</h3>

              <Cell>
                <div>
                  {" "}
                  <FaMapMarker style={{ marginRight: 6 }} />{" "}
                </div>
                <span>appartment 3, building 1, 15 May City, Cairo, Egypt</span>
              </Cell>
              <Cell>
                <FaPhoneSquare style={{ marginRight: 6 }} />{" "}
                <span>(0020) (106) (104 9718)</span>
              </Cell>
              <Cell>
                <FaEnvelopeO style={{ marginRight: 6 }} />{" "}
                <span>Hebaahmadsaleh@gmail.com</span>
              </Cell>

              <div style={{ display: "flex", flex: 1 }}>
                <SocialCell>
                  <FaLinkedinSquare
                    onClick={() =>
                      this.goTo(
                        "https://eg.linkedin.com/in/heba-saleh-935383105"
                      )
                    }
                    color="#0077B5"
                    style={{ marginRight: 6 }}
                  />
                </SocialCell>
                <SocialCell>
                  <FaGithub
                    style={{ marginRight: 6 }}
                    onClick={() =>
                      this.goTo("https://github.com/HebaAhmadSaleh")
                    }
                  />
                </SocialCell>
                <SocialCell>
                  <FaFacebookSquare
                    onClick={() =>
                      this.goTo("https://www.facebook.com/BloomElf")
                    }
                    color="#365899"
                    style={{ marginRight: 6 }}
                  />
                </SocialCell>
              </div>
            </div>
          </LeftContainer>
          <RightContainer>
            <div style={{ flex: 1 }}>
              <h3>Career Objective</h3>
              <p>
                Seeking a challenging position in your Company as a Front End
                developer to utilize my educational background and to gain
                experience.
              </p>
            </div>
            <div style={{ flex: 1 }}>
              <h3> Experience </h3>
              <ExperienceCell>
                <ExperienceDate> Jun.2017 – Feb.2019 </ExperienceDate>
                <ExperienceInfo>
                  {" "}
                  (Front End Engineer at Basharsoft.){" "}
                </ExperienceInfo>
              </ExperienceCell>

              <ExperienceCell>
                <ExperienceDate> Feb.2019 – Current </ExperienceDate>
                <ExperienceInfo>
                  (Senior Front End Engineer at Basharsoft.){" "}
                </ExperienceInfo>
              </ExperienceCell>

              <ExperienceCell>
                <ExperienceDate> Jan.2017 – Mar.2017 </ExperienceDate>
                <ExperienceInfo>
                  {" "}
                  (React Native Developer at Malsapp.){" "}
                </ExperienceInfo>
              </ExperienceCell>
              <ExperienceCell>
                <ExperienceDate> Aug.2016 – Nov.2016 </ExperienceDate>
                <ExperienceInfo>
                  {" "}
                  (Full Stake Engineer at IOTBlue.)
                </ExperienceInfo>
              </ExperienceCell>
            </div>
            <div style={{ flex: 1 }}>
              <h3> Education </h3>
              <ExperienceCell>
                <ExperienceDate> Oct.2015 – Jun.2016 </ExperienceDate>
                <ExperienceInfo>
                  9-Month Diploma of Web Development E-business Department, User
                  Interface Development Track, Information Technology Institute
                  [ITI], Smart Village Branch, 6 October, Giza, Egypt.
                  Graduation Project: The Event Event Management System helps
                  users to create their own Events, monitor their Statistics and
                  browse Events.
                </ExperienceInfo>
              </ExperienceCell>

              <ExperienceCell>
                <ExperienceDate> Sep.2011 – Jun.2015 </ExperienceDate>
                <ExperienceInfo>
                  Bachelor Degree of Computer Science, Faculty of Computers and
                  Information, Information Systems Department, Cairo University,
                  Giza, Egypt. Accumulative Grade: Good. Graduation Project: Dos
                  Banzene Gas station finder Mobile Application helps users to
                  find near Gas stations.
                </ExperienceInfo>
              </ExperienceCell>

              <ExperienceCell>
                <ExperienceDate> Sep.2008 – Jun.2011 </ExperienceDate>
                <ExperienceInfo>
                  High school Certificate from Ahmad Zewail Experimental
                  Language School, Cairo, Egypt.
                </ExperienceInfo>
              </ExperienceCell>
            </div>
            <div style={{ display: "flex", flex: 1 }}>
              <h3> Technical Skills </h3>
              <div style={{ display: "flex" }}>
                <ul>
                  <li>Javscript</li>
                  <li>HTMl5 </li>
                  <li>CSS 3 </li>
                  <li> TypeScript </li>
                  <li> Webpack </li>
                  <li>SQL Server</li>
                  <li>JQuery </li>
                  <li>ReactNative</li>
                  <li>AJAX </li>
                  <li>
                    {" "}
                    SEO and customer satisfaction and events tracking tools{" "}
                  </li>
                  <li>Angular </li>
                </ul>
                <ul style={{ flex: 1 }}>
                  <li>React.js</li>
                  <li>Management state (Redux, Flux, Cerebral.js )</li>
                  <li>Usability</li>
                  <li>Front End UI Framework (Bootstrap, Material UI) </li>
                  <li>End to End Testing(Nightwatch)</li>
                  <li>Storbybook</li>
                  <li>Node Js </li>
                  <li>XAML</li>
                </ul>
              </div>
            </div>
            <div style={{ display: "flex", flex: 1 }}>
              <h3 style={{ minWidth: 130 }}> Soft Skills </h3>
              <div style={{ display: "flex" }}>
                <ul>
                  <li>Communication Skills </li>
                  <li> Presentation Skills </li>
                  <li> Interviewing Skills </li>
                  <li> Leadership Skills </li>
                  <li> Time and stress Management </li>
                  <li> Team Building </li>
                </ul>
              </div>
            </div>
            <div style={{ display: "flex", flex: 1 }}>
              <h3 style={{ minWidth: 130, margin: "0 10px" }}> Languages </h3>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <ExperienceCell>
                  <ExperienceDate> Arabic </ExperienceDate>
                  <ExperienceInfo> (Native Language.) </ExperienceInfo>
                </ExperienceCell>

                <ExperienceCell>
                  <ExperienceDate> English </ExperienceDate>
                  <ExperienceInfo>(Good.) </ExperienceInfo>
                </ExperienceCell>
              </div>
            </div>

            <div style={{ display: "flex", flex: 1, marginTop: 10 }}>
              <h3 style={{ minWidth: 130, margin: "0 10px" }}>
                {" "}
                Personal Info{" "}
              </h3>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column"
                }}
              >
                <ExperienceCell>
                  <ExperienceDate> March 21th, 1993 </ExperienceDate>
                </ExperienceCell>

                <ExperienceCell>
                  <ExperienceDate> Egyptian </ExperienceDate>
                </ExperienceCell>

                <ExperienceCell>
                  <ExperienceDate> Married </ExperienceDate>
                </ExperienceCell>
              </div>
            </div>
          </RightContainer>
        </div>
      </div>
    );
  }
}

export default Layout;
