class VideoCard{
    render(data){
        return(
            `
            <div class="video_card">
            <video src="${data.url}" controls></video>
            <div class="film_title">
                <h5>${data.title}</h5>
            </div>
        </div>
            
            `
        )
    }
}


export default new VideoCard();