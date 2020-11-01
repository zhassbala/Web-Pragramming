let imgs = document.getElementsByClassName('box-image')

for(let i = 0; i < imgs.length; i++){
    imgs[i].addEventListener("click", 
    (e) => {
        console.log("Image number " + i)
        e.currentTarget.classList.toggle("_active");
    });
}
