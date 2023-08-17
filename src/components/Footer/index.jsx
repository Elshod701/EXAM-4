import "./style.scss";
const index = () => {
  return (
    <>
      <footer className="mt-[80px] h-[356px] bg-[#F9F9FB] pt-[70px]">
        <div className="container mx-auto px-5  w-[1200px] ">
          <div className="wrapper flex justify-between">
            <ul className="leading-[60px] items-start">
              <h3 className="font-medium font-family font-Inter-Medium text-[24px]">
                Title
              </h3>
              <p className="font-medium font-family text-[20px] font-Inter-Medium">
                +998991234567
              </p>
              <div className="logos flex gap-2 text-2xl">
                <i class="bx bxl-instagram"></i>
                <i class="bx bxl-facebook"></i>
                <i class="bx bxl-whatsapp"></i>
              </div>
            </ul>
            <ul className="font-medium font-family font-Inter-Medium leading-8 text-lg">
              <li>Help</li>
              <li>Contact us</li>
              <li>Delivery information</li>
              <li>Payment information</li>
              <li>Customer service</li>
              <li>FAQ</li>
            </ul>
            <ul className="font-medium font-family font-Inter-Medium leading-8 text-lg">
              <li>About us</li>
              <li>Our Stores</li>
              <li>Flower care</li>
              <li>Site map</li>
            </ul>
            <ul className="font-medium font-family font-Inter-Medium leading-8 text-lg">
              <li>Legal</li>
              <li>Privacy policy</li>
              <li>Terms & Conditions</li>
              <li>Cookie policy</li>
              <li>Item 4</li>
              <li>Item 5</li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};

export default index;
