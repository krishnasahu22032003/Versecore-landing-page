'use client'
import { motion } from "motion/react"
import styles from "../../constants/style"
import { insights } from "../../constants"
import { TitleText,TypingText } from "./CustomTexts"
import InsightsCard from "./InsightsCard"
import { staggerContainer } from "../../constants/motion"
const Insights = () => {
  return (
 <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <TypingText title="| Insight" textStyles="text-center" />
      <TitleText title={<>Insight about metaverse</>} textStyles="text-center" />
      <div className="mt-[50px] flex flex-col gap-[30px]">
        {insights.map((item, index) => (
          <InsightsCard key={`insight-${index}`} {...item} index={index + 1} />
        ))}
      </div>
    </motion.div>
  </section>
  )
}

export default Insights
