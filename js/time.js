function clock() {
  var date = new Date();
  var month = date.getMonth();
  var clockDate = date.getDate();
  var day = date.getDay();
  var week = ['Sun', 'Mon', 'Tue', 'Wed', 'Thr', 'Fri', 'Sat'];
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var seconds = date.getSeconds();

  document.getElementById("time").innerHTML =
    (month + 1) + "/" + clockDate + " " +
    week[day] + " " + hours + ":" +
    minutes + ":" + seconds;
}



function init() {
  clock();
  setInterval(clock, 1000);
}

init();