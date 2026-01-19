import ExpansionSelector from "./ExpansionSelector"



export default function ExpansionsSelection({Factions, SetCollection, Collection}){


    const selectAll = () => {

        var factionPool = [];

        Factions.map(expansion => {
            expansion?.factions.map(faction => {
                factionPool.push(faction)
            })
        })

        SetCollection(new Set(factionPool))
    }
    const unselectAll = () => {
        SetCollection(new Set())
    }

    return (
    <div className="grid grid-cols-1 gap-3 lg:grid-cols-2">
      {/* Button for Selecting All and UnSelect All all */}

    
        <div className="flex justify-center lg:col-span-2 items-center">
            <button className="border-2 w-1/2 bg-green-400 text-black h-full rounded-xl hover:bg-green-500" onClick={selectAll}>Select All</button>
            <button className=" border-2 w-1/2 bg-red-500 text-black h-full rounded-xl hover:bg-red-600" onClick={unselectAll}>Unselect all</button>
        </div>

      {Factions.map((exp) => (
        <ExpansionSelector
          key={exp.expansionName}
          ExpansionName={exp?.expansionName}
          FactionList={exp?.factions}
          SetCollection={SetCollection}
          Collection={Collection}
        />
      ))}
    </div>
);



}