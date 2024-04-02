import React from 'react'
import Page1 from "./SideBar/page"
import Page2 from "./Categories/page"
import Page3 from "./Section/Page"

function Page() {
    return (
        <div className='grid grid-cols-12 gap-4 mt-5'>
            <div className='col-span-1'><Page1 /></div>
            <div className='col-span-4'><Page2 /></div>
            <div className='col-span-7'><Page3 /></div>
        </div>
    )
}

export default Page