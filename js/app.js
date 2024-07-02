// Name validation
const nameInput = document.querySelector(".names-input");
const nameError = document.querySelector(".red-sign-name");
const cardName = document.querySelector(".cname");

const validateName = () => {
    let value = nameInput.value.trim();

    if (value === "") {
        nameError.classList.remove("d-none");
        nameError.classList.add("d-block");
        return false;
    } else {
        nameError.classList.add("d-none");
        nameError.classList.remove("d-block");
        cardName.innerHTML = value;
        return true;
    }
};

nameInput.addEventListener("input", validateName);

// Card validation
const numberInput = document.querySelector(".number-input");
const cNumber = document.querySelector(".cc-number");
const cardNumberError = document.querySelector(".red-sign-number");

const formatCardNumber = (number) => number.replace(/(\d{4})(?=\d)/g, '$1 ');

const validateCard = () => {
    let value = numberInput.value;

    if (value.length > 16) {
        value = value.slice(0, 16);
        numberInput.value = value;
    }

    if (!/^\d+$/.test(value)) {
        cardNumberError.classList.remove("d-none");
        cardNumberError.classList.add("d-block");
        return false;
    } else if (value === "") {
        cardNumberError.classList.remove("d-none");
        cardNumberError.classList.add("d-block");
        cardNumberError.textContent = "!Field can't be left Empty.";
        return false;
    } else {
        cardNumberError.classList.add("d-none");
        cardNumberError.classList.remove("d-block");
        cNumber.innerHTML = formatCardNumber(value);
        return true;
    }
};

numberInput.addEventListener("input", validateCard);

// Month validation
const monthInput = document.querySelector(".month-input");
const cMonth = document.querySelector(".cmonth");
const monthError = document.querySelector(".red-sign-month");

const validateMonth = () => {
    let value = monthInput.value;

    if (value.length > 2) {
        value = value.slice(0, 2);
        monthInput.value = value;
    }

    if (!/^\d+$/.test(value)) {
        monthError.classList.remove("d-none");
        monthError.classList.add("d-block");
        monthError.textContent = "!only numbers";
        return false;
    } else if (parseInt(value) > 12 || parseInt(value) < 1) {
        monthError.classList.remove("d-none");
        monthError.classList.add("d-block");
        monthError.textContent = "!invalid Month";
        return false;
    } else if (value === "") {
        monthError.classList.remove("d-none");
        monthError.classList.add("d-block");
        monthError.textContent = "!Field can't be left Empty.";
        return false;
    } else {
        monthError.classList.add("d-none");
        monthError.classList.remove("d-block");
        cMonth.innerHTML = value;
        return true;
    }
};

monthInput.addEventListener("input", validateMonth);

// Year validation
const yearInput = document.querySelector(".year-input");
const cYear = document.querySelector(".cyear");
const yearError = document.querySelector(".red-sign-year");

const validateYear = () => {
    let value = yearInput.value;

    if (value.length > 2) {
        value = value.slice(0, 2);
        yearInput.value = value;
    }

    if (!/^\d+$/.test(value)) {
        yearError.classList.remove("d-none");
        yearError.classList.add("d-block");
        yearError.textContent = "!only numbers";
        return false;
    } else if (value === "") {
        yearError.classList.remove("d-none");
        yearError.classList.add("d-block");
        yearError.textContent = "!Field can't be left Empty.";
        return false;
    } else {
        yearError.classList.add("d-none");
        yearError.classList.remove("d-block");
        cYear.innerHTML = value;
        return true;
    }
};

yearInput.addEventListener("input", validateYear);

// CVC validation
const cvcInput = document.querySelector(".mycvc-input");
const cCvc = document.querySelector(".cardBack-cvc");
const cvcError = document.querySelector(".red-sign-cvc");

const validateCVC = () => {
    let value = cvcInput.value;

    if (value.length > 3) {
        value = value.slice(0, 3);
        cvcInput.value = value;
    }

    if (!/^\d+$/.test(value)) {
        cvcError.classList.remove("d-none");
        cvcError.classList.add("d-block");
        cvcError.textContent = "!only numbers";
        return false;
    } else if (value === "") {
        cvcError.classList.remove("d-none");
        cvcError.classList.add("d-block");
        cvcError.textContent = "!Field can't be left Empty.";
        return false;
    } else {
        cvcError.classList.add("d-none");
        cvcError.classList.remove("d-block");
        cCvc.innerHTML = value;
        return true;
    }
};

cvcInput.addEventListener("input", validateCVC);

// Button validation
const confirmInput = document.querySelector(".confirm-btn");
const myForm = document.querySelector(".myForm");

const validateBtn = (event) => {
    event.preventDefault();

    const isNameValid = validateName();
    const isCardValid = validateCard();
    const isMonthValid = validateMonth();
    const isYearValid = validateYear();
    const isCVCValid = validateCVC();

    if (isNameValid && isCardValid && isMonthValid && isYearValid && isCVCValid) {
        myForm.classList.add("d-none");
    }
};

confirmInput.addEventListener("click", validateBtn);
