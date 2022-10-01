import { Card, Col, PageHeader, Row, Statistic } from "antd";
import SGLayout from "./SGLayout";

import React from "react";

const { Meta } = Card;

const shaData = [
  {
    cont: "Africa",
    understanding: "40.23",
    pub: "34",
    keywords: "gravity, space",
    understanding1: "23.23",
    pub1: "34",
    keywords1: "gravity, space",
  },
  {
    cont: "Asia",
    understanding: "60.23",
    pub: "23",
    keywords: "universe, space",
    understanding1: "70.00",
    pub1: "34",
    keywords1: "gravity, space",
  },
  {
    cont: "North America",
    understanding: "85.23",
    pub: "63",
    keywords: "universe, space",
    understanding1: "80.52",
    pub1: "34",
    keywords1: "gravity, NASA, ISS, space",
  },
  {
    cont: "South America",
    understanding: "65.23",
    pub: "23",
    keywords: "universe, space",
    understanding1: "23.58",
    pub1: "34",
    keywords1: "gravity, space",
  },
  {
    cont: "Europe",
    understanding: "65.23",
    pub: "23",
    keywords: "universe, space",
    understanding1: "23.58",
    pub1: "34",
    keywords1: "gravity, space",
  },
  {
    cont: "Australia",
    understanding: "65.23",
    pub: "23",
    keywords: "universe, space",
    understanding1: "23.58",
    pub1: "34",
    keywords1: "gravity, space",
  },

  {
    cont: "Antarctica",
    understanding: "11.87",
    pub: "23",
    keywords: "voyage, alien",
    understanding1: "23.58",
    pub1: "34",
    keywords1: "gravity, space",
  },
];

// North America, South America, Antarctica, Europe, and Australia.[1

const SharingData = () => (
  <SGLayout>
    <PageHeader
      className="site-page-header"
      title="Open Science | Sharing of data"
    />
    <Row gutter={24}>
      {shaData.map((data, index) => (
        <Col span={12} style={{ marginBottom: "20px" }}>
          <Card title={data.cont}>
            <Row gutter={24}>
              <Col span={12}>
                <Statistic
                  title=""
                  value={data.understanding}
                  precision={2}
                  valueStyle={{
                    color: "#00c4ff",
                  }}
                  prefix={""}
                  suffix="%"
                />
                Understood {data.pub} publications with these keywords{" "}
                {data.keywords}
              </Col>
              <Col span={12}>
                <Statistic
                  title=""
                  value={data.understanding1}
                  precision={2}
                  valueStyle={{
                    color: "#00c4ff",
                  }}
                  prefix={""}
                  suffix="%"
                />
                Will use the research that is indexed in {data.pub1}{" "}
                publications with these keywords {data.keywords}
              </Col>
            </Row>
          </Card>
        </Col>
      ))}
    </Row>
  </SGLayout>
);

export default SharingData;
