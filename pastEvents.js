
const pastContainer = document.getElementById("past-cards")
const eventos = []
for(let evento of data.eventos){
  if(evento.id < 8){
    eventos.push(evento)
  }
}

let template = ''



for(let evento of eventos){
  template += createCard(evento)
}
pastContainer.innerHTML = template


function createCard(evento){
  return ` <div class="card">
  <img src=${evento.image} class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${evento.name}</h5>
    <p class="card-text">Enjoy your favourites dishes from different countries in a unique event for the whole family</p>
  </div>
  <div class="detail-btn">
    <h6>Price - ${evento.price}</h6>
    <button>Details</button>
  </div>
  <div class="card-footer">
    <small class="text-body-secondary">Last updated 3 mins ago</small>
  </div>
  </div>`
}


