// import React from 'react';
// import Image from 'next/image'; // Import next/image
// import duaImage from '../../../image/1.png';
// import { FaHandHoldingHeart, FaHome, FaInfoCircle } from "react-icons/fa";
// import { FaBookOpen, FaBuromobelexperte, FaLightbulb, FaPrescriptionBottleMedical, FaRegBookmark } from 'react-icons/fa6';

// function Page() {
//     return (
//         <div>
//             <div>
//                 <Image src={duaImage} alt="" width={73} height={73} />
//             </div>
//             <div className='space-y-10'>
//                 <FaHome className='w-6 h-6' />
//                 <FaBuromobelexperte className='w-6 h-6' />
//                 <FaLightbulb className='w-6 h-6' />
//                 <FaRegBookmark className='w-6 h-6' />
//                 <FaPrescriptionBottleMedical className='w-6 h-6' />
//                 <FaInfoCircle className='w-6 h-6' />
//                 <FaBookOpen className='w-6 h-6' />
//                 <FaHandHoldingHeart className='w-10 h-10' />
//             </div>
//         </div>
//     );
// }

// export default Page;



import React from 'react';
import Image from 'next/image';
import duaImage from '../../../image/1.png';
import { FaHandHoldingHeart, FaHome, FaInfoCircle } from "react-icons/fa";
import { FaBookOpen, FaBuromobelexperte, FaLightbulb, FaPrescriptionBottleMedical, FaRegBookmark } from 'react-icons/fa6';

function Page() {
    return (
        <div className="flex h-screen ml-5">
            <div className="overflow-auto bg-white rounded-xl w-20 h-5/6 scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-200 p-3"> {/* Change overflow-hidden to overflow-auto */}
                <div className="flex justify-center items-center">
                    {/* Image */}
                    <div className="mb-10 mt-10">
                        <Image src={duaImage} alt="" width={60} height={60} />
                    </div>
                </div>
                <div className=''>
                    {/* Icons */}
                    <div className="flex flex-col items-center space-y-10 mt-10">
                        <FaHome className='w-10 h-10 bg-slate-300 p-2 rounded-full text-white' />
                        <FaBuromobelexperte className='w-10 h-10 bg-slate-300 p-2 rounded-full text-white' />
                        <FaLightbulb className='w-10 h-10 bg-slate-300 p-2 rounded-full text-white' />
                        <FaRegBookmark className='w-10 h-10 bg-slate-300 p-2 rounded-full text-white' />
                        <FaPrescriptionBottleMedical className='w-10 h-10 bg-slate-300 p-2 rounded-full text-white' />
                        <FaInfoCircle className='w-10 h-10 bg-slate-300 p-2 rounded-full text-white' />
                        <FaBookOpen className='w-10 h-10 bg-slate-300 p-2 rounded-full text-white' />
                    </div>
                    <div className='my-20'>
                        <Image src={duaImage} alt="" width={60} height={60} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Page;





