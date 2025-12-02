import { useLocation } from "react-router-dom"
import HistoryButton from "./HistoryButton"
import BackHomeButton from "./BackHomeButton"

export default function Header() {
    const location = useLocation();

  return (
    <header className="flex justify-between items-center p-5 bg-background">
        <h1 className="max-md:text-lg text-accent">DIFF-CALC</h1>
        {location.pathname === "/" ? (
            <HistoryButton />
        ) : (
            <BackHomeButton />
        )}
    </header>
  )
}
