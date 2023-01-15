let adviceNumber = document.getElementById("adviceNumber");
let adviceField = document.getElementById("adviceField");
let btn = document.getElementById("btn");

btn.addEventListener("click", advice);

function advice() {
  const url = "https://api.adviceslip.com/advice";

  fetch(url)
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Request failed with status code: " + response.status);
      }
    })
    .then((data) => {
      adviceNumber.innerHTML = `ADVICE #${data.slip.id}`;
      adviceField.innerHTML = `"${data.slip.advice}"`;
      console.log(data);
    })
    .catch((error) => {
      console.log(error);
    });
}
