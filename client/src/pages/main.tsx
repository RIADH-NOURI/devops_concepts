import React, { useState } from "react";
import Header from "../header";
import SearchBar from "../SearchBar";
import CategoryFilters from "../CategoryFilters";
import CategoryGrid from "../CategoryGrid";
import Footer from "../footer";
import Cart from "../cart";



const MainPage = () => {
    const [cart,setCart]= useState(false)
    const [search,setSearch] = React.useState("")
    
  return (
    <div
      className="relative flex size-full min-h-screen flex-col bg-slate-50 group/design-root overflow-x-hidden"
      style={{ fontFamily: '"Noto Serif", "Noto Sans", sans-serif' }}
    >
        <Cart open={cart} onClose={()=>setCart(false)} />
      <div className="layout-container flex h-full grow flex-col">
        <Header open={()=>setCart(true)} />
        <div className="px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            <div className="px-4 py-3">
              <SearchBar placeholder="Search for books" search={search} setSearch={setSearch} />
            </div>
            <CategoryFilters />
            <h2 className="text-[#0e141b] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Browse by Category</h2>
            <CategoryGrid  search={search}/>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default MainPage; 