import DraftCard from "./DraftCard"

export default function PlayerDraftSection({DraftSelections, Index}){
    return(
    <>
        <div className="flex min-w-40 min-h-20 w-auto justify-center items-center gap-2 flex-col flex-wrap">
            {/* Player Title */}
            <div className="flex w-fit justify-center items-center text-lg">Player {Index}</div>


            <div className="flex gap-2 mx-2 flex-wrap">

                {DraftSelections.map((faction) => (

                <DraftCard 
                Faction={faction} 
                />
                ))}

            </div>


        </div>
    </>
    )



}