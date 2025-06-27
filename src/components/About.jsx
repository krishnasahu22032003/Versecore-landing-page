'use client'
import { motion } from "motion/react"
import styles from "../../constants/style"
import { fadeIn, staggerContainer} from "../../constants/motion"

import { TypingText } from "./CustomTexts"

const About = () => {
  return (
   <section className={`${styles.paddings} relative z-10`} >
    <div className="gradient-02 z-0" />
<motion.div variants={staggerContainer} initial="hidden" whileInView="show" viewport={{once:false,amount:0.25}} className={`${styles.innerWidth} ${styles.flexCenter} mx-auto flex-col `} >
<TypingText title="| About Versecore" textStyles="text-center"/>

<motion.p variants={fadeIn('up','tween',0.2,1)} className="mt-[8px] font-normal px-10 md:px-30 sm:text-[32px] text-[20px] text-center text-secondary-white">
<span className="font-extrabold text-white">Versecore</span> is your gateway to a
  new dimension — a hyperreal digital realm where imagination meets immersive
  reality. Dive into experiences that blur the line between virtual and real,
  all powered by the limitless world of{' '}
  <span className="font-extrabold text-white">next-gen technology</span>. With just
  a{' '}
  <span className="font-extrabold text-white">VR</span> headset, you can unlock
  stunning environments, surreal moments, and infinite possibility. This isn't
  just the future — it's{' '}
  <span className="font-extrabold text-white">Versecore's revolution</span>. Scroll
  down and{' '}
  <span className="font-extrabold text-white">experience the unreal</span>.


<motion.div
  variants={fadeIn('up', 'tween', 0.3, 1)}
  initial="hidden"
  whileInView="show"
  viewport={{ once: false, amount: 0.25 }}
  className="flex justify-center"
>
  <img
    src="/images/arrow-down.svg"
    alt="arrow down"
    className="w-[18px] h-[28px] object-contain mt-[28px]"
  />
</motion.div>
</motion.p> 
</motion.div>

   </section>
  )
}

export default About
