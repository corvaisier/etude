const populations = [
  { id: 0, name: "Alan" },
  { id: 1, name: "Albert" },
  { id: 2, name: "Jhon" },
  { id: 3, name: "Brice" },
  { id: 4, name: "Alexendra" },
  { id: 5, name: "Brad" },
  { id: 6, name: "Carl" },
  { id: 7, name: "Dallas" },
  { id: 8, name: "Dennis" },
  { id: 9, name: "Edgar" },
  { id: 10, name: "Erika" },
  { id: 11, name: "Isaac" },
  { id: 12, name: "Ian" },
];

// tidy array by length
populations.sort(function (a, b) { return a.name.length - b.name.length })

// pin up lenName
const newPopulation = populations.map(population => ({ ...population, lenName: population.name.length }))

//console.log(newPopulation)

//tidy and push in specific array
let groupNames = newPopulation.reduce((b, a) => {
  b[a.lenName] = [...b[a.lenName] || [], a];
  return b;
}, {});
//console.log(groupNames)

const relations = [
  { id: 0, relation: [1, 2, 4] },
  { id: 3, relation: [7, 8] },
  { id: 4, relation: [2, 7, 8, 11] },
  { id: 5, relation: [1, 2, 4] },
  { id: 7, relation: [2, 3, 5, 9] },
  { id: 9, relation: [1, 2, 4, 8, 11] },
  { id: 11, relation: [1, 2, 9, 10,] },
]

