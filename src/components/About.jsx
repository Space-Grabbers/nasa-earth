import { Avatar, Card, Col, PageHeader, Row } from "antd";
import React from "react";
import Bruno from "../assets/bruno.jpg";
import Chris from "../assets/chris.jpeg";
import Daniel from "../assets/daniel.jpeg";
import HillaryKooba from "../assets/hillarykooba.jpeg";
import OpenScienceImg from "../assets/open-source-initiative.png";
import "./about.css";
import SGLayout from "./SGLayout";

const { Meta } = Card;

const About = () => (
  <SGLayout>
    <PageHeader className="site-page-header" title="About" />
    <Row gutter={24} style={{ marginBottom: "20px" }}>
      <Col span={24}>
        <Card title="What is Open Science?">
          <h4>
            Open science is a collaborative culture enabled by technology that
            empowers the open sharing of data, information, and knowledge within
            the scientific community and the wider public to accelerate
            scientific research and understanding. Open-source science requires
            a culture shift to a more inclusive, transparent, and collaborative
            scientific process, which will increase the pace and quality of
            scientific progress.
          </h4>
          <img src={OpenScienceImg} height={200} width={500} alt="" />
        </Card>
      </Col>
    </Row>

    <Row gutter={24} style={{ marginBottom: "20px" }}>
      <Col span={24}>
        <Card title="What is kipimo?">
          KIPIMO is a metric system that measures the effects and impact of NASA
          open science activities in line with two of the NASA open science
          goals which are:
          <ul>
            <li>
              1. To increase understanding and adoption of open science
              principles and techniques in our mission and research communities
            </li>
            <li>
              2. To accelerate major scientific discoveries by supporting the
              adoption of open science.
            </li>
          </ul>
        </Card>
      </Col>
    </Row>

    <Row gutter={24}>
      <Col span={24}>
        <Card title="How to use it?">
          Clicking on the extension icon pop-up brings up a chat box that
          compels the Researcher to interact with it in exchange for a reward in
          form of a NASA-exclusive document or exclusive recommendation. The
          Chat Bot appears only on the documents published by NASA on its
          different platforms. The extension icon first appears on major points
          of the documents like Photos and Equations and appears to the user as
          they scroll through the document but is not distractive.
        </Card>
      </Col>
    </Row>

    <PageHeader className="site-page-header" title="kipimo Team" />
    <Row>
      <Col span={6}>
        <div className="profile">
          <Avatar
            style={{ marginLeft: "10px", width: "200px", height: "200px" }}
            size={{
              xs: 24,
              sm: 32,
              md: 40,
              lg: 64,
              xl: 80,
              xxl: 100,
            }}
            src={Chris}
          />
          <span className="name"> Christopher Kiconco</span>
          <span className="position"> Team Leader</span>
        </div>
      </Col>
      <Col span={6}>
        <div className="profile">
          <Avatar
            style={{ marginLeft: "10px", width: "200px", height: "200px" }}
            size={{
              xs: 24,
              sm: 32,
              md: 40,
              lg: 64,
              xl: 80,
              xxl: 100,
            }}
            src={Bruno}
          />
          <span className="name"> Bruno Kirabo</span>
          <span className="position"> Assistant Team Leader</span>
        </div>
      </Col>
      <Col span={6}>
        <div className="profile">
          <Avatar
            style={{ marginLeft: "10px", width: "200px", height: "200px" }}
            size={{
              xs: 24,
              sm: 32,
              md: 40,
              lg: 64,
              xl: 80,
              xxl: 100,
            }}
            src={Daniel}
          />
          <span className="name"> Collins Daniel Wambi</span>
          <span className="position"> Researcher</span>
        </div>
      </Col>

      <Col span={6}>
        <div className="profile">
          <Avatar
            style={{ marginLeft: "10px", width: "200px", height: "200px" }}
            size={{
              xs: 24,
              sm: 32,
              md: 40,
              lg: 64,
              xl: 80,
              xxl: 100,
            }}
            src={HillaryKooba}
          />
          <span className="name"> Hillary Kooba</span>
          <span className="position"> FullStack Developer</span>
        </div>
      </Col>
    </Row>
  </SGLayout>
);

export default About;
