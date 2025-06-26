'use client'
import { motion } from "motion/react"
import styles from "../../constants/style"
import { fadeIn, staggerContainer} from "../../constants/motion"
import { section } from "motion/react-client"


const About = () => {
  return (
   <section className={`${styles.paddings} relative z-10`} >
    <div className="gradient-02 z-0" />
<motion.div variants={staggerContainer} initial="hidden" whileInView="show" viewport={{once:false,amount:0.25}} className={`${styles.innerWidth} ${styles.flexCenter} mx-auto flex-col `} >
<TypingTest title="| about metaverse" textStyles="text-center"/>
</motion.div>

   </section>
  )
}

export default About
