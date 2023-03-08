let length = document.getElementById('length-num')
let volume = document.getElementById('volume-num')
let mass = document.getElementById('mass-num')
let number
const boton = document.getElementById('btn-convert')
boton.addEventListener('click', convert)
const metter_feet = 3.281
const liter_gallon = 0.264
const kilogram_pound = 2.204

function convert() {
    number = document.getElementById('num-el').value
    length.textContent = `${number} meters = ${(number * metter_feet).toFixed(3)} feet | ${number} feet = ${(number/metter_feet).toFixed(3)} meters`
    volume.textContent = `${number} liters = ${(number * liter_gallon).toFixed(3)} gallons | ${number} gallons = ${(number/liter_gallon).toFixed(3)} liters`
    mass.textContent = `${number} kilos = ${(number * kilogram_pound).toFixed(3)} pounds | ${number} pounds = ${(number/kilogram_pound).toFixed(3)} kilos`
}