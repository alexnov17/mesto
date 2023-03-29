let profileEditButton = document.querySelector('.profile__edit-button');
let profilePopup = document.querySelector('.profile-popup');
let profilePopupCloseButton = document.querySelector('.profile-popup__close-button');

let toggleProfilePopup = () => {
    profilePopup.classList.toggle('profile-popup_opened');
}

profileEditButton.addEventListener('click', toggleProfilePopup);
profilePopupCloseButton.addEventListener('click', toggleProfilePopup);

let profileEditForm = document.querySelector('.profile-popup__form')
let profileEditSaveButton = profileEditForm.querySelector('.profile-popup__save-button');
let profileName = document.querySelector('.profile__name');
let profileOccupation = document.querySelector('.profile__occupation');

function handleProfileEditFormSubmit(evt) {
    evt.preventDefault();
    let profileInputName = document.querySelector('.profile-popup__input_type_name').value;
    let profileInputAbout = document.querySelector('.profile-popup__input_type_about').value;
    profileName.textContent = profileInputName;
    profileOccupation.textContent = profileInputAbout;
    toggleProfilePopup();
}

profileEditForm.addEventListener('submit', handleProfileEditFormSubmit);