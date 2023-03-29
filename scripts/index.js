let profileEditButton = document.querySelector('.profile__edit-button');
let profilePopup = document.querySelector('.popup');
let profilePopupCloseButton = document.querySelector('.popup__close-button');
let profileEditForm = document.querySelector('.popup__form')
let profileEditSaveButton = profileEditForm.querySelector('.popup__save-button');
let profileName = document.querySelector('.profile__name');
let profileOccupation = document.querySelector('.profile__occupation');
let profileInputName = document.querySelector('.popup__input_type_name');
let profileInputAbout = document.querySelector('.popup__input_type_about');

function openProfilePopup(click) {
    profilePopup.classList.add('popup_opened');
    profileInputName.value = profileName.textContent;
    profileInputAbout.value = profileOccupation.textContent;

}

function closeProfilePopup(click) {
    profilePopup.classList.remove('popup_opened');
}

function handleProfileEditFormSubmit(evt) {
    evt.preventDefault();
    profileName.textContent = profileInputName.value;
    profileOccupation.textContent = profileInputAbout.value;
    closeProfilePopup()
}

profileEditButton.addEventListener('click', openProfilePopup);
profilePopupCloseButton.addEventListener('click', closeProfilePopup);
profileEditForm.addEventListener('submit', handleProfileEditFormSubmit);