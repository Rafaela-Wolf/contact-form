const submitBtn = document.querySelector('.submit-btn');
const inputsAndTextarea = document.querySelectorAll('.styled-input-textarea');
const activeSpan = document.querySelectorAll('.hidden-span');
const activeSpanQueryBtn = document.querySelector('.hidden-span-query-btn');
const activeSpanConsentBtn = document.querySelector('.hidden-span-consent-btn');

const successMessage = document.querySelector('.form-submitted');

submitBtn.addEventListener('click', (event) => {
    event.preventDefault();

    let allFieldsValid = true;

    inputsAndTextarea.forEach((field, index) => {
        if (field.value === "") {
            field.classList.add("error-border");
            field.classList.remove("styled-input-textarea");
            activeSpan[index].classList.remove("hidden-span");
            activeSpan[index].classList.add("active-span");

            allFieldsValid = false;
        } else {
            field.classList.remove("error-border");
            field.classList.add("styled-input-textarea");
            activeSpan[index].classList.remove("active-span");
            activeSpan[index].classList.add("hidden-span");
        }
    });

    const selectedQueryBtn = document.querySelector('.selected-query');

    if (!selectedQueryBtn) {
        if (activeSpanQueryBtn) {
            activeSpanQueryBtn.classList.remove("hidden-span-query-btn");
            activeSpanQueryBtn.classList.add("active-span");
        }

        allFieldsValid = false;
    } else {
        if (activeSpanQueryBtn) {
            activeSpanQueryBtn.classList.remove("active-span");
            activeSpanQueryBtn.classList.add("hidden-span-query-btn");
        }
    }

    const selectedConsentBtn = document.querySelector('.selected-consent');

    if (!selectedConsentBtn) {
        if (activeSpanConsentBtn) {
            activeSpanConsentBtn.classList.remove("hidden-span-consent-btn");
            activeSpanConsentBtn.classList.add("active-span");
        }

        allFieldsValid = false;
    } else {
        if (activeSpanConsentBtn) {
            activeSpanConsentBtn.classList.remove("active-span");
            activeSpanConsentBtn.classList.add("hidden-span-consent-btn");
        }
    }

    if (allFieldsValid) {
        successMessage.classList.remove('form-submitted');
        successMessage.classList.add('active-form-submitted');
    } else {
        successMessage.classList.remove('active-form-submitted');
        successMessage.classList.add('form-submitted');
    }
});

const queryTypeBtns = document.querySelectorAll('.btn');

queryTypeBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
        if (btn.classList.contains('selected-query')) {
            btn.classList.remove('selected-query');
        } else {
            const selectedQueryBtn = document.querySelector('.selected-query');
            if (selectedQueryBtn) {
                selectedQueryBtn.classList.remove('selected-query');
            }

            btn.classList.add('selected-query');
        }
    });
});

const consentBtn = document.querySelector('.consent-label');

consentBtn.addEventListener('click', () => {
    if (consentBtn.classList.contains('selected-consent')) {
        consentBtn.classList.remove('selected-consent');
    } else {
        const selectedConsentBtn = document.querySelector('.selected-consent');
        if (selectedConsentBtn) {
            selectedConsentBtn.classList.remove('selected-consent');
        }

        consentBtn.classList.add('selected-consent');
    }
});

