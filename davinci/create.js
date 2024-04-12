////////////////////////////////////////////////

// NAVIGATION

///////////////////////////////////////////////

function partners() {
    window.location.href = "#partners";
}

////////////////////////////////////////////////

// TUTORIALS

///////////////////////////////////////////////

$(".step2").hide();
function goToStep2() {
    $(".step1").slideToggle();
    $(".step2").delay(400).slideToggle();
}
document.addEventListener('DOMContentLoaded', function () {
    var form = document.getElementById('create');

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        var inputs = form.querySelectorAll('input[data-coloris]');
        var color1 = inputs[0].value;
        var color2 = inputs[1].value;
        var color3 = inputs[2].value;
        var fileInput = document.getElementById('fileInput');
        var file = fileInput.files[0];

        if (file) {
            var reader = new FileReader();
            reader.onload = function (event) {
                localStorage.setItem('image', event.target.result);
                localStorage.setItem('color1', color1);
                localStorage.setItem('color2', color2);
                localStorage.setItem('color3', color3);
                window.location.href = "gen-post.html";
            };
            reader.readAsDataURL(file);
        } else {
            alert('Por favor, selecione uma imagem PNG 1080x1080px.');
        }
    });
});