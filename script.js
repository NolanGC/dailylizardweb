window.onload = () => {
    fetch('https://dailylizardapit.onrender.com/process-image/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.blob())
    .then(blob => {
        const imageUrl = URL.createObjectURL(blob);
        document.getElementById('lizard-image').src = imageUrl;
    })
    .catch(error => console.error('Error fetching the daily lizard:', error));
};
