let p = document.querySelector(".wrapper");
let btn = document.querySelector(".btn");

btn.addEventListener("click", function () {
  fetch(`https://catfact.ninja/fact`, {
    method: "GET",
  })
    .then((response) => {
      if (response.status == 200) {
        return response.json();
      }
    })
    .then((data) => {
      console.log(data);
      p.innerHTML = data.slip.advice;
    })
    .catch((err) => {
      console.log(err);
    });
});
