import { Button, Card, Col, Modal, PageHeader, Row } from "antd";
import Fant from "../assets/fant.jpg";
import SharingData from "../assets/sharing-data.jpg";
import SpaceSuit from "../assets/spaceshit.jpg";
import SGLayout from "./SGLayout";

import React, { useState } from "react";
import { Link } from "react-router-dom";

const { Meta } = Card;

const OpenScience = () => {
  const [open, setOpen] = useState(false);

  return (
    <SGLayout>
      <PageHeader
        className="site-page-header"
        title="Open Science Activities"
        subTitle="Click on an activity to display the metric"
      />

      <div style={{ marginBottom: "25px" }}>
        <Button type="primary" onClick={() => setOpen(true)}>
          Visualize on the Globe
        </Button>
      </div>

      <Modal
        title="Earth"
        centered
        open={open}
        onOk={() => setOpen(false)}
        onCancel={() => setOpen(false)}
        width={1000}
      >
        <iframe
          style={{ width: "100%", height: "80%" }}
          src="http://spacegrabbersnasa.s3-website.us-east-2.amazonaws.com/"
        />
      </Modal>

      <Row gutter={16}>
        <Col span={8}>
          <Link to={"/open-science/sharing-of-data"}>
            <Card cover={<img height={350} alt="example" src={SharingData} />}>
              <Meta
                style={{
                  textAlign: "center",
                  alignItems: "center",
                }}
                title="Sharing of data"
              />
            </Card>
          </Link>
        </Col>
        <Col span={8}>
          <Link to={""}>
            <Card cover={<img height={350} alt="example" src={Fant} />}>
              <Meta
                style={{
                  textAlign: "center",
                  alignItems: "center",
                }}
                title="Software"
              />
            </Card>
          </Link>
        </Col>
        <Col span={8}>
          <Link to={""}>
            <Card cover={<img height={350} alt="example" src={SpaceSuit} />}>
              <Meta
                style={{
                  textAlign: "center",
                  alignItems: "center",
                }}
                title="Results"
              />
            </Card>
          </Link>
        </Col>
      </Row>
    </SGLayout>
  );
};

export default OpenScience;
