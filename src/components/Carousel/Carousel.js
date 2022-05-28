import React from "react";
import { Carousel as AntdCarousel } from "antd";
import "../../assets/css/component.css";

const Carousel = () => {
  const carouselItems = [
    {
      key: 1,
      title: "Learn more About your Funds",
      body: "Discover how much you earn and pen over a desired period of time"
    },
    {
      key: 2,
      title: "NoCredit or Debit cad needed",
      body: "Give us your day to day transaction details without having to use your bank card details."
    },
    {
      key: 3,
      title: "Have a periodic budget",
      body: "Dedicate certain amounts to a particular category of expense so you dont exceed your budget total"
    }
  ];
  return (
    <AntdCarousel autoplay effect="fade" className="carousel">
      {carouselItems?.map(item => (
        <div className="slide" key={item.key}>
          <h3>{item?.title}</h3>
          <span>{item?.body}</span>
        </div>
      ))}
    </AntdCarousel>
  );
};

export default Carousel;
