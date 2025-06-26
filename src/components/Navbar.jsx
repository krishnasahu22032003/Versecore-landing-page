'use client'

import { motion } from "motion/react"
import styles from "../../constants/style"
import { navVariants } from "../../constants/motion"

const Navbar = () => {
  return (
 <motion.nav variants={navVariants} initial="hidden" whileInView="show" className={`${styles.xPaddings} py-8 relative`} >
<div className="absolute w-[50%] inset-0 gradient-01 " />
<div className={`${styles.innerWidth} mx-auto flex justify-between gap-8 `} >
    <img src="/images/search.svg" alt="search" className="w-[24px] h-[24px] object-contain" />
    <h2 className="font-extrabold text-[24px] leading-[30px] text-white">VERSECORE</h2>
    <img src="/images/menu.svg" alt="menu" className="w-[24px] h-[24px] object-contain" />
</div>
 </motion.nav>
  )
}

export default Navbar
