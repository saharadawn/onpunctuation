async function typewriter(element, text, delay = 100) {
    for (let i = 0; i < text.length; i++) {
        element.textContent += text[i];
        await new Promise(resolve => setTimeout(resolve, delay));
    }
}

async function typewriterLoop(element, text, loops = 1, delay = 100, loopDelay = 1000) {
    for (let j = 0; j < loops; j++) {
        await typewriter(element, text, delay);
        await new Promise(resolve => setTimeout(resolve, loopDelay));
        element.textContent = ''; // Clear text for the next loop
    }
}

// Example usage:
const typewriterText = document.getElementById('typewriter-text');
const textToDisplay = "This is a typewriter effect that loops!";
typewriterLoop(typewriterText, textToDisplay, 3, 50, 1000);
