let item=[
    {
        img:"1.jpg",
        caption: "Mersal"
    },
    {
        img:"2.jpg",
        caption: "Vetri Maaran"
    },
    {
        img:"3.jpg",
        caption: "Alaporan Tamizhan"
    },
    {
        img:"4.jpg",
        caption: "Vijay Planting"
    },
    {
        img:"5.jpg",
        caption: "Beast"
    },
    {
        img:"6.jpg",
        caption: "Audio Launch"
    },
    {
        img:"7.jpg",
        caption: "Beast Thalapathy"
    },
    {
        img:"8.jpg",
        caption: "Vijay planting"
    },
    {
        img:"9.jpg",
        caption: "Vijay planting"
    },
    {
        img:"10.jpg",
        caption: "Thala Thalapthy"
    },
]
item.push({img:"11.JFIF",caption:"Kaavalan"})
 let initial=0;
 let myImage = document.getElementById('myImage');
 let caption = document.getElementById('caption');
 let prev = document.getElementById('prev');
 let random = document.getElementById('random');
 let next = document.getElementById('next');



function gallery(){
    menu = item[initial]
   myImage.src=menu.img;
   caption.innerText=`- ${menu.caption}`;
}


window.addEventListener('DOMContentLoaded',()=>{
    gallery()
})

prev.addEventListener('click',()=>{
    initial--;
    if(initial<0){
        initial = item.length-1;
    }
    gallery(initial)
});

next.addEventListener('click',()=>{
    initial++;
    if(initial>item.length-1){
        initial=0;
    }
    gallery(initial)
})
random.addEventListener('click',()=>{
    
     initial = Math.floor(Math.random()*item.length)
     
    gallery(initial)
})