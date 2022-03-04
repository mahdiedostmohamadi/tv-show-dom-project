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
    main=document.querySelector('main')
    for (let movie of movies) {
card=document.createElement('div')
main.appendChild(card)
const a=document.createElement('a')
a.href=movie.url
a.textContent=movie.name

    }
};
