// Get the user's preferred language from localStorage or default to English
let currentLanguage = localStorage.getItem('language') || 'en';

// Function to change the language
function changeLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('language', lang);
    document.getElementById('language-select').value = lang;
    updateContent();
}

// Function to update all content with the selected language
function updateContent() {
    // Update title
    document.querySelector('#hero h2').textContent = translations[currentLanguage].title;
    document.querySelector('#hero p').textContent = translations[currentLanguage].subtitle;
    
    // Update main buttons
    document.querySelectorAll('a.button').forEach(button => {
        // Update all share exam buttons regardless of current text
        button.textContent = translations[currentLanguage].shareExam;
    });

    // Update main description
    const mainDesc = document.querySelector('.col-6.col-12-narrower.feature h2');
    if (mainDesc) {
        mainDesc.innerHTML = translations[currentLanguage].mainDescription.replace(/\n/g, '<br/><br/>');
    }

    // Update "How you can collaborate" section
    document.querySelector('.features-2 .major h2').textContent = translations[currentLanguage].howCollaborate;

    // Update collaboration steps
    const features = document.querySelectorAll('.features .feature');
    features[0].querySelector('h2').textContent = translations[currentLanguage].participate;
    features[0].querySelector('p').textContent = translations[currentLanguage].participateDesc;
    features[1].querySelector('h2').textContent = translations[currentLanguage].findExams;
    features[1].querySelector('p').textContent = translations[currentLanguage].findExamsDesc;
    features[2].querySelector('h2').textContent = translations[currentLanguage].collectData;
    features[2].querySelector('p').textContent = translations[currentLanguage].collectDataDesc;

    // Update "How to find exams" section - Fixed selector
    const examSectionHeader = document.querySelector('.wrapper:not(.features-2) .container .major h2');
    if (examSectionHeader) {
        examSectionHeader.textContent = translations[currentLanguage].howToFind;
    }
    
    // Update exam types
    const examTypes = document.querySelectorAll('.exam-example p');
    examTypes[0].textContent = translations[currentLanguage].examTypes.university;
    examTypes[1].textContent = translations[currentLanguage].examTypes.school;
    examTypes[2].textContent = translations[currentLanguage].examTypes.textbook;
    examTypes[3].textContent = translations[currentLanguage].examTypes.language;
    examTypes[4].textContent = translations[currentLanguage].examTypes.driving;
    examTypes[5].textContent = translations[currentLanguage].examTypes.professional;
    examTypes[6].textContent = translations[currentLanguage].examTypes.trivia;

    // Update promo section
    document.querySelector('#promo h2').textContent = translations[currentLanguage].helpUs;
    document.querySelector('#promo a.button').textContent = translations[currentLanguage].shareExam;

    // Update join team section
    document.querySelector('#footer .major h2').textContent = translations[currentLanguage].joinTeam;

    // Update form placeholders
    document.querySelector('input[name="name"]').placeholder = translations[currentLanguage].formPlaceholders.name;
    document.querySelector('input[name="email"]').placeholder = translations[currentLanguage].formPlaceholders.email;
    document.querySelector('input[name="languages"]').placeholder = translations[currentLanguage].formPlaceholders.languages;
    document.querySelector('textarea[name="message"]').placeholder = translations[currentLanguage].formPlaceholders.message;
    document.querySelector('input[type="submit"]').value = translations[currentLanguage].formPlaceholders.send;
    document.querySelector('input[type="reset"]').value = translations[currentLanguage].formPlaceholders.clear;

    // Update footer
    document.querySelector('.menu li:first-child').firstChild.textContent = translations[currentLanguage].fundedBy;
    document.querySelector('.menu li:nth-child(2)').textContent = `© INCLUDE. ${translations[currentLanguage].rights}`;
    document.querySelector('.menu li:last-child').firstChild.textContent = `${translations[currentLanguage].designBy} `;
}

// Add styling for the language selector dropdown
const style = document.createElement('style');
style.textContent = `
    .language-selector {
        position: absolute;
        top: 20px;
        right: 20px;
        z-index: 1000;
    }
    #language-select {
        background: rgba(255, 255, 255, 0.9);
        border: 1px solid #000;
        color: #000;
        padding: 8px 30px 8px 15px;
        cursor: pointer;
        border-radius: 4px;
        appearance: none;
        -webkit-appearance: none;
        -moz-appearance: none;
        background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='black'%3e%3cpath d='M7 10l5 5 5-5z'/%3e%3c/svg%3e");
        background-repeat: no-repeat;
        background-position: right 8px center;
        background-size: 16px;
        min-width: 140px;
        transition: all 0.3s ease;
    }
    #language-select:hover {
        background-color: rgba(255, 255, 255, 0.2);
    }
    #language-select:focus {
        outline: none;
        box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.5);
    }
    #language-select option {
        background: #fff;
        color: #000;
        padding: 8px;
    }
`;
document.head.appendChild(style);

// Initialize the content and select the correct language when the page loads
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('language-select').value = currentLanguage;
    updateContent();
}); 