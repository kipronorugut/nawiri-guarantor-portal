import React from "react";

const ApprovalsTable = () => {
  return (
    <div className="bg-white shadow w-full pt-4 px-6 sm:px-12 py-5 sm:py-10">
      <div className="mb-5 sm:mb-10 rounded-tl-lg rounded-tr-lg">
        <div className="sm:flex items-center justify-between">
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-normal text-gray-800">
            Approval Requests
          </p>
      
        </div>
      </div>
      <div>
        <div className="w-full overflow-x-auto">
          <table className="w-full whitespace-nowrap">
            <thead>
              <tr className="h-20 w-full text-sm leading-none text-gray-600">
                <th className="font-normal text-left pl-4">Date</th>
                <th className="font-normal text-left pl-10">Loan #</th>
                <th className="font-normal text-left pl-10">Borrower</th>
                <th className="font-normal text-left pl-10">Loan Amount</th>
                <th className="font-normal text-left pl-10">Status</th>
                <th className="font-normal text-left pl-10">Reason</th>
                <th className="font-normal text-left pl-10 w-32">Actions</th>
              </tr>
            </thead>
            <tbody className="w-full">
              <tr className="h-20 text-sm leading-none text-gray-700 border-b border-t border-gray-200 bg-white hover:bg-gray-50">
                <td className="pl-4">06/02/2020</td>
                <td className="pl-10">IDO-2985-2</td>
                <td className="pl-10">
                  <div className="flex items-center">
                    <img
                      className="shadow-md rounded-full w-10 h-10 mr-3"
                      src="https://cdn.tuk.dev/assets/templates/olympus/invoice.png"
                    />
                    Miracle Botos
                  </div>
                </td>
                <td className="pl-10">KES 5900.00</td>
                <td className="pl-10">
                  <div className="w-20 h-6 flex items-center justify-center bg-blue-50 rounded-full">
                    <p className="text-xs leading-3 text-blue-500">Approved</p>
                  </div>
                </td>
                <td className="pl-10">Business</td>
               
              </tr>
              <tr className="h-20 text-sm leading-none text-gray-700 border-b border-gray-200 bg-white hover:bg-gray-50">
                <td className="pl-4">06/02/2020</td>
                <td className="pl-10">IDO-2985-2</td>
                <td className="pl-10">
                  <div className="flex items-center">
                    <img
                      className="shadow-md rounded-full w-10 h-10 mr-3"
                      src="https://cdn.tuk.dev/assets/templates/olympus/invoice(1).png"
                    />
                    Tiana Levin
                  </div>
                </td>
                <td className="pl-10">KES 2100.00</td>
                <td className="pl-10">
                  <div className="w-20 h-6 flex items-center justify-center bg-blue-50 rounded-full">
                    <p className="text-xs leading-3 text-blue-500">Approved</p>
                  </div>
                </td>
                <td className="pl-10">Shopping</td>

             
              </tr>
              <tr className="h-20 text-sm leading-none text-gray-700 border-b border-gray-200 bg-white hover:bg-gray-50">
                <td className="pl-4">06/02/2020</td>
                <td className="pl-10">IDO-2985-2</td>
                <td className="pl-10">
                  <div className="flex items-center">
                    <img
                      className="shadow-md rounded-full w-10 h-10 mr-3"
                      src="https://cdn.tuk.dev/assets/templates/olympus/invoice(2).png"
                    />
                    Jordyn Korsgaard
                  </div>
                </td>
                <td className="pl-10">KES 2100.00</td>
                <td className="pl-10">
                  <div className="w-20 h-6 flex items-center justify-center bg-blue-50 rounded-full">
                    <p className="text-xs leading-3 text-blue-500">Approved</p>
                  </div>
                </td>
                <td className="pl-10">Business</td>
               
              </tr>
              <tr className="h-20 text-sm leading-none text-gray-700 border-b border-gray-200 bg-white hover:bg-gray-50">
                <td className="pl-4">06/02/2020</td>
                <td className="pl-10">IDO-2985-2</td>
                <td className="pl-10">
                  <div className="flex items-center">
                    <img
                      className="shadow-md rounded-full w-10 h-10 mr-3"
                      src="https://cdn.tuk.dev/assets/templates/olympus/invoice(3).png"
                    />
                    Kierra Curtis
                  </div>
                </td>
                <td className="pl-10">KES 2100.00</td>
                <td className="pl-10">
                  <div className="w-20 h-6 flex items-center justify-center bg-blue-50 rounded-full">
                    <p className="text-xs leading-3 text-blue-500">Approved</p>
                  </div>
                </td>
                <td className="pl-10">Business</td>
           
              </tr>
              <tr className="h-20 text-sm leading-none text-gray-700 border-b border-gray-200 bg-white hover:bg-gray-50">
                <td className="pl-4">06/02/2020</td>
                <td className="pl-10">IDO-2985-2</td>
                <td className="pl-10">
                  <div className="flex items-center">
                    <img
                      className="shadow-md rounded-full w-10 h-10 mr-3"
                      src="https://cdn.tuk.dev/assets/templates/olympus/invoice(4).png"
                    />
                    Terry Ekstrom Bothman
                  </div>
                </td>
                <td className="pl-10">KES 2100.00</td>
                <td className="pl-10">
                  <div className="w-20 h-6 flex items-center justify-center bg-red-50 rounded-full">
                    <p className="text-xs leading-3 text-red-500">Pending</p>
                  </div>
                </td>
                <td className="pl-10">School Fees</td>
                <td className="pl-10">
                  <div className="flex items-center">
                  <button className="focus:outline-none bg-red-100 mr-5 hover:bg-red-200 py-4 px-5 rounded text-sm leading-3 text-red-500">   Approve
                    </button>
                    <button className="focus:outline-none">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={20}
                        height={20}
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <path
                          d="M4.16667 10.8334C4.62691 10.8334 5 10.4603 5 10.0001C5 9.53984 4.62691 9.16675 4.16667 9.16675C3.70643 9.16675 3.33334 9.53984 3.33334 10.0001C3.33334 10.4603 3.70643 10.8334 4.16667 10.8334Z"
                          stroke="#A1A1AA"
                          strokeWidth="1.25"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M10 10.8334C10.4602 10.8334 10.8333 10.4603 10.8333 10.0001C10.8333 9.53984 10.4602 9.16675 10 9.16675C9.53976 9.16675 9.16666 9.53984 9.16666 10.0001C9.16666 10.4603 9.53976 10.8334 10 10.8334Z"
                          stroke="#A1A1AA"
                          strokeWidth="1.25"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M15.8333 10.8334C16.2936 10.8334 16.6667 10.4603 16.6667 10.0001C16.6667 9.53984 16.2936 9.16675 15.8333 9.16675C15.3731 9.16675 15 9.53984 15 10.0001C15 10.4603 15.3731 10.8334 15.8333 10.8334Z"
                          stroke="#A1A1AA"
                          strokeWidth="1.25"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                  </div>
                </td>
              </tr>
              <tr className="h-20 text-sm leading-none text-gray-700 border-b border-gray-200 bg-white hover:bg-gray-50">
                <td className="pl-4">06/02/2020</td>
                <td className="pl-10">IDO-2985-2</td>
                <td className="pl-10">
                  <div className="flex items-center">
                    <img
                      className="shadow-md rounded-full w-10 h-10 mr-3"
                      src="https://cdn.tuk.dev/assets/templates/olympus/invoice(6).png"
                    />
                    Corey Vetrovs
                  </div>
                </td>
                <td className="pl-10">KES 2100.00</td>
                <td className="pl-10">
                  <div className="w-20 h-6 flex items-center justify-center bg-blue-50 rounded-full">
                    <p className="text-xs leading-3 text-blue-500">Approved</p>
                  </div>
                </td>
                <td className="pl-10">Business</td>
      
              </tr>
              <tr className="h-20 text-sm leading-none text-gray-700 border-b border-gray-200 bg-white hover:bg-gray-50">
                <td className="pl-4">06/02/2020</td>
                <td className="pl-10">IDO-2985-2</td>
                <td className="pl-10">
                  <div className="flex items-center">
                    <img
                      className="shadow-md rounded-full w-10 h-10 mr-3"
                      src="https://cdn.tuk.dev/assets/templates/olympus/invoice(7).png"
                    />
                    Zain George
                  </div>
                </td>
                <td className="pl-10">KES 2100.00</td>
                <td className="pl-10">
                  <div className="w-20 h-6 flex items-center justify-center bg-blue-50 rounded-full">
                    <p className="text-xs leading-3 text-blue-500">Approved</p>
                  </div>
                </td>
                <td className="pl-10">Business</td>
            
              </tr>
              <tr className="h-20 text-sm leading-none text-gray-700 border-b border-gray-200 bg-white hover:bg-gray-50">
                <td className="pl-4">06/02/2020</td>
                <td className="pl-10">IDO-2985-2</td>
                <td className="pl-10">
                  <div className="flex items-center">
                    <img
                      className="shadow-md rounded-full w-10 h-10 mr-3"
                      src="https://cdn.tuk.dev/assets/templates/olympus/invoice(8).png"
                    />
                    Angel Saris
                  </div>
                </td>
                <td className="pl-10">KES 12,100.00</td>
                <td className="pl-10">
                  <div className="w-20 h-6 flex items-center justify-center bg-red-50 rounded-full">
                    <p className="text-xs leading-3 text-red-500">Pending</p>
                  </div>
                </td>
                <td className="pl-10">Rent</td>
                <td className="pl-10">
                  <div className="flex items-center">
                    <button className="focus:outline-none bg-red-100 mr-5 hover:bg-red-200 py-4 px-5 rounded text-sm leading-3 text-red-500">
                      Approve
                    </button>
                    <button className="focus:outline-none">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={20}
                        height={20}
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <path
                          d="M4.16667 10.8334C4.62691 10.8334 5 10.4603 5 10.0001C5 9.53984 4.62691 9.16675 4.16667 9.16675C3.70643 9.16675 3.33334 9.53984 3.33334 10.0001C3.33334 10.4603 3.70643 10.8334 4.16667 10.8334Z"
                          stroke="#A1A1AA"
                          strokeWidth="1.25"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M10 10.8334C10.4602 10.8334 10.8333 10.4603 10.8333 10.0001C10.8333 9.53984 10.4602 9.16675 10 9.16675C9.53976 9.16675 9.16666 9.53984 9.16666 10.0001C9.16666 10.4603 9.53976 10.8334 10 10.8334Z"
                          stroke="#A1A1AA"
                          strokeWidth="1.25"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M15.8333 10.8334C16.2936 10.8334 16.6667 10.4603 16.6667 10.0001C16.6667 9.53984 16.2936 9.16675 15.8333 9.16675C15.3731 9.16675 15 9.53984 15 10.0001C15 10.4603 15.3731 10.8334 15.8333 10.8334Z"
                          stroke="#A1A1AA"
                          strokeWidth="1.25"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                  </div>
                </td>
              </tr>
              <tr className="h-20 text-sm leading-none text-gray-700 bg-white hover:bg-gray-50">
                <td className="pl-4">06/02/2020</td>
                <td className="pl-10">IDO-2985-2</td>
                <td className="pl-10">
                  <div className="flex items-center">
                    <img
                      className="shadow-md rounded-full w-10 h-10 mr-3"
                      src="https://cdn.tuk.dev/assets/templates/olympus/invoice(9).png"
                    />
                    Desirae Dorwart
                  </div>
                </td>
                <td className="pl-10">KES 23,450.00</td>
                <td className="pl-10">
                  <div className="w-20 h-6 flex items-center justify-center bg-blue-50 rounded-full">
                    <p className="text-xs leading-3 text-blue-500">Approved</p>
                  </div>
                </td>
                <td className="pl-10">Business</td>
   
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ApprovalsTable;
