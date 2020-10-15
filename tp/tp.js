const populations = [
    { id: 0, name: "Alan", jobs: ['dev junior', 'dev fullstack'], password: "tyeedsa00" },
    { id: 1, name: "Albert", jobs: ['doctor'], password: "tyeidii00" },
    { id: 2, name: "Jhon", jobs: ['mathematician', 'doctor'], password: "xyuuuoi00" },
    { id: 3, name: "Brice", jobs: ['dev fullstack'], password: "xytoiab00" },
    { id: 4, name: "Alexendra", jobs: ['dentist'], password: "aaaoiab33" },
    { id: 5, name: "Brad" },
    { id: 6, name: "Carl", jobs: ['lead dev', 'dev fullstack'] },
    { id: 7, name: "Dallas", jobs: ['dev fullstack'] },
    { id: 8, name: "Dennis", jobs: ['integrator', 'dev fullstack'] },
    { id: 9, name: "Edgar", jobs: ['mathematician'] },
    { id: 10, name: "Erika", jobs: ['computer scientist', 'mathematician'] },
    { id: 11, name: "Isaac", jobs: ['doctor'], password: "Axgkj22Kl" },
    { id: 12, name: "Ian", password: "Axgkj00Kl" },
];

let acc = 0
let accu = 0
for (const population of populations) {
    ////////////////////////////////////////////
    //question 1.1
    ///////////////////////////////////////////
    let array = []
    if (population.jobs != undefined) {
        array = population.jobs
        if (array.includes('doctor') === true) { accu++ }
    }
    ////////////////////////////////////////////
    //question 1.2
    ///////////////////////////////////////////
    if (population.jobs != undefined) {
        array = population.jobs
        if (array.includes('dev fullstack') === true) {console.log(population.name) }
    }


    ////////////////////////////////////////////
    //question 1.3
    ///////////////////////////////////////////
    if (population.jobs === undefined) { acc++ }

    //////////////////////////////////////////
    //question 1.4
    /////////////////////////////////////////
    if (population.password != undefined) { result = [count(population.password)] }
    console.log(result)
}
console.log("personnes ayant la qualification doctor" + ":" +accu)
console.log("personnes n'ayant jamais travaillés" + ": " + acc)

////////////////////////////////////////////
//question 2
///////////////////////////////////////////

function count(x) {
    let counter = {}
    let string = x
    let stringArray = string.split('')
    stringArray.forEach(function (character) {
        if (!counter.hasOwnProperty(character)) {
            counter[character] = 0
        }
        counter[character]++
    });
    console.log(counter)
}
////////////////////////////////////////////
//question 3
///////////////////////////////////////////
function catchNumber(x) {
    let a = x.split(':').filter(Number)
    console.log(a)
}

catchNumber("8790:bonjour le monde:8987:7777:Hello World:9007")






