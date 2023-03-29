let firstModal = document.getElementById("firstModal");
let secondModal = document.getElementById("secondModal");
let thirdModal = document.getElementById("thirdModal");
let fourthModal = document.getElementById("fourthModal");
let fifthModal = document.getElementById("fifthModal");

let firstBtn = document.getElementById("firstContent");
let secondBtn = document.getElementById("secondContent");
let thirdBtn = document.getElementById("thirdContent");
let fourthBtn = document.getElementById("fourthContent");
let fifthBtn = document.getElementById("fifthContent");

let span = document.getElementsByClassName("close");

firstBtn.onclick = function() {
  firstModal.style.display = "block";
};
secondBtn.onclick = function() {
  secondModal.style.display = "block";
};
thirdBtn.onclick = function() {
  thirdModal.style.display = "block";
};
fourthBtn.onclick = function() {
  fourthModal.style.display = "block";
};
fifthBtn.onclick = function() {
  fifthModal.style.display = "block";
};

span.onclick = function() {
 firstModal.style.display = "none";
 secondModal.style.display = "none";
 thirdModal.style.display = "none";
 fourthModal.style.display = "none";
 fifthModal.style.display = "none";
};