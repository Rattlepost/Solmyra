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
      grad: "rg_poi",
      pts: "3079,3548,308", 
      wikiLink: "wiki/regions/grennmoor/towns/duskhelm.html",
      summary: "The capital city of Grennmoor, known for its canals and stone architecture. It is ruled by the Council of Duskhelm."            // ← paste your traced polygon coords here
    },
    {
      id: "fort_perrol",
      name: "Fort Perrol",
      type: "Coastal Fortress",
      grad: "rg_poi",
      pts: "2016,4874,357",
      wikiLink: "wiki/regions/grennmoor/towns/fort_perrol.html",
      summary: "A coastal fortress on the southern coast of Grennmoor on the south road. It serves as the first line of defence against Pellhiem to the south."            // ← paste your traced polygon coords here           // ← paste your traced polygon coords here
    },
    {
      id: "lone_landing",
      name: "Lone Landing",
      type: "Small Lakefront Town",
      wikiLink: "wiki/regions/grennmoor/towns/lone_landing.html",
      summary: "A small town sitting quietly on the western shore of Lone Lake.",
      grad: "rg_poi",
      pts: "1925,3763,178",            // ← paste your traced polygon coords here          // ← paste your traced polygon coords here
    },
    {
      id: "greyport",
      name: "Greyport",
      type: "Coastal Harbor Town",
      wikiLink: "wiki/regions/grennmoor/towns/greyport.html",
      summary: "A port town on the northwestern coast of Grennmoor. It is a commercial hub for trade.",
      grad: "rg_poi",
      pts: "360,2693,263",            // ← paste your traced polygon coords here            // ← paste your traced polygon coords here
    },
    {
      id: "stillhaven",
      name: "Stillhaven",
      type: "Large Town",
      wikiLink: "wiki/regions/grennmoor/towns/stillhaven.html",
      summary: "A large and surprisingly wealthy town in the cold north of Grennmoor.",
      grad: "rg_poi",
      pts: "2145,1584,291",            // ← paste your traced polygon coords her            // ← paste your traced polygon coords here
    },
    {
      id: "valdrest",
      name: "Valdrest",
      type: "Large Town",
      wikiLink: "wiki/regions/grennmoor/towns/valdrest.html",
      summary: "A medium town in the far north coast of Grennmoor.",
      grad: "rg_poi",
      pts: "1655,659,190",            // ← paste your traced polygon coords her            // ← paste your traced polygon coords here
    },
    {
      id: "fenwick",
      name: "Fenwick",
      type: "Large Town",
      wikiLink: "wiki/regions/grennmoor/towns/fenwick.html",
      summary: "A large town on the edge of the Midwood forest. They are known for hunting and logging operations.",
      grad: "rg_poi",
      pts: "1374,4330,241",            // ← paste your traced polygon coords her            // ← paste your traced polygon coords here
    },
    {
      id: "gateside",
      name: "Gateside",
      type: "Large Town",
      wikiLink: "wiki/regions/grennmoor/towns/gateside.html",
      summary: "A small town just outside of Greyport. It's residents split off from Greyport to become its own town.",
      grad: "rg_poi",
      pts: "1017,2551,89",            // ← paste your traced polygon coords her            // ← paste your traced polygon coords here
    },
    {
      id: "coldshore",
      name: "Coldshore",
      type: "Large Town",
      wikiLink: "wiki/regions/grennmoor/towns/coldshore.html",
      summary: "A small town on the eastern shores of Splitwater lake. Its known for its fishing and ice harvesting in the winter.",
      grad: "rg_poi",
      pts: "1397,1925,120",            // ← paste your traced polygon coords her            // ← paste your traced polygon coords here
    },
    {
      id: "aldshore",
      name: "Aldshore",
      type: "Large Town",
      wikiLink: "wiki/regions/grennmoor/towns/aldshore.html",
      summary: "A small town on the western shores of Splitwater lake. It is known for its peaceful atmosphere and a popular vacation spot in the summer.",
      grad: "rg_poi",
      pts: "956,2068,117",            // ← paste your traced polygon coords her            // ← paste your traced polygon coords here
    },
    {
      id: "Lethwick",
      name: "Lethwick",
      type: "Large Town",
      wikiLink: "wiki/regions/grennmoor/towns/lethwick.html",
      summary: "A small town in the northern part of Grennmoor on Mournwater lake. The town lives up to the lakes name, dreary and sad.",
      grad: "rg_poi",
      pts: "1469,1222,127",            // ← paste your traced polygon coords her            // ← paste your traced polygon coords here
    },
    {
      id: "glassend",
      name: "Glassend",
      type: "Large Town",
      wikiLink: "wiki/regions/grennmoor/towns/glassend.html",
      summary: "A small town in the northern part of Grennmoor. It is known for its beautifully clear lake and snow coverered winters.",
      grad: "rg_poi",
      pts: "1112,906,104",            // ← paste your traced polygon coords her            // ← paste your traced polygon coords here
    },
    {
      id: "dredgeholm",
      name: "Dredgeholm",
      type: "Large Town",
      wikiLink: "wiki/regions/grennmoor/towns/dredgeholm.html",
      summary: "A medium town in the eastern part of Grennmoor. It's known for its mining operations in Dredgeholm Mine, one of the only mines in Grennmoor.",
      grad: "rg_poi",
      pts: "3081,2226,162",            // ← paste your traced polygon coords her            // ← paste your traced polygon coords here
    },
  ]
};