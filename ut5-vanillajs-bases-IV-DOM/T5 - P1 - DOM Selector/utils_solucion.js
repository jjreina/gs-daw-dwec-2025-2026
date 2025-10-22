export const getAllChipClass = () => {
    return document.querySelectorAll('.chip');
};

export const getAllParagraphs = () => {
    return document.querySelectorAll('p');
}

export const getAllListItems = () => {
    return document.querySelectorAll('li');
}

export const getAllOptionFromThemeSelect = () => {
    return document.querySelectorAll('#tema option');
};

export const getUserFromForm = () => {
    return document.getElementById("usuario")
}

export const getMailFromForm = () => {
    return document.getElementById("correo")
}

export const getAllColorRadios = () => {
    return document.querySelectorAll('input[name="color"]');
}

export const getAllCheckboxes = () => {
    return document.querySelectorAll('input[type="checkbox"]');
}

export const getAllOptionsFromCursosSelect = () => {
    return document.querySelectorAll('#cursos option');
}

export const getTextArea = () => {
    return document.getElementById("bio");
}

export const getThemeSelectedOption = () => {
    const select = document.querySelector("#tema");
    return `${select.value}  ->  ${select.options[select.selectedIndex].textContent}`;
}

export const getColorSelectedRadio = () => {
    const radios =  getAllColorRadios(); 
    return Array.from(radios).find(radio => radio.checked);
}    

export const getCheckBoxSelected = () => {
    const checkboxes = getAllCheckboxes();
    return Array.from(checkboxes).find(checkbox => checkbox.checked);
}   

