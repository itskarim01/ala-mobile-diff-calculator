import "../index.css"
import capitalize from "../logic/capitalize";
import Header from "../components/Header";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { TRACK_DATA } from "../data/trackData";
import { parseLapTime, averageDifficulty } from "../logic/difficulty";

export default function TrackPage() {
  const { trackId } = useParams();
  const track = TRACK_DATA[trackId!];
  const [laps, setLaps] = useState("");
  const [result, setResult] = useState<number|null>(null);

  const formatLapTime = (value: string): string => {
    // keep only digits
    const digits = value.replace(/\D/g, "");

    if (digits.length <= 1) {
      return digits;
    } else if (digits.length <= 3) {
      return digits[0] + ":" + digits.slice(1);
    } else {
      return digits[0] + ":" + digits.slice(1, 3) + "." + digits.slice(3, 6);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatLapTime(e.target.value);
    setLaps(formatted);
  }

  const calculate = () => {
    try {
      const parsed = laps.split(",").map(parseLapTime);
      const recommended = averageDifficulty(parsed, track.difficulty, track.lap_times);
      setResult(recommended);

      const history = JSON.parse(localStorage.getItem("history") || "[]");
      const now = new Date();
      const formattedDate = now.toLocaleString("en-US", {
        weekday: "short",
        month: "short",
        day: "numeric",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      }).replace(",", "").replace(" at", ",");
      history.push({ datetime: formattedDate, track: trackId, laps, recommended });
      localStorage.setItem("history", JSON.stringify(history));
    } catch (e:any) {
      alert(e.message);
    }
  };

  return (
    <div>
      <Header/>
      <section className="text-center mt-3 md:mt-10 px-2 w-full max-w-2xl mx-auto">
        <h1 className="mb-3 md:mb-5 text-lg md:text-2xl">{capitalize(trackId)} Difficulty Calculator</h1>
        <div>
          <p className="mb-3 md:mb-5">To get your recommended difficulty for {capitalize(trackId)}:</p>
          <ol className="text-left w-full md:w-fit mx-auto mb-3 md:mb-5 text-sm md:text-base">
            <li>Set A lap time in a Free Practice Session on Race Weekend Mode or Champoinship Mode in Ala Mobile</li>
            <li>Enter your lap time in the input field to calculate your recommended Difficulty</li>
            <li>Test your difficulty in the game and adjust the difficulty if necessary</li>
          </ol>
        </div>
        <p>
          {result !== null && <span className="text-xl">Recommended Difficulty:<h1 className="mb-3 md:mb-5 text-3xl md:text-5xl">{result}</h1></span>}
        </p>
        <input 
          value={laps} 
          onChange={handleInputChange} 
          placeholder="1:23.456" 
          className="p-2 border-2 rounded-2xl bg-gray-300 text-lg w-full max-w-xs text-center"
        />
        <br/>
        <button className="p-2 border-2 text-lg rounded-2xl mt-3 md:mt-5 font-semibold transition-all duration-250 text-white bg-accent hover:bg-background hover:text-accent w-full max-w-xs" onClick={calculate}>Calculate</button>
      </section>
    </div>
  );
}
