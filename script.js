let repositories = [];
let currentIndex = 0;
const itemsPerPage = 8;

// Fetch repositories from config.json
async function loadRepos() {
  try {
    const res = await fetch("config.json");
    const data = await res.json();
    // Filter out hidden repos
    repositories = data.repositories.filter(repo => !repo.hidden);
    renderRepos();
  } catch (err) {
    console.error("Error loading repositories:", err);
  }
}

// Render repos for current carousel page
function renderRepos() {
  const carousel = document.getElementById("repo-carousel");
  carousel.innerHTML = "";

  const visibleRepos = repositories.slice(currentIndex, currentIndex + itemsPerPage);
  visibleRepos.forEach(repo => {
    const card = document.createElement("div");
    card.className = "repo-card";
    card.innerHTML = `
      <a href="${repo.link}" target="_blank">
        <img src="${repo.img}" alt="${repo.name}">
        <h3>${repo.name}</h3>
      </a>
      <p>${repo.desc}</p>
    `;
    carousel.appendChild(card);
  });
}

// Event listeners for navigation
document.querySelector(".next").addEventListener("click", () => {
  if (currentIndex + itemsPerPage < repositories.length) {
    currentIndex += itemsPerPage;
    renderRepos();
  }
});

document.querySelector(".prev").addEventListener("click", () => {
  if (currentIndex - itemsPerPage >= 0) {
    currentIndex -= itemsPerPage;
    renderRepos();
  }
});

// Initialize
loadRepos();
