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
  map: "images/grennmoor.png",
  viewBox: "0 0 4149 5502", // ← update if your map is a different size

  regions: [
    {
      id: "duskhelm",
      name: "Duskhelm",
      type: "Capital City",
      desc: `The oldest and capital city in Grennmoor, Duskhelm is the seat of the region's governance and home to the Council of Lords. 
            It is a dense, ancient city built around a network of narrow canals that have managed its seasonal floods for centuries, 
            giving it a character that is equal parts practical and oppressive. The Duskwall, a vast fortified complex at the city's heart, 
            is where the council convenes and where Grennmoor's political life plays out behind closed doors. 
            It is a city that has lived under the weight of its own politics for a very long time, and it shows.`,
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
      desc: `Grennmoor's largest port city and its primary gateway to the Dawnmere, 
            Greyport is a busy, weathered city that has grown around centuries of trade. 
            Ships from Caldervane and Marevoss are a common sight in its harbor, and the docks are rarely quiet. 
            It is not a pretty city, but it is an effective one — built around commerce, shaped by it, 
            and entirely comfortable with the moral flexibility that a life at the water's edge tends to produce. 
            Those who know where to look find it a city of considerable opportunity. 
            Those who don't usually leave having conducted their business and nothing more.`,
      tags: ["Harbour", "Trade", "Naval", "Waterfront", "Merchant"],
      grad: "rg_poi",
      pts: "360,2693,263",            // ← paste your traced polygon coords here            // ← paste your traced polygon coords here
    },
    {
      id: "stillhaven",
      name: "Stillhaven",
      type: "Large Town",
      desc: `A large and surprisingly well-appointed town at the northern edge of Grennmoor, 
            Stillhaven sits where the trade roads meet the tree line of the Stillwood Grove. 
            It is further north than most settlements of its size have any right to be, and more prosperous than its location should allow. 
            The streets are maintained, the inn is comfortable, 
            and merchants who pass through tend to leave satisfied without quite being able to say why the detour felt so worthwhile. 
            The town is well governed and quietly proud of itself. 
            The forest at its back is something the locals have learned to live alongside, 
            and something they have also learned not to discuss with visitors.`,
      tags: ["Trade Hub", "Forest Edge", "Unsettling", "Prosperous", "Secrets"],
      grad: "rg_poi",
      pts: "2145,1584,291",            // ← paste your traced polygon coords her            // ← paste your traced polygon coords here
    },
    {
      id: "valdrest",
      name: "Valdrest",
      type: "Large Town",
      desc: ``,
      tags: ["Harbour", "Industry", "Pragmatic", "Economy", "Workforce"],
      grad: "rg_poi",
      pts: "1655,659,190",            // ← paste your traced polygon coords her            // ← paste your traced polygon coords here
    },
    {
      id: "fenwick",
      name: "Fenwick",
      type: "Large Town",
      desc: ``,
      tags: ["Trade Hub", "Forest Edge", "Unsettling", "Prosperous", "Secrets"],
      grad: "rg_poi",
      pts: "1374,4330,241",            // ← paste your traced polygon coords her            // ← paste your traced polygon coords here
    },
    {
      id: "midwood",
      name: "Midwood Forest",
      type: "Large Town",
      desc: ``,
      tags: ["Trade Hub", "Forest Edge", "Unsettling", "Prosperous", "Secrets"],
      grad: "rg_poi",
      pts: "1041,4010,1275,3874,1565,3860,1708,3710,1701,3457,1525,3343,1352,3369,1144,3497,949,3556,751,3581,605,3475,473,3471,411,3611,454,3889,429,4028,561,4212,817,4149",            // ← paste your traced polygon coords her            // ← paste your traced polygon coords here
    },
    {
      id: "stillwood",
      name: "Stillwood Grove",
      type: "Large Town",
      desc: `A vast and ancient forest stretching across the northern reaches of Grennmoor, 
            the Stillwood Grove has a reputation that precedes it among those who live nearby and 
            goes entirely unnoticed by those passing through for the first time. 
            The trees stand without movement regardless of the wind. No animals can be heard past the treeline. 
            The quiet that emanates from the wood is not the quiet of an empty place — it is something with more weight than that, 
            something the residents of Stillhaven have grown up feeling at their backs without ever finding the words for it. 
            Travelers on the road rarely give it a second glance. The locals have never needed to be told to stay out.`,
      tags: ["Trade Hub", "Forest Edge", "Unsettling", "Prosperous", "Secrets"],
      grad: "rg_poi",
      pts: "2843,2062,3111,1853,3415,1831,3737,1681,3862,1377,3661,896,3342,468,2924,306,2645,314,2337,361,2078,515,1924,744,1854,977,1894,1127,2064,1186,2372,1222,2687,1226,2826,1350,2779,1669,2680,1856,2581,1944,2581,2109,2757,2135,2800,2100",            // ← paste your traced polygon coords her            // ← paste your traced polygon coords here
    },
    {
      id: "gateside",
      name: "Gateside",
      type: "Large Town",
      desc: ``,
      tags: ["Trade Hub", "Forest Edge", "Unsettling", "Prosperous", "Secrets"],
      grad: "rg_poi",
      pts: "1017,2551,89",            // ← paste your traced polygon coords her            // ← paste your traced polygon coords here
    },
    {
      id: "midlands",
      name: "Midlands",
      type: "Large Town",
      desc: ``,
      tags: ["Trade Hub", "Forest Edge", "Unsettling", "Prosperous", "Secrets"],
      grad: "rg_poi",
      pts: "2074,2604,567",            // ← paste your traced polygon coords her            // ← paste your traced polygon coords here
    },
    {
      id: "coldshore",
      name: "Coldshore",
      type: "Large Town",
      desc: ``,
      tags: ["Trade Hub", "Forest Edge", "Unsettling", "Prosperous", "Secrets"],
      grad: "rg_poi",
      pts: "1397,1925,120",            // ← paste your traced polygon coords her            // ← paste your traced polygon coords here
    },
    {
      id: "aldshore",
      name: "Aldshore",
      type: "Large Town",
      desc: ``,
      tags: ["Trade Hub", "Forest Edge", "Unsettling", "Prosperous", "Secrets"],
      grad: "rg_poi",
      pts: "956,2068,117",            // ← paste your traced polygon coords her            // ← paste your traced polygon coords here
    },
    {
      id: "Lethwick",
      name: "Lethwick",
      type: "Large Town",
      desc: ``,
      tags: ["Trade Hub", "Forest Edge", "Unsettling", "Prosperous", "Secrets"],
      grad: "rg_poi",
      pts: "1469,1222,127",            // ← paste your traced polygon coords her            // ← paste your traced polygon coords here
    },
    {
      id: "glassend",
      name: "Glassend",
      type: "Large Town",
      desc: ``,
      tags: ["Trade Hub", "Forest Edge", "Unsettling", "Prosperous", "Secrets"],
      grad: "rg_poi",
      pts: "1112,906,104",            // ← paste your traced polygon coords her            // ← paste your traced polygon coords here
    },
    {
      id: "dredgeholm",
      name: "Dredgeholm",
      type: "Large Town",
      desc: ``,
      tags: ["Trade Hub", "Forest Edge", "Unsettling", "Prosperous", "Secrets"],
      grad: "rg_poi",
      pts: "3081,2226,162",            // ← paste your traced polygon coords her            // ← paste your traced polygon coords here
    },
  ]
};