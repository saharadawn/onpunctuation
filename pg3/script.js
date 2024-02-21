
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

  