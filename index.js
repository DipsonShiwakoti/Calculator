const buttons = document.querySelectorAll('button')
const equalbtn = document.getElementById('equals')
const inputEl = document.getElementById('input_field')
const answerEl = document.getElementById('answer')
const clearEl = document.getElementById('btn_Ac')
const removeEl = document.getElementById('btn_x')

let answer = ""


buttons.forEach(button => {
    button.addEventListener('click', function () {
        if (button.textContent !== '=' && button.textContent != "Ac") {
            answer += button.innerText
            inputEl.textContent = answer
        }

    });
});

clearEl.addEventListener('click', function () {
    answer = ""
    inputEl.textContent = "|"
    answerEl.textContent = "="

})

removeEl.addEventListener('click', function () {
    answer = answer.slice(0, -1);
    inputEl.textContent = answer || "|";
});

equalbtn.addEventListener('click', function () {
    click = true
    answerEl.textContent = "=" + eval(answer)
})