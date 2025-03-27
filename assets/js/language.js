// Get the user's preferred language from localStorage or default to English
let currentLanguage = localStorage.getItem('language') || 'en';

// Function to change the language
function changeLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('language', lang);
    
    // Update active button state
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector(`.lang-btn[onclick*="${lang}"]`).classList.add('active');
    
    updateContent();
}

// Function to update all content with the selected language
function updateContent() {
    // Update title
    document.querySelector('#hero h2').textContent = translations[currentLanguage].title;
    document.querySelector('#hero p').textContent = translations[currentLanguage].subtitle;
    
    // Update ALL share exam buttons
    document.querySelectorAll('a.button').forEach(button => {
        if (button.textContent.toLowerCase().includes('share') || 
            button.textContent.toLowerCase().includes('comparte')) {
            button.textContent = translations[currentLanguage].shareExam;
        }
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

    // Update ALL "How to find exams" sections
    document.querySelectorAll('.major h2').forEach(header => {
        if (header.textContent.toLowerCase().includes('how to find') || 
            header.textContent.toLowerCase().includes('cómo encontrar')) {
            header.textContent = translations[currentLanguage].howToFind;
        }
    });
    
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

// Add some styling for the language selector buttons
const style = document.createElement('style');
style.textContent = `
    .language-selector {
        position: absolute;
        top: 20px;
        right: 20px;
        z-index: 1000;
    }
    .lang-btn {
        background: rgba(255, 255, 255, 0.1);
        border: 2px solid #fff;
        color: #fff;
        padding: 8px 15px;
        margin: 0 5px;
        cursor: pointer;
        border-radius: 4px;
        transition: all 0.3s ease;
        font-weight: bold;
    }
    .lang-btn:hover {
        background: #fff;
        color: #000;
    }
    .lang-btn.active {
        background: #fff;
        color: #000;
    }
`;
document.head.appendChild(style);

// Initialize the content and active button state when the page loads
document.addEventListener('DOMContentLoaded', () => {
    // Set initial active button
    document.querySelector(`.lang-btn[onclick*="${currentLanguage}"]`).classList.add('active');
    updateContent();
}); 