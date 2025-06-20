document.addEventListener('DOMContentLoaded', () => {
    const textElement = document.querySelector('.text-genre');
    const texts = [
        "HORROR",
        "ACTION",
        "ROMANCE",
        "COMEDY"
    ];
    let currentIndex = 0;
    const changeInterval = 2000;

    function changeText() {
        textElement.style.opacity = 0;
        textElement.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            textElement.textContent = texts[currentIndex];
            textElement.style.opacity = 1;
            textElement.style.transform = 'translateY(0)';
            
            currentIndex = (currentIndex + 1) % texts.length;
        }, 500);
    }


    changeText();
    const textInterval = setInterval(changeText, changeInterval);
    
    document.querySelector('.signup-btn').addEventListener('click', () => {
        alert("Website Dalam Perbaikan!");
    });

    document.querySelector('.login-btn').addEventListener('click', () => {
        alert("Website Dalam Perbaikan!");
    });

    window.addEventListener('beforeunload', () => {
        clearInterval(textInterval);
    });
});