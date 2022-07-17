let Name = prompt ("Lütfen adınızı ve soyadınıızı girer misiniz?")

let ad = document.querySelector("#myName");

ad.innerHTML = Name


function  time () {
    let momentary = new Date ();

    let hours = momentary.getHours();

    let minutes = momentary.getMinutes();

    let seconds = momentary.getSeconds();
    
    let day = new Date ();

    let days = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe","Cuma","Cumartesi"]

    document.querySelector("#myClock").innerHTML = `${hours} : ${minutes} : ${seconds}  ${days[day.getDay()]}`;
    
  }

  let at_the_moment  = setInterval(time,100);
