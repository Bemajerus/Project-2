const questions = [
    {
        question: "Are you under 18?",
        options: ["Yes", "No"],
        correctAnswer: "No",
        explanation: "You cannot donate at this time. However, we would be delighted to see you when you are 18."
    },
    {
        question: "Are you 65 years of age or over?",
        options: ["Yes", "No"],
        correctAnswer: "No",
        explanation: "Donors over 70/plus must have a GP letter stating fitness to donate (this needs to be renewed annually), have donated within the last two years and are otherwise eligible. The maximum age to give blood is 79 years. If you are over 65 and have never given blood before, then you cannot donate However:  - if you are between 65 and 69 years and have given blood in the last 10 years then you can give blood."
    },
    {
        question: "Do you weigh less than 7 stone 12 lbs (less than 50kgs) or more than 25 stone (158kgs)?",
        options: ["Yes", "No"],
        correctAnswer: "No",
        explanation: "If you weigh less than 50 kgs or over 158 kgs you are unable to donate at this time."
    },
    {
        question: "For females (including transgender females) and transgender males only: Are you a first time donor or under 26 or have you not donated in 5 years?",
        options: ["Yes", "No"],
        correctAnswer: "No",
        explanation: "Yes - If you are a female (including transgender females) or transgender male donor , donating for the first time or you have not donated in 5 years or you are under 26 years of age and are less than 5ft 6 inches (168cms) in height and less than 10st 3lb (65 kgs), your height and weight will need to be assessed to establish your eligibility to donate."
    },
    {
        question: "Are you currently taking any medication other than the pill or HRT for the menopause? This includes prescribed or over the counter painkillers, aspirin, anti-inflammatories and creams, gels, or drops",
        options: ["Yes", "No"],
        correctAnswer: "No",
        explanation: "Some medications can be harmful to a patient receiving a blood transfusion.  You may not be be able to donate if you are taking medication to treat an illness or infection.In general, you must be fully recovered from an illness or infection and have completed the course of medication before donating.Please note, not all medications prevent donation -  please contact us at 1800 731137 for further information. Please ensure that you know the name of any medication you are currently taking or have taken in the past 4 weeks so that we can can assess your eligibility to donate."
    },
    {
        question: "Today or in the last 2 weeks have you had any illness or injury, e.g. a cough, a cold, a sore throat, vomiting, diarrhoea or an open wound?",
        options: ["Yes", "No"],
        correctAnswer: "No",
        explanation: "You cannot donate if you have any illness or injury which may mean that it is not safe to give your blood to a sick patient. Please check the FAQs or contact us on 1800 731 137 so that we can advise you."
    },
    {
        question: "Have you seen a doctor or had any medical tests or investigations in the last 12 months e.g. xrays , scans and or endoscopy?",
        options: ["Yes", "No"],
        correctAnswer: "No",
        explanation: ""
    },
    {
        question: "",
        options: ["Yes", "No"],
        correctAnswer: "No",
        explanation: ""
    },
    {
        question: "",
        options: ["Yes", "No"],
        correctAnswer: "No",
        explanation: ""
    },
    {
        question: "",
        options: ["Yes", "No"],
        correctAnswer: "No",
        explanation: ""
    },
    {
        question: "",
        options: ["Yes", "No"],
        correctAnswer: "No",
        explanation: ""
    },
    {
        question: "",
        options: ["Yes", "No"],
        correctAnswer: "No",
        explanation: ""
    },
    {
        question: "",
        options: ["Yes", "No"],
        correctAnswer: "No",
        explanation: ""
    },
    {
        question: "",
        options: ["Yes", "No"],
        correctAnswer: "No",
        explanation: ""
    },
    {
        question: "",
        options: ["Yes", "No"],
        correctAnswer: "No",
        explanation: ""
    },
    {
        question: "",
        options: ["Yes", "No"],
        correctAnswer: "No",
        explanation: ""
    },
    {
        question: "",
        options: ["Yes", "No"],
        correctAnswer: "No",
        explanation: ""
    },
    {
        question: "",
        options: ["Yes", "No"],
        correctAnswer: "No",
        explanation: ""
    },
    {
        question: "",
        options: ["Yes", "No"],
        correctAnswer: "No",
        explanation: ""
    },
    {
        question: "",
        options: ["Yes", "No"],
        correctAnswer: "No",
        explanation: ""
    },
    {
        question: "",
        options: ["Yes", "No"],
        correctAnswer: "No",
        explanation: ""
    },
    {
        question: "",
        options: ["Yes", "No"],
        correctAnswer: "No",
        explanation: ""
    },
    {
        question: "",
        options: ["Yes", "No"],
        correctAnswer: "No",
        explanation: ""
    },
    {
        question: "",
        options: ["Yes", "No"],
        correctAnswer: "No",
        explanation: ""
    },
    {
        question: "",
        options: ["Yes", "No"],
        correctAnswer: "No",
        explanation: ""
    },
    {
        question: "",
        options: ["Yes", "No"],
        correctAnswer: "No",
        explanation: ""
    },
    {
        question: "",
        options: ["Yes", "No"],
        correctAnswer: "No",
        explanation: ""
    },
    {
        question: "",
        options: ["Yes", "No"],
        correctAnswer: "No",
        explanation: ""
    },
    {
        question: "",
        options: ["Yes", "No"],
        correctAnswer: "No",
        explanation: ""
    },
]

let currentQuestionIndex = 0;

function showQuestion () {
    const questionContainer = document.getElementById('question');
    const optionsContainer = document.getElementById('options');
    const explanationContainer = document.getElementById('explanation');
    const currentQuestion = questions[currentQuestionIndex];

    questionContainer.textContent = currentQuestion.question;
    optionsContainer.innerHTML = "";

    currentQuestion.options.forEach((option, index) => {
        const optionButton = document.createElement('button');
        optionButton.type = 'button';
        optionButton.textContent = option;
        optionButton.addEventListener('click', () => handleAnswer(option));

        optionsContainer.appendChild(optionButton);
    });

    explanationContainer.textContent = "";
}

