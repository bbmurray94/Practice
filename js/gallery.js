function upDate(previewPic){
    var imageSource = previewPic.src;
    var imageAltText = previewPic.alt;
    var imageViewer = document.getElementById("image");
    imageViewer.style.backgroundImage = `url(${imageSource})`
    imageViewer.innerHTML = imageAltText;
}
   
function unDo(){
    var imageViewer = document.getElementById("image");
    imageViewer.style.backgroundImage = `url("")`;   
    imageViewer.innerHTML = "Hover over an image below to display here.";
}

function setImages(){
    images = document.querySelectorAll("img");

    for(var i=0;i<images.length;i++){
        console.log("Image " + i);
        images[i].setAttribute("tabindex", "0");
    }
}