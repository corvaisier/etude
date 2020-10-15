const DataStudents =
    [
        [
            "s1",
            {
                "name": "Alice",
                "mention": "",
                "notes": [11, 12, 18],
                "average": null,
                "url": "http://lorempixel.com/100/100/cats/1"
            }
        ],
        [
            "s2",
            {
                "name": "Alan",
                "mention": "",
                "notes": [10, 14.5, 11],
                "average": null,
                "url": "http://lorempixel.com/100/100/cats/2"
            }
        ],
        [
            "s3",
            {
                "name": "Bernard",
                "mention": "",
                "notes": [11, 9, 9],
                "average": null,
                "url": "http://lorempixel.com/100/100/cats/2"
            }
        ],
        [
            "s4",
            {
                "name": "Naoudi",
                "mention": "",
                "notes": [14.5, 19, 18],
                "average": null,
                "url": "http://lorempixel.com/100/100/cats/3"
            }
        ],
        [
            "s5",
            {
                "name": "Fenley",
                "mention": "",
                "notes": [9, 7, 11],
                "average": null,
                "url": "http://lorempixel.com/100/100/cats/4"
            }
        ],
        [
            "s6",
            {
                "name": "Shere Khan",
                "mention": "",
                "notes": [],
                "average": null,
                "url": "http://lorempixel.com/100/100/cats/4"
            }
        ]
    ];

const newDataStudents = DataStudents.map(students => students)
function caclul() {
    for (const student of newDataStudents) {
        let studMoy = parseFloat(student[1].notes).toFixed(2)
        student[1].average = studMoy

        if (student[1].average >= 17) { student[1].mention = "TB" }
        if (student[1].average >= 14, student[1].average <= 16) { student[1].mention = "B" }
        if (student[1].average >= 12, student[1].average <= 13) { student[1].mention = "AB" }
        if (student[1].average >= 10, student[1].average <= 11) { student[1].mention = "P" }
    }

}

let a = []
let keyValue
function insert(s, nam, mentio, note, averag, ur) {
    const constr = {
        name: nam,
        mention: mentio,
        notes: [note],
        average: averag,
        url: ur,
    }
    a.push(s)
    a.push(constr)
    for (const [key, value] of newDataStudents) {
        if (key === s) {
            keyValue = 1
        }
    }
    if (keyValue != 1) { newDataStudents.push(a) }
}

insert("s4", "julien", "B", "14", "10", "aa")


function count(x) {
    let counter = {}
    let string = x
    let stringArray = string.split('');
    stringArray.forEach(function (character) {
        if (!counter.hasOwnProperty(character)) {
            counter[character] = 0;
        }
        counter[character]++;
    });
    console.log(counter);
}
//count("mississipi")

function tidy(x) {
    let counter = {}
    let string = x
    let stringArray = string.split('');
    stringArray.forEach(function (character) {
        if (!counter.hasOwnProperty(character)) {
            counter[character] = 0;
        }
        counter[character]++;
    });
    console.log(counter);
}