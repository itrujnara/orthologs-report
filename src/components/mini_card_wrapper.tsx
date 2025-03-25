import { ReactNode, useState } from "react"
import { FaMinus } from "react-icons/fa6"
import { FaPlus } from "react-icons/fa6"

export default function MiniCardWrapper({
  children,
  limit,
  className,
}: {
  children: ReactNode[]
  limit: number
  className?: string
}) {
  const [isExpanded, setIsExpanded] = useState(false)

  const visibleChildren = isExpanded ? children : children.slice(0, limit)

  return (
    <div
      className={
        "py-2 flex flex-row flex-wrap gap-2 gap-y-2 justify-between after:content-[''] after:flex-auto " +
        className
      }
    >
      {visibleChildren}
      {children.length > limit && (
        <button onClick={() => setIsExpanded(!isExpanded)}>
          {isExpanded ? <FaMinus /> : <FaPlus />}
        </button>
      )}
    </div>
  )
}
