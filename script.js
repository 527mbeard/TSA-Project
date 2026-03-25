const resources = [
    { name: "Dave and Busters Trivia Night", category: "Trivia", location: "March 24- May 26 2026 <br> (3710 US-9, Freehold, NJ)", link: "https://www.daveandbusters.com/" },
    { name: "Mary Poppins Jr. - Count Basie Center for the Arts", category: "Shows", location: "March 25-26 2026 <br> (Hackensack Meridian Health Theatre <br> 99 Monmouth St, Red Bank, NJ)", link: "https://thebasie.org/" },
    { name: "Aberdeen Easter Egg Hunt", category: "Family", location: "Aberdeen", link:"https://tourism.visitmonmouth.com/events/?imgoing-event=aberdeen-townships-annual-easter-egg-hunt-69b7695a5622fd44ce9ca75e" },
    { name: "Englishtown Farmers Market ", category: "Family", location: "June 20 - September 26 <br> (Borough Hall, 15 Main Street, Englishtown)", link:"https://englishtownauction.com/" },
    { name: "Freehold Open Door Non-Profit", category: "Family", location: "80 Throckmorton Street Freehold, NJ 07728", link: "https://www.faopendoor.org/" },
    { name: "Tutoring Center", category: "Family", location: "Free tutoring for students." },
    { name: "Tutoring Center", category: "Family", location: "Free tutoring for students." },
    { name: "Tutoring Center", category: "Family", location: "Free tutoring for students." },
    { name: "Tutoring Center", category: "Family", location: "Free tutoring for students." },
    { name: "Tutoring Center", category: "Family", location: "Free tutoring for students." },
    { name: "Tutoring Center", category: "Family", location: "Free tutoring for students." },
    { name: "Tutoring Center", category: "Family", location: "Free tutoring for students." },
    { name: "Tutoring Center", category: "Family", location: "Free tutoring for students." },
    { name: "Tutoring Center", category: "Family", location: "Free tutoring for students." },
    { name: "Tutoring Center", category: "Family", location: "Free tutoring for students." }
];

function displayResources(list) {
    const container = document.getElementById("resourceList");
    container.innerHTML = "";

    if (list.length === 0) {
        container.innerHTML = "<p>No resources found.</p>";
        return;
    }

    list.forEach(r => {
        const card = document.createElement("div");
        card.className = "card";

        // 🔥 Make whole card clickable
        card.onclick = () => {
            window.open(r.link, "_blank"); // opens in new tab
        };

        card.innerHTML = `
        <h3>${r.name}</h3>
        <p>${r.location}</p>
        <small><strong>Category:</strong> ${r.category}</small>
      `;

        container.appendChild(card);
    });
}

function filterResources() {
    const searchValue = document.getElementById("search").value.toLowerCase();
    const selectedCategory = document.getElementById("filter").value;

    const filtered = resources.filter(r => {
        const matchesSearch =
            r.name.toLowerCase().includes(searchValue) ||
            r.location.toLowerCase().includes(searchValue);

        const matchesCategory =
            selectedCategory === "all" || r.category === selectedCategory;

        return matchesSearch && matchesCategory;
    });

    displayResources(filtered);
}

// Event listeners
document.getElementById("search").addEventListener("input", filterResources);
document.getElementById("filter").addEventListener("change", filterResources);

// Initial display (VERY IMPORTANT)
window.onload = () => {
    displayResources(resources);
};
