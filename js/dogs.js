const dogsContainer = document.getElementById("dogsContainer");

async function loadDogs() {
  try {
    const response = await fetch("https://dog.ceo/api/breeds/image/random/4");
    const data = await response.json();

    const dogNames = ["Buddy", "Max", "Rocky", "Charlie"];
    const dogDescriptions = [
      "Friendly and playful dog looking for a caring family.",
      "Loyal and loving companion ready for a new home.",
      "Energetic dog perfect for outdoor adventures.",
      "Sweet dog waiting to meet its forever family."
    ];

    dogsContainer.innerHTML = "";

    const onlyFourDogs = data.message.slice(0, 4);

    onlyFourDogs.forEach((image, index) => {
      const breedRaw = image.split("/")[4] || "unknown";
      const breed = breedRaw.replace("-", " ");

      const dogCard = document.createElement("div");
      dogCard.classList.add("petCard");

      dogCard.innerHTML = `
        <img src="${image}" alt="${dogNames[index] || "Dog"}">
        <h3>${dogNames[index] || "Dog"}</h3>
        <p><strong>Breed:</strong> ${breed}</p>
        <p>${dogDescriptions[index] || "Lovely dog waiting for adoption."}</p>
        <button>Adopt Me</button>
      `;

      dogsContainer.appendChild(dogCard);
    });

  } catch (error) {
    console.error("Error loading dogs:", error);
    dogsContainer.innerHTML = "<p>Error loading dogs</p>";
  }
}

loadDogs();
