// List of images with their correct labels (grouped by label)
const imagesData = [
    { label: '600i', paths: ['images/600i1.webp', 'images/600i2.webp', 'images/600i3.webp'] },
    { label: 'Defender', paths: ['images/Defender1.webp', 'images/Defender2.webp', 'images/Defender3.webp', 'images/Defender4.webp'] },
    { label: 'Starfarer', paths: ['images/farer1.webp', 'images/farer2.webp', 'images/farer3.webp'] },
    { label: 'Starlancer MAX', paths: ['images/lancer.webp'] },
    { label: 'Mercury Star Runner', paths: ['images/Mercury1.webp', 'images/Mercury2.webp', 'images/Mercury3.webp', 'images/Mercury4webp'] },
    { label: 'Crusader Spirit', paths: ['images/Spirit1.webp', 'images/Spirit2.webp'] },
    { label: 'Hercules Starlifter', paths: ['images/Hercules.webp', 'images/Hercules2.webp', 'images/Hercules3.webp'] },
	{ label: 'Constellation', paths: ['images/Constellation.webp', 'images/Constellation2.webp', 'images/Constellation3.webp'] },
	{ label: 'Origin 300', paths: ['images/300.webp', 'images/3002.webp'] },
	{ label: 'Buccaneer', paths: ['images/Buccaneer.webp', 'images/Buccaneer2.webp'] },
	{ label: 'Cutlass', paths: ['images/Cutlass.webp', 'images/Cutlass2.webp'] },
	{ label: 'F7C Lightning', paths: ['images/F7CLightning.webp', 'images/F7CLightning2.webp'] },
	{ label: 'Hurricane', paths: ['images/Hurricane.webp', 'images/Hurricane2.webp', 'images/Hurricane3.webp'] },
	{ label: 'Redeemer', paths: ['images/Redeemer.webp'] },
	{ label: 'Polaris', paths: ['images/Polaris.webp', 'images/Polaris2.webp', 'images/Polaris3.webp'] },
	{ label: 'Scorpius', paths: ['images/Scorpius.webp', 'images/Scorpius2.webp', 'images/Scorpius3.webp', 'images/Scorpius4.webp'] },
	{ label: 'Scythe', paths: ['images/Scythe.webp', 'images/Scythe2.webp'] },
	{ label: 'Vanguard', paths: ['images/Vanguard.webp', 'images/Vanguard2.webp', 'images/Vanguard3.webp'] },
	{ label: 'Intrepid', paths: ['images/Intrepid.webp', 'images/Intrepid2.webp', 'images/Intrepid3.webp', 'images/Intrepid4.webp', 'images/Intrepid5.webp'] },
	{ label: 'Gladiator', paths: ['images/Gladiator.webp', 'images/Gladiator2.webp'] },
	{ label: 'Caterpillar', paths: ['images/Caterpillar.webp', 'images/Caterpillar2.webp', 'images/Caterpillar3.webp'] },
	{ label: 'Glaive', paths: ['images/Glaive.webp', 'images/Glaive2.webp', 'images/Glaive3.webp', 'images/Glaive4.webp'] },
	{ label: 'Blade', paths: ['images/blade.webp', 'images/blade2.webp', 'images/blade3.webp', 'images/blade4.webp'] },
	{ label: 'Hammerhead', paths: ['images/HH.webp', 'images/HH2.webp'] },
	{ label: 'Hornet', paths: ['images/Hornet.webp', 'images/Hornet2.webp', 'images/Hornet3.webp'] },
	{ label: 'Pisces', paths: ['images/Pisces.webp', 'images/Pisces2.webp'] },
	{ label: 'Arrow', paths: ['images/Arrow.webp', 'images/Arrow2.webp', 'images/Arrow3.webp', 'images/Arrow4.webp', 'images/Arrow5.webp'] },
	{ label: 'Prowler', paths: ['images/Prowler.webp', 'images/Prowler2.webp', 'images/Prowler3.webp'] },
	{ label: '100i', paths: ['images/100i.webp', 'images/100i2.webp', 'images/100i3.webp', 'images/100i4.webp'] },
	{ label: 'Fury', paths: ['images/Fury.webp', 'images/Fury2.webp', 'images/Fury3.webp'] },
	{ label: 'Mole', paths: ['images/Mole.webp', 'images/Mole2.webp', 'images/Mole3.webp', 'images/Mole4.webp'] },
	{ label: 'Firebird', paths: ['images/Firebird.webp', 'images/Firebird2.webp', 'images/Firebird3.webp', 'images/Firebird4.webp'] },
	{ label: 'Retaliator', paths: ['images/Retaliator1.webp', 'images/Retaliator2.webp', 'images/Retaliator3.webp', 'images/Retaliator4.webp'] },
	{ label: 'Reliant', paths: ['images/Reliant.webp', 'images/Reliant2.webp', 'images/Reliant3.webp', 'images/Reliant4.webp'] },
	{ label: 'Gladius', paths: ['images/Gladius.webp', 'images/Gladius2.webp', 'images/Gladius3.webp', 'images/Gladius4.webp'] },
	{ label: 'Khartu-al', paths: ['images/Khartu.webp', 'images/Khartu2.webp', 'images/Khartu3.webp', 'images/Khartu4.webp', 'images/Khartu5.webp', 'images/Khartu6.webp'] },
	{ label: 'Terrapin', paths: ['images/Terrapin.webp', 'images/Terrapin2.webp', 'images/Terrapin3.webp', 'images/Terrapin4.webp', 'images/Terrapin5.webp'] },
	{ label: 'Santok.yai', paths: ['images/SanTokYai.webp', 'images/SanTokYai2.webp', 'images/SanTokYai3.webp'] },
	{ label: 'Ares', paths: ['images/Ares.webp', 'images/Ares2.webp', 'images/Ares3.webp', 'images/Ares4.webp'] },
	{ label: 'Hawk', paths: ['images/Hawk.webp', 'images/Hawk2.webp', 'images/Hawk3.webp', 'images/Hawk4.webp', 'images/Hawk5.webp'] },
	{ label: 'Carrack', paths: ['images/Carrack.webp', 'images/Carrack2.webp', 'images/Carrack3.webp', 'images/Carrack4.webp'] },
	{ label: 'Corsair', paths: ['images/Corsair.webp', 'images/Corsair2.webp', 'images/Corsair3.webp', 'images/Corsair4.webp'] },
	{ label: 'Eclipse', paths: ['images/Eclipse.webp', 'images/Eclipse2.webp', 'images/Eclipse3.webp'] },
	{ label: 'Mustang', paths: ['images/Mustang.webp', 'images/Mustang2.webp', 'images/Mustang3.webp'] },
	{ label: 'MPUV', paths: ['images/MPUV.webp', 'images/MPUV2.webp', 'images/MPUV3.webp', 'images/MPUV4.webp'] },
	{ label: 'Vulture', paths: ['images/Vulture.webp', 'images/Vulture2.webp', 'images/Vulture3.webp', 'images/Vulture4.webp'] },
	{ label: '85x', paths: ['images/85x.webp', 'images/85x2.webp', 'images/85x3.webp', 'images/85x4.webp'] },
	{ label: 'Aurora', paths: ['images/Aurora.webp', 'images/Aurora2.webp', 'images/Aurora3.webp'] },
	{ label: 'Mantis', paths: ['images/Mantis.webp', 'images/Mantis2.webp'] },
	{ label: 'Nomad', paths: ['images/Nomad.webp', 'images/Nomad2.webp', 'images/Nomad3.webp'] },
	{ label: 'RAFT', paths: ['images/RAFT.webp', 'images/RAFT2.webp', 'images/RAFT3.webp', 'images/RAFT4.webp', 'images/RAFT5.webp'] },
	{ label: 'Valkyrie', paths: ['images/Valkyrie.webp', 'images/Valkyrie2.webp', 'images/Valkyrie3.webp', 'images/Valkyrie4.webp', 'images/Valkyrie5.webp'] },
	{ label: 'm50', paths: ['images/m50.webp', 'images/m502.webp', 'images/m503.webp'] },
	{ label: 'Prospector', paths: ['images/Prospector.webp', 'images/Prospector2.webp', 'images/Prospector3.webp', 'images/Prospector4.webp'] },
	{ label: 'Zeus MKII', paths: ['images/Zeus.webp', 'images/Zeus2.webp', 'images/Zeus3.webp'] },
	{ label: 'Hull A', paths: ['images/HULLA.webp', 'images/HULLA2.webp', 'images/HULLA3.webp'] },
	{ label: '400i', paths: ['images/400i.webp', 'images/400i2.webp', 'images/400i3.webp'] },
	{ label: 'Guardian', paths: ['images/Guardian.webp', 'images/Guardian2.webp', 'images/Guardian3.webp', 'images/Guardian4.webp'] },
	{ label: 'SRV', paths: ['images/SRV.webp', 'images/SRV2.webp', 'images/SRV3.webp', 'images/SRV4.webp'] },
	{ label: 'Freelancer DUR', paths: ['images/FreelancerDUR.webp', 'images/FreelancerDUR2.webp', 'images/FreelancerDUR3.webp', 'images/FreelancerDUR4.webp'] },
	{ label: 'Freelancer MAX', paths: ['images/FreelancerMAX.webp', 'images/FreelancerMAX2.webp', 'images/FreelancerMAX3.webp', 'images/FreelancerMAX4.webp'] },
	{ label: 'Hull C', paths: ['images/HullC.webp', 'images/HullC2.webp', 'images/HullC3.webp', 'images/HullC4.webp', 'images/HullC5.webp'] },
	{ label: 'Merlin', paths: ['images/Merlin.webp', 'images/Merlin2.webp', 'images/Merlin3.webp'] },
	{ label: 'Talon', paths: ['images/Talon.webp', 'images/Talon2.webp', 'images/Talon3.webp'] }
	
];

// Flatten the `imagesData` into individual image objects (to use in the quiz)
const images = imagesData.flatMap(group => 
    group.paths.map(path => ({ src: path, label: group.label }))
);

// Store the last 5 images that have been used
let recentlyUsedImages = [];

// Function to shuffle an array (Fisher-Yates Algorithm)
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Function to generate a question
function generateQuestion() {
    let questionImage;

    // Ensure the image chosen hasn't been recently used
    do {
        // Shuffle the images to ensure randomness
        shuffleArray(images);

        // Pick the first image as the question
        questionImage = images[0];
    } while (recentlyUsedImages.includes(questionImage.src)); // Check if it's been used recently

    // Once an image is selected, add it to the recently used images array
    recentlyUsedImages.push(questionImage.src);

    // If we've exceeded 5 used images, remove the oldest one from the array
    if (recentlyUsedImages.length > 5) {
        recentlyUsedImages.shift();
    }

    // Select the correct label
    const correctLabel = questionImage.label;

    // Get the incorrect labels (excluding the correct label)
    const incorrectLabels = [...new Set(images
        .filter(img => img.label !== correctLabel)
        .map(img => img.label))]
        .slice(0, 9);  // Limit to 9 incorrect answers

    // If there are fewer than 9 incorrect labels, we need to adjust
    if (incorrectLabels.length < 9) {
        // Add more incorrect labels randomly, if needed
        const allLabels = [...new Set(images.map(img => img.label))];
        const remainingIncorrectLabels = allLabels.filter(label => label !== correctLabel);
        shuffleArray(remainingIncorrectLabels);
        const additionalIncorrectLabels = remainingIncorrectLabels.slice(0, 3 - incorrectLabels.length);
        incorrectLabels.push(...additionalIncorrectLabels);
    }

    // Combine the correct label with incorrect labels
    const options = [...incorrectLabels, correctLabel];
    shuffleArray(options); // Shuffle the options for randomness

    return {
        questionImage,
        options,
        correctLabel
    };
}

let currentQuestion;
let questionIndex = 0;

const quizContainer = document.getElementById('quiz-container');
const optionsContainer = document.getElementById('options-container');
const feedback = document.getElementById('feedback');
const nextButton = document.getElementById('next-button');
const quizImage = document.getElementById('quiz-image');

// Function to load a new question
function loadQuestion() {
    feedback.textContent = ''; // Clear feedback

    // Generate a new question
    currentQuestion = generateQuestion();

    // Display the image
    quizImage.src = currentQuestion.questionImage.src;

    // Clear previous options
    optionsContainer.innerHTML = '';

    // Display the options as buttons
    currentQuestion.options.forEach(option => {
        const button = document.createElement('button');
        button.textContent = option;
        button.onclick = () => checkAnswer(option, button);
        optionsContainer.appendChild(button);
    });
}

// Function to check the answer
function checkAnswer(selectedOption, selectedButton) {
    // Disable all options once an answer is selected
    const allButtons = optionsContainer.getElementsByTagName('button');
    for (const button of allButtons) {
        button.disabled = true;
    }

    if (selectedOption === currentQuestion.correctLabel) {
        // Correct answer
        feedback.textContent = 'Chris blesses your voyages';
        feedback.style.color = 'green';
        selectedButton.style.backgroundColor = 'green'; // Highlight the correct button

        // After 1.5 seconds, load the next question
        setTimeout(loadQuestion, 1500);
    } else {
        // Incorrect answer
        feedback.textContent = 'Incorrect - Chris frowns upon you';
        feedback.style.color = 'red';
        selectedButton.style.backgroundColor = 'red'; // Highlight the wrong button

        // Highlight the correct button
        for (const button of allButtons) {
            if (button.textContent === currentQuestion.correctLabel) {
                button.style.backgroundColor = 'green';
                break;
            }
        }

        // After 1.5 seconds, load the next question
        setTimeout(loadQuestion, 1500);
    }
}


// Start the quiz
loadQuestion();