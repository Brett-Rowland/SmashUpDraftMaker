import PlayerDraftBoard from "./PlayerDraftBoard"
import FactionDraftBoard from "./FactionDraftBoard"
import { useEffect, useState, useMemo } from "react"


export default function DraftDisplay({DraftSelections,  Players ,PlayerDraft, FactionDraft, FactionsPerPlayer}){

    
    // const [draftSelectionArray, SetDraftSelectionsArray] = useState(Array.from(DraftSelections))
    const draftSelectionArray = useMemo(() => {
    const factionPool = Array.from(DraftSelections);

    if (PlayerDraft) {
      const playerPools = [];
      for (let i = 0; i < Players; i++) {
        playerPools.push(
          factionPool.slice(i * FactionsPerPlayer, (i + 1) * FactionsPerPlayer)
        );
      }
      return playerPools;
    }

    return factionPool;
  }, [DraftSelections, PlayerDraft, Players, FactionsPerPlayer]);

    return (
  <div className="mx-auto mt-1 w-full max-w-6xl px-2 sm:px-4">
    {/* Title */}
    <div className="mb-3 text-center text-xl font-semibold tracking-wide text-slate-900 sm:text-2xl">
      Draft Board
    </div>

    {/* Draft Board Card */}
    <div className="rounded-2xl flex justify border border-slate-200 bg-white p-2 shadow-sm sm:p-2 md:p-3">
      
      {/* Player Draft */}
      {PlayerDraft && (
        <PlayerDraftBoard
          DraftSelections={draftSelectionArray}
        />
      )}

      {/* Faction Draft */}
      {FactionDraft && (
        <FactionDraftBoard
          DraftSelections={draftSelectionArray}
        />
      )}
    </div>
  </div>
);

}