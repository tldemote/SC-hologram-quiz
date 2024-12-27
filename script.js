// List of images with their correct labels (grouped by label)
const imagesData = [
    { label: '600i', paths: ['images/600i1.webp', 'images/600i2.webp', 'images/600i3.webp'] },
    { label: 'Defender', paths: ['images/Defender1.webp'] },
    { label: 'Starfarer', paths: ['images/farer1.webp', 'images/farer2.webp', 'images/farer3.webp'] },
    { label: 'Starlancer', paths: ['images/lancer.webp'] },
    { label: 'Mercury Star Runner', paths: ['images/Mercury1.webp', 'images/Mercury2.webp'] },
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
	{ label: 'Scorpius', paths: ['images/Scorpius.webp', 'images/Scorpius2.webp'] },
	{ label: 'Scythe', paths: ['images/Scythe.webp', 'images/Scythe2.webp'] },
	{ label: 'Vanguard', paths: ['images/Vanguard.webp', 'images/Vanguard2.webp', 'images/Vanguard3.webp'] },
	{ label: 'Intrepid', paths: ['images/Intrepid.webp'] },
	{ label: 'Gladiator', paths: ['images/Gladiator.webp', 'images/Gladiator2.webp'] }
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
        .slice(0, 3);  // Limit to 3 incorrect answers

    // If there are fewer than 3 incorrect labels, we need to adjust
    if (incorrectLabels.length < 3) {
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