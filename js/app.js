function init() {

// Get the checkbox
    var checkBox = document.getElementById("checkbox");
    checkBox.addEventListener("click", function myFunction() {

        // If the checkbox is checked, display form_ok image
        if (checkBox.checked === true) {
            console.log("Click!");
            (this).classList.add('image-checkbox-checked');
            // checkBox.innerHTML = "<img src=/images/form_ok.jpg>";
        } else {
            (this).classList.remove('image-checkbox-checked');
        }
    })

}


document.addEventListener('DOMContentLoaded', init);