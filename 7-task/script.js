let kalit = `6c36a6d7d81608dd9365383e`;
let btn = document.querySelector("button");
btn.addEventListener("click", async () => {
  let select = document.querySelector("select");
  let input = document.querySelector("input");
  let p = document.querySelector("p");
    fetch(`https://v6.exchangerate-api.com/v6/${kalit}/latest/USD`, {
      method:'GET'
  })
    .then((response) => {
      if (response.status == 200) {
        return response.json();
      }
    })
    .then((data) => {
        console.log(data);
        let rate = data.conversion_rates[select.value];
        let mone = (input.value * rate).toFixed(2);
        p.textContent += mone
    })
    .catch((err) => {
        console.log(err);
        alert(err)
    });
});
