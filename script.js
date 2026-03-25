const resources = [
    { name: "Dave and Busters Trivia Night", category: "Trivia", location: "March 24- May 26 2026 <br> (3710 US-9, Freehold, NJ)", link: "https://www.daveandbusters.com/" },
    { name: "Mary Poppins Jr. - Count Basie Center for the Arts", category: "Shows", location: "March 25-26 2026 <br> (Hackensack Meridian Health Theatre <br> 99 Monmouth St, Red Bank, NJ)", link: "https://thebasie.org/" },
    { name: "Aberdeen Easter Egg Hunt", category: "Family", location: "Aberdeen", link:"https://tourism.visitmonmouth.com/events/?imgoing-event=aberdeen-townships-annual-easter-egg-hunt-69b7695a5622fd44ce9ca75e" },
    { name: "Englishtown Farmers Market ", category: "Family", location: "June 20 - September 26 <br> (Borough Hall, 15 Main Street, Englishtown)", link:"https://englishtownauction.com/" },
    { name: "Freehold Open Door Non-Profit", category: "Family", location: "80 Throckmorton Street Freehold, NJ 07728", link: "https://www.faopendoor.org/" },
    { name: "Spring Craft Show", category: "Shows", location: "March 28 <br> (2566 Guam Lane, Tinton Falls NJ 07724)", link:"https://www.monmouthcountyparks.com/page.aspx?ID=4206" },
    { name: "Climb Time at Shark River Park", category: "Family", location: "April 10 <br> (1101 Schoolhouse Road, Wall, NJ 07753)", link:"https://www.monmouthcountyparks.com/page.aspx?Id=2537" },
    { name: "WWE Trivia Night", category: "Trivia", location: "April 15 <br> (Woodbridge Brewing Co.)", link:"https://www.eventbrite.com/e/wwe-trivia-tickets-1981872968399?aff=ebdssbdestsearch" },
    { name: "Friends Trivia Night", category: "Trivia", location: "June 24 <br> (Woodbridge Brewing Co.)", link:"https://www.eventbrite.com/e/friends-trivia-tickets-1985670246159?aff=ebdssbdestsearch" },
    { name: "Candlelight: Coldplay vs. Imagine Dragons", category: "Shows", location: "April 3 <br> (Pollak Theatre, Monmouth University)", link:"https://feverup.com/m/385678"},
    { name: "A Tribute to the best of the Beatles", category: "Shows", location: "May 21 <br> (Monmouth County Library Marlboro Branch)", link:"https://monmouthcountylib.libcal.com/event/16351170" }
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
