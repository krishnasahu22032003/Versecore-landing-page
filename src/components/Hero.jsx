'use client'
import { motion } from "motion/react"
import styles from "../../constants/style"
import { slideIn, staggerContainer, textVariant } from "../../constants/motion"


const Hero = () => {
    return (
        <section className={`${styles.yPaddings} sm:pl-16 pl-6`} >
            <motion.div variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: false, amount: 0.25 }} className={`${styles.innerWidth} mx-auto flex flex-col `} >
                <div className="flex justify-center items-center relative z-10 flex-col" >
                    <motion.h1 variants={textVariant(1.1)} className={`${styles.heroHeading}`} >VERSECORE</motion.h1>
                    <motion.div variants={textVariant(1.2)} className="flex flex-row justify-center items-center" >
                        <h1 className={`${styles.heroHeading}`} >Ri</h1>
                        <div className={`${styles.heroDText}`} />
                        <h1 className={`${styles.heroHeading}`} >dle</h1>
                    </motion.div>
                </div>
                <motion.div variants={slideIn('right', 'tween', 0.2, 1)} className="relative w-full md:-mt-[20px] -mt-[12px] " >
                    <div className="absolute w-full hero-gradient h-[300px] rounded-tl-[140px] z-[0] -top-[30px] " />
                        <img src="/images/cover.jpg" alt="cover" className="w-full sm:h-[500px] h-[350px] object-cover rounded-tl-[140px] z-[10] relative  " />
                        <a href="#explore ">
                            <div className="w-full flex justify-end sm:-mt-[70px] -mt-[50px] pr-[40px] relative z-10" >
<img src="/images/stamp.png" alt="stamp" className="sm:w-[155px] w-[100px] sm:h-[155px] h-[100px] object-contain" />
                            </div>
                        </a>
                  
                </motion.div>
            </motion.div>
        </section>
    )
}

export default Hero
