document.addEventListener('DOMContentLoaded', function() {
    const countdownElement = document.querySelector('.countdown');
    let totalSeconds = countdownElement.getAttribute('data-minutes') * 60;
    const TIMEOUT = 5 * 60;

    const intervalId = setInterval(() => {
        totalSeconds--;
        const minutes = Math.floor(totalSeconds / 60);
        const seconds = totalSeconds % 60;
        countdownElement.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        
        if (totalSeconds < 60) {
            // access css properties of the countdown element
            countdownElement.style.color = '#FE201F';
            countdownElement.style.animation = 'blink-animation 0.8s infinite';
        }

        if (totalSeconds == 0) {
            clearInterval(intervalId);
            countdownElement.textContent = '00:00';
        }

        //Gradually add more images
        if(totalSeconds % 60 == 0){
            const imageColumns = document.querySelectorAll('.box');
            let tracker = 1;
            imageColumns.forEach(box => {
                // Create 5 new img elements with random src attributes
                for (let i = 0; i < 5; i++) {
                    const img = document.createElement('img');
                    // Set initial opacity to 0
                    img.style.opacity = 0;
                    // Trigger reflow to apply opacity change smoothly
                    img.offsetHeight;
                    // Gradually increase opacity to 1
                    img.style.opacity = 1;
                    img.src = `./assets/${((tracker) % 13)+1}.webp`;
                    box.appendChild(img);
                    tracker++;
                }
                box.offsetHeight;
            });    
        }
    }, 1000);        
  });