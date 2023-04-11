const profileEditButton = document.querySelector('.profile__edit-button');
const profilePopup = document.querySelector('#profile-popup');
const profilePopupCloseButton = profilePopup.querySelector('.popup__close-button');
const profileEditForm = document.querySelector('[name="profile-edit-form"]');
const profileEditSaveButton = profileEditForm.querySelector('.popup__save-button');
const profileName = document.querySelector('.profile__name');
const profileOccupation = document.querySelector('.profile__occupation');
const profileInputName = profileEditForm.querySelector('.popup__input_type_name');
const profileInputAbout = profileEditForm.querySelector('.popup__input_type_about');
const cards = document.querySelector('.cards');
const cardEditForm = document.querySelector('[name="card-add-form"]');
const cardInputName = cardEditForm.querySelector('.popup__input_type_name');
const cardInputLink = cardEditForm.querySelector('.popup__input_type_about');
const cardPopup = document.querySelector('#card-popup');
const cardAddButton = document.querySelector('.profile__add-button');
const cardCloseButton = cardPopup.querySelector('.popup__close-button');
const imagePopup = document.querySelector('#image-popup');
const closeImagePopupButton = imagePopup.querySelector('.popup__close-button');
const initialCards = [
    {
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];

//Открытие попапа
function openPopup(popupElement) {
    popupElement.classList.add('popup_opened');
}

//Закрытие попапа
function closePopup(popupElement) {
    popupElement.classList.remove('popup_opened');
}

//Открытие редактора профиля
function openProfilePopup(click) {
    openPopup(profilePopup);
    profileInputName.value = profileName.textContent;
    profileInputAbout.value = profileOccupation.textContent;
}

//Закрытие закрытие редактора профиля
function closeProfilePopup(click) {
    closePopup(profilePopup);
}

//Редактирование профиля
function handleProfileEditFormSubmit(evt) {
    evt.preventDefault();
    profileName.textContent = profileInputName.value;
    profileOccupation.textContent = profileInputAbout.value;
    closeProfilePopup()
}

const cardTemplate = document.querySelector('#card-template').content;

function createCards(item) {
    const card = cardTemplate.querySelector('.card').cloneNode(true);
    const cardImage = card.querySelector('.card__image');
    card.querySelector('.card__place-name').textContent = item.name;
    cardImage.src = item.link;
    cardImage.alt = item.name;
    const like = card.querySelector('.card__like-button');
    like.addEventListener('click', toggleLikeButton);
    const deleteButton = card.querySelector('.card__delete-button');
    deleteButton.addEventListener('click', handleDeleteButton);
    cardImage.addEventListener('click', openImagePopup);
    return card
}

function renderCards() {
    createCards();
    cards.prepend(card);
}

initialCards.reverse().forEach((card) => renderCards(card));

renderCards()

//Кнопка добавления новой карточки
function handleAddCardFormSubmit(evt) {
    evt.preventDefault();
    createCards({ name: cardInputName.value, link: cardInputLink.value });
    closeCardPopup()
}

//Открытие меню добавления новой карточки
function openCardPopup(click) {
    openPopup(cardPopup);
}

//Закрытие меню добавления новой карточки
function closeCardPopup(click) {
    closePopup(cardPopup);
    cardInputName.value = '';
    cardInputLink.value = '';
}

//Функция лайка
function toggleLikeButton(click) {
    click.target.closest('.card__like-button').classList.toggle('card__like-button_active');
}

//Удаление карточки
function handleDeleteButton(click) {
    click.target.closest('.card').remove();
}

//Увелить изображение
function openImagePopup(event) {
    const imagePopupImage = imagePopup.querySelector('.popup__image');
    const imagePopupTitle = imagePopup.querySelector('.popup__image-description');
    imagePopupImage.src = event.target.src;
    imagePopupImage.alt = event.target.alt;
    imagePopupTitle.textContent = event.target.alt;
    openPopup(imagePopup);
}

//Закрыть увеличенное изображение
function handlePopupImageCloseButton() {
    closePopup(imagePopup);
}

profileEditButton.addEventListener('click', openProfilePopup);
profilePopupCloseButton.addEventListener('click', closeProfilePopup);
profileEditForm.addEventListener('submit', handleProfileEditFormSubmit);
cardEditForm.addEventListener('submit', handleAddCardFormSubmit);
cardAddButton.addEventListener('click', openCardPopup);
cardCloseButton.addEventListener('click', closeCardPopup);
closeImagePopupButton.addEventListener('click', handlePopupImageCloseButton);

