function askMyName() {
  const name = prompt(); // เรียกใช้คำสั่ง prompt เพื่อถามชื่อ https://www.w3schools.com/jsref/met_win_prompt.asp

  if (name != null) {
    document.getElementById("title").innerHTML = "My name is " + name;
  }
}

function helloWorld() {
  const h1message = document.getElementById("title").textContent;
  alert(h1message + "ใส่คำคมหลังรถสิบล้อ" + "ขี้เกียจอ่ะะ!!!!"); // ใช้คำสั่ง document.getElementById เหมือนใน askMyName เพื่อเอาข้อความใน h1 มาใส่
}
