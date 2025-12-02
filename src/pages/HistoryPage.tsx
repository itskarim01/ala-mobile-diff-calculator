import "../index.css"
import capitalize from "../logic/capitalize";
import Header from "../components/Header";

export default function HistoryPage() {
  let history = JSON.parse(localStorage.getItem("history") || "[]");

  // Sort history by datetime descending
  history = history.sort((a: any, b: any) => new Date(b.datetime).getTime() - new Date(a.datetime).getTime());

  const clearHistory = () => {
    localStorage.removeItem("history");
    window.location.reload();
  };

  return (
    <div>
      <Header/>
      <header className="p-2 md:p-3 flex justify-between items-center gap-2">
        <h2 className="text-2xl max-md:text-xl">History</h2>
        {history.length > 0 && <button className="p-2 text-base md:text-xl border-none text-white rounded-2xl transition-all duration-250 bg-red-500 hover:bg-red-700" onClick={clearHistory}>Clear</button>}
      </header>
      {history.length === 0 && <p className="pl-3 text-2xl md:text-4xl text-center">No history yet</p>}
      <div className="w-full max-w-2xl mx-auto">
      {history.map((h:any, i:number)=>(
        <ul key={i} className="p-2 md:p-3 m-2 md:m-4 bg-gray-300 rounded-2xl text-base md:text-lg">
          <li><b>Track:</b> {capitalize(h.track)}</li>
          <li><b>Lap Time:</b> {h.laps}</li>
          <li><b>Difficulty:</b> {h.recommended}</li>
          <strong>{h.datetime}</strong>
        </ul>
      ))}
      </div>
    </div>
  );
}
