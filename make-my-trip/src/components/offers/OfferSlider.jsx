import React from "react";
import Slider from "react-slick";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import { OfferCard } from "./OfferCard";
import { offerData } from "./../__mockdata__/offerData";
import "./OfferSlider.css";
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons'

export default function OfferSlider() {
  const slider = React.useRef(null);

  let settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    rows: 2,

    centerMode: true,
    adaptiveHeight: true,
    arrrows: false,
  };

  return (
    <div className="SliderWidth">
      <Tabs>
        <div className="flex tabFlex">
          <div className="flex">
            <h2>Offers</h2>
            <TabList>
              <Tab>All Offers</Tab>
              <Tab>Bank Offers</Tab>
              <Tab>Flights</Tab>
              <Tab>Hotels</Tab>
              <Tab>Holidays</Tab>
              <Tab>Trains</Tab>
              <Tab>Cabs</Tab>
            </TabList>
          </div>
          <div className="flex">
            <div>View All</div>
            <button onClick={() => slider?.current?.slickPrev()}><ChevronLeftIcon/></button>
            <button onClick={() => slider?.current?.slickNext()}><ChevronRightIcon/></button>
          </div>
        </div>

        <TabPanels>
          <TabPanel>
            <div>
              <Slider ref={slider} {...settings}>
                {offerData?.map((el) => (
                  <div className="SliderItem">
                    <OfferCard key={el.id} {...el} />
                  </div>
                ))}
              </Slider>
            </div>
          </TabPanel>
          <TabPanel>
            <div>hello1</div>
          </TabPanel>
          <TabPanel>
            <div>hello2</div>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  );
}
