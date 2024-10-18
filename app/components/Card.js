import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { IoIosCloseCircle } from "react-icons/io";
import { LuDownload } from "react-icons/lu";

import * as motion from "framer-motion/client"

const Card = ({ Data, refer}) => {

  console.log(Data);
  return (
    <motion.div drag dragConstraints={refer} className="relative w-60 h-72 rounded-[50px] bg-zinc-900/90 text-white px-5 py-10 overflow-hidden">
      <FaRegFileAlt className="text-2xl" />
      <p className="text-sm mt-5 font-semibold leading-tight">{Data.decs}</p>
      <div className="footer absolute bottom-0 w-full left-0">
        <div className="flex items-center justify-between px-8 p-3 mb-3">
       <h5>{Data.filesize}</h5>
       <span className="w-7 h-7 bg-zinc-600 rounded-full flex items-center justify-center">{
        Data.close ? <IoIosCloseCircle />  : <LuDownload  size=".7rem" color='#fff'/>
        
        }</span>
        </div>
        {Data.tag.isopen ?
        <div className={`w-full py-4 ${Data.tag.tagcolor} flex items-center justify-center`}>
          <h3 className='text-md'>{Data.tag.tagTitle}</h3>
        </div>: null}
      </div>
      h1.

    </motion.div>
    
  );
}

export default Card;
