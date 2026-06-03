// Define timezone offsets from UTC
const timezones = {
    'ny-time': { name: 'America/New_York', offset: -5 },        // EST
    'london-time': { name: 'Europe/London', offset: 0 },         // GMT
    'paris-time': { name: 'Europe/Paris', offset: 1 },           // CET
    'dubai-time': { name: 'Asia/Dubai', offset: 4 },             // GST
    'tokyo-time': { name: 'Asia/Tokyo', offset: 9 },             // JST
    'sydney-time': { name: 'Australia/Sydney', offset: 11 },     // AEDT
    'la-time': { name: 'America/Los_Angeles', offset: -8 },      // PST
    'singapore-time': { name: 'Asia/Singapore', offset: 8 }      // SGT
};

// Function to format time with leading zeros
function formatTime(hours, minutes, seconds) {
    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

// Function to update all clocks
function updateClocks() {
    const now = new Date();
    
    // Get current UTC time
    const utcTime = new Date(now.getTime() + now.getTimezoneOffset() * 60000);
    
    // Update each timezone clock
    Object.keys(timezones).forEach(elementId => {
        const timezone = timezones[elementId];
        
        // Create a date object for the specific timezone
        const tzTime = new Date(utcTime.getTime() + timezone.offset * 60 * 60 * 1000);
        
        // Get hours, minutes, seconds
        let hours = tzTime.getHours();
        const minutes = tzTime.getMinutes();
        const seconds = tzTime.getSeconds();
        
        // Format and update the display
        const timeString = formatTime(hours, minutes, seconds);
        document.getElementById(elementId).textContent = timeString;
    });
}

// Update clocks immediately and then every second
updateClocks();
setInterval(updateClocks, 1000);

// Optional: Add current date display
function displayCurrentDate() {
    const now = new Date();
    const dateString = now.toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
    
    console.log(`Current Date: ${dateString}`);
}