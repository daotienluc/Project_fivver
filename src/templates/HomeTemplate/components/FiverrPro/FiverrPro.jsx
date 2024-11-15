import React from "react";
import Svgs from "../../../../components/Input/svgs";
import { CheckCircleOutlined } from "@ant-design/icons";
import { ButtonOutline } from "../../../../components/Button/ButtonCustom";
import fiverrProImg from "./../../../../assets/img/fiverr-pro.jpg";

const FiverrPro = () => {
  return (
    <div className="container py-10">
      <div className="bg-[#E8FAF4] p-20 rounded-2xl">
        <h2>
          <Svgs.fiverpro />
        </h2>
        <div className="grid grid-cols-2 gap-5">
          <div>
            <h2 className="text-5xl my-8">
              The <span className="text-green-500 font-[Macan]">premium</span>{" "}
              freelance solution for businesses
            </h2>
            <div className="grid grid-cols-2 grid-rows-2 gap-5">
              <div>
                <div>
                  <CheckCircleOutlined />
                </div>
                <div>
                  <h3 className="text-xl font-bold">
                    Dedicated hiring experts
                  </h3>
                  <p className="font-medium">
                    Count on an account manager to find you the right talent and
                    see to your project’s every need.
                  </p>
                </div>
              </div>

              <div>
                <div>
                  <CheckCircleOutlined />
                </div>
                <div>
                  <h3 className="text-xl font-bold">
                    Dedicated hiring experts
                  </h3>
                  <p className="font-medium">
                    Count on an account manager to find you the right talent and
                    see to your project’s every need.
                  </p>
                </div>
              </div>

              <div>
                <div>
                  <CheckCircleOutlined />
                </div>
                <div>
                  <h3 className="text-xl font-bold">
                    Dedicated hiring experts
                  </h3>
                  <p className="font-medium">
                    Count on an account manager to find you the right talent and
                    see to your project’s every need.
                  </p>
                </div>
              </div>

              <div>
                <div>
                  <CheckCircleOutlined />
                </div>
                <div>
                  <h3 className="text-xl font-bold">
                    Dedicated hiring experts
                  </h3>
                  <p className="font-medium">
                    Count on an account manager to find you the right talent and
                    see to your project’s every need.
                  </p>
                </div>
              </div>
            </div>
            <ButtonOutline
              content="Try Now"
              className="bg-black text-white border-black  hover:bg-[#404145] mt-5 py-2 px-4"
            />
          </div>
          <div>
            <img src={fiverrProImg} alt="" className="mt-5" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FiverrPro;
