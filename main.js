const Search = document.querySelector("#Search");
const SearchBtn = document.querySelector("#Search-btn");
const imgContainer = document.querySelector(".img-container");

Search.addEventListener("keyup", async (e) => {
  if (e.keyCode === 13) {
    const Search_value = Search.value;
    if (Search_value === "") {
      alert("Please Enter Your Wish");
      return;
    } else {
      const key = "vdFrrnqYeWP7hCgTqH9GryHnE859gWXNvPaChOxtX3U";
      const url = `https://api.unsplash.com/search/photos?page=1&query=${Search_value}&client_id=${key}`;
      let data = await fetch(url);
      data = await data.json();
      // console.log(date)
      displayImages(data);
    }
  }
});

SearchBtn.addEventListener("click", async () => {
  const Search_value = Search.value;
  if (Search_value === "") {
    alert("Please Enter Your Wish");
    return;
  } else {
    const key = "vdFrrnqYeWP7hCgTqH9GryHnE859gWXNvPaChOxtX3U";
    const url = `https://api.unsplash.com/search/photos?page=1&query=${Search_value}&client_id=${key}`;
    let data = await fetch(url);
    data = await data.json();
    // console.log(date)
    displayImages(data);
  }
});

function displayImages(data) {
  imgContainer.innerHTML = "";
  data.results.forEach((element) => {
    // console.log(element.urls.regular,"iamges")
    let getImages = element.urls.regular;
    let img = document.createElement("img");
    img.src = getImages;
    imgContainer.appendChild(img);
  });
}
