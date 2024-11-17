const formData = {
    email: "",
    message: "",
};
const form = document.querySelector('.feedback-form');

const storageKey = 'feedback-form-state';

function saveToLocalStorage() {
    localStorage.setItem(storageKey, JSON.stringify(formData));
}

function loadFromLocalStorage() {
    const savedData = localStorage.getItem(storageKey);
    return savedData ? JSON.parse(savedData) : null;
}

function populateForm() {
    const savedData = loadFromLocalStorage();
    if (savedData) {
    form.email.value = savedData.email || '';
    form.message.value = savedData.message || '';
    formData.email = savedData.email || '';
    formData.message = savedData.message || '';
    }
}

form.addEventListener('input', (event) => {
    const { name, value } = event.target;
    formData[name] = value.trim(); 
    saveToLocalStorage();
});

form.addEventListener('submit', (event) => {
    event.preventDefault(); 
    if (!formData.email || !formData.message) {
    alert('Fill please all fields');
    return;
    }

    console.log(formData);

    form.reset();
    localStorage.removeItem(storageKey);
    formData.email = '';
    formData.message = '';
});

populateForm();