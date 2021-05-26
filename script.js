
// selcet div with class videos
const video = document.getElementById('videos');
// selcet input 
const query = document.getElementById('input');
//selct button
const btn = document.getElementById('btn');
//api key  
const api_key = 'AIzaSyDrlDFCWcnX-fO0R_NJXs0aUSAF0uT4nhw';


// event listener on the button
btn.addEventListener("click",()=>{
    // funciton call
    getVideo();
});

// this is the function which will display the videos on the page
function getVideo(){
    // fetching the api using fetch method
    fetch('https://youtube.googleapis.com/youtube/v3/search?part=snippet&q='+query.value+'&type=video&maxResults=20&key='+api_key)
    // retriving the data using 
    .then((response)=>{
        return response.json();
    })
    .then((data)=>{
        console.log(data);
        // we will looping on the data.items
        data.items.forEach((item)=>{
            let vid =
             `<iframe type='text/html' width="350" height="200" src='https://www.youtube.com/embed/${item.id.videoId}' frameborder='0' allowFullScreen>
             </iframe>`;
           video.insertAdjacentHTML("afterend",vid);
        })   
    })
}

