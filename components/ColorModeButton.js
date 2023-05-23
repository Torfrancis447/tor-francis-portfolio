import React, { useState } from 'react';
import { MdOutlineLightMode, MdNightlight } from 'react-icons/md';
import useColorMode from '../hooks/useColorMode';
import { motion } from 'framer-motion';

const ColorModeButton = () => {
  const [colorMode, setColorMode] = useColorMode();
  const [toggleDirection, setToggleDirection] = useState(0)
  const toggle = () => {
    setToggleDirection(toggleDirection == 0 ? 30 : 0)
  }

  return (
    
      <motion.div onTap={toggle} animate={{ x: toggleDirection }} transition={{
        type: 'spring',
        stiffness: 700,
        damping: 30
      }} onClick={() => setColorMode(colorMode === 'light' ? 'dark' : 'light')}>
        {colorMode === 'light' ? <MdNightlight /> : <MdOutlineLightMode />}
      </motion.div>
    
  );
};

export default ColorModeButton;