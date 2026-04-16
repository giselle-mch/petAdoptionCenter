const catsContainer = document.getElementById("catsContainer");

async function loadCats() {
  try {
    const response = await fetch("https://api.thecatapi.com/v1/images/search?limit=4");
    const data = await response.json();

    const catNames = ["Luna", "Milo", "Nala", "Simba"];
    const catDescriptions = [
      "Sweet and calm cat who loves to cuddle.",
      "Curious and playful cat ready for a loving home.",
      "Gentle feline companion with a lovely personality.",
      "Adorable cat waiting to meet its forever family."
    ];

    catsContainer.innerHTML = "";

    const onlyFourCats = data.slice(0, 4);

    onlyFourCats.forEach((cat, index) => {
      const name = catNames[index] || "Cat";
      const description = catDescriptions[index] || "Lovely cat waiting for adoption.";

      const catCard = document.createElement("div");
      catCard.classList.add("petCard");

      catCard.innerHTML = `
        <img src="${cat.url}" alt="${name}">
        <h3>${name}</h3>
        <p>${description}</p>
        <button>Adopt Me</button>
      `;

      catsContainer.appendChild(catCard);
    });

  } catch (error) {
    console.error("Error loading cats:", error);
    catsContainer.innerHTML = "<p>Error loading cats</p>";
  }
}

loadCats();