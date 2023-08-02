let quotes = [
  `I live my life a quarter mile at a time`,
  `I said a ten-second car, not a ten-minute car`,
  `You can have any brew you want... as long as it's a Corona.`,
  `You almost had me? You never had me - you never had your car!`,
  `I don't have friends. I have family.`,
  `It don't matter if you win by an inch or a mile. Winning's winning.`,
];

document.addEventListener("DOMContentLoaded", function (event) {
  // Random quote of the day generator
  const randomQuote = function () {
    document.querySelector("#quote-of-the-day").textContent = `"${
      quotes[Math.floor(Math.random() * quotes.length)]
    }"`;
  };
  randomQuote();

  // Do all of your work inside the document.addEventListener

  // Part 1
  function setTitle() {
    const mainTitle = document.querySelector("#main-title");
    mainTitle.innerText = "THE PAGE";
  }
  setTitle();

  // Part 2
  function setBgColor() {
    document.body.style.backgroundColor = "#a2a8d3";
  }
  setBgColor();

  // Part 3
  function delItem() {
    document.querySelector("#favorite-things li:nth-child(6)").remove();
  }
  delItem();

  // Part 4
  function setFontSize() {
    const specials = document.querySelectorAll(".special-title");
    specials.forEach((item) => (item.style.fontSize = "2rem"));
  }
  setFontSize();

  // Part 5
  function delItem2() {
    document.querySelector("#past-races li:nth-child(4)").remove();
  }
  delItem2();

  // Part 6
  function addRace() {
    const pastRaces = document.querySelector("#past-races");
    const list = document.createElement("li");
    list.innerText = "Manila";
    pastRaces.appendChild(list);
  }
  addRace();

  // Part 7
  function addBlogPost() {
    const main = document.querySelector(".main");
    const newDiv = document.createElement("div");
    newDiv.classList.add("blog-post", "purple");
    const newH1 = document.createElement("h1");
    newH1.innerText = document.querySelector(
      "#past-races li:nth-child(6)"
    ).textContent;
    const newP = document.createElement("p");
    newP.innerText = "Hello this is a new text";
    newDiv.appendChild(newH1);
    newDiv.appendChild(newP);
    main.appendChild(newDiv);
  }
  addBlogPost();

  // Part 8
  function showRandomQuote() {
    const quote = document.querySelector("#quote-title");
    quote.addEventListener("click", () => randomQuote());
  }
  showRandomQuote();

  // Part 9
  function changeBlogPostBgColor() {
    const blogPosts = document.querySelectorAll(".blog-post");
    blogPosts.forEach((post) => {
      post.addEventListener("mouseenter", (event) => {
        event.target.classList.toggle("red");
      });
      post.addEventListener("mouseout", (event) => {
        event.target.classList.toggle("purple"); // instruction says purple but its acting weird. The html already has purple class in it.
        // shouldn't this be red? I'm leaving it purple anyway per instructions.
      });
    });
  }
  changeBlogPostBgColor();
});
