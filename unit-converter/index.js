/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const convertBtn = document.getElementById("convert-btn")
const inputField = document.getElementById("input-field")
const lengthResults = document.getElementById("length-results")
const volumeResults = document.getElementById("volume-results")
const massResults = document.getElementById("mass-results")


convertBtn.addEventListener("click", function() {
  let meterToFeet = parseFloat(inputField.value)* 3.281
  let feetToMeter = parseFloat(inputField.value) / 3.281
  let literToGallon = parseFloat(inputField.value) * 0.264
  let gallonToLiter = parseFloat(inputField.value) / 0.264
  let kiloToPound = parseFloat(inputField.value) * 2.204
  let poundToKilo = parseFloat(inputField.value) / 2.204

  lengthResults.innerHTML = `<p>${inputField.value} meters = ${meterToFeet.toFixed(3)} feet | ${inputField.value} feet = ${feetToMeter.toFixed(3)} meters</p>`
  volumeResults.textContent = `${inputField.value} liters = ${literToGallon.toFixed(3)} gallons | ${inputField.value} gallons = ${gallonToLiter.toFixed(3)} liters`
  massResults.textContent = `${inputField.value} kilos = ${kiloToPound.toFixed(3)} pounds | ${inputField.value} pounds = ${poundToKilo.toFixed(3)} kilos`
  
  inputField.value = inputField.value
})
