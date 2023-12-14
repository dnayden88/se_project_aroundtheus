let initialCards = [
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

//select the element from the DOM using querySelector
//console.log(profileEditBtn); checks to see if you have selected the correct element
//on this element listen for an event

const profileEditBtn = document.querySelector("#profile__edit-button");
const profileEditModal = document.querySelector("#profile-edit-modal");
const profileCloseBtn = document.querySelector("#profile-close-button");
const profileFormElement = document.querySelector("#modal-form");
const nameInput = document.querySelector("#profile-title-input");
//select the nameInput
const jobInput = document.querySelector("#profile-description-input");
//selects the profile description input
const profileName = document.querySelector(".profile__title");
//selects current profile name//
const profileJob = document.querySelector(".profile__description");
//selects current profile description//
const profileEditForm = profileEditModal.querySelector("#modal-form");
//selecting within the modal NOT the whole document
const template = document.querySelector("#template").content;
const cardListEl = document.querySelector(".card__gallery");
console.log(profileName.textContent);
//get the text content in profileName
console.log(profileJob.textContent);
//get the text content in profileDescription

function closePopUp() {
  profileEditModal.classList.remove("modal__opened");
}
//functions allow for code to be resused and this will be reused. Recommended to create a function to
//close mulitple pop ups. We only have one pop up right now.

profileEditBtn.addEventListener("click", () => {
  profileEditModal.classList.add("modal__opened");
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
  //set input fields to have the value, text content pulls the text from profileName and profileDescription
});
profileCloseBtn.addEventListener("click", () => {
  closePopUp();
});

profileEditForm.addEventListener("submit", (evt) => {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  closePopUp();
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
