import SearchBar from "./SearchBar";

const NovelVerseHeader = ({open}:{open:()=>void}) => (
  <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#e7edf3] px-10 py-3">
    <div className="flex items-center gap-8">
      <div className="flex items-center gap-4 text-[#0e141b]">
        <div className="size-4">
          {/* Logo SVG */}
          <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_6_535)">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M47.2426 24L24 47.2426L0.757355 24L24 0.757355L47.2426 24ZM12.2426 21H35.7574L24 9.24264L12.2426 21Z"
                fill="currentColor"
              ></path>
            </g>
            <defs>
              <clipPath id="clip0_6_535">
                <rect width="48" height="48" fill="white"></rect>
              </clipPath>
            </defs>
          </svg>
        </div>
        <h2 className="text-[#0e141b] text-lg font-bold leading-tight tracking-[-0.015em]">NovelVerse</h2>
      </div>
      <div className="flex items-center gap-9">
        <a className="text-[#0e141b] text-sm font-medium leading-normal" href="#">New Releases</a>
        <a className="text-[#0e141b] text-sm font-medium leading-normal" href="#">Best Sellers</a>
        <a className="text-[#0e141b] text-sm font-medium leading-normal" href="#">Featured</a>
        <a className="text-[#0e141b] text-sm font-medium leading-normal" href="/authors" data-testid="authors-link">Authors</a>
      </div>
    </div>
    <div className="flex flex-1 justify-end gap-8">
      <SearchBar placeholder="Search" />
      <div className="flex gap-2">
        <button
          className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 bg-[#e7edf3] text-[#0e141b] gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 px-2.5"
        >
          <div className="text-[#0e141b]" data-icon="Heart" data-size="20px" data-weight="regular">
            <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
              <path
                d="M178,32c-20.65,0-38.73,8.88-50,23.89C116.73,40.88,98.65,32,78,32A62.07,62.07,0,0,0,16,94c0,70,103.79,126.66,108.21,129a8,8,0,0,0,7.58,0C136.21,220.66,240,164,240,94A62.07,62.07,0,0,0,178,32ZM128,206.8C109.74,196.16,32,147.69,32,94A46.06,46.06,0,0,1,78,48c19.45,0,35.78,10.36,42.6,27a8,8,0,0,0,14.8,0c6.82-16.67,23.15-27,42.6-27a46.06,46.06,0,0,1,46,46C224,147.61,146.24,196.15,128,206.8Z"
              ></path>
            </svg>
          </div>
        </button>
        <button
          className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 bg-[#e7edf3] text-[#0e141b] gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 px-2.5"
          onClick={open}
          data-testid="cart-button"
        >
          <div className="text-[#0e141b]" data-icon="ShoppingCart" data-size="20px" data-weight="regular">
            <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
              <path
                d="M222.14,58.87A8,8,0,0,0,216,56H54.68L49.79,29.14A16,16,0,0,0,34.05,16H16a8,8,0,0,0,0,16h18L59.56,172.29a24,24,0,0,0,5.33,11.27,28,28,0,1,0,44.4,8.44h45.42A27.75,27.75,0,0,0,152,204a28,28,0,1,0,28-28H83.17a8,8,0,0,1-7.87-6.57L72.13,152h116a24,24,0,0,0,23.61-19.71l12.16-66.86A8,8,0,0,0,222.14,58.87ZM96,204a12,12,0,1,1-12-12A12,12,0,0,1,96,204Zm96,0a12,12,0,1,1-12-12A12,12,0,0,1,192,204Zm4-74.57A8,8,0,0,1,188.1,136H69.22L57.59,72H206.41Z"
              ></path>
            </svg>
          </div>
        </button>
      </div>
      <div
        className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
        style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBnG8e40NwyisX07RhLrMa3qx5uN-TOUWRe1fQMcV4sAergl5Yr4mE_3lWSvteUxUpaierf2AVhnV2_HfW6Jd2tWheCU4e_gh9A2Vjs7ifD970OwDzb2k7aOEHV2IRnETKUETMctNqDgHhwzmbkTUB860hq8e4iZnlv60dKz6LVmprL1xTW5rFVZctQs1LnnCzbKr5uHnBgOAzE60jBclJfFo_BYD674Cb6FVWCBc1A-7WjnwLRnxTWrMr3YS7D_35Il9Aw9AzXq2TM")' }}
      ></div>
    </div>
  </header>
);

export default NovelVerseHeader; 