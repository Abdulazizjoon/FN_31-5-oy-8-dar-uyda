const p = document.querySelector('p')
let btn=document.querySelector('button')
    btn.addEventListener("click", function () {
    const input = document.querySelector("input").value.trim();
    if (input.value.length==0) {
        return false
      }
   
    fetch("https://reqres.in/api/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
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
      p.innerHTML+= `Foydalanuvchi muvaffaqiyatli royxatga olindi`;
    })
    .catch((error) => {
      console.error(error);
      p.innerHTML+= "Xatolik yuz berdi. Iltimos, qayta urinib koring.";
    });
});
