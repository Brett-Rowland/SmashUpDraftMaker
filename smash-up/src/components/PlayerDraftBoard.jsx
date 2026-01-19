import PlayerDraftSection from "./PlayerDraftSection"

export default function PlayerDraftBoard({DraftSelections}){

    return(<>

        <div className="flex flex-wrap justify-center items-center">
            {DraftSelections.map((faction, index) => (
                <PlayerDraftSection
                  key={index}
                  DraftSelections={faction}
                  Index={index+1}
            />    
            ))}
            

        </div>
    </>)



}