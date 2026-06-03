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
      desc: `The seat of the High Warden, built on dark stone above a web of narrow canals.
            The city smells permanently of peat smoke and river mud, and its politics are slow and grinding.`,
      tags: ["Capital", "Political", "Canals"],
      grad: "rg_poi",
      pts: "2960,3615,355"             // ← paste your traced polygon coords here
    },

    // ── Add more sub-regions below, copy the block above ──────────
    // {
    //   id:   "ashfen",
    //   name: "Ashfen",
    //   type: "Cursed Forest",
    //   desc: `Something old lives here...`,
    //   tags: ["Forest", "Cursed"],
    //   grad: "rg_teal",
    //   lx: 2000, ly: 1200,
    //   pts: ""
    // },
  ]
};
