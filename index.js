function aylantir() {
  document.querySelector(".img1").classList.add("pressed");
  document.querySelector(".img2").classList.add("pressed");
  setTimeout(function () {
    document.querySelector(".img1").classList.remove("pressed");
    document.querySelector(".img2").classList.remove("pressed");
  }, 300);
  let tasodifiy1 = Math.floor(Math.random() * 6) + 1;
  let tasodifiy2 = Math.floor(Math.random() * 6) + 1;
  document.querySelector(".img").src = `assets/dice${tasodifiy1}.png`;
  document.querySelector(".img").src = `assets/dice${tasodifiy2}.png`;
  if (tasodifiy1 > tasodifiy2) {
    document.getElementById("winner").innerHTML = "Birinchi oyinchi golib";
  } else if (tasodifiy2 > tasodifiy1) {
    document.getElementById("winner").innerHTML = "ikkinchi oyinchi golib";
  } else {
    document.getElementById("winner").innerHTML = "Durrang";
  }
}
