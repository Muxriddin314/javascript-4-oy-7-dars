//1-masala
let arr = ['Иван', 'Иванов', 'отдел разработки', 'программист', 2000];

const [name1, surname, department, position, salary] = arr;

console.log(name1);

//2-masala
function func(array){
   return [name1, surname, department, position, salary] = array
}

func(arr)

//3-masala
let newArr = ['Иван', 'Иванов', 'отдел разработки', 'программист', 2000];
const [,,department2,position2] = newArr
console.log(department2,position2)

//4-masala
const [names,surnames, ...rest] = arr;

//======================================
//Objects
//1-masala
let options = {
	color: 'red',
	width:  400,
	height: 500,
};

const {c,w,h} = options;

//2-masala
let options2 = {
	color: 'red',
	width:  400,
	height: 500,
};

const {color,width,height} = options2

// Unli xarflarni sanab beruvchi funksiya

// let text = "hello";
// let sum = 0;
// function findVowels(text){
//    let arr = text.split("")
//    for(let i = 0; i < arr.length; i++){
//     let el = arr[i]
//     if(el == e){sum += 1} }
//     return sum
// } 

// console.log(findVowels(text))
