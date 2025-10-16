// Germ Layer Interactivity
function showFates(germLayer) {
    // Hide all fates first
    document.querySelectorAll('.fates-list').forEach(element => {
        element.style.display = 'none';
    });
    
    // Show the selected one
    const selectedFates = document.getElementById(`${germLayer}-fates`);
    if (selectedFates) {
        selectedFates.style.display = 'block';
    }
}

// Morphogen Gradient Simulator
function updateGradient() {
    const level = document.getElementById('morphogenLevel').value;
    const gradientBar = document.querySelector('.gradient-bar');
    
    // Update gradient visualization
    const highThreshold = 66;
    const mediumThreshold = 33;
    
    if (level >= highThreshold) {
        gradientBar.style.background = 'linear-gradient(to right, #e74c3c, #e74c3c)';
    } else if (level >= mediumThreshold) {
        gradientBar.style.background = 'linear-gradient(to right, #e74c3c, #f1c40f, #f1c40f)';
    } else {
        gradientBar.style.background = 'linear-gradient(to right, #e74c3c, #f1c40f, #3498db)';
    }
}

// Hint System for Problem Set
function showHint(hintId) {
    const hintElement = document.getElementById(hintId);
    if (hintElement) {
        hintElement.style.display = hintElement.style.display === 'none' ? 'block' : 'none';
    }
}

// Answer Submission
function submitAnswers() {
    const answers = [];
    document.querySelectorAll('.answer-area textarea').forEach((textarea, index) => {
        answers.push({
            problem: index + 1,
            answer: textarea.value
        });
    });
    
    // Here you would typically send this to your server
    console.log('Submitted answers:', answers);
    alert('Answers submitted! (In a real implementation, this would save to your LMS)');
    
    // For demonstration, show a summary
    let summary = 'Your Answers:\n\n';
    answers.forEach(item => {
        summary += `Problem ${item.problem}: ${item.answer.substring(0, 50)}...\n`;
    });
    alert(summary);
}

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    // Initialize the gradient simulator
    updateGradient();
    
    // Add smooth scrolling for navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});