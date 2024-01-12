const initialCards = [
  {
    name: "Yosemite Valley",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/yosemite.jpg",
  },
  {
    name: "Lake Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lake-louise.jpg",
  },
  {
    name: "Bald Mountains",
    link: " https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/latemar.jpg",
  },
  {
    name: "Vanoise National Park",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lago.jpg",
  },
];

const profileEditBtn = document.querySelector("#profile__edit-button");
const profileEditModal = document.querySelector("#profile-edit-modal");
//const editModal = document.querySelector(".modal");
const profileCloseBtn = document.querySelector("#profile-close-button");
const profileFormElement = document.querySelector("#profile-edit-modal-form");
const nameInput = document.querySelector("#profile-title-input");
const jobInput = document.querySelector("#profile-description-input");
const profileName = document.querySelector(".profile__title");
const profileJob = document.querySelector(".profile__description");
const profileEditForm = profileEditModal.querySelector(
  "#profile-edit-modal-form"
);
const template = document.querySelector("#template").content;

const cardListEl = document.querySelector(".card__gallery");
const cardEditModal = document.querySelector("#card-edit-modal");
const cardEditForm = document.querySelector("#card-edit-modal-form");
const cardTitle = document.querySelector("#card-title-input");
const cardUrl = document.querySelector("#card-edit-image-url");
const cardOpenBtn = document.querySelector("#profile__add-button");
const cardCloseBtn = document.querySelector("#card-edit-close-button");

function openModalProfile() {
  profileEditModal.classList.add("modal_opened");

  //editModal.classList.add("modal_opened");
  //cardEditModal.classList.add("modal_opened"); produced two overlapping modals
}
function openModalCardEdit() {
  cardEditModal.classList.add("modal_opened");
}

function fillProfileForm() {
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
}

function fillCardEditForm() {}
function fillProfileInfo() {
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
}

profileEditBtn.addEventListener("click", () => {
  openModalProfile();
  fillProfileForm();
  //set input fields to have the value, text content pulls the text from profileName and profileDescription
});

cardOpenBtn.addEventListener("click", () => {
  openModalCardEdit();
});

//function closeModal() {
//editModal.classList.remove("modal_opened");
//}
function closeModalProfile() {
  profileEditModal.classList.remove("modal_opened");
}

function closeModalCardEdit() {
  cardEditModal.classList.remove("modal_opened");
}

cardCloseBtn.addEventListener("submit", (evt) => {
  evt.preventDefault();
  closeModalCardEdit();
});

cardCloseBtn.addEventListener("click", () => {
  closeModalCardEdit();
});

profileEditForm.addEventListener("submit", (evt) => {
  evt.preventDefault();
  fillProfileInfo();
  closeModalProfile();
});

profileCloseBtn.addEventListener("click", () => {
  closeModalProfile();
});

function getCardElement(cardData) {
  const cardElement = template.cloneNode(true);
  const cardImageEl = cardElement.querySelector(".card__image");
  const cardTitleEl = cardElement.querySelector(".card__title");
  cardTitleEl.textContent = cardData.name;
  cardImageEl.src = cardData.link;
  cardImageEl.alt = cardData.name;
  return cardElement;
}

initialCards.forEach((cardData) => {
  const cardElement = getCardElement(cardData);
  cardListEl.append(cardElement);
});
const likeButtons = document.querySelectorAll(".card__like-button");
//need to add it after the cards and template is rendered

likeButtons.forEach((likeButton) => {
  likeButton.addEventListener("click", () => {
    likeButton.classList.toggle("card__like-button_active");
  });
});
