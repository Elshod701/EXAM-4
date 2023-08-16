import "./index.scss";
import image from "/src/assets/images/Intro.png";
import image_1 from "/src/assets/images/Block1.png";
import image_2 from "/src/assets/images/Block2.png";

function index() {
  return (
    <>
      <div className="container mx-auto px-5 w-[1200px]">
        <section className="section-1">
          <img className="intro_img z-[-10] relative" src={image} alt="" />
          <p className="mt-[-180px] font-medium ml-[80px] text-[28px] font-Inter-Medium">
            40% OFF
          </p>
          <p className="ml-[80px] text-[20px] font-Inter-Medium font-medium ">
            Best deals this week. Fresh flowers, plants and gifts
          </p>
          <button className="bg-black ml-[80px] mt-[20px] btn_intro duration-100 flex items-center justify-center gap-3 w-[138px] h-[50px] text-white text-[18px] rounded-lg active:bg-blue-600 active:text-white hover:bg-white hover:text-black">
            Shop now <i class="bx mt-1 bx-right-arrow-alt"></i>
          </button>
        </section>

        <div className="section-2 mt-[70px]  flex items-center justify-between">
          <div>
            <img src={image_1} alt="" />
            <p className="mt-[-180px] ml-[80px] text-[28px] font-medium font-Inter-Medium">
              Nice little gifts
            </p>
            <p className="ml-[80px] text-[20px] font-Inter-Medium font-medium ">
              for loved ones
            </p>
            <button className="hover:bg-lime-200 btn2 text-[14px] ml-[74px] mt-[20px] font-medium flex items-center justify-center gap-2 w-[100px] text-black h-[40px]">
              View now <i class="bx mt-1 bx-right-arrow-alt"></i>
            </button>
          </div>

          <div>
            <img src={image_2} alt="" />
            <div>
              <p className="mt-[-180px] ml-[80px] text-[28px] font-medium font-Inter-Medium">
                Plants
              </p>
              <p className="ml-[80px] text-[20px] font-Inter-Medium font-medium ">
                for home comfort
              </p>
            </div>
            <button className="btn2 ml-[74px]  mt-[20px] font-medium flex items-center text-[14px] justify-center gap-2 w-[100px] text-black h-[40px]">
              View now <i class="bx mt-1 bx-right-arrow-alt"></i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default index;
