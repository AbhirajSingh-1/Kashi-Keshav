export default function AnimatedCounter({ value, suffix = "" }) {
  return (
    <span>
      {value.toLocaleString("en-IN")}
      {suffix}
    </span>
  )
}
