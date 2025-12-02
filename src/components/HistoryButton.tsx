import { Link } from "react-router-dom"

export default function HistoryButton() {
  return (
    <Link to={"/history"}>
      <span className="font-medium text-base md:text-xl">
        View History {">"}
      </span>
    </Link>
  )
}
