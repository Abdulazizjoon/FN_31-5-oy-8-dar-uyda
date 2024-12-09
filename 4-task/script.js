let p = document.querySelector(".p");
let btn = document.querySelector(".btn");

btn.addEventListener("click", function () {
  fetch(`https://v2.jokeapi.dev/joke/Any`, {
    method: "GET",
  })
    .then((response) => {
      if (response.status >= 200) {
        return response.json();
      }
    })
    .then((data) => {
      console.log(data);
      p.innerHTML = data.setup;
    })
    .catch((err) => {
      console.log(err);
    });
});
