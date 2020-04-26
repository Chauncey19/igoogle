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
            $("#formmeteo").append('<input class="pl-3" type="image" alt="meteo" src="./images/loupe.png" height="40rem" id="loupemeteo">');
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
    var loupemeteo = 0;
    $(document).on('click', '#loupemeteo', function() {
        if (loupemeteo == 0) {
            var ville = $('#inputmeteo').val();


            $.ajax({
                url: 'https://api.weatherapi.com/v1/current.json',
                data: {
                    key: '781c30ec70e74a7ea2890526202604',
                    q: ville
                },
                dataType: 'json',
                success: function(apiResponse) {


                    $("#widgetmeteo").append('<p class="text-center mt-4" id="txtmeteo">' + `${apiResponse.location.name} : ${apiResponse.current.temp_c} ℃` + '</p>');
                    $("#widgetmeteo").append('<p class="text-center" id="txtmeteo"> Heure locale: ' + `${apiResponse.location.localtime}` + '</p>');
                    /* $("#widgetmeteo").append('<img class="rounded mx-auto d-block mt-6" src="' + `${apiResponse.condition.icon}` + '" alt="imgmeteo">'); */
                }
            });

            event.preventDefault();

        } else {
            $(document).ready(function() {

                $("#widgetmeteo p").remove();
                var ville = $('#inputmeteo').val();


                $.ajax({
                    url: 'https://api.weatherapi.com/v1/current.json',
                    data: {
                        key: '781c30ec70e74a7ea2890526202604',
                        q: ville
                    },
                    dataType: 'json',
                    success: function(apiResponse) {


                        $("#widgetmeteo").append('<p class="text-center mt-4" id="txtmeteo">' + `${apiResponse.location.name} : ${apiResponse.current.temp_c} ℃` + '</p>');
                        $("#widgetmeteo").append('<p class="text-center" id="txtmeteo"> Heure locale: ' + `${apiResponse.location.localtime}` + '</p>');
                        /* $("#widgetmeteo").append('<img class="rounded mx-auto d-block mt-6" src="' + `${apiResponse.condition.icon}` + '" alt="imgmeteo">'); */
                    }
                });

                event.preventDefault();


            });
        }

        loupemeteo++;

    });

    $(document).on('click', '#loupemeteo', function() {



    });




    var clictwit = 0;
    $("#twitter").click(function() {

        if (clictwit == 0) {
            $("#widgettwitter").css('background', 'white');
            $("#widgettwitter").css('border-radius', '5px');
            $("#widgettwitter").css('overflow', 'scroll');
            $("#widgettwitter").append('<div class="row bg-dark"> <input class=" offset-md-10 pr-3 pt-3 pb-2 " type="image" alt="meteo" src="./images/croix.png" height="50rem" id="croixtwitter"></div>');
            $("#widgettwitter").append('<h1 class="pt-3 h-25 text-center">Twitter</h1>');
            $("#widgettwitter").append('<a class="twitter-timeline" href="https://twitter.com/MichelBillaud?ref_src=twsrc%5Etfw">Tweets by MichelBillaud</a>');
            $("#widgettwitter").append('<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>');
            event.preventDefault();


        }
        clictwit--;
    });

    $(document).on('click', '#croixtwitter', function() {

        $("#widgettwitter").css("background", "");
        $("#widgettwitter").css('overflow', 'hidden');
        $("#widgettwitter").empty();
        event.preventDefault();
        clictwit++;

    });

    $(document).on('click', '#loupe', function() {

        var search = $('#inputsearch').val();

        $("#widgetgoogle").css('background', 'white');
        $("#widgetgoogle").css('overflow', 'scroll');
        $('#widgetgoogle').css('flex-shrink', '1');
        $("#widgettgoogle").css('border-radius', '5px');
        $("#widgetgoogle").append('<div class="row bg-dark"> <input class=" offset-md-10 pr-3 pt-3 pb-2 " type="image" alt="google" src="./images/croix.png" height="50rem" id="croixgoogle"></div>');
        $("#widgetgoogle").append('<h1 class="pt-3 h-25 text-center">Google</h1>');
        $("#widgetgoogle").append('<form class="form-inline ml-3" id="formgoogle"></form>');
        $("#formgoogle").append('<input type="name" class="form-control w-75" id="inputgoogle" placeholder="Nom">');
        $("#formgoogle").append('<input type="image" class="ml-3" src="./images/loupe.png" alt="meteo" height="30px" id="loupegoogle">');

        event.preventDefault();


        $.ajax({
            url: 'https://www.googleapis.com/customsearch/v1',
            data: {
                key: 'AIzaSyAahg_XU_-hHg10X29mEoqgl4H0TS0ckJc',
                cx: '008322374696893412635:rsbie6s56uz',
                q: search
            },
            dataType: 'json',
            success: function(response) {

                for (var i = 0; i < response.items.length; i++) {
                    console.log(`${response.items[i].title}`);
                    // in production code, item.htmlTitle should have the HTML entities escaped.
                    $("#widgetgoogle").append('<br>' + `${response.items[i].title}` + '</br>');
                }
                $('#widgetgoogle').css('font-weight', 'bold');
            }

        });

        event.preventDefault();




    });
    $(document).ready(function() {
        $(document).on('click', '#loupegoogle', function() {

            var search = $('#inputgoogle').val();
            $("#widgetgoogle").empty();
            $("#widgetgoogle").css('background', 'white');
            $("#widgetgoogle").css('overflow', 'scroll');
            $('#widgetgoogle').css('flex-shrink', '1');
            $("#widgettgoogle").css('border-radius', '5px');
            $("#widgetgoogle").append('<div class="row bg-dark"> <input class=" offset-md-10 pr-3 pt-3 pb-2 " type="image" alt="google" src="./images/croix.png" height="50rem" id="croixgoogle"></div>');
            $("#widgetgoogle").append('<h1 class="pt-3 h-25 text-center">Google</h1>');
            $("#widgetgoogle").append('<form class="form-inline ml-3" id="formgoogle"></form>');
            $("#formgoogle").append('<input type="name" class="form-control w-75" id="inputgoogle" placeholder="search">');
            $("#formgoogle").append('<input type="image" class="ml-3" src="./images/loupe.png" alt="meteo" height="30px" id="loupegoogle">');


            event.preventDefault();


            $.ajax({
                url: 'https://www.googleapis.com/customsearch/v1',
                data: {
                    key: 'AIzaSyAahg_XU_-hHg10X29mEoqgl4H0TS0ckJc',
                    cx: '008322374696893412635:rsbie6s56uz',
                    q: search
                },
                dataType: 'json',
                success: function(response) {

                    for (var i = 0; i < response.items.length; i++) {
                        console.log(`${response.items[i].title}`);
                        // in production code, item.htmlTitle should have the HTML entities escaped.
                        $("#widgetgoogle").append('<p>' + `${response.items[i].title}` + '</p>');
                    }
                    $('#widgetgoogle').css('font-weight', 'bold');
                }

            });

            event.preventDefault();


        });
    });

    $(document).on('click', '#croixgoogle', function() {

        $("#widgetgoogle").css("background", "");
        $("#widgetgoogle").css('overflow', 'hidden');
        $("#widgetgoogle").empty();
        event.preventDefault();


    });


    $(document).on('click', '#maps', function() {

        $("#widgetmaps").css('background', 'white');
        $("#widgetmaps").css('overflow', 'scroll');
        $("#widgettmaps").css('border-radius', '5px');
        $("#widgetmaps").append('<div class="row bg-dark"> <input class=" offset-md-10 pr-3 pt-3 pb-2 " type="image" alt="google" src="./images/croix.png" height="50rem" id="croixmaps"></div>');
        $("#widgetmaps").append('<h1 class="pt-3 h-25 text-center">Google Maps</h1>');
        $("#widgetmaps").append('<div class="text-center"><iframe  id="map" src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;q=bordeaux+(My%20Business%20Name)&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed" frameborder="0" scrolling="yes" marginheight="0" marginwidth="0"><a href="https://www.maps.ie/draw-radius-circle-map/">Google Maps radius calculator</a></iframe></div>');



    });

    $(document).on('click', '#croixmaps', function() {

        $("#widgetmaps").css("background", "");
        $("#widgetmaps").css('overflow', 'hidden');
        $("#widgetmaps").empty();
        event.preventDefault();


    });





});