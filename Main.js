const yesButton = document.getElementById('yesButton');
const noButton = document.getElementById('noButton');

yesButton.addEventListener('click', () => {
    const doYouAgree = true; // Example value for "Yes"
    if (doYouAgree === true) {
        alert("I love you TOO ya Mirty😍");

        // Check if the image already exists to avoid duplicates
        if (!document.getElementById('loveImage')) {
            const img = document.createElement('img');
            img.id = 'loveImage'; // Set an ID for the image
            img.src = 'mirty2.jpg'; // Replace with the actual path to your image
            img.alt = 'Love Image';
            img.style.marginTop = '10px'; // Add some spacing
            yesButton.insertAdjacentElement('afterend', img); // Insert the image below the "Yes" button
        }
    } else {
        alert("I am sad");
    }
});

noButton.addEventListener('click', () => {
    const doYouAgree = false; // Example value for "No"
    if (doYouAgree === true) {
        alert("I love you ya Mirty");
    } else {
        alert("I am sad😢");
    }
});
