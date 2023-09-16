var imgArray = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg"];

setInterval(() => timeUpdate(), 500);
setInterval(() => randImgSet(), 60000);

function startSet() {
    randImgSet();
    timeUpdate();
}

function timeUpdate() {
    let nowDate = new Date();

    document.getElementById("timeBox").innerHTML = nowDate.getHours() + (nowDate.getMilliseconds() >= 500 ? " " : ":") + String(nowDate.getMinutes()).padStart(2, "0");
}

function randImgSet() {
    document.body.style.backgroundImage = "url(src/img/" + imgArray[Math.floor(Math.random() * imgArray.length)] + ")";
}