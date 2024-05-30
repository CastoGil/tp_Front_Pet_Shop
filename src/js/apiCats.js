const url = `https://api.thecatapi.com/v1/images/search?limit=10`;
const api_key =
  "live_uv5MUBHEeu0DY9e45g9wOThK9mP770DepmNSaeDnROarUrWGlnDVKxspPajA6C3u";

fetch(url, { headers: { "x-api-key": api_key } })
  .then((response) => response.json())
  .then((data) => {
    let imagesData = data;
    imagesData.forEach(function (imageData) {
      let image = document.createElement("img");
      image.src = `${imageData.url}`;
      image.alt = "Cat Image";

      let cardBody = document.createElement("div");
      cardBody.classList.add("card-body-cat");

      let cardTitle = document.createElement("h5");
      cardTitle.innerText = "Adoptame!";
      cardBody.appendChild(cardTitle);

      let adoptButton = document.createElement("button");
      let heartIcon = document.createElement("i");
      heartIcon.classList.add("fa", "fa-heart");
      adoptButton.appendChild(heartIcon);
      adoptButton.addEventListener("click", function () {
        Toastify({
          text: "Adoptame",

          duration: 3000,
        }).showToast();
      });

      cardBody.appendChild(adoptButton);

      let card = document.createElement("div");
      card.classList.add("cards");
      card.appendChild(image);
      card.appendChild(cardBody);

      document.getElementById("grid").appendChild(card);
    });
  })
  .catch(function (error) {
    console.log(error);
  });
