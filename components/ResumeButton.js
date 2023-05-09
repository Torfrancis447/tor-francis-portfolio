import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

//WIP -make a backend and use active storage for file dowload or host online (google docs but format is weird)
const ResumeButton = () => {


    return (
  
        <motion.button
            
            href=""
            className="text-white font-bold py-2 px-4 "
            download
        >
                Download Resume 
        </motion.button>
    
    );
};

export default ResumeButton;
