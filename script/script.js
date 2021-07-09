const fruts = ['apple', 'banana', 'cherry', 'pineapple'];
const girlNames = ['Olia','Ania','Vika','Alina'];
const students = ['Sasha', 'Maxim', 'Oleg', 'Kostia'];
const things = ['oil', 'suitcase', 'ticket', 'wallet'];
const numbers = [1,2,3,4,5,6];
const bigNames = ['ALINA', 'VIKA','ANIA', 'OLIA'];
let users = [
    {id: 1, name: "Вася"},
    {id: 2, name: "Петя"},
    {id: 3, name: "Маша"}
];

girlNames.forEach(function olo(name) {
    console.log(name)
});

fruts.forEach((frut) => console.log(frut)); 


function forEach(arr, callback) {
    for(let i = 0; i < arr.length; i++) {
        callback(arr[i], i, 'студент')
    };
};

function callBackss(arr, index, hello) {
    console.log(arr, index, hello)
}

forEach(students, callBackss);



let oldThings = things.map(function somename(thing) {
    return thing
})

console.log(oldThings);