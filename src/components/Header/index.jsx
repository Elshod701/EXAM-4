const index = () => {
  return (
    <header>
      <div className="container mx-auto px-5 bg-slate-600  w-[1200px]">
        <div className="main-header font-family family:Inter-Medium h-[52px] bg-slate-400 flex items-center justify-between">
          <div className="logo flex items-center gap-2 font-[500] text-lg">
            <i className="bx bxs-location-plus text-3xl"></i>
            <a className="logo" href="#">
              Tashkent
            </a>
          </div>
          <div className="flex gap-3 items-center cursor-pointer">
            <i className="bx bx-search-alt-2 text-3xl "></i>
            <img src="./src/assets/images/shop.svg" alt="shop" />
          </div>
        </div>
        <div className="navbar h-[80px] font-family family:Inter-Regular text-[16px] flex items-center justify-center gap-[40px]">
          <a href="#">Flowers</a>
          <a href="#">Plants</a>
          <a href="#">Gifts</a>
          <a href="#">Discounts</a>
          <a href="#">About us</a>
        </div>
      </div>
    </header>
  );
};

export default index;
