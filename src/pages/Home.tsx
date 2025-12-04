import "../index.css";
import Header from "../components/Header";
import capitalize from "../logic/capitalize";
import { Link } from "react-router-dom";
import { TRACK_DATA } from "../data/trackData";
import CountryFlag from "react-country-flag";

export default function Home() {
  return (
    <div>
      <Header />
      <div style={{ textAlign: "center", margin: "30px" }}>
        <p className="text-lg w-2/4 ml-auto mr-auto max-md:text-md max-sm:text-ms">
          A Difficulty Calculator For Ala Mobile GP formula facing game that
          gives you your ideal difficulty for each track in the game
        </p>
        <p className="mt-3 mb-5 text-lg text-gray-500 max-md:text-md">
          Select a track to get your difficulty:
        </p>
        <section className="grid grid-cols-4 max-md:grid-cols-3 max-sm:grid-cols-2 gap-3">
          {Object.keys(TRACK_DATA).map((track) => {
            const flagClass = TRACK_DATA[track].flag;
            // Extract country code from flagClass (e.g., 'fi fi-au' => 'au')
            const countryCode = flagClass.split("-")[1];
            return (
              <Link
                key={track}
                className="text-lg border-2 border-accent rounded-2xl p-2.5 font-bold max-sm:text-sm bg-background flex items-center gap-2 hover:bg-accent hover:text-white transition duration-250"
                to={`/track/${track}`}
              >
                <CountryFlag
                  countryCode={countryCode.toUpperCase()}
                  svg
                  className="w-12 max-md:w-9 max-sm:w-9 h-fit border-2 rounded-2xl"
                />
                {capitalize(track)}
              </Link>
            );
          })}
        </section>
      </div>
    </div>
  );
}
