import React from "react";
import { List, Card, Button } from "antd";

const items = [
  {
    title: "BASIC",
    content: [
      {
        price: "£29.99",
        space: "1 GB of space",
        user: "1 user",
        support: "24/7 support",
        backup: "Safe, reliable backup",
        access: "Access from anywhere",
      },
    ],
  },
  {
    title: "PREMIUM",
    content: [
      {
        price: "£59.99",
        space: "5 GB of space",
        user: "5 users",
        support: "24/7 support",
        backup: "Safe, reliable backup",
        access: "Access from anywhere",
      },
    ],
  },
  {
    title: "ENTERPRISE",
    content: [
      {
        price: "£99.99",
        space: "Unlimited space",
        user: "15 users",
        support: "24/7 support",
        backup: "Safe, reliable backup",
        access: "Access from anywhere",
      },
    ],
  },
];

function AppPricing() {
  return (
    <div id="pricing" className="block pricingBlock bgGray">
      <div className="container-fluid">
        <div className="titleHolder">
          <h2>Choose a plan to fit your needs</h2>
          <p>
            Debitis itaque minima dolorum fuga aperiam inventore, quidem enim
          </p>
              </div>
              </div>
        <List
          grid={{
            gutter: 16,
            xs: 1,
            sm: 1,
            md: 3,
            lg: 3,
            xl: 3,
            xxl: 3,
          }}
          dataSource={items}
          renderItem={(item) => (
            <List.Item>
              <Card className="large" title={item.title}>
                <p className="large">{item.content[0].price}
                </p>
                <p>
                  <i>{item.content[0].space}</i>
                </p>
                <p>
                  <i>{item.content[0].user}</i>
                </p>
                <p>
                  <i>{item.content[0].support}</i>
                </p>
                <p>
                  <i>{item.content[0].backup}</i>
                </p>
                <p>
                  <i>{item.content[0].access}</i>
                      </p>
                      <Button type="primary">
            <i className="fab fa-telegram-plane"></i>Get started
          </Button>
              </Card>
            </List.Item>
          )}
        />
    </div>
  );
}

export default AppPricing;
