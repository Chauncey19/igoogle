$(document).ready(function() {

    var clicmeteo = 0;
    $("#meteo").click(function() {

        if (clicmeteo == 0) {
            $("#widgetmeteo").css('background', 'white');
            $("#widgetmeteo").css('border-radius', '5px');
            $("#widgetmeteo").append('<div class="row bg-dark"> <input class=" offset-md-10 pr-3 pt-3 pb-2" type="image" alt="meteo" src="./images/croix.png" height="50rem" id="croixmeteo"></div>');
            $("#widgetmeteo").append('<h1 class="pt-3 h-25 text-center">Météo</h1>');
            $("#widgetmeteo").append('<form class="form-inline ml-3" id="formmeteo"></form>');
            $("#formmeteo").append('<input type="name" class="form-control w-75" id="inputmeteo" placeholder="Entrez une ville">');
            $("#formmeteo").append('<input type="image" class="ml-3" src="./images/loupe.png" alt="search" height="30px" id="loupemeteo">');
            event.preventDefault();
        }
        clicmeteo--;
    });

    $(document).on('click', '#croixmeteo', function() {

        $("#widgetmeteo").css("background", "");
        $("#widgetmeteo").empty();
        event.preventDefault();
        clicmeteo++;

    });
    var clictwit = 0;
    $("#twitter").click(function() {

        if (clictwit == 0) {
            $("#widgettwitter").css('background', 'white');
            $("#widgettwitter").css('border-radius', '5px');
            $("#widgettwitter").append('<div class="row bg-dark"> <input class=" offset-md-10 pr-3 pt-3 pb-2" type="image" alt="meteo" src="./images/croix.png" height="50rem" id="croixtwitter"></div>');
            $("#widgettwitter").append('<h1 class="pt-3 h-25 text-center">Twitter</h1>');
            $("#widgettwitter").append('<form class="form-inline ml-3" id="formtwitter"></form>');
            $("#formtwitter").append('<input type="name" class="form-control w-75" id="inputtwitter" placeholder="Nom">');
            $("#formtwitter").append('<input type="image" class="ml-3" src="./images/loupe.png" alt="search" height="30px" id="loupetwitter">');
            event.preventDefault();
        }
        clictwit--;
    });

    $(document).on('click', '#croixtwitter', function() {

        $("#widgettwitter").css("background", "");
        $("#widgettwitter").empty();
        event.preventDefault();
        clictwit++;

    });






});