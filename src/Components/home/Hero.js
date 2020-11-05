import React from "react";
import { Carousel, Button } from "antd";
import "../../../src/App.css";

const carousel_data = [
  {
    title: "E-commerce",
    description:
      "An vim odio ocurreret consetetur, justo constituto ex mea. Quidam facilisis vituperata pri ne. Id nostrud gubergren urbanitas sed, quo summo animal qualisque ut, cu nostro dissentias consectetuer mel. Ut admodum conceptam mei, cu eam tation fabulas abhorreant. His ex mandamus.",
    icon: "fa-shopping-cart",
    image: "",
  },
  {
    title: "Designing",
    description:
      "An vim odio ocurreret consetetur, justo constituto ex mea. Quidam facilisis vituperata pri ne. Id nostrud gubergren urbanitas sed, quo summo animal qualisque ut, cu nostro dissentias consectetuer mel. Ut admodum conceptam mei, cu eam tation fabulas abhorreant. His ex mandamus.",
    icon: "fa-laptop",
    image: "",
  },
  {
    title: "Web Security",
    description:
      "An vim odio ocurreret consetetur, justo constituto ex mea. Quidam facilisis vituperata pri ne. Id nostrud gubergren urbanitas sed, quo summo animal qualisque ut, cu nostro dissentias consectetuer mel. Ut admodum conceptam mei, cu eam tation fabulas abhorreant. His ex mandamus.",
    icon: "fa-lock",
    image: "",
  },
];

function AppHero() {
  return (
    <div className="heroBlock">
      <Carousel autoplay>
        {carousel_data.map((item, id) => {
          return (
            <div key={id} className="container-fluid">
              <div className="content">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <div className="btnHolder">
                  <Button type="primary" size="large">
                    Learn more
                  </Button>
                  <Button size="large"><i className="fas fa-desktop"/> Go for a demo!</Button>
                </div>
              </div>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
}

export default AppHero;
