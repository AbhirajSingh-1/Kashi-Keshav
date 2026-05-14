import { Link } from "react-router-dom"
import { SiteIcon } from "./IconMap"

const variants = {
  primary:
    "bg-orange-500 text-white shadow-orange-500/25 hover:bg-orange-600 hover:shadow-orange-500/35",
  secondary:
    "bg-white text-slate-950 shadow-slate-900/10 ring-1 ring-slate-200 hover:bg-blue-50",
  outline:
    "bg-transparent text-slate-950 ring-1 ring-slate-300 hover:bg-white hover:ring-blue-200",
  blue: "bg-blue-600 text-white shadow-blue-600/25 hover:bg-blue-700 hover:shadow-blue-600/35",
}

export default function ButtonLink({
  to,
  href,
  children,
  variant = "primary",
  icon = "ArrowRight",
  className = "",
  type = "button",
  onClick,
}) {
  const classes = `inline-flex w-full items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-bold transition-all duration-300 shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-400 sm:w-auto ${variants[variant]} ${className}`
  const content = (
    <>
      <span>{children}</span>
      {icon ? <SiteIcon name={icon} className="h-4 w-4" /> : null}
    </>
  )

  if (to) {
    return (
      <Link to={to} className={classes} onClick={onClick}>
        {content}
      </Link>
    )
  }

  if (href) {
    return (
      <a href={href} className={classes} onClick={onClick}>
        {content}
      </a>
    )
  }

  return (
    <button type={type} className={classes} onClick={onClick}>
      {content}
    </button>
  )
}
