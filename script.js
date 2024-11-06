let uploadButton = document.getElementById("file-upload");
let gallery = document.getElementById("gallery");

uploadButton.onchange = () => {
    let file = uploadButton.files[0];
    if(file) {
        let fileExtension = file.name.split('.').pop().toLowerCase();
        if(fileExtension === "jpg" || fileExtension === "png" || fileExtension === "jpeg") {
            let reader = new FileReader();
            reader.readAsDataURL(file);
            console.log(uploadButton.files[0]);
    
            reader.onload = () => {
                let imgLink = document.createElement("a");
                imgLink.href = reader.result;
                imgLink.setAttribute("data-lightbox", "models");
                imgLink.setAttribute("data-title", "New Image");
    
                let img = document.createElement("img");
                img.src = reader.result;
    
                imgLink.appendChild(img);
                gallery.appendChild(imgLink);
            }
        }
        else {
            alert("Please select a valid image file (.jpg or .png)")
        }
    }
};