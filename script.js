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
    const header = document.querySelector("header");
    const search = document.querySelector(".search");
    const searchForm = document.querySelector("#searchForm");

    for (let movie of movies) {
        let card = document.createElement("div");
        card.classList.add("card");
        container.appendChild(card);
        const img = document.createElement("img");
        // card.append(img)
        img.src = movie.image.medium;
        const link=document.createElement('a')
        link.href=movie.url
        // const p=document.createElement('p')
        // p.classList.add('name')
        link.classList.add('url')
        link.innerText=movie.name
        // link.innerText=p
    
        card.append(link,img)
        
         

        // console.log(movie)
      
      

        

        
    }
};
