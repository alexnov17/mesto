let profileEditButton = document.querySelector('.profile__edit-button');
let profilePopup = document.querySelector('#profile-popup');
let profilePopupCloseButton = document.querySelector('.popup__close-button');
let profileEditForm = document.querySelector('[name="profile-edit-form"]');
let profileEditSaveButton = profileEditForm.querySelector('.popup__save-button');
let profileName = document.querySelector('.profile__name');
let profileOccupation = document.querySelector('.profile__occupation');
let profileInputName = profileEditForm.querySelector('.popup__input_type_name');
let profileInputAbout = profileEditForm.querySelector('.popup__input_type_about');
let cards = document.querySelector('.cards');
let card = document.querySelector('.card');
let cardEditForm = document.querySelector('[name="card-add-form"]');
let cardInputName = cardEditForm.querySelector('.popup__input_type_name');
let cardInputLink = cardEditForm.querySelector('.popup__input_type_about');
let cardPopup = document.querySelector('#card-popup');
let cardAddButton = document.querySelector('.profile__add-button');
let cardCloseButton = cardPopup.querySelector('.popup__close-button');
let imagePopup = document.querySelector('#image-popup');
let closeImagePopupButton = imagePopup.querySelector('.popup__close-button');
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


//Открытие редактора профиля
function openProfilePopup(click) {
    profilePopup.classList.add('popup_opened');
    profileInputName.value = profileName.textContent;
    profileInputAbout.value = profileOccupation.textContent;
}

//Закрытие закрытие редактора профиля
function closeProfilePopup(click) {
    profilePopup.classList.remove('popup_opened');
}

//Редактирование профиля
function handleProfileEditFormSubmit(evt) {
    evt.preventDefault();
    profileName.textContent = profileInputName.value;
    profileOccupation.textContent = profileInputAbout.value;
    closeProfilePopup()
}

//Добавление карточек
function addCard(initialCard, before) {
    let cardTemplate = document.querySelector('#card-template').content;
    let card = cardTemplate.querySelector('.card').cloneNode(true);
    card.querySelector('.card__place-name').textContent = initialCard.name;
    let cardImage = card.querySelector('.card__image');
    cardImage.src = initialCard.link;
    cardImage.alt = initialCard.name;
    if (before) {
        cards.prepend(card);
    } else {
        cards.append(card);
    }
    let like = card.querySelector('.card__like-button');
    like.addEventListener('click', toggleLikeButton);
    let deleteButton = card.querySelector('.card__delete-button');
    deleteButton.addEventListener('click', handleDeleteButton);
    cardImage.addEventListener('click', openImagePopup);

}

//Кнопка добавления новой карточки
function handleAddCardFormSubmit(evt) {
    evt.preventDefault();
    addCard({ name: cardInputName.value, link: cardInputLink.value }, true)
    closeCardPopup()
}

//Отображение карточек
function cardsRender() {
    initialCards.forEach((card) => addCard(card, false));
}

cardsRender()

//Открытие меню добавления новой карточки
function openCardPopup(click) {
    cardPopup.classList.add('popup_opened');
}

//Закрытие меню добавления новой карточки
function closeCardPopup(click) {
    cardPopup.classList.remove('popup_opened');
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
    let imagePopupImage = imagePopup.querySelector('.popup__image');
    let imagePopupTitle = imagePopup.querySelector('.popup__image-description');
    imagePopupImage.src = event.target.src;
    imagePopupImage.alt = event.target.alt;
    imagePopupTitle.textContent = event.target.alt;
    imagePopup.classList.add('popup_opened');
    imagePopup.classList.add('popup__image-overlay');
}

//Закрыть увеличенное изображение
function handlePopupImageCloseButton() {
    imagePopup.classList.remove('popup_opened');
}

profileEditButton.addEventListener('click', openProfilePopup);
profilePopupCloseButton.addEventListener('click', closeProfilePopup);
profileEditForm.addEventListener('submit', handleProfileEditFormSubmit);
cardEditForm.addEventListener('submit', handleAddCardFormSubmit);
cardAddButton.addEventListener('click', openCardPopup);
cardCloseButton.addEventListener('click', closeCardPopup);
closeImagePopupButton.addEventListener('click', handlePopupImageCloseButton);




