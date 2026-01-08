// // 1.Напиши скрипт в якому є три радіобатони зі значенями кольрів. При обиранніна
// // будь якого колір фону боді змінюється відповідно

const formRef = document.querySelector(".form");
formRef.addEventListener("change", (event) => {
  const colorClick = event.target.value;
  if (colorClick === "red") {
    document.body.style.backgroundColor = "red";
  } else if (colorClick === "white") {
    document.body.style.backgroundColor = "white";
  } else if (colorClick === "green") {
    document.body.style.backgroundColor = "green";
  }
});

// // 2.Напиши скрипт який, при наборі тексту в інпут input#name-input
// // (подія input), підставляє його поточне значення в span#name-output.
//  якщо інпут порожній, в спані повинен відображатися рядок 'незнайомець'.

const inputRef = document.querySelector('#name-input')
const spanRef = document.querySelector('#name-output')
inputRef.addEventListener('input',(event) => {
    const textInput = event.currentTarget.value.trim()
    if(textInput === ''){
        spanRef.innerHTML = 'незнайомець'
    }else spanRef.innerHTML = textInput
})

// // Напиши скрипт, який би при втраті фокуса на інпут,
// //  перевіряв його вміст на правильну кількість символів.
// // Скільки символів має бути в інпут, вказується в його атрибуті data-length.
// // Якщо введена відповідна кількість, то border інпут стає зеленим, 
//   якщо неправильне - червоним.
// // Для додавання стилів, використовуй CSS-класи valid і invalid.

const textInputRef = document.querySelector('#validation-input')
textInputRef.addEventListener('blur',(event) => {
    const lengthText = event.currentTarget.value
    if(lengthText.length === 6){
        textInputRef.classList.add('valid')
        textInputRef.classList.remove('invalid')
    } else {
        textInputRef.classList.add('invalid')
        textInputRef.classList.remove('valid')
}
})

// // 3. Напиши скрипт, який реагує на зміну значення
//  input#font-size-control (подія input) і змінює інлайн-стиль 
// span#text оновлюючи властивість font-size. В результаті при
//  перетягуванні повзунка змінюватиметься розмір тексту.

const inputRangeRef = document.querySelector('#font-size-control')
const spanRangeRef = document.querySelector('#text')
inputRangeRef.addEventListener('input',(event) => {

    spanRangeRef.style.fontSize = `${event.currentTarget.value}px`
})

