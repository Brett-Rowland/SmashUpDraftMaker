import { useEffect, useState } from 'react'
import Collection from './components/CollectionDisplay'
import DraftModifiers from './components/DraftModifiers'

export default function DraftScreen() {

  // Collection Tracker
  const [collection, SetCollection] = useState(new Set())

  // Draft Screen Results
  const [draftSelections, SetDraftSelections] = useState(new Set())

  // Card was not selected
  const [undrafted, SetUndrafted] = useState(new Set())



  const factions = [
    {"expansionName":"Core Set", 
      "factions":["Aliens", "Dinosaurs", "Ninjas", "Pirates","Robots","Tricksters","Wizards","Zombies"]
    },
    {"expansionName":"Munchkin", 
      "factions":["Clerics", "Dwarves", "Elves", "Halflings", "Mages", "Orcs", "Thieves","Warriors"]
    },
    {"expansionName":"Awesome Level 9000", 
      "factions":["Bear Cavalry", "Ghosts", "Killer Plants", "Steampunks"]
    },
    {"expansionName":"The Obligatory Cthulhu", 
      "factions":["Elder Things", "Innsmouth", "Minions of Cthulhu", "Miskatonic University"]
    },
    {"expansionName":"Science Fiction Double Feature", 
      "factions":["Cyborg Apes", "Shapeshifters", "Super Spies", "Time Travelers"]
    },
    {"expansionName":"Monster Smash", 
      "factions":["Giant Ants", "Mad Scientists", "Vampires", "Werewolves"]
    },
    {"expansionName":"Pretty Pretty Smash Up", 
      "factions":["Fairies", "Kitty Cats", "Mythic Horses", "Princesses"]
    },
    {"expansionName":"Its Your Fault!", 
      "factions":["Dragons", "Mythic Greeks", "Superheroes","Tornados"]
    },
    {"expansionName":"Cease and Desist", 
      "factions":["Astroknights", "Changerbots", "Ignobles","Star Roamers"]
    },
    {"expansionName":"What Were We Thinking?", 
      "factions":["Explorers", "Grannies", "Rock Stars", "Teddy Bears"]
    },
    {"expansionName":"Big in Japan", 
      "factions":["Itty Critters", "Kaiju", "Magical Girls", "Mega Troopers"]
    },
    {"expansionName":"That '70s Expansion", 
      "factions":["Disco Dancers", "Kung Fu Fighters", "Truckers", "Vigilantes"]
    },
    {"expansionName":"The Bigger Geekier Box", 
      "factions":["Geeks", "Smash Up All Stars"]
    },
    {"expansionName":"Oops, You Did It Again", 
      "factions":["Ancient Egyptians", "Cowboys", "Samurai", "Vikings"]
    },
    {"expansionName":"World Tour: International Incident", 
      "factions":["Luchadors", "Mounties", "Musketeers", "Sumo Wrestlers"]
    },
    {"expansionName":"World Tour: Culture Shock", 
      "factions":["Anansi Tales", "Ancient Incas", "Grimms' Fairy Tales", "Polynesian Voyagers", "Russian Fairy Tales"]
    },
    {"expansionName":"Marvel", 
      "factions":["Avengers", "Hydra", "Kree","Masters of Evil", "S.H.I.E.L.D.", "Sinister Six", "Spider-Verse","Ultimates"]
    }, 
    {"expansionName":"Disney", 
      "factions":["Aladdin","Beauty and the Beast", "Big Hero 6", "Frozen", "Mulan","The Lion King", "The Nightmare Before Christmas", "Wreck-It-Ralph"]
    },
    {"expansionName":"Goblins", 
      "factions":["Goblins"]
    },
    {"expansionName":"Knights of the Round Table", 
      "factions":["Knights of the Round Table"]
    },
    {"expansionName":"Sheep", 
      "factions":["Sheep"]
    },
    {"expansionName":"Teens", 
      "factions":["Teens"]
    },
    {"expansionName":"Penguins", 
      "factions":["Penguins"]
    },
    {"expansionName":"Slashers", 
      "factions":["Slashers"]
    },
    {"expansionName":"Clowns", 
      "factions":["Clowns"]
    },
    {"expansionName":"10th Anniversary", 
      "factions":["Mermaids", "Sheep", "Skeletons", "World Champs"]
    },
    {"expansionName":"Excellent Movies, Dudes!", 
      "factions":["Action Heroes", "Backtimers", "Extramorphs", "Wraithrustlers"]
    },
    {"expansionName":"Half the Battle", 
      "factions":["Adolescent Epic Geckos", "G.I. Gerald", "Pearl and the Images", "Rulers of the Cosmos"]
    }
  ]


  useEffect(() => {
    const savedList = localStorage.getItem("factions")

    if (savedList){
      const parsed = JSON.parse(savedList)
      SetCollection(new Set(parsed))
    }
  },[])



  /**
   * TODO
   * 
   * DRAFT CARDS  
   *    Selector turns button red
   *    Reroll Find Stock Image goes top right
   * 
   * DRAFT BOX
   *    Shows All Items
   *    Breaks Down for each Player as well for the Generate Draft
   * 
   * COLORS
   *    Thinking Either Blue or Black potentially since BLUE and light blue with yellow for the top thing would be cool
   * 
   * DESIGN WORK
   *    FIX DRAFT MODIFIERS
   *    
   * 
   */


  return (
  <>
    {/* Page wrapper */}
    <div className="min-h-screen bg-slate-100 px-3 py-6 sm:px-6 lg:px-10">
      
      {/* Header */}
      <header className="mx-auto max-w-6xl">
        <h1 className="text-center text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl md:text-4xl">
          Smash Up Draft Maker
        </h1>
        <p className="mt-2 text-center text-sm text-slate-600 sm:text-base">
          Build a pool, draft factions, and reroll until you get something spicy.
        </p>
      </header>

      {/* Content grid */}
      <main className="mx-auto mt-6 grid max-w-6xl grid-cols-1 gap-4 lg:mt-10 lg:grid-cols-12 lg:gap-6">
        
        {/* Draft Modifiers Card */}
        <section className="lg:col-span-5">
          <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-6">
            <div className="mb-3 flex items-center justify-between">
              <h2 className="text-lg font-semibold text-slate-900 sm:text-xl">
                Draft Modifiers
              </h2>
              {/* Optional slot for a small status badge */}
              {/* <span className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-700">v1</span> */}
            </div>

            <div className="space-y-3">
              <DraftModifiers
                DraftSelections={draftSelections}
                SetDraftSelections={SetDraftSelections}
                Collection={collection}
                Undrafted={undrafted}
                SetUndrafted={SetUndrafted}
              />
            </div>
          </div>
        </section>

        {/* Collection Card */}
        <section className="lg:col-span-7">
          <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-6">
            <div className="max-h-[70vh] overflow-auto pr-1">
              <Collection
                Factions={factions}
                Collection={collection}
                CollectionSetter={SetCollection}
              />
            </div>
          </div>
        </section>

      </main>
    </div>
  </>
);

}
