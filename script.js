fetch("config.json")
  .then(response => response.json())
  .then(data => {
    const repositories = data.repositories.filter(
      r => !r.name.includes("github.io")
    );

    let currentIndex = 0;
    const itemsPerPage = 8;

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

    renderRepos();
  });
