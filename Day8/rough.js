const con=document.getElementById('container')
const arr=["./asserts/3614856.jpg",
    "./asserts/12767828.jpg",
    "./asserts/7032284.jpg",
    "./asserts/1469433.jpg"
]

const img = document.getElementsByClassName("img")
console.log(img);

let i = 0;
let changeImg1 = () => {
    img[i].classList.remove("active")
    i++;
    if (i == arr.length) {
        i = 0;
    }
    img[i].classList.add("active")
    con.style.backgroundImage = `url(${arr[i]})`;

}
let changeImg2 = () => {
    i--;
    if (i == -1) {
        i = arr.length - 1;
    }
    con.style.backgroundImage = `url(${arr[i]})`;
}
let change = (a) => {
    con.style.backgroundImage = `url(${arr[a]})`;
}

setInterval(() => {
    changeImg1();
}, 2000);

