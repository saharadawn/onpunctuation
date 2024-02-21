// Function to create and animate falling images
function createFallingImage() {
  const container = document.querySelector('.container');
  const image = document.createElement('img');
  image.src = 'question.png'; // Replace with the URL or path to your image
  image.classList.add('falling-image');
  container.appendChild(image);
  
  const imageWidth = 100; // Adjust the width to your desired size
  const startPosition = Math.random() * (window.innerWidth - imageWidth); // Random start position within window width
  const fallDuration = Math.random() * 3000 + 2000; // Random fall duration between 2 to 5 seconds
  const rotation = Math.random() * 360; // Random rotation between 0 to 360 degrees

  image.style.left = `${startPosition}px`;
  image.style.transform = `rotate(${rotation}deg)`; // Apply random rotation

  // Animation for falling
  image.animate(
    [
      { top: '-100px', transform: `rotate(${rotation}deg)` },
      { top: `${window.innerHeight}px`, transform: `rotate(${rotation + 720}deg)` } // Rotate twice for full spin during fall
    ],
    {
      duration: fallDuration,
      easing: 'linear',
      iterations: Infinity // Repeat infinitely
    }
  );
}

// Function to simulate typewriter effect
function typeWriterEffect(textElement, text, speed) {
  let i = 0;
  const typingInterval = setInterval(() => {
    if (i < text.length) {
      textElement.textContent += text.charAt(i);
      i++;
    } else {
      clearInterval(typingInterval);
    }
  }, speed);
}

// Call typewriter effect for a separate body text
const bodyTextElement = document.querySelector('.body-text');
const text = "One other little punctuation mark one can have feelings about and that is the apostrophe for possession. Well feel as you like about that, I can see and I do see that for many that for some the possessive case apostrophe has a gentle tender insinuation that makes it very difficult to definitely decide to do without it. One does do without it, I do, I mostly always do, but I cannot deny that from time to time I feel myself having regrets and from time to time I put it in to make the possessive case. I absolutely do not like it and leaving it out I feel no regret, there it is unnecessary and not ornamental but inside a word and its s well perhaps, perhaps it does appeal by its weakness to your weakness. At least at any rate from time to time I do find myself letting it alone if it has come in and sometimes it has come in. I cannot positively deny but that I do from time to time let it come in.     ";
const typingSpeed = 50; // Adjust typing speed as needed
typeWriterEffect(bodyTextElement, text, typingSpeed);

  