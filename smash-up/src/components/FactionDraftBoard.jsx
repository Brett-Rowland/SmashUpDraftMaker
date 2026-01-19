import DraftCard from "./DraftCard"

export default function FactionDraftBoard({DraftSelections}){

    

    return(
        <>
            <div className="flex flex-wrap gap-3 justify-center w-full items-center">
                
                {DraftSelections.map((faction) => (

                    <DraftCard Faction={faction}/>
                ))}

            </div>
        </>
    )


}