let Name = prompt ("Lütfen adınızı ve soyadınıızı girer misiniz?")

let ad = document.querySelector("#myName");

ad.innerHTML = Name

let timeDiv = document.querySelector("#myClock");

function showTime() {
    
    const weekday = [
        "Pazar",
        "Pazartesi",
        "Salı",
        "Çarşamba",
        "Perşembe",
        "Cuma",
        "Cumartesi"
    ];
    var time = new Date(),
    // Access the "getHours" method on the Date object with the dot accessor.
    hours = time.getHours(),
    // Access the "getMinutes" method with the dot accessor.
    minutes = time.getMinutes(),
    seconds = time.getSeconds(),
    day = weekday[time.getDay()];

  timeDiv.innerHTML = `
    ${harold(hours)}:${harold(minutes)}:${harold(seconds)} ${day}`;

  function harold(standIn) {
    if (standIn < 10) {
      standIn = "0" + standIn;
    }
    return standIn;
  }
}
setInterval(showTime, 1000);
