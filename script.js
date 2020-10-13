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

populations.sort(function(a,b){
    let x = a.name.length;
    let y = b.name.length;
    
    return x- y; //ASC, For Descending order use: b - a
  })
const newPopulation = ({...populations, lenName: length });


  console.log(populations);
  console.log(newPopulation);
  


