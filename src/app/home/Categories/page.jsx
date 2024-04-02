import React from 'react'
import { IoIosSearch } from "react-icons/io";

function Page() {
    return (
        <div className='bg-White'>
            <div className=''>
                <h3 className='rounded-t-xl text-center bg-green-500 p-3 text-white'>Categories</h3>
            </div>

            <div className='m-2'>
                <div className="relative flex items-center w-full h-12 focus-within:shadow-lg bg-white overflow-hidde border-2 border-green-600 rounded-lg">
                    <div className="grid place-items-center h-full w-12 text-gray-300">
                        <IoIosSearch className='w-6 h-6' />
                    </div>

                    <input
                        className="peer h-full w-full outline-none text-sm text-gray-700 pr-2"
                        type="text"
                        id="search"
                        placeholder="Search Categories.." />
                </div>
            </div>
        </div>
    )
}

export default Page