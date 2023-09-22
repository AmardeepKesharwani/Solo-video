const videos = [
  {
    id: 1,
    src: "./videos/manager-leave.mp4",
    tags: "#manager #trending #indian #bestvideo",
    like: "4.2k",
    share: "448",
    comments: [
      "hehe, good job",
      "ham bhi aisa hi krte h",
      "Nice video",
      "Your creativity never fails to impress me!",
    ],
  },

  {
    id: 2,
    src: "./videos/mera-pahla-junun.mp4",
    tags: "#mera pahla junun #trending #song ",
    like: "2.1k",
    share: "567",
    comments: [
      "my favorite song 😍",
      "This is such a cool shot! Love it",
      "awesome video",
      "mast hai ",
    ],
  },

  {
    id: 3,
    src: "./videos/dubai.mp4",
    tags: "#dubai #travel #trip",
    like: "3.4k",
    share: "561",
    comments: [
      "Awesome Video",
      "This is such a nice place",
      "awesome video",
    ],
  },
  {
    id: 4,
    src: "./videos/radher-radhe.mp4",
    tags: "#radhe radhe #vrindavan",
    like: "5k",
    share: "601",
    comments: [
      "jai shree krishana",
      "Radhe Radhe",
      "jai shree Radhe",
      "Radhe Radhe",
    ],
  },
  {
    id: 5,
    src: "./videos/jai-shree-ram.mp4",
    tags: "#jai shree Ram #ram navmi #special",
    like: "4.5k",
    share: "507",
    comments: [
      "jai shree Ram",
      "Ram Ram",
      "jai jai shree ram",
    ],
  },
  {
    id: 6,
    src: "./videos/train-race.mp4",
    tags: "#train race #kalka mail",
    like: "2k",
    share: "201",
    comments: [
      "Suppppper!",
      "Kalka jitegi",
    ],
  },
  {
    id: 7,
    src: "./videos/tere-charan.mp4",
    tags: "#jai Shree Krishana #charan",
    like: "3.5k",
    share: "304",
    comments: [
        "jai shree krishana",
        "Radhe Radhe",
        "Nice"
    ],
  },
  {
    id: 8,
    src: "./videos/exam.mp4",
    tags: "#exam #jai mata di",
    like: "2.5k",
    share: "504",
    comments: [
        "hahahah",
        "jai mata di, ye sahi h",
    ],
  },

  {
    id: 9,
    src: "./videos/risterdar.mp4",
    tags: "#risterdar #trending",
    like: "4.5k",
    share: "2k",
    comments: [
        "hahahah",
        "bilkul sahi kaha",
        "me bhi apni shadi me ye sing play krunga",
        "Suppper Video"
    ],
  },

  {
    id: 10,
    src: "./videos/habibi.mp4",
    tags: "#habibi come to #dubai",
    like: "3.4k",
    share: "605",
    comments: [
        "Nice Place",
        "Hibibi Come to dubai"
    ],
  },

  {
    id: 11,
    src: "./videos/main-hu-hero-tera.mp4",
    tags: "#main hu hero tera #arman malik",
    like: "6.2k",
    share: "2.2k",
    comments: [
        "Nice song",
        "it's my favorite song",
        "awesome song",
        "cool",
        "all time favorite"
    ],
  },

  {
    id: 12,
    src: "./videos/where-are-you-now.mp4",
    tags: "#dubai jumeirah",
    like: "1.4k",
    share: "156",
    comments: [
        "Nice Place",
        "nice video"
    ],
  },

  {
    id: 13,
    src: "./videos/dance.mp4",
    tags: "#bhojpuri #dance #trending",
    like: "5.4k",
    share: "1.4k",
    comments: [
        "beautiful dance",
        "mast dance",
        "wow nice",
        "supper dance",
        "hello",
    ],
  },

  {
    id: 14,
    src: "./videos/wrong-no.mp4",
    tags: "#wrong numner #trending",
    like: "2.3k",
    share: "304",
    comments: [
        "waaahh",
        "suppper talent",
        "Nice",
    ],
  },
];

const userName = [
  "Valentine Pedigo",
  "Miguel Douglas",
  "Riya Orourke",
  "Kalea Lusk",
  "Poppy Cagle",
  "Angely Sowell",
  "Jeremy Lowe",
  "Jessie Ahmed",
  "Rahma Conlon",
  "Mea Christopherson",
  "Taytum Obrian",
  "Bricen Southworth",
  "Koa Nesbitt",
  "Jahsir Dressler",
  "Akayla Hohman",
  "Sammy Fanning",
  "Ellena Bruton",
  "Olivier Bear",
  "Dannie Cancel",
  "Amaiah Kunze",
  "Emery Coulter",
  "Isaiah Kelly",
  "Terri Desantiago",
  "Aurielle Gause",
  "Homero Lillard",
  "Eshan Siebert",
  "Jermaine Crump",
  "Taylynn Hutchens",
  "Aniya Pierson",
  "Kaitlynn Osorio",
  "Leevi Rigney",
  "Romina Thacker",
  "Alonna Seal",
  "Breya Woodside",
  "Elysia Barba",
  "Zuleyka Keeler",
  "William Rodriguez",
  "Naveah Cardoso",
  "Francheska Drennan",
  "Truly Kerrigan",
  "Syncere Eng",
  "Stephon Armendariz",
  "Eleanor Gordon",
  "Kaylene Riddick",
  "Gloriana Drews",
  "Arhaan Lahr",
  "Mikaela Dolan",
  "Kaylana Arney",
  "Auston Delvecchio",
  "Iva Tafoya",
  "Ilaria Morman",
  "Deklin Bobbitt",
  "Kyiah Kayser",
  "Elida Omar",
  "Daxx Leitch",
  "Brynlee Briggs",
  "Brayla Krawczyk",
  "Lance Sheehan",
  "Jace Griffin",
  "Emiko Carrizales",
  "Josslynn Sickles",
  "Eleena Panek",
  "Alivia Strickland",
  "Dhruv Traylor",
  "Harper Kilgore",
  "Brookelyn Schoonover",
  "Oren Fultz",
  "Liya Swope",
  "Emmi Castleberry",
  "Arya Duran",
  "Theo Blackburn",
  "Gloria Newell",
  "Kamyah Whitted",
  "Carnell Braud",
  "Jalissa Rigsby",
  "Damari Dunton",
  "Chrisette Wittman",
  "Cynthia Law",
  "Pace Gadson",
  "Arleth Lindberg",
  "Honey Maxfield",
  "Nicodemus Norvell",
  "Soliana Monge",
  "Isadora Cerda",
  "Kayden Bolden",
  "Jaxtin Fey",
  "Melania Maciel",
  "Caliyah Salvador",
  "Link Hildebrand",
  "Amiah Fenton",
  "Kerrington Benally",
  "Mela Bilodeau",
  "Cayleb Spillman",
  "Everhett Holliman",
  "Hailey Palmer",
  "Aubrei Book",
  "Vittoria Ecker",
  "Mahi Lui",
  "Chad Hagan",
  "Callista Ericson",
];

function getRandomNo() {
  return Math.ceil(Math.random() * 100);
}

$(document).ready(function () {
  $(".continue").click(function () {
    $(".sec1").fadeOut();
  });
  $(".start").click(function () {
    $("#fullpage").fadeIn();
    $(".sec2").fadeOut();

  });
  $(".tags span").click(function () {
    $(this).toggleClass("select");
  });
  $(".like").click(function () {
    console.log("ff");
    $(this).toggleClass("liked");
  });
  $(".share").click(function () {
    const shareData = {
      tilte: "Solo Video",
      text: "Best short videos",
      url: "https://amardeepkesharwani.github.io/solo_video",
    };
    if (navigator.canShare && navigator.canShare(shareData)) {
      navigator.canShare(shareData);
      return;
    }

    if (navigator.share) {
      navigator
        .share(shareData)
        .then(() => console.log("Successful share"))
        .catch((error) => console.log("Error sharing", error));
    }
  });
  $("#comment-btn").click(function () {
    let com = $("#comment").val();
    if (com !== "") {
      addComment(com, 7);
      $("#comment").val("");
    }
  });
  $(".comment").click(function () {
    let id = $(this).attr("data-id");
    let { comments } = videos.find((v) => v.id == id);
    $(".t-com").text(comments.length + " Comments");
    $.each(comments, function (key, value) {
      addComment(value, key);
    });

    $(".comment-box").addClass("active");
  });

  $(".close").click(function () {
    $(".com-list").empty();
    $(".comment-box").removeClass("active");
  });
});

function addComment(value, key) {
  let li = `<li class="comment" >
      <img src="https://picsum.photos/100/100?random=${getRandomNo()}" >
      <div class="com-content" >
      <span>${userName[getRandomNo()]}</span>
      <p>${value}</p>
      <button class="like" ><i class="material-icons">favorite</i> </button>
      </div>
      </li>`;
  $(".com-list").prepend(li);
}

function setVideo() {
  videos.forEach((video) => addVideo(video));
}


setVideo();

function addVideo(video) {
  let html = `
       <section class="section" >
       <video 
       poster="./img/poster.jpg" 
       src="${video.src}"    
       controls
       loop
       data-autoplay
       >
       </video>
       <div class="follow-top" >
       <p>For You</p><span></span><p>Following</p>
       </div>
       <div class="action">
       <a href="https://www.sololearn.com/Profile/9151475/?ref=app" class="follow-btn" >
       <img src="https://picsum.photos/100/100?random=${getRandomNo()}" ></a>
        <button class="like" ><i class="material-icons" >favorite</i>${
          video.like
        }</button>
        <button class="comment" data-id="${
          video.id
        }"><i class="material-icons" >textsms</i>${
    video.comments.length
  }k</button>
        <button class="share"><i class="material-icons" >reply</i>${
          video.share
        }</button>
       </div>
       <div class="user-info" >
       <span>@${userName[getRandomNo()].toLowerCase().replace(" ", "_")}</span>
       <p>${video.tags}</p>
       </div>
       <div class="song" ><img src="https://picsum.photos/100/100?random=${getRandomNo()}" ></div>
       </section>
     `;
  $("#fullpage").append(html);
}

new fullpage("#fullpage", {
  autoScrolling: true,
  navigation: false,
  scrollingSpeed: 1000,
  afterRender: function () {
    // Get the video element
    var video = document.querySelector("video");

    // Play the video
    // video.play();
  },
});
