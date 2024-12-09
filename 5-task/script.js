let p = document.querySelector(".p");
let btn = document.querySelector(".btn");
let input = document.querySelector('input')
let wrapper=document.querySelector('.wrapper')
let res=input.value
function card(data) {
    return `
    <div class="card">
        <img src="${data.image}" alt="" />
        <p class="p">name: ${data.result.name}</p>
        <p class="p">status: ${data.status}</p>
      </div>
    `;
}
btn.addEventListener("click", function () {
  fetch(`https://rickandmortyapi.com/api/character/?name=${res}`, {
    method: "GET",
  })
    .then((response) => {
      if (response.status >= 200) {
        return response.json();
      }
    })
    .then((data) => {
        console.log(data);    
        let card = card(data)
        wrapper.innerHtml=card
    })
    .catch((err) => {
      console.log(err);
    });
});
