let btn = document.querySelector("button");
let final_figure = document.querySelector("#total");
let input = document.querySelectorAll("input");
let basic = document.getElementById('basic');
let housing = document.getElementById('housing');
let transport = document.getElementById('transport');
let utility = document.getElementById('utility');
let dressing = document.getElementById('dressing');
let result = []

const checkingForValidInputs = () => {
    input.forEach(function (inputItem) {
        result.push(inputItem.value);
    });

    const validValues = result.every(element => {
        return typeof Number(element) === 'number';
    })

    if (validValues === false) {
        final_figure.innerHTML = "You entered incorrect figures! Please try again."
    } else {
        calculateSalaries(result);
    }
}

const calculateSalaries = (salary) => {
    let n = salary.length;
    basic_annual = (salary[0] * 12) * 0.4;
    housing_annual = (salary[1] * 12) * 0.15;
    transport_annual = (salary[2] * 12) * 0.1;
    utility_annual = (salary[3] * 12) * 0.03;
    dressing_annual = (((salary[4] * 12) * 0.1) * 0.65);

    const total = basic_annual + housing_annual + transport_annual + utility_annual + dressing_annual;

    final_figure.innerHTML = total.toFixed(2)
    clearAllInput()
}

function clearAllInput() {
    result = []
    basic.value = ""
    housing.value = ''
    transport.value = ""
    utility.value = ''
    dressing.value = ""
}

btn.addEventListener('click', checkingForValidInputs);

input.forEach(eachItem => {
    eachItem.addEventListener('keypress', (e) => {
        if (e.key == "Enter") {
            checkingForValidInputs()
        }
    });
})