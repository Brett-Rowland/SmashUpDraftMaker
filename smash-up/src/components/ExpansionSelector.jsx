export default function ExpansionSelector({ExpansionName, FactionList, SetCollection, Collection}){
 
    const isSelected = FactionList.every(faction => Collection.has(faction));

    
    const addToCollection = () => {
        SetCollection(prev => {
          const next = new Set(prev);
          FactionList.forEach(f => next.add(f));
          return next;
        });
    }

    
    const removeFromCollection = () => {
        SetCollection(prev => {
          const next = new Set(prev);
          FactionList.forEach(f => next.delete(f));
          return next;
        });
    }
    return (
  <button
    type="button"
    onClick={isSelected ? removeFromCollection : addToCollection}
    className={`w-full rounded-xl border px-4 py-3 text-left transition
      flex items-center justify-between gap-3
      ${isSelected
        ? "border-blue-500 bg-blue-50"
        : "border-slate-200 bg-white hover:bg-slate-50"}
    `}
  >
    <div className="flex items-center gap-3">
      <input
        type="checkbox"
        checked={isSelected}
        readOnly
        className="h-5 w-5 accent-blue-600"
        onClick={(e) => e.stopPropagation()} // prevent double triggering
      />

      <div className="flex flex-col">
        <span className="font-semibold text-slate-900">{ExpansionName}</span>
      </div>
    </div>
  </button>
);




}