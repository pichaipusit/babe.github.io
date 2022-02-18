function askMyName() {
  const name = prompt("sdsd, sds"); // เรียกใช้คำสั่ง prompt เพื่อถามชื่อ https://www.w3schools.com/jsref/met_win_prompt.asp

  if (name != null) {
    document.getElementById("title").innerHTML = "My name is " + name;
  }
}

function helloWorld() {
  const h1messag = document.getElementById("title").textContent;
  alert(h1messag + "ใส่คำคมหลังรถสิบล้อ" + "ขี้เกียจอ่ะะ!!!!"); // ใช้คำสั่ง document.getElementById เหมือนใน askMyName เพื่อเอาข้อความใน h1 มาใส่
}

// Exercise 1
let year = new Date().getFullYear();

function calAge() {
  let userAge = prompt("Enter your age:");
  let userAgeParsed = parseInt(userAge);
  if (Number.isInteger(userAgeParsed)) {
    let birthYear = year - userAgeParsed;
    alert(`ยินดีด้วย นายอยู่ในประเทศนี้มา ${birthYear} ปีแล้ว`);
  } else {
    alert("it's not a number! You F...");
  }
}

// Exercise 2
let myName = document.getElementById("my-name");
let myProvince = document.getElementById("my-province");

function loadProfile() {
  const name = "Babe";
  const province = "Udon Thani";
  myName.textContent = name;
  myProvince.textContent = province;
  console.log("🟣");
  console.log(myName);
}
