const images = document.getElementsByTagName("img");
const next = document.getElementById("next");
const prev = document.getElementById("prev");

let image_div = document.getElementById("image_div");
const url = "https://picsum.photos/500/500";
// let count = 1;
console.log('1ci',images.length)

setInterval(() => {
  axios.get(url).then((res) => {
    // count++;
    // console.log(count);
    if(images.length<3){
      let img = document.createElement("img");
    img.src = res.config.url;
    image_div.appendChild(img);
    console.log('2ci',images.length)

    }else{
      images.length--
      // console.log(images[0].remove())
    
    }
      
    
  });
}, 3000);

let index = 0;
next.addEventListener("click", () => {
  index++;
  if (index > images.length - 1) {
    index = 0;
  }
  document.getElementsByClassName("show")[0].classList.remove("show");
  images[index].classList.add("show");
});

prev.addEventListener("click", () => {
  index--;
  if (index < 0) {
    index = images.length - 1;
  }
  document.getElementsByClassName("show")[0].classList.remove("show");
  images[index].classList.add("show");
});
