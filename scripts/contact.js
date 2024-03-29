/* jslint es6 */

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