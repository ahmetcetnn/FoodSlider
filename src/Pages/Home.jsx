import React from 'react'
import Vaggie from '../Components/Vaggie'
import Popular from '../Components/Popular'
import Category from '../Components/Category'
import {motion} from "framer-motion"

function Home() {
  return (
    <motion.div
      animate={{opacity:1}}
      initial={{opacity:0}}
      exit={{opacity:0}}
      transition={{duration:0.5}}
    >
      
      <Vaggie/>
      <Popular/>
    </motion.div>
  )
}

export default Home
