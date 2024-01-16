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
const cardCreateBtn = document.querySelector("#card-edit-create-button");
//const initialCardTitle = Object.values(initialCards)[0].name;
//access the title of first object inside of the array
//const initialCardImage = Object.values(initialCards)[0].link;
//access the image of the first object inside of the array

const openModal = (modal) => {
  modal.classList.add("modal_opened");
};

function fillProfileForm() {
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
}

function fillProfileInfo() {
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
}

profileEditBtn.addEventListener("click", () => {
  openModal(profileEditModal);
  fillProfileForm();
  //set input fields to have the value, text content pulls the text from profileName and profileDescription
});

cardOpenBtn.addEventListener("click", () => {
  openModal(cardEditModal);
});

const closeModal = (modal) => {
  modal.classList.remove("modal_opened");
};
cardCloseBtn.addEventListener("click", (evt) => {
  evt.preventDefault();
  closeModal(cardEditModal);
});

profileEditForm.addEventListener("submit", (evt) => {
  evt.preventDefault();
  fillProfileInfo();
  closeModal(profileEditModal);
});

profileCloseBtn.addEventListener("click", () => {
  closeModal(profileEditModal);
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

//function fillCardEditForm() {
//initialCardTitle = cardTitle.textContent;
//initialCardImage = cardUrl.textContent;
//}
//function fillCardEditInfo() {
//cardTitle.textContent = initialCardTitle;
// cardUrl.textContent = initialCardImage;} //trying to prefill the card edit modal with data from the array

cardCreateBtn.addEventListener("click", (evt) => {
  evt.preventDefault();
  closeModal(cardEditModal);
});
//the cardElement, does this exist outside of the getCardElement(cardData)?
//how to add an object to the array of objects inititalCards? (through the modal form)?
//the modal form needs to collect information (name, and link), then put it in the array as a new object.
//cannot use the push() method because it will add the object to the end of the array NOT the beginning.
//splice method ()https://www.programiz.com/javascript/examples/append-object-array
//the trash can icon needs to delete ANY object from the array. The trash can icon will need to have a function
//that will listen to the "click" event, then it needs to loop through the objects of the array and whatever is now "false" (click === false), needs to be removed?
