const arrLes = [];

arrLes[0] = {
 Name : "Програмування",
 Start : "09:00",
 End : "10:20",
 teachSurname : "Lorem"
};
arrLes[1] = {
    Name : "Математика",
    Start : "10:30",
    End : "11:50",
    teachSurname : "Ipsenko"
};
arrLes[2] = {
    Name : "Фізика",
    Start : "12:10",
    End : "13:30",
    teachSurname : "Doroschnichenko"
};
arrLes[3] = {
    Name : "Хімія",
    Start : "13:40",
    End : "15:00",
    teachSurname : ""
};
arrLes[4] = {
    Name : "Англійська",
    Start : "15:10",
    End : "16:30",
    teachSurname : "Himalyska"
};

// console.log(typeof(+arrLes[4].Start));

const currentDate = new Date();

let hours = currentDate.getHours();
let mins = currentDate.getMinutes();

if (hours < 10){
    hours = `0` + hours;
}else if(hours == 24){
    hours = `00`;
}

if (mins < 10){
    mins = `0` + mins;
}else if(mins === '24'){
    mins = `00`;
}

const fTime = `${hours}:${mins}`; 
// const fTime = `10:25`;
// const fTime = `13:53`;
// const fTime = `00:33`;
// const fTime = `15:33`; 
// const fTime = `18:32`;

const calcTime = function() {
for (let i = 0; i < arrLes.length; i++) {
  if ((fTime >= arrLes[i].Start && fTime <= arrLes[i].End)){
    if(arrLes[i].teachSurname === ''){
       return `Зараз ${arrLes[i].Name} але вчителя не назначено`;
    }
    else{
        return `Зараз ${arrLes[i].Name}`;
    
    }

    }
    if (fTime >= arrLes[i].End && fTime < arrLes[i+1].Start){
      return `Зараз перерва`;

    }
    
if (fTime > (arrLes[arrLes.length-1]).End)
     {
       return `Пари скінчилися`;
  
    } 
    
    if(fTime < arrLes[0].Start) {
     return `Пари ще не почалися`
    }
    // fTime > (arrLes[arrLes.length-1]).End ? `Пари скінчилися` :  `Пари ще не почалися`;

 }
}



const btn = document.querySelector('.btn-b');
btn.addEventListener('click', () => {
const res = calcTime();
alert (res);
});








///lr 2


const href = document.querySelector('.linklr2');
const numOne = document.querySelector('#firstN');
const numTwo = document.querySelector('#secondN');
const operation = document.querySelector('#operation');
const inputF = document.querySelector('.lr2');

let numOneVal;
let numTwoVal;
let operationVal;

href.addEventListener("mouseover", () => {
    alert('Зараз ви перейдет на сайт google.com')
}) 

numOne.addEventListener('change', () =>{
    numOneVal = numOne.value;
})

numTwo.addEventListener('change', () =>{
    numTwoVal = numTwo.value;
})

operation.addEventListener('change', () => {
    operationVal = operation.value;
    if (operationVal.toUpperCase() === operationVal.toLowerCase() || (!operationVal)){
        operation.style.color = 'red';
    } else {
        operation.style.color = 'black';
    }
})

inputF.addEventListener('mouseleave', () => {
    if (!operationVal || !numTwoVal || !numOneVal) {
        alert('заповніть всі поля');
    } else {
        let a = +numOneVal;
        let b = +numTwoVal;
        let result;
        switch (operationVal) {
            case 'сума':
                result = a + b;
                break;
            case 'різниця':
                result = a - b;
                break;
            case 'добуток':
                result = a * b;
                break;
            case 'ділення':
                result = a / b;
                break;
            default:
                alert('Невірна операція');
                return;
        }
        alert(`Результат ${result}`);
    }
});




//// lr3



const btnPressOne =  document.querySelector("#thirdLr");
const inputOne  =  document.querySelector("#countryList");
const listOne = document.querySelector("#listOne");
btnPressOne.addEventListener('click', () => {
    const countriesArr = inputOne.value.split(' ') || inputOne.value().split(',');
    console.log(countriesArr);
    countriesArr.forEach(element => {
        let liOne = document.createElement('li');
        liOne.textContent = element;
        listOne.appendChild(liOne);
    });
});

const inputTwo  =  document.querySelector("#countryComma");
const pEmpty = document.querySelector("#emptyCommaP");
const arr = [];

inputTwo.addEventListener('keypress', (e)=> {
    if (e.key === 'Enter') {
        arr.push(inputTwo.value)
        inputTwo.value = '';
        pEmpty.textContent = arr.join(', ');
      }
})


function highlightMaxCell() {
    
    const cells = document.querySelectorAll('#myTable td');
    let maxNumber = -Infinity;
    cells.forEach(cell => {
      const number = parseInt(cell.textContent);
      if (!isNaN(number) && number > maxNumber) {
        maxNumber = number;
      }
    });
  

    cells.forEach(cell => {
      const number = parseInt(cell.textContent, 10);
      if (!isNaN(number) && number === maxNumber) {
        cell.style.backgroundColor = 'red';
      } else {
        cell.style.backgroundColor = ''; 
      }
    });
  }
  



  //lr4


  class Car {
    constructor(color, brand, model) {
        this.color = color;
        this.brand = brand;
        this.model = model;
    }

    show(){
        let html = "";
		html += "<tr>";
		html += "<td>" + this.color + "</td>";
		html += "<td>" + this.brand + "</td>";
		html += "<td>" + this.model + "</td>";
		html += "</tr>";
		return html;
    }
  }


  const arrOfCars = [
     new Car('red', 'BMW', 'M5CS'),
     new Car('black', 'Mercedes', 'AMG GT'),
     new Car('green', 'Tesla', 'Plaid')
  ]


  function appearTable() {
    let table = "<table>";
    table += "<tr><td>Колір</td><td>Марка</td><td>Модель</td></tr>";
    arrOfCars.forEach(el => {
        table += el.show();
    });
    table += "</table>";
    document.getElementById("fTable").innerHTML = table;
  }
  