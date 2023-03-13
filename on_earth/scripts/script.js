// javascript will go here
const el = document.getElementById("form");

el.addEventListener("submit", handleFormSubmit);

function handleFormSubmit(event){
  const form = event.currentTarget;
  console.log(form, 'form submitted')
 let url = `https://sheet.best/api/sheets/6023f9f4-e904-457e-ba6f-8181241d4e63`
 let name = form.name.value;
 let date = new Date().toLocaleDateString('en-US');
 let entry = form.entry.value;
 fetch(url, {
     method: 'post',
     body: JSON.stringify({name: name, date: date, entry: entry,}),
     headers: {'Content-Type': 'application/json'}
 });
};