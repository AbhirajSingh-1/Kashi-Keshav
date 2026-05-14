import { motion } from "framer-motion"

export default function MotionSection({
  children,
  className = "",
  id,
  delay = 0,
  as = "section",
}) {
  const Component = motion[as]

  return (
    <Component
      id={id}
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
    >
      {children}
    </Component>
  )
}
