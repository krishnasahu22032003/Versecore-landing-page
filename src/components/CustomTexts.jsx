'use client'

import { motion } from "motion/react"
import { textContainer } from "../../constants/motion"
import { textVariant2 } from "../../constants/motion"
export const TypingTest=({title,textStyles})=>(
    <motion.p variants={textContainer} className={`font-normal text-[14px] text-secondary-white ${textStyles}`}>
      {Array.from(title).map((letter, index) => (
        <motion.span variants={textVariant2} key={index}>
          {letter === ' ' ? '\u00A0' : letter}
        </motion.span>
      ))}
    </motion.p>
)
export const TittleTest=({title,textStyles  })=>(
    <h2></h2>
)