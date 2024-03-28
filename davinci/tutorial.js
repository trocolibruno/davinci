document.addEventListener('DOMContentLoaded', function () {
    var form = document.getElementById('create');

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        var inputs = form.querySelectorAll('input[data-coloris]');
        var color1 = inputs[0].value;
        var color2 = inputs[1].value;
        var color3 = inputs[2].value;

        // Salvar os dados no localStorage
        localStorage.setItem('color1', color1);
        localStorage.setItem('color2', color2);
        localStorage.setItem('color3', color3);

        window.location.href = "gen.html";
    });
});