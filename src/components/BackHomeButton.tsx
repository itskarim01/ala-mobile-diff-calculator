import { Link } from "react-router-dom"

export default function BackHomeButton() {
  return (
    <Link to={"/"}>
      <b className="cursor-pointer text-base md:text-xl hover:text-red-500 transition duration-250 px-2 py-1 md:px-4 md:py-2 rounded">
        {"<"} Go to Home
      </b>
    </Link>
  )
}
