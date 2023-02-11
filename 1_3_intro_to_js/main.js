console.log('hello world');

console.log(document);
console.log(window);

const input = document.getElementById("nameInput")

const updateName = () => {
    console.log('in update function')
    const userName = input.value;
    // there is interpolation here and it is amazing use the `` not ''
    // and ${}
    window.alert(`hello, welcome to class ${userName}`)
}

console.log(input);
console.log(document.getElementById("nameInput"));

let changeable = true;
const constant = true;

function change () {
    changeable = false;
    const constant = false;
    console.log (changeable, constant)
}

console.log (changeable, constant);
change();
console.log (changeable, constant);

const array = ["apple", "orange", "banana"];
const newArray = array.map((d) => {
    console.log(d, "food")
    return `my favorite food is ${d}`
});
console.log(newArray);

const filteredArray = array.filter((d,i) => {
    // const onlyB = d === "banana";
    // return onlyB;
    // will give equal
    // const notB = d !== "banana";
    // will give all that are not
    // const orangeOrApple = d === "apple" || d === "orange";
    const laterFoods = i > 0;
    return laterFoods;

}
)
console.log(filteredArray)

console.log(filteredArray.length);

// const doSomethingEachTime = array.forEach((d) => ())
array.forEach (d => console.log('d', d));


const dataVizClass = {
    day: 'Tuesday',
    time: 'late',
    students: 15,
}

// const dayAccessor = 'day';
// const day = datVizClass [dayAccessor];
// dataVizClass['day']
// dataVizClass.day

// const day = dataVizClass.day;
// // or dataVizClass['day']
// console.log(day);

// const keys = Object. keys(dataVizClass);
// console.log(keys)

// const values = Object.values(dataVizClass);
// console.log(entries);

// IF ELSE TERNARY
const apple = "apple";
const yesApple = apple === 
"apple" ? "I'm an apple" : "I'm not an apple"
console.log(yesApple)