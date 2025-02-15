import React from 'react'
import PortfolioPerformanceGauge from './dashboardTab/PortfolioPerformanceGauge'

const Index = () => {
  return (
    <div><div className="mt-3">
    <div className="container mx-auto">
      <div className="flex flex-wrap">
        <div className="md:w-2/3 w-full pb-6 md:pb-0 md:pr-6">
          <div className="container mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 pt-6 gap-8">
            {/* Remove class [ h-24 ] when adding a card block */}
            {/* Remove class [ border-gray-300  dark:border-gray-700 border-dashed border-2 ] to remove dotted border */}
            <div className="rounded border-gray-300  dark:border-gray-700 border-dashed border-2 h-24">
              <div className="bg-white dark:bg-gray-800 rounded shadow px-4 py-1 flex items-center">
                <div className="p-4 bg-indigo-700 rounded text-white overflow-hidden">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-click"
                    width={32}
                    height={32}
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <line x1={3} y1={12} x2={6} y2={12} />
                    <line x1={12} y1={3} x2={12} y2={6} />
                    <line x1="7.8" y1="7.8" x2="5.6" y2="5.6" />
                    <line x1="16.2" y1="7.8" x2="18.4" y2="5.6" />
                    <line x1="7.8" y1="16.2" x2="5.6" y2="18.4" />
                    <path d="M12 12l9 3l-4 2l-2 4l-3 -9" />
                  </svg>
                </div>
                <div className="ml-6">
                  <h3 className="mb-1 leading-5 text-gray-800 dark:text-gray-100 font-bold text-2xl">
                    12%
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm tracking-normal font-normal leading-5">
                    Return on Investment
                  </p>
                </div>
              </div>
            </div>
            {/* Remove class [ h-24 ] when adding a card block */}
            {/* Remove class [ border-gray-300  dark:border-gray-700 border-dashed border-2 ] to remove dotted border */}
            <div className="rounded border-gray-300  dark:border-gray-700 border-dashed border-2 h-24">
              <div className="bg-white dark:bg-gray-800 rounded shadow px-4 py-3 flex items-center">
                <div className="p-4 bg-indigo-700 rounded">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-discount"
                    height={32}
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="#fff"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <line x1={9} y1={15} x2={15} y2={9} />
                    <circle cx="9.5" cy="9.5" r=".5" />
                    <circle cx="14.5" cy="14.5" r=".5" />
                    <path d="M5 7.2a2.2 2.2 0 0 1 2.2 -2.2h1a2.2 2.2 0 0 0 1.55 -.64l.7 -.7a2.2 2.2 0 0 1 3.12 0l.7 .7a2.2 2.2 0 0 0 1.55 .64h1a2.2 2.2 0 0 1 2.2 2.2v1a2.2 2.2 0 0 0 .64 1.55l.7 .7a2.2 2.2 0 0 1 0 3.12l-.7 .7a2.2 2.2 0 0 0 -.64 1.55 v1a2.2 2.2 0 0 1 -2.2 2.2h-1a2.2 2.2 0 0 0 -1.55 .64l-.7 .7a2.2 2.2 0 0 1 -3.12 0l-.7 -.7a2.2 2.2 0 0 0 -1.55 -.64h-1a2.2 2.2 0 0 1 -2.2 -2.2v-1a2.2 2.2 0 0 0 -.64 -1.55l-.7 -.7a2.2 2.2 0 0 1 0 -3.12l.7 -.7a2.2 2.2 0 0 0 .64 -1.55 v-1" />
                  </svg>
                </div>
                <div className="ml-6">
                  <h3 className="mb-1 leading-5 text-gray-800 dark:text-gray-100 font-bold text-2xl">
                    23
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm tracking-normal font-normal leading-5">
                    Active Loans
                  </p>
                </div>
              </div>
            </div>
          </div>
          <br />
          <div>
            <p className="text-lg text-gray-800 dark:text-gray-100 font-semibold mb-4">
              My Accounts
            </p>
            <div className="flex bg-gray-100 dark:bg-gray-700 rounded-md relative">
              <div className="flex">
                <div className="px-4 py-6 border-r border-gray-200 dark:border-gray-800">
                  <svg
                    width={49}
                    height={38}
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                  >
                    <image
                      x={55}
                      y={80}
                      width={49}
                      height={38}
                      href="https://tuk-cdn.s3.amazonaws.com/assets/master.png"
                      transform="translate(-55 -80)"
                      fill="none"
                      fillRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="flex flex-col justify-center pl-3 text-gray-800 dark:text-gray-100">
                  <p className="text-sm font-bold pb-1">
                    Lending Account
                  </p>
                  <div className="flex flex-col sm:flex-row items-start sm:items-center">
                    <p className="text-xs leading-5">
                      KES 51,230/- &nbsp; - &nbsp;
                    </p>
                    <p className="text-xs leading-5">
                      Last transaction on 14 March 2020
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-5 absolute inset-0 m-auto mt-2 sm:mt-4 mr-2 sm:mr-4 sm:right-0 text-indigo-500 cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-edit"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <path d="M9 7 h-3a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-3" />
                  <path d="M9 15h3l8.5 -8.5a1.5 1.5 0 0 0 -3 -3l-8.5 8.5v3" />
                  <line x1={16} y1={5} x2={19} y2={8} />
                </svg>
              </div>
            </div>

            <div className="flex bg-gray-100 dark:bg-gray-700 rounded-md relative">
              <div className="flex">
                <div className="px-4 py-6 border-r border-gray-200 dark:border-gray-800">
                  <svg
                    width={49}
                    height={38}
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                  >
                    <image
                      x={55}
                      y={80}
                      width={49}
                      height={38}
                      href="https://tuk-cdn.s3.amazonaws.com/assets/master.png"
                      transform="translate(-55 -80)"
                      fill="none"
                      fillRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="flex flex-col justify-center pl-3 text-gray-800 dark:text-gray-100">
                  <p className="text-sm font-bold pb-1">
                    Earnings Account
                  </p>
                  <div className="flex flex-col sm:flex-row items-start sm:items-center">
                    <p className="text-xs leading-5">
                      KES 12,245/- &nbsp; - &nbsp;
                    </p>
                    <p className="text-xs leading-5">
                      Last transaction on 14 March 2020
                    </p>
                  </div>
                </div>
              </div>

           
            </div>

            <div className="flex bg-gray-100 dark:bg-gray-700 rounded-md relative">
              <div className="flex">
                <div className="px-4 py-6 border-r border-gray-200 dark:border-gray-800">
                  <svg
                    width={49}
                    height={38}
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                  >
                    <image
                      x={55}
                      y={80}
                      width={49}
                      height={38}
                      href="https://tuk-cdn.s3.amazonaws.com/assets/master.png"
                      transform="translate(-55 -80)"
                      fill="none"
                      fillRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="flex flex-col justify-center pl-3 text-gray-800 dark:text-gray-100">
                  <p className="text-sm font-bold pb-1">Cash Wallet</p>
                  <div className="flex flex-col sm:flex-row items-start sm:items-center">
                    <p className="text-xs leading-5">
                      KES 223,245/- &nbsp; - &nbsp;
                    </p>
                    <p className="text-xs leading-5">
                      Last transaction on 14 March 2020
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-5 absolute inset-0 m-auto mt-2 sm:mt-4 mr-2 sm:mr-4 sm:right-0 text-indigo-500 cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-edit"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <path d="M9 7 h-3a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-3" />
                  <path d="M9 15h3l8.5 -8.5a1.5 1.5 0 0 0 -3 -3l-8.5 8.5v3" />
                  <line x1={16} y1={5} x2={19} y2={8} />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="md:w-1/3 w-full">
          <div className="py-1 px-4">
            <div className="flex justify-between items-center">
              <h6>Portfolio Performance Score </h6>
            </div>


            <PortfolioPerformanceGauge/>

            <br />
            <div>
              <p className="text-xs pb-1 text-gray-500 font-bold">
                Your Loan Account
              </p>
              <div className="flex justify-between items-center pb-1">
                <p className="text-sm text-indigo-700 font-bold">
                  63% Guaranteed
                </p>
                <p className="text-xs font-bold text-gray-500">
                  Balance: KES 21,245/-
                </p>
              </div>
              <div className="h-2 bg-gray-200 rounded">
                <div className="w-7/12 bg-indigo-700 h-2 rounded relative" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div></div>
  )
}

export default Index