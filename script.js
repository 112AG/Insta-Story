let arr = [
    {dp:"https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", img:"https://images.unsplash.com/photo-1528109688329-6a043167789d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {dp:"https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", img:"https://images.unsplash.com/photo-1440589473619-3cde28941638?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {dp:"https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", img:"https://images.unsplash.com/photo-1513137621582-05b38724f2a3?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {dp:"https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", img:"https://images.unsplash.com/photo-1528109688329-6a043167789d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {dp:"https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", img:"https://images.unsplash.com/photo-1440589473619-3cde28941638?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {dp:"https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", img:"https://images.unsplash.com/photo-1513137621582-05b38724f2a3?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {dp:"https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", img:"https://images.unsplash.com/photo-1528109688329-6a043167789d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {dp:"https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", img:"https://images.unsplash.com/photo-1440589473619-3cde28941638?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {dp:"https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", img:"https://images.unsplash.com/photo-1513137621582-05b38724f2a3?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
]

var grow = 0;
var clutter = "";

arr.forEach(function(elem, index) {
    clutter += `
        <div class="story" >
            <img id="${index}" src="${elem.dp}" alt="">
        </div>`;
});

document.querySelector('.storiyan').innerHTML = clutter;

document.querySelector('.storiyan')
.addEventListener('click', function (elem) {
    document.querySelector('.full-scr').style.display = 'block';
    document.querySelector(".full-scr").style.backgroundImage = `url(${arr[elem.target.id].img})`;
    setTimeout(function () {
        document.querySelector('.full-scr').style.display = 'none';
        // document.querySelector('.story').style.border = '1px solid #dadada';
    },3000);
    if(grow<100){
        setInterval(() => {
            document.querySelector('.growth').style.width = `${grow}%`;
            grow++;
        }, 30);
    }else{
        grow = 0;
    }
})

// POST
let likesCount = 11968;

function likePost() {
    likesCount++;
    document.getElementById('likes').innerText = `${likesCount.toLocaleString()} likes`;
    document.querySelector('.like').style.color ="red";
}

function sharePost() {
    alert('Post shared!');
    document.querySelector('.share').style.color ="blue";

}

function savePost() {
    alert('Post saved!');
    document.querySelector('.save').style.color ="darkblue";

}

function addStory() {
    alert('Added your Story');
    document.querySelector('.addStory').style.background = 'linear-gradient(to bottom left, rgb(12, 0, 106), rgb(19, 77, 184),rgb(39, 233, 239))';
   setTimeout(() => {
    document.querySelector('.addStory').style.background = 'linear-gradient(to bottom left, rgb(99, 44, 4), rgb(235, 116, 32),rgb(255, 212, 133))';
   }, 2000);
}