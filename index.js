

const userNumber = prompt( 'Кава Чай або сік');
switch (userNumber) {
    case 'кава':
        alert('з вас 50грн')
        break;
    case 'чай':
        alert('з вас 20грн')
        break;
    case 'сік':
        alert('з вас 30грн')
        break;

    default:
        alert('неправильно вели данні')
        break;
}


const day = prompt('місяць по англ').toLocaleLowerCase();
switch (day) {
    case 'monday':
    case 'tuesday':
    case 'Wednesday':
    case 'thursday':
    case 'friday':
        alert('це робочий день')
        break;
    case 'saturday':
    case 'sunday':
        alert('це вихідний день')
        break;
    default:
        alert('error')
        break;
}

const month = Number(prompt("Введіть номер місяця (1-12):"));
switch (month) {
    case 12:
    case 1:
    case 2:
        alert("Зима");
        break;
    case 3:
    case 4:
    case 5:
        alert("Весна");
        break;
    case 6:
    case 7:
    case 8:
        alert("Літо");
        break;
    case 9:
    case 10:
    case 11:
        alert("Осінь");
        break;
    default:
        alert("Неправильний номер місяця!");
        break;
}


const color = prompt("Введіть колір (червоний, жовтий, зелений):").toLowerCase();

switch (color) {
    case "червоний":
        alert("СТОП");
        break;
    case "жовтий":
        alert("Чекати");
        break;
    case "зелений":
        alert("Йти");
        break;
    default:
        alert("Невідомий колір");
        break;
}

const num1 = Number(prompt("Введіть перше число:"));
const num2 = Number(prompt("Введіть друге число:"));
const operator = prompt("Виберіть операцію (+, -, *, /):");

let result;

switch (operator) {
    case "+":
        result = num1 + num2;
        alert(`Результат: ${result}`);
        break;
    case "-":
        result = num1 - num2;
        alert(`Результат: ${result}`);
        break;
    case "*":
        result = num1 * num2;
        alert(`Результат: ${result}`);
        break;
    case "/":
        if (num2 === 0) {
            alert("Помилка Ділення на нуль неможливе!");
        } else {
            result = num1 / num2;
            alert(`Результат: ${result}`);
        }
        break;
    default:
        alert("Невідомий оператор!");
        break;
}
