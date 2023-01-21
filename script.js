let fun = () => {
  // let bt2 = document.getElementById("btn2");
  // bt2.addEventListener('click', () => {
  //   clearInterval(n);
  // })
  let a = new Date();
  // console.log(a.getHours(), a.getMinutes(), a.getSeconds(), a.getDay(), a.getDate(), a.getMonth(), 1900+a.getYear(), a);
  let b1 = document.getElementById("box1");
  let b2 = document.getElementById("box2");
  let b3 = document.getElementById("box3");
  let z1 = "";
  let hr = a.getHours();
  if (hr >= 0 && hr <= 9) { z1 = "0"; }
  b1.innerHTML = `<h1>${z1 + hr}</h1>`;

  let z2 = "";
  let min = a.getMinutes();
  if (min >= 0 && min <= 9) { z2 = "0"; }
  b2.innerHTML = `<h1>${z2 + min}</h1>`;

  let z3 = "";
  let sec = a.getSeconds();
  if (sec >= 0 && sec <= 9) { z3 = "0"; }
  b3.innerHTML = `<h1>${z3 + sec}</h1>`;

  let cal1 = document.getElementsByClassName("cal1")[0];
  let d_array = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  let d = a.getDay();
  cal1.innerHTML = d_array[d];

  let cal2 = document.getElementsByClassName("cal2")[0];
  let c = "0";
  if (a.getMonth() == 10 || a.getMonth() == 11) { c = ""; }
  cal2.innerHTML = `${a.getDate()}/${c + (a.getMonth() + 1)}/${a.getYear() + 1900}`;
}

let n = setInterval(fun, 1000);

// let bt1 = document.getElementById("btn1");
// bt1.addEventListener('click', () => {
//   n = setInterval(fun, 1000);
// })