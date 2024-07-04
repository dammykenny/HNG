// Function to display current Nigerian time and day of the week
function displayCurrentTimeAndDay() {
    const now = new Date();
    const options = { weekday: 'long', hour: 'numeric', minute: 'numeric', second: 'numeric', timeZone: 'Africa/Lagos' };
    const currentDay = now.toLocaleDateString('en-US', { weekday: 'long' });
    const currentTime = now.toLocaleTimeString('en-US', options);
    
    document.getElementById('currentDateTime').textContent = `${currentDay}, ${currentTime}`;
}

// Function to update time every second
function updateTimeEverySecond() {
    displayCurrentTimeAndDay(); // Update immediately
    setInterval(displayCurrentTimeAndDay, 1000); // Update every second
}

// Call the function to update time on page load
window.onload = function() {
    updateTimeEverySecond();
};

window.addEventListener('load', function() {
    var img = document.querySelector('img.profile-picture');
    
    if (img.complete) {
        setNaturalDimensions(img);
    } else {
        img.addEventListener('load', function() {
            setNaturalDimensions(img);
        });
    }
});

function setNaturalDimensions(img) {
    img.setAttribute('width', img.naturalWidth);
    img.setAttribute('height', img.naturalHeight);
}
