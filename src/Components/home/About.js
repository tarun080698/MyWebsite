import React from "react";
import { Row, Col } from "antd";

const about_data = [
  { title: "Tarun", Description: "Dadlani", logo: "fas fa-laptop" },
  { title: "Nilesh", Description: "Nenwani", logo: "fas fa-chart-pie" },
  { title: "Ashutosh", Description: "Matai", logo: "fas fa-database" },
];

function AppAbout() {
  return (
    <div id="about" className="block aboutBlock">
      <div className="container-fluid">
        <div className="titleHolder">
          <h2>About us</h2>
          <p>dolor sit amet, consectetur adipisicing elit</p>
        </div>
        <div className="contentHolder">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit
            necessitatibus officiis repudiandae est deserunt delectus dolorem
            iure porro distinctio fuga, nostrum doloremque. Facilis porro in
            laborum dolor amet ratione hic? Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Magnam aut a porro, adipisci quidem
            sint enim pariatur ducimus, saepe voluptatibus inventore commodi!
            Quis, explicabo molestias libero tenetur temporibus perspiciatis
            deserunt.
          </p>
        </div>
        <Row gutter={[16, 16]}>
          {about_data.map((item, id) => {
            return (
              <Col key={id}  xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }} >
                <div className="content">
                  <div className="icon">
                    <i className={item.logo}></i>
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.Description}</p>
                </div>
              </Col>);
          })}
        </Row>
      </div>
    </div>
  );
}

export default AppAbout;
