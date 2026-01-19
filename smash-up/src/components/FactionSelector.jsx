export default function FactionSelector({Faction, SetCollection, Collection}){

    const isSelected = Collection.has(Faction)


    const notCollected = () => {
        SetCollection(prev => {
            const collection = new Set(prev)

            collection.delete(Faction)

            return collection
        })
    }


    const collected = () => {
        SetCollection(prev => {
            const collection = new Set(prev)
            collection.add(Faction)
            return collection
        })
    }


    return (
  <button
    type="button"
    onClick={isSelected ? notCollected : collected}
    className={`w-full rounded-lg border px-2 py-2 text-left text-sm transition
      flex items-center justify-between gap-2
      ${isSelected
        ? "bg-blue-100 border-blue-400 text-blue-900"
        : "bg-white border-slate-200 text-slate-800 hover:bg-slate-50 hover:shadow-sm"}
    `}
  >
    <span className="truncate font-medium">{Faction}</span>

    <span
      className={`text-xs font-semibold
        ${isSelected ? "text-blue-700" : "text-slate-400"}
      `}
    >
      {isSelected ? "✓" : "+"}
    </span>
  </button>
);





}