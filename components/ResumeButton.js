import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

//WIP -make a backend and use active storage for file dowload or host online (google docs but format is weird)
const ResumeButton = () => {


    return (

        <motion.button
            className="text-white font-bold py-2 px-4"
            initial={{
                y: 500,
                opacity: 0,
                scale: 0.0
            }}
            animate={{
                y: 0,
                opacity: 1,
                scale: 1
            }}
            transition={{ duration: 1.0 }}
        >
            <a
                target="_blank"
                rel="noopener noreferrer"
                href="public/tor-francis-resume.pdf"
                className="text-white font-bold py-2 px-4 "
                download
            >Download Resume</a>
        </motion.button>

    );
};

export default ResumeButton;
