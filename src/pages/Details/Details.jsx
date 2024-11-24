import React from "react";
import HeaderTemplate from "../../templates/HomeTemplate/components/HeaderTemplate";
import {
  HeartOutlined,
  HomeOutlined,
  ShareAltOutlined,
  StarOutlined,
} from "@ant-design/icons";
import { Breadcrumb } from "antd";
import avataImg from "./../../assets/img/avata.jpg";
import detailsImg from "./../../assets/img/details.jpg";
import CarouselCustom from "../../components/CarouselCustom/CarouselCustom";
import CarouselItems from "../../components/CarouselCustom/CarouselItems";
const Details = () => {
  return (
    <>
      <HeaderTemplate />
      <div className="container my-10">
        <div className="flex justify-between">
          <div>
            <Breadcrumb
              items={[
                {
                  title: <HomeOutlined />,
                },
                {
                  title: <a href="">Application Center</a>,
                },
                {
                  title: <a href="">Application List</a>,
                },
                {
                  title: "Other",
                },
              ]}
            />
          </div>
          <div className="space-x-3">
            <HeartOutlined />
            <button className="px-3 py-1 border-2 rounded-lg">90</button>
            <button className="px-3 py-1 border-2 rounded-lg">
              <ShareAltOutlined />
            </button>
          </div>
        </div>
        <div className="flex">
          <div className="w-3/5">
            <h2 className="text-3xl font-bold mb-4 mt-5">
              I will create graphic design of any kind you need
            </h2>
            <div className="flex space-x-3">
              <div>
                <img src={avataImg} alt="" className="w-20 h-20 rounded-full" />
              </div>
              <div className="">
                <div>
                  <h3 className="font-semibold text-lg">
                    Sajee Design{" "}
                    <span className="font-medium text-sm">Lever 2</span>
                  </h3>
                </div>
                <div className="space-x-2">
                  <StarOutlined />
                  <StarOutlined />
                  <StarOutlined />
                  <StarOutlined />
                  <StarOutlined />
                  <span className="font-bold">4.9</span>
                  <span>(326 reviews)</span>
                </div>
              </div>
            </div>
            <div>
              <CarouselCustom
                className="!h-[500px]"
                content={
                  <>
                    <CarouselItems image={detailsImg} />
                  </>
                }
              />
            </div>
          </div>
          <div className="w-2/5"></div>
        </div>
      </div>
    </>
  );
};

export default Details;
