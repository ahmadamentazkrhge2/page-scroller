// let book = "Video";
// let video = "Book";
// [book, video]=[video, book]
// console.log(`book ${book}   ...   video ${video}`)


let el=document.querySelector(".scroller")
let height=document.documentElement.scrollHeight-document.documentElement.clientHeight
window.addEventListener("scroll",()=>{
    let scrollTop=document.documentElement.scrollTop
    el.style.width=`${(scrollTop/height)*100}%`
})
