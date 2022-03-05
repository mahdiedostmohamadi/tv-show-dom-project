const data = async () => {
    try {
      // getting the data from api
      const res = await fetch("https://api.tvmaze.com/shows/111/episodes");
      const data = await res.json();
      series(data);
    } catch (error) {
      console.log(error);
    }
  };
  // getting the data when the user first enters the website
  data();
  
  // making the cards
  const series = (movies) => {
    main = document.querySelector("main");
    for (let movie of movies) {
      // creating the card component
      card = document.createElement("div");
      card.classList.add("card");
      main.appendChild(card);
  
      // making anchor tags and setting its attributes
      const a = document.createElement("a");
      a.classList.add("a");
      a.href = movie.url;
      a.target = "_blank";
      a.textContent = movie.name;
  
      // making the image and setting its attributes
      const img = document.createElement("img");
      img.src = movie.image.medium;
      img.classList.add("img");
  
      // creating airtime and rate spans
      const rate = document.createElement("span");
      const airtime = document.createElement("span");
      rate.classList.add("AR");
      airtime.classList.add("AR");
  
      // rate and airtime inner text
      rate.textContent = `rate:${movie.rating.average}`;
      airtime.textContent = `airtime:${movie.airtime}`;
  
      // creating the summary
      const summary = document.createElement("p");
      summary.classList.add("summary");
      summary.innerHTML = movie.summary;
      summary.style.display = "none";
  
      // adding the mouse events to the card for the summary display
      card.addEventListener("mouseleave", () => {
        summary.style.display = "none";
      });
  
      card.addEventListener("mouseover", () => {
        summary.style.display = "";
      });
  
      // creating the select-option input
      const select = document.querySelector("select");
      option = document.createElement("option");
  
      // creating the text for the select options
      let episodeNumber = movie.number;
      let seasonNumber = movie.season;
      episodeNumber < 10 && (episodeNumber = "0" + episodeNumber);
      seasonNumber < 10 && (seasonNumber = "0" + seasonNumber);
  
      option.textContent = `S${seasonNumber} E${episodeNumber} ${movie.name}`;
      option.value = `${movie.name}`;
  
      // appending the select
      select.append(option);
  
      input.addEventListener("keyup", (e) => {
        const cards = document.querySelectorAll(".card");
  
        console.log(e.target.value);
  
        //   console.log(cards);
  
        let searchInput = e.target.value.toLowerCase();
  
        cards.forEach((card) => {
          if (!card.textContent.toLowerCase().includes(searchInput)) {
            card.style.display = "none";
          } else {
            card.style.display = "block";
          }
        });
      });
  
      card.append(a, img, airtime, rate, summary);
    }
  };
  
  // making an eventListener for the select option
  select.addEventListener("change", () => {
    const cards = document.querySelectorAll("main .card a");
  
    // first make all cards display block
    for (let card of cards) {
      card.parentElement.style.display = "block";
      card.parentElement.style.display = "block";
    }
  
    // then make all the cards none except the selected card
    for (let card of cards) {
      if (!card.innerHTML.includes(select.value)) {
        card.parentElement.style.display = "none";
      }
    }
  
    // make all the element display block if user chose all
    if (select.value === "all") {
      for (let card of cards) {
        card.parentElement.style.display = "block";
        card.parentElement.style.display = "block";
      }
    }
  });
  