const images = [
    {img:"https://images.pexels.com/photos/534164/pexels-photo-534164.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},
    {img:"https://images.pexels.com/photos/36478/amazing-beautiful-beauty-blue.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},
    {img:"https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},
    {img:"https://images.pexels.com/photos/210243/pexels-photo-210243.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},
    {img:"https://images.pexels.com/photos/789380/pexels-photo-789380.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}
];


const slider = document.getElementById("slider").querySelector("img");

i = 0;
const click = document.querySelector(".click").addEventListener("click", () => {
    const val = images[i].img;
    slider.setAttribute("src", `${val}`);
    if (i >= 4) {
        i = 0;
    }
    else i++;
});


const click2 = document.querySelector(".click2").addEventListener('click',()=>{
    if(i <= 0){
        i = 4;
    }
    i--;
    const val = images[i].img;
    slider.setAttribute('src',`${val}`);
})