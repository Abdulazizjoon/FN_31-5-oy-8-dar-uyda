const p = document.querySelector("p");
let btn = document.querySelector("button");

btn.addEventListener("click", function () {
  const input = document.querySelector("input");
  if (input.value.length == 0) {
    alert("bunday nom bolishi munkun emas");
    return;
  }
  function card(data) {
    return `
  <h2>name: ${input.value}</h2>
  <p>id: ${data.id}</p>
  <p class="createAt">create at: ${data.createdAt}</p>
  `;
  }

  fetch("https://reqres.in/api/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: input,
    }),
  })
    .then((response) => {
      if (response.status >= 201) {
        return response.json();
      }
    })
    .then((data) => {
      console.log(data);
      alert("Foydalanuvchi muvaffaqiyatli royxatga olindi");
      let cards = card(data);
      document.body.innerHTML += cards;
    })
    .catch((error) => {
      console.error(error);
      p.innerHTML = "Xatolik yuz berdi. Iltimos, qayta urinib koring.";
    });
});
