let p = document.querySelector(".p");
let btn = document.querySelector(".btn");

btn.addEventListener("click", function () {
  fetch(`https://x-colors.yurace.pro/api/random`, {
    method: "GET",
  })
    .then((response) => {
      if (response.status == 200) {
        return response.json();
      }
    })
    .then((data) => {
      console.log(data); 
      p.style.backgroundColor = `${data.hex}`; 
    })
    .catch((err) => {
      console.error(err)
    })
});
