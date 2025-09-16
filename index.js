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

// form
const form = document.querySelector("#form");

function validation(event) {
    if (event.target.name === "name") {
        const farsi = /^[\u0600-\u06FF\s]*$/;  // فقط حروف فارسی و فاصله
        if (!farsi.test(event.target.value)) {
            event.target.value = "";
            alert("لطفا فارسی وارد کنید");
        }
    } else if (event.target.name === "phone") {
        const englishNumbers = /^[0-9]*$/;  // فقط اعداد انگلیسی
        if (!englishNumbers.test(event.target.value)) {
            event.target.value = "";
            alert("لطفا فقط عدد انگلیسی وارد کنید");
        }
    }
}

form.addEventListener("keyup", validation);

function submit (event){
    event.preventDefault();
    const inputs= document.querySelectorAll(".input");
    let error="";
    for (const input of inputs){
        if(!input.value){
            error= error+`\n${input.title} نباید خالی باشد`
        }
        }  
        if (error){
            alert(error);
        }else{
            alert("ارسال درخواست");
        }

}
form.addEventListener("submit", submit)