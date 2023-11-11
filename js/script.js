let calculateResult = document.querySelector('.js-show-calculate-result'),
  showEval = document.querySelector('.js-show-calculate')

let calculate = localStorage.getItem('calculation') || ''

calculateResult.innerHTML = calculate
showEval.innerHTML = eval(calculate)

function updateCalculation(value) {
  calculate += value + ' '
  calculateResult.innerHTML = calculate

  localStorage.setItem('calculation', calculate)
}

function evalNumber() {
  calculate = eval(calculate)
  showEval.innerHTML = calculate
  calculate.innerHTML = calculate
}

function removeEval() {
  calculate = ''
  showEval.innerHTML = ''
  calculateResult.innerHTML = ''

  localStorage.setItem('calculation', calculate)
}