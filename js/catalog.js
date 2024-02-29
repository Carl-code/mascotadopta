let token = localStorage.getItem("token");

!token && window.open("../views/login.html", "_self");

const getPets = async () => {
  let response = await fetch(
    "https://javascript27g-c130d-default-rtdb.firebaseio.com/mascotadopta/pets/.json"
  );
  let data = await response.json();
  return data;
};

const test = async () => {
  let response = await getPets();
  console.log(response);
};

test();

let createPetCatalogCard = (petObject) => {
  let { picture, name, description } = petObject;

  let cardCol = document.createElement("div");
  cardCol.classList.add("col");

  let cardWrapper = document.createElement("div");
  cardWrapper.classList.add("card", "mb-3");

  let cardRow = document.createElement("div");
  cardRow.classList.add("row", "g-0");

  let imageWrapper = document.createElement("div");
  imageWrapper.classList.add("col-md-4");

  let cardImage = document.createElement("img");
  cardImage.classList.add("img-fluid", "rounded-start");
  cardImage.setAttribute("src", picture);
  cardImage.setAttribute("alt", "Imagen de un perro");

  let contentWrapper = document.createElement("div");
  contentWrapper.classList.add("col-md-8");

  let cardBody = document.createElement("div");
  cardBody.classList.add("card-body");

  let cardTitle = document.createElement("h5");
  cardTitle.classList.add("card-title");
  cardTitle.innerText = name;

  let cardText = document.createElement("p");
  cardText.classList.add("card-text");
  cardText.innerText = description;

  let buttonWrapper = document.createElement("div");
  buttonWrapper.classList.add("d-flex", "g-3", "justify-content-between");

  let detailButton = document.createElement("button");
  detailButton.classList.add("btn", "btn-primary");
  detailButton.innerText = "Ver detalle";

  let adoptButton = document.createElement("button");
  adoptButton.classList.add("btn", "btn-primary");
  adoptButton.innerText = "Adoptame";

  buttonWrapper.append(detailButton, adoptButton);
  cardBody.append(cardTitle, cardText, buttonWrapper);

  contentWrapper.append(cardBody);

  imageWrapper.append(cardImage);

  cardRow.append(imageWrapper, contentWrapper);

  cardWrapper.append(cardRow);

  cardCol.append(cardWrapper);

  return cardCol;
};
const printAllCards = async () => {
  let pets = await getPets();
  let cardWrapper = document.getElementById("card-wrapper");

  let keys = Object.keys(pets);

  keys.forEach((key) => {
    let petCard = createPetCatalogCard(pets[key]);
    cardWrapper.append(petCard);
  });
};

printAllCards();
