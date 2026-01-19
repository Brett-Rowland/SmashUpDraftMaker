import { useState } from "react"
import FactionSet from "./FactionSet"
import ExpansionsSelection from "./ExpansionsSection"

export default function Collection({Factions, Collection, CollectionSetter}){

    const [expansionsSelected, SetExpansionsSelected] = useState(true)

    const [factionsSelected, SetFactionsSelected] = useState(false)


    const saveCollection = () => {
        console.log("In Save")
        const factions = Array.from(Collection)
        localStorage.setItem("factions", JSON.stringify(factions))
        console.log("Finished Saving")
    }

    return (
  <div className="w-full">
    <div className="mx-auto w-full max-w-xl sm:max-w-2xl">
      
      {/* Header row */}
      <div className="mb-4 flex items-center justify-between gap-3">
        <h2 className="text-xl font-semibold text-slate-900 sm:text-2xl">
          Collection Tracker
        </h2>

        <button
          onClick={saveCollection}
          className="rounded-lg border-2 border-slate-700 bg-green-400 px-3 py-2 text-sm font-medium text-slate-900 shadow-sm hover:bg-green-200 active:scale-[0.85] transition"
        >
          Save
        </button>
      </div>

      {/* Sections */}
      <div className="space-y-3">

        {/* Expansions */}
        <div className="rounded-xl border border-slate-200 bg-white">
          <button
            className="flex w-full items-center justify-between gap-3 px-4 py-3 text-left"
            onClick={() => SetExpansionsSelected(v => !v)}
          >
            <div>
              <div className="text-base font-semibold text-slate-900 sm:text-lg">
                Expansions
              </div>
              <div className="text-xs text-slate-600 sm:text-sm">
                Choose which sets to include
              </div>
            </div>

            <div className="flex h-8 w-8 items-center justify-center rounded-md border border-slate-200 text-lg text-slate-700">
              {expansionsSelected ? "−" : "+"}
            </div>
          </button>

          {expansionsSelected && (
            <div className="border-t border-slate-200 px-4 py-4">
              <div className="flex flex-col gap-3">
                <ExpansionsSelection
                  Factions={Factions}
                  SetCollection={CollectionSetter}
                  Collection={Collection}
                />
              </div>
            </div>
          )}
        </div>

        {/* Factions */}
        <div className="rounded-xl border border-slate-200 bg-white">
          <button
            className="flex w-full items-center justify-between gap-3 px-4 py-3 text-left"
            onClick={() => SetFactionsSelected(v => !v)}
          >
            <div>
              <div className="text-base font-semibold text-slate-900 sm:text-lg">
                Factions
              </div>
              <div className="text-xs text-slate-600 sm:text-sm">
                Pick individual factions (overrides expansion choices)
              </div>
            </div>

            <div className="flex h-8 w-8 items-center justify-center rounded-md border border-slate-200 text-lg text-slate-700">
              {factionsSelected ? "−" : "+"}
            </div>
          </button>

          {factionsSelected && (
            <div className="border-t border-slate-200 px-4 py-4">
              <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                {Factions.map((faction) => (
                  <FactionSet
                    key={faction}
                    Faction={faction}
                    SetCollection={CollectionSetter}
                    Collection={Collection}
                  />
                ))}
              </div>
            </div>
          )}
        </div>

      </div>
    </div>
  </div>
);

}

