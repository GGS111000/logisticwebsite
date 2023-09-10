document.addEventListener("DOMContentLoaded", function() {
    const searchInput = document.getElementById('searchInput');

    // Event listener for input change to filter tracking codes and show results
    searchInput.addEventListener('input', filterTrackingCodes);
});

// Mock database for tracking info. This is just a sample.
// In a real-world scenario, you would pull this data from a server/database.
const database = {
    "001": {
        status: "In Transit",
        estimatedDelivery: "September 15, 2023",
        lastLocation: "New York, NY"
    },
    "002": {
        status: "Delivered",
        estimatedDelivery: "September 12, 2023",
        lastLocation: "Los Angeles, CA"
    },
    "003": {
        status: "Pending",
        estimatedDelivery: "September 18, 2023",
        lastLocation: "Chicago, IL"
    }
    // ... Add more as needed
};

function filterTrackingCodes() {
    let input = searchInput.value.toUpperCase();
    let trackingInfo = database[input];

    if (trackingInfo) {
        document.getElementById("status").innerText = `Package Status: ${trackingInfo.status}`;
        document.getElementById("estimatedDelivery").innerText = `Estimated Delivery: ${trackingInfo.estimatedDelivery}`;
        document.getElementById("lastLocation").innerText = `Last Location: ${trackingInfo.lastLocation}`;
    } else {
        document.getElementById("status").innerText = "Package Status: N/A";
        document.getElementById("estimatedDelivery").innerText = "Estimated Delivery: N/A";
        document.getElementById("lastLocation").innerText = "Last Location: N/A";
    }
}
