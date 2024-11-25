function changeLyrics() {
    // Wait for the fade-out effect on the first set (10 seconds)
    setTimeout(function() {
        document.getElementById('lyrics1').style.display = 'none';
        document.getElementById('lyrics2').style.display = 'inline-block';

        const newLines2 = document.querySelectorAll('#lyrics2 .line');
        newLines2.forEach(line => {
            line.style.animation = 'none';
            line.offsetHeight;
            line.style.animation = '';
        });
    }, 10000); // 10 seconds delay before changing to lyrics2

    // Wait for the fade-out effect on the second set (17.5 seconds from the start)
    setTimeout(function() {
        document.getElementById('lyrics2').style.display = 'none';
        document.getElementById('lyrics3').style.display = 'inline-block';

        const newLines3 = document.querySelectorAll('#lyrics3 .line');
        newLines3.forEach(line => {
            line.style.animation = 'none';
            line.offsetHeight;
            line.style.animation = '';
        });
    }, 17500); // 17.5 seconds delay before changing to lyrics3

    // Wait for the fade-out effect on the third set (25 seconds from the start)
    setTimeout(function() {
        document.getElementById('lyrics3').style.display = 'none';
        document.getElementById('lyrics4').style.display = 'inline-block';

        const newLines4 = document.querySelectorAll('#lyrics4 .line');
        newLines4.forEach(line => {
            line.style.animation = 'none';
            line.offsetHeight;
            line.style.animation = '';
        });
    }, 26000); // 25 seconds delay before changing to lyrics4

    // Wait for the fade-out effect on the fourth set (35 seconds from the start)
    setTimeout(function() {
        document.getElementById('lyrics4').style.display = 'none';
        document.getElementById('lyrics5').style.display = 'inline-block';

        const newLines5 = document.querySelectorAll('#lyrics5 .line');
        newLines5.forEach(line => {
            line.style.animation = 'none';
            line.offsetHeight;
            line.style.animation = '';
        });
    }, 34000); // 35 seconds delay before changing to lyrics5

    // Wait for the fade-out effect on the fifth set (45 seconds from the start)
    setTimeout(function() {
        document.getElementById('lyrics5').style.display = 'none';
        document.getElementById('lyrics6').style.display = 'inline-block';

        const newLines6 = document.querySelectorAll('#lyrics6 .line');
        newLines6.forEach(line => {
            line.style.animation = 'none';
            line.offsetHeight;
            line.style.animation = '';
        });
    }, 42000); // 45 seconds delay before changing to lyrics6
}

// Call the function after the page loads
window.onload = function() {
    changeLyrics();
    document.body.classList.remove("container");
};
