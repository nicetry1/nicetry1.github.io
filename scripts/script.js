// javascript will go here
const el = document.getElementById("form");
const doneBox = document.getElementById("doneBox");

el.addEventListener("submit", handleFormSubmit);

function handleFormSubmit(event){
  const form = event.currentTarget;
  console.log(form, 'form submitted')
 let url = `https://sheet.best/api/sheets/6023f9f4-e904-457e-ba6f-8181241d4e63`
 let name = form.name.value;
 let date = new Date().toLocaleDateString('en-US');
 let entry = form.entry.value;
 let detail = form.detail.value;

 fetch(url, {
     method: 'post',
     body: JSON.stringify({name: name, date: date, entry: entry, detail: detail,}),
     headers: {'Content-Type': 'application/json'}
 })
 .then((data) => {
      form.entry.value = 'thank you!';
      form.name.value = '';
      form.detail.value = '';
      document.getElementById('submit').style.display='none';
    }
  );
};

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

let span = document.getElementsByClassName("close")[0];

firstBtn = function() {
  firstModal.style.display = "block";
};
secondBtn = function() {
  secondModal.style.display = "block";
};
thirdBtn = function() {
  thirdModal.style.display = "block";
};
fourthBtn = function() {
  fourthModal.style.display = "block";
};
fifthBtn = function() {
  fifthModal.style.display = "block";
};

span.onclick = function() {
 firstModal.style.display = "none";
 secondModal.style.display = "none";
 thirdModal.style.display = "none";
 fourthModal.style.display = "none";
 fifthModal.style.display = "none";
};