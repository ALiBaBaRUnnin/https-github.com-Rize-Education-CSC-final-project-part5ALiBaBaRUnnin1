// Event listener for the "Find Volunteer Opportunities" button
document.getElementById("find-volunteers").addEventListener("click", function() {
    // Simulate fetching data from an API (you can replace this URL with the Volunteer Match API)
    fetch("https://jsonplaceholder.typicode.com/posts") // This is a placeholder API
        .then(response => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json();
        })
        .then(data => {
            displayVolunteerOpportunities(data); // Display the fetched data
        })
        .catch(error => {
            console.error("There was a problem with the fetch operation:", error);
            document.getElementById("volunteer-list").innerHTML = "<p>Failed to load volunteer opportunities. Please try again later.</p>";
        });
});

// Function to display the volunteer opportunities with images
function displayVolunteerOpportunities(data) {
    const list = document.getElementById("volunteer-list");
    list.innerHTML = ""; // Clear the previous list if any

    // Display each volunteer
    data.forEach(opportunity => {
        const div = document.createElement("div");
        div.classList.add("volunteer-opportunity");

        // Add placeholder image or an actual image
        const imageURL = "https://via.placeholder.com/300x200?text=Volunteer+Opportunity"; // Placeholder image
        div.innerHTML = `
            <img src="${imageURL}" alt="Volunteer Opportunity Image">
            <h3>${opportunity.title}</h3>
            <p>${opportunity.body}</p>
            <a href="#" target="_blank">Learn More</a>
        `;
        list.appendChild(div);
    });
}
