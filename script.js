const data = async () => {
    try {
        const res = await fetch("https://api.tvmaze.com/shows/111/episodes");
        const data = await res.json();
        series(data);
    } catch (error) {
        console.log(error);
    }
};
data();
const series = (movies) => {
    main = document.querySelector("main");
    for (let movie of movies) {
        card = document.createElement("div");
        card.classList.add("card");
        main.appendChild(card);
        const a = document.createElement("a");
        a.classList.add("a");

        a.href = movie.url;
        a.target = "_blank";
        a.textContent = movie.name;
        const img = document.createElement("img");
        img.src = movie.image.medium;
        img.classList.add("img");
        const rate = document.createElement("span");
        const airtime = document.createElement("span");
        rate.classList.add("AR");
        airtime.classList.add("AR");

        rate.textContent = `rate:${movie.rating.average}`;
        airtime.textContent = `airtime:${movie.airtime}`;
        const summary = document.createElement("p");
        summary.innerHTML = movie.summary;
        summary.style.display = "none";

        card.addEventListener("mouseleave", () => {
            summary.style.display = "none";
        });

        card.addEventListener("mouseover", () => {
            summary.style.display = "";
        });
        const select = document.querySelector("select");
        option = document.createElement("option");

        let episodeNumber = movie.number;
        let seasonNumber = movie.season;
        episodeNumber < 10 && (episodeNumber = "0" + episodeNumber);
        seasonNumber < 10 && (seasonNumber = "0" + seasonNumber);

        option.textContent = `S${seasonNumber}E${episodeNumber}${movie.name}`;

        select.append(option);
        select.addEventListener("change", () => {
            if (!select.value.includes(option.textContent)) {
                card.style.display = "none";
            } else {
                card.style.display = "";
            }
            if (select.value === "all") {
                card.style.display = "";
            }
        });

        input.addEventListener("keyup", (e) => {
            const cards = document.querySelectorAll(".card");

            console.log(e.target.value);

            console.log(cards);

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
