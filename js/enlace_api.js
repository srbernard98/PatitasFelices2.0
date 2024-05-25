$(document).ready(function(){

    $(".get-animal").each(function() {
        var animalId = $(this).data("animal-id");
        loadAnimalInfo(animalId);
    });

    function loadAnimalInfo(animalId) {
        var $card = $('#animal-id-' + animalId).closest('.card');
        var apiUrl = "https://huachitos.cl/api/animal/" + animalId;
        var text = "";
        $.get(apiUrl, function(data){
            $card.find('.card-img-top').attr('src', data.data.imagenes[0].imagen);
            $card.find('.card-title').text(data.data.nombre);
            text = data.data.desc_adicional;

            let nuevoTexto = text.replace(/\//g, "");
            nuevoTexto = nuevoTexto.replace(/<p>/g, "");

            $card.find('.card-text').text(nuevoTexto);
        });
    }
});