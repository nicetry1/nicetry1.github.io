
const firstModal = document.getElementById("firstModal");
const secondModal = document.getElementById("secondModal");
const thirdModal = document.getElementById("thirdModal");
const fourthModal = document.getElementById("fourthModal");
const fifthModal = document.getElementById("fifthModal");

const firstBtn = document.getElementById("firstContent");
const secondBtn = document.getElementById("secondContent");
const thirdBtn = document.getElementById("thirdContent");
const fourthBtn = document.getElementById("fourthContent");
const fifthBtn = document.getElementById("fifthContent");

const span1 = document.getElementById("close1");
const span2 = document.getElementById("close2");
const span3 = document.getElementById("close3");
const span4 = document.getElementById("close4");
const span5 = document.getElementById("close5");

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

span1.onclick = function() {
 firstModal.style.display = "none";
};
span2.onclick = function() {
  secondModal.style.display = "none";
};
span3.onclick = function() {
  thirdModal.style.display = "none";
};
span4.onclick = function() {
  fourthModal.style.display = "none";
};
span5.onclick = function() {
  fifthModal.style.display = "none";
};