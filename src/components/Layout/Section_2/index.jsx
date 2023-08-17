import React from "react";
import card_1 from "/src/assets/images/card-1.png";
import card_2 from "/src/assets/images/card-2.png";
import card_3 from "/src/assets/images/card-3.png";
import card_4 from "/src/assets/images/card-4.png";

import "./style.scss";
const index = () => {
  return (
    <>
      <section>
        <div className="container mx-auto px-5 w-[1200px]">
          <div className="wrapper mt-[100px]">
            <div className="section_2_title mb-[30px] font-medium text-2xl">
              New
            </div>
            <div className="section_2_Allcards flex justify-between items-center ">
              <div className="card">
                <img src={card_1} alt="" />
                <div className="card-body pt-[20px] text-center">
                  <h3 Tulips className="title text-xl">
                    Red Tulips
                  </h3>
                  <p className="price flex items-center mt-2 text-sm justify-center gap-[20px]">
                    46 $ <p className="aksiya">60 $</p>
                  </p>
                </div>
              </div>
              <div className="card">
                <img src={card_2} alt="" />
                <div className="card-body pt-[20px] text-center">
                  <h3 Tulips className="title text-xl">
                    White roses, 7pc.
                  </h3>
                  <p className="price flex items-center mt-2 text-sm justify-center gap-[20px]">
                    44 $
                  </p>
                </div>
              </div>
              <div className="card">
                <img src={card_3} alt="" />
                <div className="card-body pt-[20px] text-center">
                  <h3 Tulips className="title text-xl">
                    Bouqueet “Dream”
                  </h3>
                  <p className="price flex items-center mt-2 text-sm justify-center gap-[20px]">
                    53 $
                  </p>
                </div>
              </div>
              <div className="card">
                <img src={card_4} alt="" />
                <div className="card-body pt-[20px] text-center">
                  <h3 Tulips className="title text-xl">
                    White lilies, 21 pc.
                  </h3>
                  <p className="price flex items-center mt-2 text-sm justify-center gap-[20px]">
                    70 $
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container mx-auto px-5 w-[1200px]">
          <div className="wrapper mt-[100px]">
            <div className="section_2_title mb-[30px] font-medium text-2xl">
              Relevant
            </div>
            <div className="section_2_Allcards flex justify-between items-center ">
              <div className="card">
                <img src={card_1} alt="" />
                <div className="card-body pt-[20px] text-center">
                  <h3 Tulips className="title text-xl">
                    Red Tulips
                  </h3>
                  <p className="price flex items-center mt-2 text-sm justify-center gap-[20px]">
                    46 $ <p className="aksiya">60 $</p>
                  </p>
                </div>
              </div>
              <div className="card">
                <img src={card_2} alt="" />
                <div className="card-body pt-[20px] text-center">
                  <h3 Tulips className="title text-xl">
                    White roses, 7pc.
                  </h3>
                  <p className="price flex items-center mt-2 text-sm justify-center gap-[20px]">
                    44 $
                  </p>
                </div>
              </div>
              <div className="card">
                <img src={card_3} alt="" />
                <div className="card-body pt-[20px] text-center">
                  <h3 Tulips className="title text-xl">
                    Bouqueet “Dream”
                  </h3>
                  <p className="price flex items-center mt-2 text-sm justify-center gap-[20px]">
                    53 $
                  </p>
                </div>
              </div>
              <div className="card">
                <img src={card_4} alt="" />
                <div className="card-body pt-[20px] text-center">
                  <h3 Tulips className="title text-xl">
                    White lilies, 21 pc.
                  </h3>
                  <p className="price flex items-center mt-2 text-sm justify-center gap-[20px]">
                    70 $
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default index;
