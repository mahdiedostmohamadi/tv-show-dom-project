// https://api.tvmaze.com/shows/111/episodes

const data = async () => {
    try {
        const res = await fetch("https://api.tvmaze.com/shows/111/episodes");
        const data = await res.json();
        //   return  console.log(data);
        series(data);
    } catch (err) {
        console.log(err);
    }
};
data();

const series = (movies) => {
    const container = document.querySelector(".container");
    const search = document.querySelector(".search");
    const input = document.querySelector("input");
    const select = document.createElement("select");
    search.appendChild(select);

    for (let movie of movies) {
        const rate = document.createElement("span");
        rate.classList.add("rate");
        rate.innerHTML = `rating:${movie.rating.average}`;

        let card = document.createElement("div");
        card.classList.add("card");
        container.appendChild(card);
        card.classList.add('rmv')
        const img = document.createElement("img");
        img.classList.add("image");
        img.classList.add("hover");

        img.src = movie.image.medium;
        const link = document.createElement("a");
        link.href = movie.url;
        link.classList.add("url");
        link.innerText = movie.name;
        link.target = "_blank";
        const option = document.createElement("option");

        let movieNumber = movie.number;
        movieNumber < 10 && (movieNumber = "0" + movieNumber);
        option.innerHTML = `  s0${movie.season}+e${movieNumber}`;
        select.appendChild(option);

        const summary = document.createElement("p");
        summary.classList.add("summary");

        card.append(link, img, rate, summary);
        card.addEventListener("mouseover", () => {
            summary.innerHTML = movie.summary;
        });
        card.addEventListener("mouseleave", () => {
            summary.innerHTML = "";
        });

        input.addEventListener("keyup", () => {
            const searchInput = input.value;
            select.value = "All Episodes";
            if (
                movie.name.toLowerCase().includes(searchInput.toLowerCase()) ||
                movie.summary.toLowerCase().includes(searchInput.toLowerCase())
            ) {
                card.classList.remove("rmv");
              } else {
                card.classList.add("rmv");
              }
        });
    }
};
