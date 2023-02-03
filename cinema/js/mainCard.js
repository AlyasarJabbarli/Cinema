import {img} from"./api.js"


class MainCard {
    render(movie) {
        // console.log(img + movie.poster_path);
        return (

            `
            <div class="poster_img">
              <img class="img2" src="${img + movie.poster_path}" alt="">
              <h3 class="center_p">${movie.title}</h3>
            </div>
            
            `
        )
    }
}


export default new MainCard