let i = 1;
while (i <= 10) {
    console.log(i);
    i += 1;
}

for(let i = 2; i <= 20; i += 1){
    if ((i % 2) > 0) {
        continue;
    }
    console.log(i);
}

for(let i = 0; i <= 10; i += 1){
    console.log(`${i} * 7 = ${i * 7}`);
}

let userNum = Number(prompt('input Number:').trim())
while (userNum > 0) {
    userNum -= 1;
    console.log(userNum);
}