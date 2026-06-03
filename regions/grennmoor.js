// ================================================================
// regions/grennmoor.js — Sub-regions of Grennmoor
//
// HOW TO ADD A SUB-REGION:
//   1. Open grennmoor.png in https://www.image-map.net
//   2. Trace your polygon and copy the coords
//   3. Add a new entry to the regions array below
//
// viewBox should match your grennmoor.png dimensions (width x height).
// If unsure, open the image and check its pixel size.
// ================================================================

const GRENNMOOR = {
  map: "grennmoor.png",
  viewBox: "0 0 4149 5502", // ← update if your map is a different size

  regions: [
    {
      id: "duskhelm",
      name: "Duskhelm",
      type: "Capital City",
      desc: `The seat of the High Warden and the beating political heart of Grennmoor. 
            Built atop a foundation of dark basalt, the city is threaded through with narrow canals that carry both trade and whispered secrets. 
            Its towers are perpetually wreathed in peat smoke, and its council chambers have seen more blood spilled through ink and procedure than through any blade. 
            To govern here is to age quickly.`,
      tags: ["Capital", "Political Intrigue", "Canals", "Dark Stone", "Bureaucracy"],
      grad: "rg_poi",
      pts: "3079,3548,308"             // ← paste your traced polygon coords here
    },
    {
      id: "fort_perrol",
      name: "Fort Perrol",
      type: "Coastal Fortress",
      desc: `Grennmoor's iron fist on the southern coast, and its first line of defence against Pellhiem to the south. 
            Where the rest of Grennmoor's border is shielded by mountains and moorland, 
            the southern reaches flatten out into open country — and Fort Perrol was built precisely because of that vulnerability. 
            Its garrison is always drilling, its walls always being patched, and its commanders always watching the horizon. 
            The civilian settlement that grew up in its shadow is tough and unsentimental, full of veterans, shipwrights, and people who don't ask too many questions.`,
      tags: ["Fortress", "Coastal", "Military", "Border Defence", "Garrison", "Pellhiem"],
      grad: "rg_poi",
      pts: "2016,4874,357",            // ← paste your traced polygon coords here           // ← paste your traced polygon coords here
    },
    {
      id: "lone_landing",
      name: "Lone Landing",
      type: "Small Lakefront Town",
      desc: `A small town sitting quietly on the western shore of Lone Lake, far enough from Duskhelm's politics to breathe easy. 
            Lone Landing is known for its woodworkers, weavers, and the uncommonly good fish pulled from the lake each morning. 
            Travellers passing through often end up staying longer than intended — there is something in the still water and slow pace that makes urgency feel foolish.`,
      tags: ["Lake Town", "Crafts", "Peaceful", "Fishing", "Remote"],
      grad: "rg_poi",
      pts: "1925,3763,178",            // ← paste your traced polygon coords here          // ← paste your traced polygon coords here
    },
    {
      id: "greyport",
      name: "Greyport",
      type: "Coastal Harbor Town",
      desc: `Grennmoor's primary window to the sea. 
            Greyport is a working harbour — loud, salt-scoured, and perpetually busy — where merchant vessels jostle for berth space alongside naval cutters. 
            The dockmaster runs a tight operation and the harbormaster's ledgers are the most honest record of Grennmoor's true economic health. 
            The upper town is respectable enough; the waterfront is decidedly not.`,
      tags: ["Harbour", "Trade", "Naval", "Waterfront", "Merchant"],
      grad: "rg_poi",
      pts: "360,2693,263",            // ← paste your traced polygon coords here            // ← paste your traced polygon coords here
    },
    {
      id: "stillhaven",
      name: "Stillhaven",
      type: "Large Town",
      desc: `A prosperous trade town that has learned to live in the shadow of something it refuses to name. 
            Stillwood Grove presses up against Stillhaven's eastern wall, and the locals have a habit of not looking at it after dark. 
            The market is lively, the inns are warm, and nobody talks about the sounds that come from the trees at night — not to outsiders, anyway. Business is good. 
            It is better not to ask why some merchants prefer Stillhaven over shorter routes.`,
      tags: ["Trade Hub", "Forest Edge", "Unsettling", "Prosperous", "Secrets"],
      grad: "rg_poi",
      pts: "2145,1584,291",            // ← paste your traced polygon coords her            // ← paste your traced polygon coords here
    },
  ]
};

