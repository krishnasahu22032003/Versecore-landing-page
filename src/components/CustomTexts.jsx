'use client'

import { motion } from "motion/react"
import { textContainer } from "../../constants/motion"
import { textVariant2 } from "../../constants/motion"
export const TypingText=({title,textStyles})=>(
    <motion.p variants={textContainer} className={`font-normal text-[14px] text-secondary-white ${textStyles}`}>
      {Array.from(title).map((letter, index) => (
        <motion.span variants={textVariant2} key={index}>
          {letter === ' ' ? '\u00A0' : letter}
        </motion.span>
      ))}
    </motion.p>
)
export const TittleText=({title,textStyles  })=>(
    <motion.h2
    variants={textVariant2}
    initial="hidden"
    whileInView="show"
    className={`mt-[8px] font-bold md:text-[64px] text-[40px] text-white ${textStyles}`}
  >
    {title}
  </motion.h2>
)