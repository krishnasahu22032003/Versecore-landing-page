'use client'
import { useState } from "react"
import { motion } from "motion/react"
import styles from "../../constants/style"
import { staggerContainer } from "../../constants/motion"
import { TypingText,TitleText } from "./CustomTexts"
import ExploreCard from "./ExploreCard"
import { exploreWorlds } from "../../constants"
const Explore = () => {
   const [active, setActive] = useState('world-2');
  return (
<section className={`${styles.paddings}`} id="explore" >
<motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <TypingText title="| Initiating Versecore Protocol" textStyles="text-center" />
        <TitleText
          title={<> Choose your digital reality <br className="md:block hidden" />and enter the Versecore continuum</>}
          textStyles="text-center"
        />
        <div className="mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-5">
          {exploreWorlds.map((world, index) => (
            <ExploreCard
              key={world.id}
              {...world}
              index={index}
              active={active}
              handleClick={setActive}
            />
          ))}
        </div>
      </motion.div>
</section>
  )
}

export default Explore
