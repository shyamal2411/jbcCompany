import React from "react";
import Darshak from "../assets/darshakU.jpg";
import Atul from "../assets/atulJasani.jpeg";
const Team = () => {
  return (
    <>
      <div
        id="team"
        className="flex bg-[#0E303D] justify-center items-center mt-7 lg:mt-0"
      >
        <section className="pb-10 lg:pt-[50px] lg:pb-2">
          <div className="container mx-50">
            <div className="mx-4 flex flex-wrap">
              {/* <div className="container bg-red-300 px-4"> */}
              <div className="mx-auto mb-[50px] max-w-[510px] text-lg text-center">
                <h2 className="text-white text-3xl mt-10 font-bold sm:text-4xl md:text-[40px]">
                  OUR CORE TEAM
                </h2>
              </div>
            </div>
            {/* </div> */}
            <div className="mx-4 flex flex-wrap justify-around">
              <div className="w-full px-4 md:w-1/2 xl:w-1/2">
                <div className="mx-auto mb-10 w-full max-w-[370px]">
                  <div className="relative overflow-hidden rounded-lg">
                    <img
                      src={Darshak}
                      alt="image1"
                      className="w-[350px] h-[400px]"
                    />
                    <div className="absolute bottom-5 left-0 w-full text-center">
                      <div className="relative mx-5 overflow-hidden rounded-lg bg-white py-5 px-3">
                        <h3 className="text-dark text-base font-semibold">
                          Darshak Upadhyay
                        </h3>
                        <p className="text-body-color text-sm">Proprietor</p>
                        <div>
                          {/* <span className="absolute left-0 bottom-0">
                            <svg
                              width="61"
                              height="30"
                              viewBox="0 0 61 30"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <circle
                                cx="16"
                                cy="45"
                                r="45"
                                fill="#13C296"
                                fill-opacity="0.11"
                              />
                            </svg>
                          </span>
                          <span className="absolute top-0 right-0">
                            <svg
                              width="20"
                              height="25"
                              viewBox="0 0 20 25"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <circle
                                cx="0.706257"
                                cy="24.3533"
                                r="0.646687"
                                transform="rotate(-90 0.706257 24.3533)"
                                fill="#3056D3"
                              />
                              <circle
                                cx="6.39669"
                                cy="24.3533"
                                r="0.646687"
                                transform="rotate(-90 6.39669 24.3533)"
                                fill="#3056D3"
                              />
                              <circle
                                cx="12.0881"
                                cy="24.3533"
                                r="0.646687"
                                transform="rotate(-90 12.0881 24.3533)"
                                fill="#3056D3"
                              />
                              <circle
                                cx="17.7785"
                                cy="24.3533"
                                r="0.646687"
                                transform="rotate(-90 17.7785 24.3533)"
                                fill="#3056D3"
                              />
                              <circle
                                cx="0.706257"
                                cy="18.6624"
                                r="0.646687"
                                transform="rotate(-90 0.706257 18.6624)"
                                fill="#3056D3"
                              />
                              <circle
                                cx="6.39669"
                                cy="18.6624"
                                r="0.646687"
                                transform="rotate(-90 6.39669 18.6624)"
                                fill="#3056D3"
                              />
                              <circle
                                cx="12.0881"
                                cy="18.6624"
                                r="0.646687"
                                transform="rotate(-90 12.0881 18.6624)"
                                fill="#3056D3"
                              />
                              <circle
                                cx="17.7785"
                                cy="18.6624"
                                r="0.646687"
                                transform="rotate(-90 17.7785 18.6624)"
                                fill="#3056D3"
                              />
                              <circle
                                cx="0.706257"
                                cy="12.9717"
                                r="0.646687"
                                transform="rotate(-90 0.706257 12.9717)"
                                fill="#3056D3"
                              />
                              <circle
                                cx="6.39669"
                                cy="12.9717"
                                r="0.646687"
                                transform="rotate(-90 6.39669 12.9717)"
                                fill="#3056D3"
                              />
                              <circle
                                cx="12.0881"
                                cy="12.9717"
                                r="0.646687"
                                transform="rotate(-90 12.0881 12.9717)"
                                fill="#3056D3"
                              />
                              <circle
                                cx="17.7785"
                                cy="12.9717"
                                r="0.646687"
                                transform="rotate(-90 17.7785 12.9717)"
                                fill="#3056D3"
                              />
                              <circle
                                cx="0.706257"
                                cy="7.28077"
                                r="0.646687"
                                transform="rotate(-90 0.706257 7.28077)"
                                fill="#3056D3"
                              />
                              <circle
                                cx="6.39669"
                                cy="7.28077"
                                r="0.646687"
                                transform="rotate(-90 6.39669 7.28077)"
                                fill="#3056D3"
                              />
                              <circle
                                cx="12.0881"
                                cy="7.28077"
                                r="0.646687"
                                transform="rotate(-90 12.0881 7.28077)"
                                fill="#3056D3"
                              />
                              <circle
                                cx="17.7785"
                                cy="7.28077"
                                r="0.646687"
                                transform="rotate(-90 17.7785 7.28077)"
                                fill="#3056D3"
                              />
                              <circle
                                cx="0.706257"
                                cy="1.58989"
                                r="0.646687"
                                transform="rotate(-90 0.706257 1.58989)"
                                fill="#3056D3"
                              />
                              <circle
                                cx="6.39669"
                                cy="1.58989"
                                r="0.646687"
                                transform="rotate(-90 6.39669 1.58989)"
                                fill="#3056D3"
                              />
                              <circle
                                cx="12.0881"
                                cy="1.58989"
                                r="0.646687"
                                transform="rotate(-90 12.0881 1.58989)"
                                fill="#3056D3"
                              />
                              <circle
                                cx="17.7785"
                                cy="1.58989"
                                r="0.646687"
                                transform="rotate(-90 17.7785 1.58989)"
                                fill="#3056D3"
                              />
                            </svg>
                          </span> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full px-4 md:w-1/2 xl:w-1/2">
                <div className="mx-auto mb-10 w-full max-w-[370px]">
                  <div className="relative overflow-hidden rounded-lg">
                    <img
                      src={Atul}
                      alt="image2"
                      className="w-[350px] h-[400px]"
                    />
                    <div className="absolute bottom-5 left-0 w-full text-center">
                      <div className="relative mx-5 overflow-hidden rounded-lg bg-white py-5 px-3">
                        <h3 className="text-dark text-base font-semibold">
                          Atul Jasani
                        </h3>
                        <p className="text-body-color text-sm">
                          Managing Director
                        </p>
                        <div>
                          {/* <span className="absolute left-0 bottom-0">
                            <svg
                              width="61"
                              height="30"
                              viewBox="0 0 61 30"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <circle
                                cx="16"
                                cy="45"
                                r="45"
                                fill="#13C296"
                                fill-opacity="0.11"
                              />
                            </svg>
                          </span>
                          <span className="absolute top-0 right-0">
                            <svg
                              width="20"
                              height="25"
                              viewBox="0 0 20 25"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <circle
                                cx="0.706257"
                                cy="24.3533"
                                r="0.646687"
                                transform="rotate(-90 0.706257 24.3533)"
                                fill="#3056D3"
                              />
                              <circle
                                cx="6.39669"
                                cy="24.3533"
                                r="0.646687"
                                transform="rotate(-90 6.39669 24.3533)"
                                fill="#3056D3"
                              />
                              <circle
                                cx="12.0881"
                                cy="24.3533"
                                r="0.646687"
                                transform="rotate(-90 12.0881 24.3533)"
                                fill="#3056D3"
                              />
                              <circle
                                cx="17.7785"
                                cy="24.3533"
                                r="0.646687"
                                transform="rotate(-90 17.7785 24.3533)"
                                fill="#3056D3"
                              />
                              <circle
                                cx="0.706257"
                                cy="18.6624"
                                r="0.646687"
                                transform="rotate(-90 0.706257 18.6624)"
                                fill="#3056D3"
                              />
                              <circle
                                cx="6.39669"
                                cy="18.6624"
                                r="0.646687"
                                transform="rotate(-90 6.39669 18.6624)"
                                fill="#3056D3"
                              />
                              <circle
                                cx="12.0881"
                                cy="18.6624"
                                r="0.646687"
                                transform="rotate(-90 12.0881 18.6624)"
                                fill="#3056D3"
                              />
                              <circle
                                cx="17.7785"
                                cy="18.6624"
                                r="0.646687"
                                transform="rotate(-90 17.7785 18.6624)"
                                fill="#3056D3"
                              />
                              <circle
                                cx="0.706257"
                                cy="12.9717"
                                r="0.646687"
                                transform="rotate(-90 0.706257 12.9717)"
                                fill="#3056D3"
                              />
                              <circle
                                cx="6.39669"
                                cy="12.9717"
                                r="0.646687"
                                transform="rotate(-90 6.39669 12.9717)"
                                fill="#3056D3"
                              />
                              <circle
                                cx="12.0881"
                                cy="12.9717"
                                r="0.646687"
                                transform="rotate(-90 12.0881 12.9717)"
                                fill="#3056D3"
                              />
                              <circle
                                cx="17.7785"
                                cy="12.9717"
                                r="0.646687"
                                transform="rotate(-90 17.7785 12.9717)"
                                fill="#3056D3"
                              />
                              <circle
                                cx="0.706257"
                                cy="7.28077"
                                r="0.646687"
                                transform="rotate(-90 0.706257 7.28077)"
                                fill="#3056D3"
                              />
                              <circle
                                cx="6.39669"
                                cy="7.28077"
                                r="0.646687"
                                transform="rotate(-90 6.39669 7.28077)"
                                fill="#3056D3"
                              />
                              <circle
                                cx="12.0881"
                                cy="7.28077"
                                r="0.646687"
                                transform="rotate(-90 12.0881 7.28077)"
                                fill="#3056D3"
                              />
                              <circle
                                cx="17.7785"
                                cy="7.28077"
                                r="0.646687"
                                transform="rotate(-90 17.7785 7.28077)"
                                fill="#3056D3"
                              />
                              <circle
                                cx="0.706257"
                                cy="1.58989"
                                r="0.646687"
                                transform="rotate(-90 0.706257 1.58989)"
                                fill="#3056D3"
                              />
                              <circle
                                cx="6.39669"
                                cy="1.58989"
                                r="0.646687"
                                transform="rotate(-90 6.39669 1.58989)"
                                fill="#3056D3"
                              />
                              <circle
                                cx="12.0881"
                                cy="1.58989"
                                r="0.646687"
                                transform="rotate(-90 12.0881 1.58989)"
                                fill="#3056D3"
                              />
                              <circle
                                cx="17.7785"
                                cy="1.58989"
                                r="0.646687"
                                transform="rotate(-90 17.7785 1.58989)"
                                fill="#3056D3"
                              />
                            </svg>
                          </span> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className="w-full px-4 md:w-1/2 xl:w-1/4">
                <div className="mx-auto mb-10 w-full max-w-[370px]">
                  <div className="relative overflow-hidden rounded-lg">
                    <img
                      src="https://cdn.tailgrids.com/1.0/assets/images/team/team-01/image-03.jpg"
                      alt="image3"
                      className="w-full"
                    />
                    <div className="absolute bottom-5 left-0 w-full text-center">
                      <div className="relative mx-5 overflow-hidden rounded-lg bg-white py-5 px-3">
                        <h3 className="text-dark text-base font-semibold">
                          Pranav Parekh
                        </h3>
                        <p className="text-body-color text-sm">
                          Chief Design Officer
                        </p>
                        <div>
                          <span className="absolute left-0 bottom-0">
                            <svg
                              width="61"
                              height="30"
                              viewBox="0 0 61 30"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <circle
                                cx="16"
                                cy="45"
                                r="45"
                                fill="#13C296"
                                fill-opacity="0.11"
                              />
                            </svg>
                          </span>
                          <span className="absolute top-0 right-0">
                            <svg
                              width="20"
                              height="25"
                              viewBox="0 0 20 25"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <circle
                                cx="0.706257"
                                cy="24.3533"
                                r="0.646687"
                                transform="rotate(-90 0.706257 24.3533)"
                                fill="#3056D3"
                              />
                              <circle
                                cx="6.39669"
                                cy="24.3533"
                                r="0.646687"
                                transform="rotate(-90 6.39669 24.3533)"
                                fill="#3056D3"
                              />
                              <circle
                                cx="12.0881"
                                cy="24.3533"
                                r="0.646687"
                                transform="rotate(-90 12.0881 24.3533)"
                                fill="#3056D3"
                              />
                              <circle
                                cx="17.7785"
                                cy="24.3533"
                                r="0.646687"
                                transform="rotate(-90 17.7785 24.3533)"
                                fill="#3056D3"
                              />
                              <circle
                                cx="0.706257"
                                cy="18.6624"
                                r="0.646687"
                                transform="rotate(-90 0.706257 18.6624)"
                                fill="#3056D3"
                              />
                              <circle
                                cx="6.39669"
                                cy="18.6624"
                                r="0.646687"
                                transform="rotate(-90 6.39669 18.6624)"
                                fill="#3056D3"
                              />
                              <circle
                                cx="12.0881"
                                cy="18.6624"
                                r="0.646687"
                                transform="rotate(-90 12.0881 18.6624)"
                                fill="#3056D3"
                              />
                              <circle
                                cx="17.7785"
                                cy="18.6624"
                                r="0.646687"
                                transform="rotate(-90 17.7785 18.6624)"
                                fill="#3056D3"
                              />
                              <circle
                                cx="0.706257"
                                cy="12.9717"
                                r="0.646687"
                                transform="rotate(-90 0.706257 12.9717)"
                                fill="#3056D3"
                              />
                              <circle
                                cx="6.39669"
                                cy="12.9717"
                                r="0.646687"
                                transform="rotate(-90 6.39669 12.9717)"
                                fill="#3056D3"
                              />
                              <circle
                                cx="12.0881"
                                cy="12.9717"
                                r="0.646687"
                                transform="rotate(-90 12.0881 12.9717)"
                                fill="#3056D3"
                              />
                              <circle
                                cx="17.7785"
                                cy="12.9717"
                                r="0.646687"
                                transform="rotate(-90 17.7785 12.9717)"
                                fill="#3056D3"
                              />
                              <circle
                                cx="0.706257"
                                cy="7.28077"
                                r="0.646687"
                                transform="rotate(-90 0.706257 7.28077)"
                                fill="#3056D3"
                              />
                              <circle
                                cx="6.39669"
                                cy="7.28077"
                                r="0.646687"
                                transform="rotate(-90 6.39669 7.28077)"
                                fill="#3056D3"
                              />
                              <circle
                                cx="12.0881"
                                cy="7.28077"
                                r="0.646687"
                                transform="rotate(-90 12.0881 7.28077)"
                                fill="#3056D3"
                              />
                              <circle
                                cx="17.7785"
                                cy="7.28077"
                                r="0.646687"
                                transform="rotate(-90 17.7785 7.28077)"
                                fill="#3056D3"
                              />
                              <circle
                                cx="0.706257"
                                cy="1.58989"
                                r="0.646687"
                                transform="rotate(-90 0.706257 1.58989)"
                                fill="#3056D3"
                              />
                              <circle
                                cx="6.39669"
                                cy="1.58989"
                                r="0.646687"
                                transform="rotate(-90 6.39669 1.58989)"
                                fill="#3056D3"
                              />
                              <circle
                                cx="12.0881"
                                cy="1.58989"
                                r="0.646687"
                                transform="rotate(-90 12.0881 1.58989)"
                                fill="#3056D3"
                              />
                              <circle
                                cx="17.7785"
                                cy="1.58989"
                                r="0.646687"
                                transform="rotate(-90 17.7785 1.58989)"
                                fill="#3056D3"
                              />
                            </svg>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}
              {/* <div className="w-full px-4 md:w-1/2 xl:w-1/4">
                <div className="mx-auto mb-10 w-full max-w-[370px]">
                  <div className="relative overflow-hidden rounded-lg">
                    <img
                      src="https://cdn.tailgrids.com/1.0/assets/images/team/team-01/image-04.jpg"
                      alt="image4"
                      className="w-full"
                    />
                    <div className="absolute bottom-5 left-0 w-full text-center">
                      <div className="relative mx-5 overflow-hidden rounded-lg bg-white py-5 px-3">
                        <h3 className="text-dark text-base font-semibold">
                          Kishan Somaiya
                        </h3>
                        <p className="text-body-color text-sm">
                          Technical Head
                        </p>
                        <div>
                          <span className="absolute left-0 bottom-0">
                            <svg
                              width="61"
                              height="30"
                              viewBox="0 0 61 30"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <circle
                                cx="16"
                                cy="45"
                                r="45"
                                fill="#13C296"
                                fill-opacity="0.11"
                              />
                            </svg>
                          </span>
                          <span className="absolute top-0 right-0">
                            <svg
                              width="20"
                              height="25"
                              viewBox="0 0 20 25"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <circle
                                cx="0.706257"
                                cy="24.3533"
                                r="0.646687"
                                transform="rotate(-90 0.706257 24.3533)"
                                fill="#3056D3"
                              />
                              <circle
                                cx="6.39669"
                                cy="24.3533"
                                r="0.646687"
                                transform="rotate(-90 6.39669 24.3533)"
                                fill="#3056D3"
                              />
                              <circle
                                cx="12.0881"
                                cy="24.3533"
                                r="0.646687"
                                transform="rotate(-90 12.0881 24.3533)"
                                fill="#3056D3"
                              />
                              <circle
                                cx="17.7785"
                                cy="24.3533"
                                r="0.646687"
                                transform="rotate(-90 17.7785 24.3533)"
                                fill="#3056D3"
                              />
                              <circle
                                cx="0.706257"
                                cy="18.6624"
                                r="0.646687"
                                transform="rotate(-90 0.706257 18.6624)"
                                fill="#3056D3"
                              />
                              <circle
                                cx="6.39669"
                                cy="18.6624"
                                r="0.646687"
                                transform="rotate(-90 6.39669 18.6624)"
                                fill="#3056D3"
                              />
                              <circle
                                cx="12.0881"
                                cy="18.6624"
                                r="0.646687"
                                transform="rotate(-90 12.0881 18.6624)"
                                fill="#3056D3"
                              />
                              <circle
                                cx="17.7785"
                                cy="18.6624"
                                r="0.646687"
                                transform="rotate(-90 17.7785 18.6624)"
                                fill="#3056D3"
                              />
                              <circle
                                cx="0.706257"
                                cy="12.9717"
                                r="0.646687"
                                transform="rotate(-90 0.706257 12.9717)"
                                fill="#3056D3"
                              />
                              <circle
                                cx="6.39669"
                                cy="12.9717"
                                r="0.646687"
                                transform="rotate(-90 6.39669 12.9717)"
                                fill="#3056D3"
                              />
                              <circle
                                cx="12.0881"
                                cy="12.9717"
                                r="0.646687"
                                transform="rotate(-90 12.0881 12.9717)"
                                fill="#3056D3"
                              />
                              <circle
                                cx="17.7785"
                                cy="12.9717"
                                r="0.646687"
                                transform="rotate(-90 17.7785 12.9717)"
                                fill="#3056D3"
                              />
                              <circle
                                cx="0.706257"
                                cy="7.28077"
                                r="0.646687"
                                transform="rotate(-90 0.706257 7.28077)"
                                fill="#3056D3"
                              />
                              <circle
                                cx="6.39669"
                                cy="7.28077"
                                r="0.646687"
                                transform="rotate(-90 6.39669 7.28077)"
                                fill="#3056D3"
                              />
                              <circle
                                cx="12.0881"
                                cy="7.28077"
                                r="0.646687"
                                transform="rotate(-90 12.0881 7.28077)"
                                fill="#3056D3"
                              />
                              <circle
                                cx="17.7785"
                                cy="7.28077"
                                r="0.646687"
                                transform="rotate(-90 17.7785 7.28077)"
                                fill="#3056D3"
                              />
                              <circle
                                cx="0.706257"
                                cy="1.58989"
                                r="0.646687"
                                transform="rotate(-90 0.706257 1.58989)"
                                fill="#3056D3"
                              />
                              <circle
                                cx="6.39669"
                                cy="1.58989"
                                r="0.646687"
                                transform="rotate(-90 6.39669 1.58989)"
                                fill="#3056D3"
                              />
                              <circle
                                cx="12.0881"
                                cy="1.58989"
                                r="0.646687"
                                transform="rotate(-90 12.0881 1.58989)"
                                fill="#3056D3"
                              />
                              <circle
                                cx="17.7785"
                                cy="1.58989"
                                r="0.646687"
                                transform="rotate(-90 17.7785 1.58989)"
                                fill="#3056D3"
                              />
                            </svg>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}
              {/* <div className="w-full px-4 md:w-1/2 xl:w-1/4">
                <div className="mx-auto mb-10 w-full max-w-[370px]">
                  <div className="relative overflow-hidden rounded-lg">
                    <img
                      src="https://cdn.tailgrids.com/1.0/assets/images/team/team-01/image-04.jpg"
                      alt="image4"
                      className="w-full"
                    />
                    <div className="absolute bottom-5 left-0 w-full text-center">
                      <div className="relative mx-5 overflow-hidden rounded-lg bg-white py-5 px-3">
                        <h3 className="text-dark text-base font-semibold">
                          Dipen Gadhiya
                        </h3>
                        <p className="text-body-color text-sm">
                          Management Lead
                        </p>
                        <div>
                          <span className="absolute left-0 bottom-0">
                            <svg
                              width="61"
                              height="30"
                              viewBox="0 0 61 30"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <circle
                                cx="16"
                                cy="45"
                                r="45"
                                fill="#13C296"
                                fill-opacity="0.11"
                              />
                            </svg>
                          </span>
                          <span className="absolute top-0 right-0">
                            <svg
                              width="20"
                              height="25"
                              viewBox="0 0 20 25"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <circle
                                cx="0.706257"
                                cy="24.3533"
                                r="0.646687"
                                transform="rotate(-90 0.706257 24.3533)"
                                fill="#3056D3"
                              />
                              <circle
                                cx="6.39669"
                                cy="24.3533"
                                r="0.646687"
                                transform="rotate(-90 6.39669 24.3533)"
                                fill="#3056D3"
                              />
                              <circle
                                cx="12.0881"
                                cy="24.3533"
                                r="0.646687"
                                transform="rotate(-90 12.0881 24.3533)"
                                fill="#3056D3"
                              />
                              <circle
                                cx="17.7785"
                                cy="24.3533"
                                r="0.646687"
                                transform="rotate(-90 17.7785 24.3533)"
                                fill="#3056D3"
                              />
                              <circle
                                cx="0.706257"
                                cy="18.6624"
                                r="0.646687"
                                transform="rotate(-90 0.706257 18.6624)"
                                fill="#3056D3"
                              />
                              <circle
                                cx="6.39669"
                                cy="18.6624"
                                r="0.646687"
                                transform="rotate(-90 6.39669 18.6624)"
                                fill="#3056D3"
                              />
                              <circle
                                cx="12.0881"
                                cy="18.6624"
                                r="0.646687"
                                transform="rotate(-90 12.0881 18.6624)"
                                fill="#3056D3"
                              />
                              <circle
                                cx="17.7785"
                                cy="18.6624"
                                r="0.646687"
                                transform="rotate(-90 17.7785 18.6624)"
                                fill="#3056D3"
                              />
                              <circle
                                cx="0.706257"
                                cy="12.9717"
                                r="0.646687"
                                transform="rotate(-90 0.706257 12.9717)"
                                fill="#3056D3"
                              />
                              <circle
                                cx="6.39669"
                                cy="12.9717"
                                r="0.646687"
                                transform="rotate(-90 6.39669 12.9717)"
                                fill="#3056D3"
                              />
                              <circle
                                cx="12.0881"
                                cy="12.9717"
                                r="0.646687"
                                transform="rotate(-90 12.0881 12.9717)"
                                fill="#3056D3"
                              />
                              <circle
                                cx="17.7785"
                                cy="12.9717"
                                r="0.646687"
                                transform="rotate(-90 17.7785 12.9717)"
                                fill="#3056D3"
                              />
                              <circle
                                cx="0.706257"
                                cy="7.28077"
                                r="0.646687"
                                transform="rotate(-90 0.706257 7.28077)"
                                fill="#3056D3"
                              />
                              <circle
                                cx="6.39669"
                                cy="7.28077"
                                r="0.646687"
                                transform="rotate(-90 6.39669 7.28077)"
                                fill="#3056D3"
                              />
                              <circle
                                cx="12.0881"
                                cy="7.28077"
                                r="0.646687"
                                transform="rotate(-90 12.0881 7.28077)"
                                fill="#3056D3"
                              />
                              <circle
                                cx="17.7785"
                                cy="7.28077"
                                r="0.646687"
                                transform="rotate(-90 17.7785 7.28077)"
                                fill="#3056D3"
                              />
                              <circle
                                cx="0.706257"
                                cy="1.58989"
                                r="0.646687"
                                transform="rotate(-90 0.706257 1.58989)"
                                fill="#3056D3"
                              />
                              <circle
                                cx="6.39669"
                                cy="1.58989"
                                r="0.646687"
                                transform="rotate(-90 6.39669 1.58989)"
                                fill="#3056D3"
                              />
                              <circle
                                cx="12.0881"
                                cy="1.58989"
                                r="0.646687"
                                transform="rotate(-90 12.0881 1.58989)"
                                fill="#3056D3"
                              />
                              <circle
                                cx="17.7785"
                                cy="1.58989"
                                r="0.646687"
                                transform="rotate(-90 17.7785 1.58989)"
                                fill="#3056D3"
                              />
                            </svg>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}
              {/* <div className="w-full px-4 md:w-1/2 xl:w-1/4">
                <div className="mx-auto mb-10 w-full max-w-[370px]">
                  <div className="relative overflow-hidden rounded-lg">
                    <img
                      src="https://cdn.tailgrids.com/1.0/assets/images/team/team-01/image-02.jpg"
                      alt="image2"
                      className="w-full"
                    />
                    <div className="absolute bottom-5 left-0 w-full text-center">
                      <div className="relative mx-5 overflow-hidden rounded-lg bg-white py-5 px-3">
                        <h3 className="text-dark text-base font-semibold">
                          Shyamal Prajapati
                        </h3>
                        <p className="text-body-color text-sm">
                          Chief Technical Offier
                        </p>
                        <div>
                          <span className="absolute left-0 bottom-0">
                            <svg
                              width="61"
                              height="30"
                              viewBox="0 0 61 30"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <circle
                                cx="16"
                                cy="45"
                                r="45"
                                fill="#13C296"
                                fill-opacity="0.11"
                              />
                            </svg>
                          </span>
                          <span className="absolute top-0 right-0">
                            <svg
                              width="20"
                              height="25"
                              viewBox="0 0 20 25"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <circle
                                cx="0.706257"
                                cy="24.3533"
                                r="0.646687"
                                transform="rotate(-90 0.706257 24.3533)"
                                fill="#3056D3"
                              />
                              <circle
                                cx="6.39669"
                                cy="24.3533"
                                r="0.646687"
                                transform="rotate(-90 6.39669 24.3533)"
                                fill="#3056D3"
                              />
                              <circle
                                cx="12.0881"
                                cy="24.3533"
                                r="0.646687"
                                transform="rotate(-90 12.0881 24.3533)"
                                fill="#3056D3"
                              />
                              <circle
                                cx="17.7785"
                                cy="24.3533"
                                r="0.646687"
                                transform="rotate(-90 17.7785 24.3533)"
                                fill="#3056D3"
                              />
                              <circle
                                cx="0.706257"
                                cy="18.6624"
                                r="0.646687"
                                transform="rotate(-90 0.706257 18.6624)"
                                fill="#3056D3"
                              />
                              <circle
                                cx="6.39669"
                                cy="18.6624"
                                r="0.646687"
                                transform="rotate(-90 6.39669 18.6624)"
                                fill="#3056D3"
                              />
                              <circle
                                cx="12.0881"
                                cy="18.6624"
                                r="0.646687"
                                transform="rotate(-90 12.0881 18.6624)"
                                fill="#3056D3"
                              />
                              <circle
                                cx="17.7785"
                                cy="18.6624"
                                r="0.646687"
                                transform="rotate(-90 17.7785 18.6624)"
                                fill="#3056D3"
                              />
                              <circle
                                cx="0.706257"
                                cy="12.9717"
                                r="0.646687"
                                transform="rotate(-90 0.706257 12.9717)"
                                fill="#3056D3"
                              />
                              <circle
                                cx="6.39669"
                                cy="12.9717"
                                r="0.646687"
                                transform="rotate(-90 6.39669 12.9717)"
                                fill="#3056D3"
                              />
                              <circle
                                cx="12.0881"
                                cy="12.9717"
                                r="0.646687"
                                transform="rotate(-90 12.0881 12.9717)"
                                fill="#3056D3"
                              />
                              <circle
                                cx="17.7785"
                                cy="12.9717"
                                r="0.646687"
                                transform="rotate(-90 17.7785 12.9717)"
                                fill="#3056D3"
                              />
                              <circle
                                cx="0.706257"
                                cy="7.28077"
                                r="0.646687"
                                transform="rotate(-90 0.706257 7.28077)"
                                fill="#3056D3"
                              />
                              <circle
                                cx="6.39669"
                                cy="7.28077"
                                r="0.646687"
                                transform="rotate(-90 6.39669 7.28077)"
                                fill="#3056D3"
                              />
                              <circle
                                cx="12.0881"
                                cy="7.28077"
                                r="0.646687"
                                transform="rotate(-90 12.0881 7.28077)"
                                fill="#3056D3"
                              />
                              <circle
                                cx="17.7785"
                                cy="7.28077"
                                r="0.646687"
                                transform="rotate(-90 17.7785 7.28077)"
                                fill="#3056D3"
                              />
                              <circle
                                cx="0.706257"
                                cy="1.58989"
                                r="0.646687"
                                transform="rotate(-90 0.706257 1.58989)"
                                fill="#3056D3"
                              />
                              <circle
                                cx="6.39669"
                                cy="1.58989"
                                r="0.646687"
                                transform="rotate(-90 6.39669 1.58989)"
                                fill="#3056D3"
                              />
                              <circle
                                cx="12.0881"
                                cy="1.58989"
                                r="0.646687"
                                transform="rotate(-90 12.0881 1.58989)"
                                fill="#3056D3"
                              />
                              <circle
                                cx="17.7785"
                                cy="1.58989"
                                r="0.646687"
                                transform="rotate(-90 17.7785 1.58989)"
                                fill="#3056D3"
                              />
                            </svg>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Team;
