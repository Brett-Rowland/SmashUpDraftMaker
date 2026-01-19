import FactionSelector from "./FactionSelector"



export default function FactionSet({Faction, SetCollection, Collection}){
    const expansionName = Faction?.expansionName ?? ""
    const factions = Faction?.factions ?? []

    return(<>
    
        <div className="flex flex-col m-4 space-between flex-wrap justify-start">
            
            {/* Header */}
            <div className="flex justify-center items-center text-center text-2xl text-wrap break-words border-b-2 border-gray-400 mb-2"><h1>{expansionName}</h1></div>


            <div className="flex flex-col flex-wrap gap-y-1 justify-center">
                {
                    factions?.map((f)=> (
                        <FactionSelector key={f} Faction={f} SetCollection={SetCollection} Collection={Collection} />
                    ))
                }
            </div>
        </div>
    </>)
}