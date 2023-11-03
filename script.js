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

// const fTime = `${hours}:${mins}`; 
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

