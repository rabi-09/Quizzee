
document.addEventListener('DOMContentLoaded', () => {
    const score = localStorage.getItem('quizScore');
    const total = localStorage.getItem('totalQuestions');
    const scoreText = document.getElementById('score-text');
    const scorePercentage = document.getElementById('score-percentage');
    const emojiContainer = document.getElementById('emoji-container');
    const performanceText = document.getElementById('performance-text');
    const motivationQuote = document.getElementById('motivation-quote');

    if (score !== null && total !== null) {
        const percentage = Math.round((score / total) * 100);

        // Animate percentage counter
        animateValue(
            document.getElementById('score-percentage'),
            0,
            percentage,
            1500
        );

        scoreText.textContent = `You answered ${score} out of ${total} questions correctly`;

        // Set emoji and messages based on performance
        if (percentage >= 70) {
            emojiContainer.innerHTML = `
                        <picture>
                            <source srcset="https://fonts.gstatic.com/s/e/notoemoji/latest/1f973/512.webp" type="image/webp">
                            <img src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f973/512.gif" alt="🥳" width="64" height="64" class="bounce-emoji">
                        </picture>
                    `;
            performanceText.innerHTML = '<span class="high-score">You have superb Knowledge!!!</span>';
            motivationQuote.innerHTML = `
                        "Every great developer you know got there by solving problems they were unqualified to solve until they actually did it."<br>
                        <small>- Patrick McKenzie</small>
                    `;
        }
        else if (percentage >= 40) {
            emojiContainer.innerHTML = `
                        <picture>
                            <source srcset="https://fonts.gstatic.com/s/e/notoemoji/latest/1f642/512.webp" type="image/webp">
                            <img src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f642/512.gif" alt="🙂" width="64" height="64">
                        </picture>
                    `;
            performanceText.innerHTML = '<span class="medium-score">You have good Knowledge but try harder!!!</span>';
            motivationQuote.innerHTML = `
                        "The expert in anything was once a beginner."<br>
                        <small>- Helen Hayes</small>
                    `;
        }
        else {
            emojiContainer.innerHTML = `
                        <picture>
                            <source srcset="https://fonts.gstatic.com/s/e/notoemoji/latest/1f62d/512.webp" type="image/webp">
                            <img src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f62d/512.gif" alt="😭" width="64" height="64">
                        </picture>
                    `;
            performanceText.innerHTML = '<span class="low-score">You have very less Knowledge, try harder!!!</span>';
            motivationQuote.innerHTML = `
                        "Success is no accident. It is hard work, perseverance, learning, studying, sacrifice and most of all, love of what you are doing."<br>
                        <small>- Pelé</small>
                    `;
        }
    } else {
        scoreText.textContent = "No quiz data found. Please complete a quiz first.";
        scorePercentage.style.display = 'none';
    }
});

function animateValue(element, start, end, duration, callback) {
    let startTimestamp = null;
    const range = end - start;

    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const elapsed = timestamp - startTimestamp;
        const progress = Math.min(elapsed / duration, 1);
        const currentValue = Math.floor(progress * range + start);

        element.textContent = currentValue + '%';

        // Add easing for smoother animation
        const easedProgress = easeOutQuad(progress);
        element.style.opacity = 0.5 + (easedProgress * 0.5); // Fade in effect

        if (progress < 1) {
            window.requestAnimationFrame(step);
        } else if (callback) {
            callback();
        }
    };

    window.requestAnimationFrame(step);
}

// Easing function for smoother animation
function easeOutQuad(t) {
    return t * (2 - t);
}

function goHome() {
    window.location.href = 'index.html';
}
