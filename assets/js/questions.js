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
        question: "Have you seen a doctor or had any medical tests or investigations in the last 12 months e.g. xrays, scans and or endoscopy?",
        options: ["Yes", "No"],
        correctAnswer: "No",
        explanation: "If you were diagnosed with a medical condition or illness please check the FAQ's or contact us on 1800 731 137 so we can advise you | You cannot donate if you had an endoscopy ( scope) in the last 4 months | Xrays/scans are not a reason for deferral however the reason for the investigation or outcome of the result could be"
    },
    {
        question: "Have you had dental treatment in the last 4 weeks?",
        options: ["Yes", "No"],
        correctAnswer: "No",
        explanation: "Uncomplicated filling / scale or polish - Must wait for 24 hours prior to attending a clinic | Uncomplicated extraction / tooth removal must wait for 7 days"
    },
    {
        question: "Have you had a tattoo or piercing in the last 4 months?",
        options: ["Yes", "No"],
        correctAnswer: "No",
        explanation: "You cannot donate if you have had a tattoo or piercing in the last 4 months."
    },
    {
        question: "Have you had Dry Needling or Acupuncture in the last 4 months ?",
        options: ["Yes", "No"],
        correctAnswer: "No",
        explanation: "You can donate if either treatment has been performed by a Medical Practitioner(MP) registered with the Irish Medical Council, or by a Registered General Nurse with the NMBI working for a MP registered with the Irish Medical Council"
    },
    {
        question: "Were you born outside of Ireland or the UK?",
        options: ["Yes", "No"],
        correctAnswer: "No",
        explanation: "Because you were born outside of Ireland and the UK, on your first attendance we will not collect a blood donation from you. We will ask you to complete a health and lifestyle questionnaire and assess your eligibility to donate. If you are eligible we will take some blood samples from you and you will be able to return to donate in 42 days."
    },
    {
        question: "Have you been outside of Ireland or the UK (on holidays or on business) in the last 12 months?",
        options: ["Yes", "No"],
        correctAnswer: "No",
        explanation: "Following return from a Malarial risk area where the duration of the stay was less than 6 months continuously (i.e. holiday or business trip) you cannot donate for 12 months (365 day) from the day you leave the area. Please contact us at 1800 731137 for further information."
    },
    {
        question: "Do you have Diabetes?",
        options: ["Yes", "No"],
        correctAnswer: "No",
        explanation: "You can give blood if your diabetes is well controlled through diet alone and if you have no complications from your diabetes such as eye disease, blood vessel related or kidney problems. You cannot give blood if you require insulin injections to control your diabetes. You may be able to donate if you require oral hypoglycaemic tablets - Please contact us  on 1800 731 137 ."
    },
    {
        question: "Do you have a Heart Condition?",
        options: ["Yes", "No"],
        correctAnswer: "No",
        explanation: "You cannot donate if you have ever had: Angina, Angioplasty, Atrial fibrilation A-Fib, Coronary artery bypass surgery, Heart Attack, Ischaemic heart disease or Coronary disease, Stroke or TIA, you cannot donate of taking anti-coagulant treatment"
    },
    {
        question: "Have you ever had Cancer?",
        options: ["Yes", "No"],
        correctAnswer: "No",
        explanation: "You cannot give blood if you have had cancer, even if the cancer has been treated and you are well at present."
    },
    {
        question: "Do you have Asthma?",
        options: ["Yes", "No"],
        correctAnswer: "No",
        explanation: "You can give blood if you have mild asthma and require only occasional use of inhalers or if you are on a regular preventative treatment programme with inhalers and do not have active symptoms at present."
    }
];

export default questions;

