// popup
const popup= document.querySelector("#popup")
setTimeout(()=>{
popup.classList.add("popup");
}, 3000)

function closePopup() {
    popup.classList.remove("popup");
}
popup.addEventListener("click", closePopup);

// burger menu
const burger= document.querySelector("#burger");
function menu (){
const navItems= document.querySelectorAll(".nav-item");
for (const navItem of navItems){
    if (navItem.classList.contains("nav-item-show")){
        navItem.classList.remove("nav-item-show");
    } else{
        navItem.classList.add("nav-item-show");
    }
}
}

burger.addEventListener("click", menu);

// comments
const commentList =[
    {
        name:"علی",
        content:" یکی از بهترین رستوران هایی که میشناسم واقعا فوق العاده ست",
        Image:"3.jpg"
    },
      {
        name:"سحر",
        content:" یکی از بهترین رستوران هایی که میشناسم واقعا فوق العاده ست",
        Image:"images (1).jpg"
    },
       {
        name:"سمیرا",
        content:" یکی از بهترین رستوران هایی که میشناسم واقعا فوق العاده ست",
        Image:"images.jpg"
    },
       {
        name:"احسان",
        content:" یکی از بهترین رستوران هایی که میشناسم واقعا فوق العاده ست",
        Image:"4.jpg"
    },
];
const result = commentList.map(function(comment){
    return `<figure class="comment-item">
            <img
              src="./images/${comment.Image}"
              class="comment-item-image"
              alt=${comment.name}
            />
            <figcaption class="comment-item-text">
              <h3>${comment.name}</h3>
    <p>
              ${comment.content}
              </p>
            </figcaption>
          </figure>`
})
.join("")

const commentItemsDiv = document.querySelector("#comment-items");
commentItemsDiv. innerHTML= result;


