import { useState } from 'react'
import DraftDisplay from './DraftDisplay'


export default function DraftModifiers({DraftSelections, SetDraftSelections, Collection, Undrafted ,SetUndrafted}){

    const [players, SetPlayers] = useState(2);
    const [factionPerPlayer, SetFactionsPerPlayer] = useState(2);
    const [totalFactions, SetTotalFactions] = useState(2);
    const [playerDraft, SetPlayerDraft] = useState(false);
    const [factionDraft, SetFactionDraft] = useState(false);

    const generateDraftBoard = (factionNumber, unDrafted) => {
        if (factionNumber > unDrafted.size){
            alert("There is not enough factions remaining. Select Reset or add more Factions to your Collection!")
        }
        else if (factionNumber === unDrafted.size){
            SetDraftSelections(new Set(unDrafted))
            SetUndrafted(new Set())
        }
        const pool = Array.from(unDrafted);

        // partial Fisher–Yates shuffle for first N picks
        for (let i = 0; i < factionNumber; i++) {
          const j = i + Math.floor(Math.random() * (pool.length - i));
          [pool[i], pool[j]] = [pool[j], pool[i]];
        }

        const selected = pool.slice(0, factionNumber);

        // remove selected from undrafted in ONE update
        SetUndrafted(prev => {
          const next = new Set(prev);
          for (const f of selected) next.delete(f);
          return next;
        });

        SetDraftSelections(() => {
          const next = new Set();
          for (const f of selected) next.add(f);
          return next;
        });
    }

    const playerDrafts = () => {
        if (factionDraft){
            SetFactionDraft(false)
        }
        if (!playerDraft || Undrafted.size < (factionPerPlayer * players)){
            SetPlayerDraft(true)
            SetUndrafted(new Set(Collection))
            generateDraftBoard(factionPerPlayer * players, Collection)
        }
        else{
            generateDraftBoard(factionPerPlayer * players, Undrafted)
        }
    }
    const factionDrafts = () => {
        if (playerDraft){
            SetPlayerDraft(false)
        }
        if (!factionDraft || Undrafted.size < totalFactions){
            SetFactionDraft(true)
            SetUndrafted(new Set(Collection))
            generateDraftBoard(totalFactions, Collection)
        }
        else{
            generateDraftBoard(totalFactions, Undrafted)
        }
    }
    return (
  <div className="space-y-4">
    {/* Draft Controls Card */}
    <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-6">
      <div className="mb-4">
        <h2 className="text-lg font-semibold text-slate-900 sm:text-xl">Draft Setup</h2>
        <p className="text-sm text-slate-600">Choose players and options, then generate.</p>
      </div>

      {/* Players / Factions-per-player */}
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        <div className="flex flex-col gap-1">
          <label htmlFor="player" className="text-sm font-medium text-slate-700">
            Number of Players
          </label>
          <select
            className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-slate-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={players}
            onChange={(e) => SetPlayers(Number(e.target.value))}
            name="player"
            id="player"
          >
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
          </select>
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="factions" className="text-sm font-medium text-slate-700">
            Factions Per Player
          </label>
          <select
            className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-slate-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={factionPerPlayer}
            onChange={(e) => SetFactionsPerPlayer(Number(e.target.value))}
            name="factions"
            id="factions"
          >
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
            <option value={6}>6</option>
          </select>
        </div>
      </div>

      {/* Generate player draft */}
      <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:justify-end">
        <button
          onClick={playerDrafts}
          className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 active:scale-[0.98] transition"
        >
          Generate Player Draft
        </button>
      </div>
    </div>

    {/* Faction Draft Card */}
    <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-6">
      <div className="mb-3">
        <h2 className="text-lg font-semibold text-slate-900 sm:text-xl">Faction Draft</h2>
        <p className="text-sm text-slate-600">Randomize a draft from your selected collection.</p>
      </div>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
        <div className="sm:col-span-2 flex flex-col gap-1">
          <label htmlFor="TotalFactions" className="text-sm font-medium text-slate-700">
            Number of Factions in Draft
          </label>
          <input
            className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-slate-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            min={0}
            step={1}
            max={Collection.size}
            type="number"
            name="TotalFactions"
            id="TotalFactions"
            onChange={(e) => SetTotalFactions(Number(e.target.value))}
            value={totalFactions}
          />
          <div className="text-xs text-slate-500">
            Max: {Collection.size}
          </div>
        </div>

        <div className="sm:col-span-1 flex items-end">
          <button
            className="w-full rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-900 shadow-sm hover:bg-slate-50 active:scale-[0.98] transition"
            onClick={factionDrafts}
          >
            Randomize
          </button>
        </div>
      </div>
    </div>

    {/* Display */}
    <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-6">
      <DraftDisplay
        PlayerDraft={playerDraft}
        FactionDraft={factionDraft}
        Players={players}
        FactionsPerPlayer={factionPerPlayer}
        SetDraftSelections={SetDraftSelections}
        DraftSelections={DraftSelections}
        Undrafted={Undrafted}
        SetUndrafted={SetUndrafted}
      />
    </div>
  </div>
);



}