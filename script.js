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
populations.sort(function(a,b){ return a.name.length - b.name.length})

// pin up lenName
const newPopulation = populations.map( population => ({...population, lenName: population.name.length }))

//console.log(newPopulation)

//tidy and push in specific array
let groupNames = newPopulation.reduce((b, a) => {
b[a.lenName] = [...b[a.lenName] || [] , a];
return b;
}, {});
console.log(groupNames)


