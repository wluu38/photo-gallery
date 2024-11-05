let uploadButton = document.getElementById("file-upload");
let chosenImage = document.getElementById("chosenImage");

uploadButton.onchange = () => {
    let reader = new FileReader();
    reader.readAsDataURL(uploadButton.files[0]);
    console.log(uploadButton.files[0]);
    reader.onload = () => {
        chosenImage.setAttribute("src", reader.result);
    }
}