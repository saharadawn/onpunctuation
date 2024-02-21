
    var i = 0;
    var txt = 'So now to come to the real question of punctuation, periods, commas, colons, semi-colons and capitals and small letters. I have had a long and complicated life with all these.';
    var speed = 100;
    var settleSpeed = 1000; // Speed to settle on one letter
    var settleCount = 10; // Number of cycles to settle on one letter
    var cycleLetters = ['.', ',', '!', '?'];
    var cycleIndex = 0;
    
    function typeWriter() {
        if (i < txt.length) {
            if (i === txt.length - 1) {
                if (settleCount > 0) {
                    var randomLetter = cycleLetters[Math.floor(Math.random() * cycleLetters.length)];
                    document.getElementById("demo").innerHTML = txt.substr(0, i) + randomLetter;
                    setTimeout(typeWriter, speed);
                    settleCount--;
                } else {
                    document.getElementById("demo").innerHTML = txt;
                    i++;
                    setTimeout(typeWriter, settleSpeed);
                }
            } else {
                document.getElementById("demo").innerHTML += txt.charAt(i);
                i++;
                setTimeout(typeWriter, speed);
            }
        }
    }
    
    document.addEventListener('DOMContentLoaded', function() {
        typeWriter();
    });
