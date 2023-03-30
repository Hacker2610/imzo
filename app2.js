//income inputs
const incomeSalary = document.getElementById('income-salary'),
      incomeFreelance = document.getElementById('income-freelance'),
      incomeExtra1 = document.getElementById('income-extra-1');

//costs inputs
const costsFlat = document.getElementById('costs-flat'),
      costsHouseServices = document.getElementById('costs-house-services'),
      costsTransport = document.getElementById('costs-transport');

//play inputs
const playGame = document.getElementById('play-game'),
      playWarGame = document.getElementById('play-war-game'),
      playSimulator = document.getElementById('play-simulator');

//make inputs
const makeFood = document.getElementById('make-food'),
      makeThing = document.getElementById('make-thing'),
      makeBreakfast = document.getElementById('make-breakfast');

//do inputs
const doWork = document.getElementById('do-work'),
      doFood = document.getElementById('do-food'),
      doToy = document.getElementById('do-toy');

//go inputs
const goDeliver = document.getElementById('go-deliver'),
      goToSchool = document.getElementById('go-to-school'),
      goHome = document.getElementById('go-home');

//get inputs
const getGift = document.getElementById('get-gift'),
      getMoney = document.getElementById('get-money'),
      getIdea = document.getElementById('get-idea');

//got inputs
const gotPhone = document.getElementById('got-phone'),
      gotPen = document.getElementById('got-pen'),
      gotPencil = document.getElementById('got-pencil');

//see inputs
const seeStreet = document.getElementById('see-street'),
      seeHome = document.getElementById('see-home'),
      seePats = document.getElementById('see-pats');

//sell inputs
const sellFlower = document.getElementById('sell-flower'),
      sellCat = document.getElementById('sell-cat'),
      sellCar = document.getElementById('sell-car');


//total inputs
const totalMonthInput = document.getElementById('total-month');
const totalYearInput = document.getElementById('total-year');
const totalTimeInput = document.getElementById('total-time');
const totalAllInput = document.getElementById('total-all');
const totalHaveInput = document.getElementById('have-number');
const totalFoodInput = document.getElementById('total-food');
const totalToysInput = document.getElementById('total-toys');
const totalGoesInput = document.getElementById('total-goes');
const totalGetsInput = document.getElementById('total-gets');
const totalGotsInput = document.getElementById('total-gots');
const totalSeesInput = document.getElementById('total-sees');
const totalSellsInput = document.getElementById('total-sells');



let totalMonth, totalYear, totalTime, totalAll, totalHave, totalFood, totalToys, totalGoes, totalGets, totalGots, totalSees, totalSells;


const inputs = document.querySelectorAll('.input');
for(input of inputs) {
    input.addEventListener('input', () => {
      countingAvailableMoney();
    })
}

const strToNum = str => str.value ? parseInt(str.value) : 0

const countingAvailableMoney = () => {
      const totalPerMonth = strToNum(incomeSalary) * strToNum(incomeFreelance) * strToNum(incomeExtra1)  / 1000000;
      const totalCosts = strToNum(costsFlat) * strToNum(costsHouseServices) * strToNum(costsTransport) / 1000000;
      const totalPlay = strToNum(playGame) * strToNum(playWarGame) * strToNum(playSimulator) / 1000000;
      const totalMake = strToNum(makeFood) * strToNum(makeThing) * strToNum(makeBreakfast) / 1000000;
      const totalNumber = strToNum(incomeExtra1) + strToNum(costsTransport) + strToNum(playSimulator) + strToNum(makeBreakfast) + strToNum(doToy) + strToNum(goHome) + strToNum(getIdea) + strToNum(gotPencil) + strToNum(seePats) + strToNum(sellCar);
      const totalDo = strToNum(doWork) * strToNum(doFood) * strToNum(doToy) / 1000000;
      const totalGo = strToNum(goDeliver) * strToNum(goToSchool) * strToNum(goHome) / 1000000;
      const totalGet = strToNum(getGift) * strToNum(getMoney) * strToNum(getIdea) / 1000000;
      const totalGot = strToNum(gotPhone) * strToNum(gotPen) * strToNum(gotPencil) / 1000000;
      const totalSee = strToNum(seeStreet) * strToNum(seeHome) * strToNum(seeStreet) / 1000000;
      const totalSell = strToNum(sellFlower) * strToNum(sellCat) * strToNum(sellCar) / 1000000;






      totalMonth = totalPerMonth;
      totalMonthInput.value = totalMonth;

      totalYear = totalCosts;
      totalYearInput.value = totalYear;

      totalTime = totalPlay;
      totalTimeInput.value = totalTime;

      totalAll = totalPerMonth + totalCosts + totalPlay + totalFood + totalToys + totalGoes + totalGets + totalGots + totalSees + totalSells;
      totalAllInput.value = totalAll;

      totalHave = totalNumber;
      totalHaveInput.value = totalHave;

      totalFood = totalMake;
      totalFoodInput.value = totalFood;

      totalToys = totalDo;
      totalToysInput.value = totalToys;

      totalGoes = totalGo;
      totalGoesInput.value = totalGoes;

      totalGets = totalGet;
      totalGetsInput.value = totalGets;

      totalGots = totalGot;
      totalGotsInput.value = totalGots;

      totalSees = totalSee;
      totalSeesInput.value = totalSees;

      totalSells = totalSell;
      totalSellsInput.value = totalSells;
}

