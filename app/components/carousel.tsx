"use client";
import { useEffect } from "react";
import Button from "../components/Button";
const Carousel = () => {
  useEffect(() => {
    const init = async () => {
      const { Carousel, initTWE } = await import("tw-elements");
      initTWE({ Carousel });
    };
    init();
  }, []);

  return (
    <>
      <div
        id="carouselExampleCaptions"
        className="relative"
        data-twe-carousel-init
        data-twe-ride="carousel"
      >
        <div className="relative rounded-lg w-full  overflow-hidden ">
          <div
            className="relative float-left -mr-[100%] w-[90vw] main-div  transition-transform duration-[1000ms] ease-in-out motion-reduce:transition-none"
            data-twe-carousel-active
            data-twe-carousel-item
            style={{ backfaceVisibility: "hidden" }}
          >
            <img
              src="/img.jpeg"
              className="block h-[75vh] w-full !object-cover rounded-lg "
              alt="..."
            />

            {/* top text */}
            <div className="absolute inset-x-[3%] inset-y-[5%]  rounded-md !flex !justify-between  bottom-10   text-white md:block">
              <div className="font-bold text-2xl  ">Mains</div>
              <div className=" ">
                Answer writing is <br /> that{" "}
                <span className="simple">editing </span>
              </div>
            </div>

            {/* green verdict */}
            <div className="absolute green sm:text-5xl  md:inset-x-[1%] md:inset-y-[5%] md:px-10 lg:py-48 text-white md:py-[15%] py-[3%]">
              <span className="sm:hidden md:block">
                Green <br /> Verdict
              </span>
            </div>

            <div className="absolute news-text inset-x-[5%]  bs3 rounded-md  bottom-5  md:py-5 text-white flex text-center justify-between">
              <div className="flex justify-center items-center  ">
                <div className="flex items-start ml-5">
                  <img
                    src="/img.jpeg"
                    alt=""
                    // width={80}
                    // height={100}
                    className="rounded-lg flex sm-img bg-cover bg-fixed bg-no-repeat h-20 w-24"
                  />
                  {/* <div className="gs3   mr-14">
                    <h4 className="flex font-bold gs3-h4 p-1 !sm:text-center">
                      <div className="bg-red-500 mr-2 px-1  rounded  bg-cover  font-bold">
                        GS3
                      </div>
                      Conversation
                    </h4>
                    <p className="md:font-bold w-full gs3-h44 flex flex-wrap items-start text-left">
                      Analysis of campaign songs and newspaper ads of the BJP
                      and Congress during Lok Sabha elections
                    </p>
                  </div> */}
                  {/* ========================================================= */}
                  <div className="gs3 mx-auto flex flex-col items-center sm:items-start">
                    <h4 className="flex font-bold gs3-h4 p-1 sm:justify-center">
                      <div className="bg-red-500 mr-2 px-1 rounded bg-cover font-bold">
                        GS3
                      </div>
                      Conversation
                    </h4>
                    <p className="md:font-bold w-full gs3-h44 flex flex-wrap items-start text-center sm:text-left">
                      Analysis of campaign songs and newspaper ads of the BJP
                      and Congress during Lok Sabha elections
                    </p>
                  </div>
                </div>

                <div className=" ml-4 mr-8 btn-hide">
                  <Button />
                </div>
              </div>
            </div>
          </div>
          {/* ==================================================================================== */}
          <div
            className="relative float-left -mr-[100%] main-div hidden w-[90vw] transition-transform duration-[1000ms] ease-in-out motion-reduce:transition-none"
            data-twe-carousel-item
            style={{ backfaceVisibility: "hidden" }}
          >
            <img
              src="/img1.jpg"
              className="block h-[75vh] w-full object-cover rounded-lg "
              alt="..."
            />

            {/* top text */}
            <div className="absolute inset-x-[3%] inset-y-[5%]  rounded-md !flex !justify-between  bottom-10   text-white md:block">
              <div className="font-bold text-2xl  ">Mains</div>
              <div className=" ">
                Answer writing is <br /> that{" "}
                <span className="simple">editing </span>
              </div>
            </div>

            {/* green verdict */}
            <div className="absolute green sm:text-5xl  md:inset-x-[1%] md:inset-y-[5%] md: px-10 lg:py-48  text-white md:py-[15%] py-[3%]">
              Green <br /> Verdict
            </div>

            <div className="absolute news-text inset-x-[5%]  bs3 rounded-md  bottom-5  md:py-5 text-white flex text-center justify-between">
              <div className="flex justify-center items-center  ">
                <div className="flex ml-5">
                  <img
                    src="/img1.jpg"
                    alt=""
                    // width={80}
                    // height={92}
                    className="rounded-lg flex sm-img bg-cover bg-fixed bg-no-repeat h-20 w-24 "
                  />
                  {/* <div className="gs3 mr-14 ">
                    <h4 className="flex font-bold gs3-h4 p-1 ">
                      <section className="bg-red-500 mr-2 px-1  rounded  bg-cover  font-bold">
                        GS3
                      </section>
                      Conversation
                    </h4>
                    <p className="md:font-bold w-full gs3-h44 flex flex-wrap items-start text-left">
                      Analysis of campaign songs and newspaper ads of the BJP
                      and Congress during Lok Sabha elections
                    </p>
                  </div> */}
                  <div className="gs3 mx-auto flex flex-col items-center sm:items-start">
                    <h4 className="flex font-bold gs3-h4 p-1 sm:justify-center">
                      <div className="bg-red-500 mr-2 px-1 rounded bg-cover font-bold">
                        GS3
                      </div>
                      Conversation
                    </h4>
                    <p className="md:font-bold w-full gs3-h44 flex flex-wrap items-start text-center sm:text-left">
                      Analysis of campaign songs and newspaper ads of the BJP
                      and Congress during Lok Sabha elections
                    </p>
                  </div>
                </div>

                <div className="ml-4 mr-8 btn-hide">
                  <Button />
                </div>
              </div>
            </div>
          </div>
          {/* ==================================================================================== */}
          <div
            className="relative float-left -mr-[100%] main-div hidden w-[90vw] transition-transform duration-[1000ms] ease-in-out motion-reduce:transition-none"
            data-twe-carousel-item
            style={{ backfaceVisibility: "hidden" }}
          >
            <img
              src="/img2.jpg"
              className="block h-[75vh] w-full object-cover rounded-lg "
              alt="..."
            />

            {/* top text */}
            <div className="absolute inset-x-[3%] inset-y-[5%]  rounded-md !flex !justify-between  bottom-10   text-white md:block">
              <div className="font-bold text-2xl  ">Mains</div>
              <div className=" ">
                Answer writing is <br /> that{" "}
                <span className="simple">editing </span>
              </div>
            </div>

            {/* green verdict */}
            <div className="absolute green sm:text-5xl  md:inset-x-[1%] md:inset-y-[5%] md: px-10 lg:py-48  text-white md:py-[15%] py-[3%]">
              Green <br /> Verdict
            </div>

            <div className="absolute news-text inset-x-[5%]  bs3 rounded-md  bottom-5  md:py-5 text-white flex text-center justify-between">
              <div className="flex justify-center items-center  ">
                <div className="flex ml-5">
                  <img
                    src="/img2.jpg"
                    alt=""
                    className="rounded-lg flex sm-img bg-cover bg-fixed bg-no-repeat h-20 w-24"
                  />
                  {/* <div className="gs3 mr-14 ">
                    <h4 className="flex font-bold gs3-h4 p-1 ">
                      <section className="bg-red-500 mr-2 px-1  rounded  bg-cover  font-bold">
                        GS3
                      </section>
                      Conversation
                    </h4>
                    <p className="md:font-bold w-full gs3-h44 flex flex-wrap items-start text-left">
                      Analysis of campaign songs and newspaper ads of the BJP
                      and Congress during Lok Sabha elections
                    </p>
                  </div> */}
                  <div className="gs3 mx-auto flex flex-col items-center sm:items-start">
                    <h4 className="flex font-bold gs3-h4 p-1 sm:justify-center">
                      <div className="bg-red-500 mr-2 px-1 rounded bg-cover font-bold">
                        GS3
                      </div>
                      Conversation
                    </h4>
                    <p className="md:font-bold w-full gs3-h44 flex flex-wrap items-start text-center sm:text-left">
                      Analysis of campaign songs and newspaper ads of the BJP
                      and Congress during Lok Sabha elections
                    </p>
                  </div>
                </div>

                <div className="ml-4 mr-8 btn-hide">
                  <Button />
                </div>
              </div>
            </div>
          </div>
          {/* ==================================================================================== */}
          <div
            className="relative float-left -mr-[100%] main-div hidden w-[90vw] transition-transform duration-[1000ms] ease-in-out motion-reduce:transition-none"
            data-twe-carousel-item
            style={{ backfaceVisibility: "hidden" }}
          >
            <img
              src="/img3.jpg"
              className="block h-[75vh] w-full object-cover rounded-lg "
              alt="..."
            />

            {/* top text */}
            <div className="absolute inset-x-[3%] inset-y-[5%]  rounded-md !flex !justify-between  bottom-10   text-white md:block">
              <div className="font-bold text-2xl  ">Mains</div>
              <div className=" ">
                Answer writing is <br /> that{" "}
                <span className="simple">editing </span>
              </div>
            </div>

            {/* green verdict */}
            <div className="absolute green sm:text-5xl  md:inset-x-[1%] md:inset-y-[5%] md: px-10 lg:py-48  text-white md:py-[15%] py-[3%]">
              Green <br /> Verdict
            </div>

            <div className="absolute news-text inset-x-[5%]  bs3 rounded-md  bottom-5  md:py-5 text-white flex text-center justify-between">
              <div className="flex justify-center items-center  ">
                <div className="flex ml-5">
                  <img
                    src="/img3.jpg"
                    alt=""
                    className="rounded-lg flex sm-img bg-cover bg-fixed bg-no-repeat h-20 w-24"
                  />
                  {/* <div className="gs3 mr-14 ">
                    <h4 className="flex font-bold gs3-h4 p-1 ">
                      <section className="bg-red-500 mr-2 px-1  rounded  bg-cover  font-bold">
                        GS3
                      </section>
                      Conversation
                    </h4>
                    <p className="md:font-bold w-full gs3-h44 flex flex-wrap items-start text-left">
                      Analysis of campaign songs and newspaper ads of the BJP
                      and Congress during Lok Sabha elections
                    </p>
                  </div> */}
                  <div className="gs3 mx-auto flex flex-col items-center sm:items-start">
                    <h4 className="flex font-bold gs3-h4 p-1 sm:justify-center">
                      <div className="bg-red-500 mr-2 px-1 rounded bg-cover font-bold">
                        GS3
                      </div>
                      Conversation
                    </h4>
                    <p className="md:font-bold w-full gs3-h44 flex flex-wrap items-start text-center sm:text-left">
                      Analysis of campaign songs and newspaper ads of the BJP
                      and Congress during Lok Sabha elections
                    </p>
                  </div>
                </div>

                <div className="ml-4 mr-8 btn-hide">
                  <Button />
                </div>
              </div>
            </div>
          </div>
          {/* ==================================================================================== */}
          <div
            className="relative float-left -mr-[100%] main-div hidden w-[90vw] transition-transform duration-[1000ms] ease-in-out motion-reduce:transition-none"
            data-twe-carousel-item
            style={{ backfaceVisibility: "hidden" }}
          >
            <img
              src="/img4.jpg"
              className="block h-[75vh] w-full object-cover rounded-lg "
              alt="..."
            />

            {/* top text */}
            <div className="absolute inset-x-[3%] inset-y-[5%]  rounded-md !flex !justify-between  bottom-10   text-white md:block">
              <div className="font-bold text-2xl  ">Mains</div>
              <div className=" ">
                Answer writing is <br /> that{" "}
                <span className="simple">editing </span>
              </div>
            </div>

            {/* green verdict */}
            <div className="absolute green sm:text-5xl  md:inset-x-[1%] md:inset-y-[5%] md: px-10 lg:py-48  text-white md:py-[15%] py-[3%]">
              Green <br /> Verdict
            </div>

            <div className="absolute news-text inset-x-[5%]  bs3 rounded-md  bottom-5  md:py-5 text-white flex text-center justify-between">
              <div className="  flex justify-center items-center">
                <div className="flex ml-5">
                  <img
                    src="/img4.jpg"
                    alt=""
                    className="rounded-lg flex sm-img bg-cover bg-fixed bg-no-repeat h-20 w-24"
                  />
                  {/* <div className="gs3 mr-14 ">
                    <h4 className="flex font-bold gs3-h4 p-1 ">
                      <section className="bg-red-500 mr-2 px-1  rounded  bg-cover  font-bold">
                        GS3
                      </section>
                      Conversation
                    </h4>
                    <p className="md:font-bold w-full gs3-h44 flex flex-wrap items-start text-left">
                      Analysis of campaign songs and newspaper ads of the BJP
                      and Congress during Lok Sabha elections
                    </p>
                  </div> */}
                  <div className="gs3 mx-auto flex flex-col items-center sm:items-start">
                    <h4 className="flex font-bold gs3-h4 p-1 sm:justify-center">
                      <div className="bg-red-500 mr-2 px-1 rounded bg-cover font-bold">
                        GS3
                      </div>
                      Conversation
                    </h4>
                    <p className="md:font-bold w-full gs3-h44 flex flex-wrap items-start text-center sm:text-left">
                      Analysis of campaign songs and newspaper ads of the BJP
                      and Congress during Lok Sabha elections
                    </p>
                  </div>
                </div>

                <div className="ml-4 mr-8 btn-hide">
                  <Button />
                </div>
              </div>
            </div>
          </div>
        </div>

        <button
          className="absolute  bottom-0 lg:-left-10 sm:left-20 top-0 right-10 z-[5] flex w-[50%] items-center justify-start border-0 bg-none p-0 text-center  lg:text-slate-500 md:text-transparent opacity-70 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] lg:hover:text-black sm:hover:text-transparent lg:hover:no-underline sm:hover:no-underline hover:opacity-90 hover:outline-none focus:text-slate-400 focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
          type="button"
          data-twe-target="#carouselExampleCaptions"
          data-twe-slide="prev"
        >
          <span className="inline-block  h-10 w-10 arrow ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
              stroke-width="1.5"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </span>
          <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
            Previous
          </span>
        </button>
        <button
          className="absolute bottom-0 lg: sm:right-10  lg:-right-10 top-0 z-[5] flex w-[50%] items-center justify-end border-0 bg-none p-0 text-center lg:text-slate-400 sm:text-transparent opacity-70 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] sm:hover:text-transparent lg:hover:text-black  lg:hover:no-underline hover:opacity-90 hover:outline-none focus:text-slate-400 focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
          type="button"
          data-twe-target="#carouselExampleCaptions"
          data-twe-slide="next"
        >
          <span className="inline-block sm:hidden lg:block h-6 w-6 arrow ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
              stroke-width="1.5"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </span>
          <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
            Next
          </span>
        </button>

        <div className="font-bold mt-4 ml-2">Mains Categories</div>
      </div>
    </>
  );
};

export default Carousel;
