const videos = [
    {
        id: 1,
        src: "https://drive.google.com/uc?export=download&id=1HpXOM9dDs_1W-lm1xCcaoJDAjaocRIW9",
        tags: "#trending #song #pooja_movie #indian #bestvideo",
        like: "2.2k",
        share: "208",
        comments: [
            "my favorite song 😍", "awesome video","mast hai bro",
        ]
    },
    {
        id: 2,
        src: "https://www.videostatusmarket.com/download/5675/funny_video?v=aHR0cHM6Ly93d3cudmlkZW9zdGF0dXNtYXJrZXQuY29tL2Z1bGxzY3JlZW52aWRlb3N0YXR1cy9mdW5ueXZpZGVvX21haW4vdmlkZW9fMTU5MzMyMDQ4OTg2OV82Zmd0Lm1wNA==",
        tags: "#funny #trending #entertainment #indian",
        like: "5.5k",
        share: "2.2k",
        comments: [
            "nice video", "awesome video", "fantastic video bro"
        ]
    },
    {
        id: 3,
        src: "https://whatsapp-status-video.com/videos/love-whatsapp-status-video-2.mp4",
        tags: "#sad #mehrama #song #trending #kartik",
        like: "5.1k",
        share: "2k",
        comments: [
            "i love this song", "nyccc song", "wow nice song",
        ]
    },
    {
        id: 4,
        src: "https://statusvideoplus.com/wp-content/uploads/2020/02/best-tik-tok-video-status-download.mp4",
        tags: "#popular #trending #funny #bestvideo",
        like: "1.2k",
        share: "180",
        comments: [
            "nyccc video", "awesome code bro"
        ]
    },
    {
        id: 5,
        src: "https://www.videostatusmarket.com/download/2776/funny_video?v=aHR0cHM6Ly93d3cudmlkZW9zdGF0dXNtYXJrZXQuY29tL2Z1bGxzY3JlZW52aWRlb3N0YXR1cy9mdW5ueXZpZGVvX21haW4vbWloaXJndXB0YTJfMTIzNTYyNzAzMl94cmtlLm1wNA==",
        tags: "#IIT #funny #comedy #popular",
        like: "6.2k",
        share: "3k",
        comments: [
            "suppperr video", "nice dialogue", "best video bro"
        ]
    },
    {
        id: 6,
        src: "https://www.videostatusmarket.com/download/903/funny_video?v=aHR0cHM6Ly93d3cudmlkZW9zdGF0dXNtYXJrZXQuY29tL2Z1bGxzY3JlZW52aWRlb3N0YXR1cy9mdW5ueXZpZGVvX21haW4vZ2xvd2luZ19zdGFyczA0XzEzODAwMTU2ODEubXA0",
        tags: "#trending #popular #comedy #Indian",
        like: "4.7k",
        share: "3.2k",
        comments: [
            "so entertaining video", "nice dialogue", "very funny"
        ]
    },
    {
        id: 7,
        src: "https://www.videostatusmarket.com/download/3552/funny_video?v=aHR0cHM6Ly93d3cudmlkZW9zdGF0dXNtYXJrZXQuY29tL2Z1bGxzY3JlZW52aWRlb3N0YXR1cy9mdW5ueXZpZGVvX21haW4vZGVlcGFuc2hpMjM0NTY3XzkxNzY3NDIxN18xX3pncW4ubXA0",
        tags: "#trending #popular #comedy #Indian",
        like: "2.1k",
        share: "208",
        comments: [
            "entertaining video", "very funny"
        ]
    },
    {
        id: 8,
        src: "https://www.videostatusmarket.com/download/3104/funny_video?v=aHR0cHM6Ly93d3cudmlkZW9zdGF0dXNtYXJrZXQuY29tL2Z1bGxzY3JlZW52aWRlb3N0YXR1cy9mdW5ueXZpZGVvX21haW4vamF5YW50NTc1M18xNjU2NDIyNTEwX3NxNDEubXA0",
        tags: "#trending #comedy #Indian",
        like: "4.2k",
        share: "2.8k",
        comments: [
            "nice", "very funny"
        ]
    },
    {
        id: 9,
        src: "https://www.videostatusmarket.com/download/267/funny_video?v=aHR0cHM6Ly93d3cudmlkZW9zdGF0dXNtYXJrZXQuY29tL2Z1bGxzY3JlZW52aWRlb3N0YXR1cy9mdW5ueXZpZGVvX21haW4vc29uYWwxMjA2XzE1Mzk2OTIwOTM0MDEubXA0",
        tags: "#garmi #pani #popular #comedy",
        like: "3.6k",
        share: "1.3k",
        comments: [
            "very funny", "haay Garmi"
        ]
    },
]
$(document).ready(function () {
    $(".continue").click(function () {
        $(".sec1").fadeOut()
    });
    $(".start").click(function () {
        $(".sec2").fadeOut()
    });
    $(".tags span").click(function () {
        $(this).toggleClass('select');
    });
    $(".like").click(function () {
        $(this).toggleClass("liked");
    });
    $("#comment-btn").click(function () {
        let com = $("#comment").val();
        if (com !== '') {
            addComment(com, 7);
            $("#comment").val('');
        }
    });
    $(".comment").click(function () {
        let id = $(this).attr("data-id");
        let { comments } = videos.find(v => v.id == id);
        $(".t-com").text(comments.length + " Comments");
        $.each(comments, function (key, value) {
            addComment(value, key);
        });

        $(".comment-box").addClass("active");
    });

    $(".close").click(function () {
        $('.com-list').empty();
        $(".comment-box").removeClass("active");
    });

})

function addComment(value, key) {
    let li = `<li class="comment" >
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR_zjuswaL2G_T95Baja23MFJZYSzdXK8KAgg&usqp=CAU" >
      <div class="com-content" >
      <span>solouser_1102${key}</span>
      <p>${value}</p>
      <button class="like" ><i class="material-icons">favorite</i> </button>
      </div>
      </li>`;
    $('.com-list').prepend(li);
}


function setVideo() {
    videos.forEach(video => addVideo(video));
}
setVideo();
function addVideo(video) {
    let html = `
       <section class="section" >
       <video 
       poster="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSqt20cYMVm4M0tgvo0DElv-75c84oTS7Re9A&usqp=CAU" 
       src="${video.src}"    
       controls
       >
       </video>
       <div class="follow-top" >
       <p>For You</p><span></span><p>Following</p>
       </div>
       <div class="action">
       <a href="https://www.sololearn.com/Profile/9151475/?ref=app" class="follow-btn" >
       <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS9MmBwRDun8ovOY-SmyoNGuXtrybyzQSEu2g&usqp=CAU"></a>
        <button class="like" ><i class="material-icons" >favorite</i>${video.like}</button>
        <button class="comment" data-id="${video.id}"><i class="material-icons" >textsms</i>${video.comments.length}k</button>
        <button class="share" ><i class="material-icons" >reply</i>${video.share}</button>
       </div>
       <div class="user-info" >
       <span>@amardeep_kesharwani</span>
       <p>${video.tags}</p>
       </div>
       <div class="song" ><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS9MmBwRDun8ovOY-SmyoNGuXtrybyzQSEu2g&usqp=CAU"></div>
       </section>
     `;
    $("#fullpage").append(html)
}


new fullpage('#fullpage', {
    autoScrolling: true,
    navigation: false,
    scrollingSpeed: 1000,
});
