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
const series = (movies) =>{



}