function previewImage(event) {
    var imagePreview = document.getElementById("imagePreview");
    var input = event.target;

    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            imagePreview.style.display = "block";
            imagePreview.src = e.target.result;
        };

        reader.readAsDataURL(input.files[0]);
    } else {
        imagePreview.style.display = "none";
        imagePreview.src = "#";
    }
}

