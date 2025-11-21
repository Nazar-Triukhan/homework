const user = {
    hobby: 'football',
    premium: true,
}
user.mood = 'happy'
user.hobby = 'skydiving'
user.premium = false
const k = Object.keys(user)
for(let i of k){
    console.log(i,user[i]);
    
}

// Завдання 2
const userInf = {
    hobby: 'football',
    premium: true,
    mood: 'happy'
}
const countProps = (obj) => {
const key = Object.keys(obj)
return key.length

}
console.log(countProps(userInf));
// Завдання 3
const obj = {
    vlad: 3,
    nazar: 111,
    sahon: 3,
    artem: 37,
    maks: 1,

}
const findBestEmployee = (employees) => {
let bestname = ''
let maxtask = 0
const entry = Object.entries(employees)
for (const i of entry) {
    if(i[1] > maxtask){
        maxtask = i[1]
        bestname = i[0]
    }
}
return `best name: ${bestname} task: ${maxtask}`
}
console.log(findBestEmployee(obj));

// Завдання 4
const userMany = {
    vlad: 100,
    nazar: 150,
    sahon: 200,
    artem: 50,
    maks: 500,
}
const  countTotalSalary = (employees) => {
    
let sum = 0
for(const i in employees) {
    sum += employees[i]
}
return sum

}

console.log(countTotalSalary(userMany));


// Завдання 5
const nameUser = [{name: 'Nazar'},{name:'Vlad'},{name:'Sahon'}]
const key = Object.keys(nameUser[0])[0];

const getAllPropValues = (arr, prop) => {

    let userName = []
for(let i = 0;i < arr.length;i++){
    userName.push(arr[i][prop])
}
return userName

}
console.log(getAllPropValues(user,key));

// Завдання 6

const infoMany = [
    {name: 'Aple',many:20,skilki: 5},
    {name: 'Tort',many:200,skilki: 2},
    {name: 'Scitls',many:10,skilki: 10},
]

const calculateTotalPrice = (allProdcuts, productName) => {
    let sum = 0
for(let i = 0;i < allProdcuts.length;i++){
if (allProdcuts[i].name === productName) {
    sum += allProdcuts[i].many * allProdcuts[i].skilki
}
}
return sum
}
console.log(calculateTotalPrice(infoMany, 'Aple'));
console.log(calculateTotalPrice(infoMany, 'Tort'));
console.log(calculateTotalPrice(infoMany, 'Scitls'));

