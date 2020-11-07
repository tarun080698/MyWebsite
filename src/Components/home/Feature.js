import React from "react";
import { Row, Col } from "antd";
import { Card } from "antd";
// images imports
import image1 from "../../assets/images/modern-design.jpg";
import image2 from "../../assets/images/clean-design.jpg";
import image3 from "../../assets/images/great-support.jpg";
import image4 from "../../assets/images/easy-customise.jpg";
import image5 from "../../assets/images/unlimited-features.jpg";
import image6 from "../../assets/images/advanced-option.jpg";

const { Meta } = Card;

const items = [
  { title: "Modern Design", image: image1 },
  { title: "Modern Design", image: image2 },
  { title: "Modern Design", image: image3 },
  { title: "Modern Design", image: image4 },
  { title: "Modern Design", image: image5 },
  { title: "Modern Design", image: image6 },
];

function AppFeature() {
  return (
    <div id="feature" className="block featureBlock bgGray">
          <div className="container-fluid">
          <div className="titleHolder">
          <h2>Key Features and Benefits</h2>
          <p>Obcaecati consequatur libero repudiandae, aperiam itaque laborum!</p>
        </div>
        <Row gutter={[16, 16]}>
          {items.map((item, id) => {
            return (
              <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }} key={id}>
                <Card
                  hoverable
                  style={{ width: 240 }}
                  cover={<img alt="example" src={item.image} />}
                >
                  <Meta title={item.title} />
                </Card>
              </Col>
            );
          })}
        </Row>
      </div>
    </div>
  );
}

export default AppFeature;
