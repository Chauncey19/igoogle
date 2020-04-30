$(document).ready(function() {

    var clicmeteo = 0;
    // widget ouverture meteo
    $("#meteo").click(function() {
        if (clicmeteo == 0) {
            $("#back2").append(' <div class="col-md-3 mt-3 mr-3 mb-3 ml-5" id="widgetmeteo"></div>');

        }
    });



    $(document).on('click', '#meteo', function() {

        if (clicmeteo == 0) {
            $("#widgetmeteo").css('background', 'white');
            $("#widgetmeteo").css('border-radius', '5px');
            $("#widgetmeteo").append('<div class="row bg-dark"> <input class="ml-auto pr-3 pt-3 pb-2" type="image" alt="meteo" src="./images/croix.png" height="50rem" id="croixmeteo"></div>');
            $("#widgetmeteo").append('<h1 class="pt-3 h-25 text-center">Météo</h1>');
            $("#widgetmeteo").append('<form class="form-inline ml-3" id="formmeteo"></form>');
            $("#formmeteo").append('<input type="name" class="form-control w-75" id="inputmeteo" placeholder="Entrez une ville">');
            $("#formmeteo").append('<input class="pl-3" type="image" alt="meteo" src="./images/loupe.png" height="40rem" id="loupemeteo">');
            event.preventDefault();
            clicmeteo = 1;
        }

    });

    $(document).on('click', '#widgetmeteo', function() {
        $(this).draggable();
    });

    // widget fermeture meteo
    $(document).on('click', '#croixmeteo', function() {
        if (clicmeteo == 1) {
            $("#widgetmeteo").css("background", "");
            $("#widgetmeteo").remove();
            event.preventDefault();
            clicmeteo = 0;
        }

    });
    var loupemeteo = 0;

    // widget requete ajax meteo
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

    var clictwit = 0;
    // widget ouverture et requete twitter
    $("#twitter").click(function() {
        if (clictwit == 0) {
            $("#back2").append(' <div class="col-md-3 mt-3 mr-3 mb-3 ml-5" id="widgettwitter"></div>');
        }
    });



    $(document).on('click', '#twitter', function() {

        if (clictwit == 0) {
            $("#widgettwitter").css('background', 'white');
            $("#widgettwitter").css('border-radius', '5px');
            $("#widgettwitter").css('overflow', 'scroll');
            $("#widgettwitter").append('<div class="row bg-dark"> <input class="ml-auto pr-3 pt-3 pb-2 " type="image" alt="meteo" src="./images/croix.png" height="50rem" id="croixtwitter"></div>');
            $("#widgettwitter").append('<h1 class="pt-3 h-25 text-center">Twitter</h1>');
            $("#widgettwitter").append('<a class="twitter-timeline" href="https://twitter.com/MichelBillaud?ref_src=twsrc%5Etfw">Tweets by MichelBillaud</a>');
            $("#widgettwitter").append('<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>');
            event.preventDefault();
            clictwit = 1;

        }

    });

    $(document).on('click', '#widgettwitter', function() {
        $(this).draggable();
    });

    // widget fermeture twitter
    $(document).on('click', '#croixtwitter', function() {

        if (clictwit == 1) {

            $("#widgettwitter").css("background", "");
            $("#widgettwitter").css('overflow', 'hidden');
            $("#widgettwitter").remove();
            event.preventDefault();
            clictwit = 0;

        }


    });
    var clicgoogle = 0;
    // widget ouverture google search + requete ajax
    $("#loupe").click(function() {
        if (clicgoogle == 0) {
            $("#back2").append(' <div class="col-md-3 mt-3 mr-3 mb-3 ml-5" id="widgetgoogle"></div>');
        }
    });

    $(document).on('click', '#loupe', function() {
        if (clicgoogle == 0) {
            var search = $('#inputsearch').val();

            $("#widgetgoogle").css('background', 'white');
            $("#widgetgoogle").css('overflow', 'scroll');
            $('#widgetgoogle').css('flex-shrink', '1');
            $("#widgettgoogle").css('border-radius', '5px');
            $("#widgetgoogle").append('<div class="row bg-dark"> <input class=" ml-auto pr-3 pt-3 pb-2 " type="image" alt="google" src="./images/croix.png" height="50rem" id="croixgoogle"></div>');
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

                        $("#widgetgoogle").append('<br>' + `${response.items[i].title}` + '</br>');
                    }
                    $('#widgetgoogle').css('font-weight', 'bold');
                }

            });

            event.preventDefault();

            clicgoogle = 1;


        } else {

            var search = $('#inputsearch').val();
            $("#widgetgoogle").css("background", "");
            $("#widgetgoogle").css('overflow', 'hidden');
            $("#widgetgoogle").remove();
            $("#widgetgoogle").css('background', 'white');
            $("#widgetgoogle").css('overflow', 'scroll');
            $('#widgetgoogle').css('flex-shrink', '1');
            $("#widgettgoogle").css('border-radius', '5px');
            $("#widgetgoogle").append('<div class="row bg-dark"> <input class=" ml-auto pr-3 pt-3 pb-2 " type="image" alt="google" src="./images/croix.png" height="50rem" id="croixgoogle"></div>');
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

                        $("#widgetgoogle").append('<br>' + `${response.items[i].title}` + '</br>');
                    }
                    $('#widgetgoogle').css('font-weight', 'bold');
                }

            });

            event.preventDefault();

        }




    });

    $(document).on('click', '#widgetgoogle', function() {
        $(this).draggable();
    });
    // widget ouverture google search + requete ajax loupe
    $(document).ready(function() {
        $(document).on('click', '#loupegoogle', function() {

            var search = $('#inputgoogle').val();
            $("#widgetgoogle").remove();
            $("#widgetgoogle").css('background', 'white');
            $("#widgetgoogle").css('overflow', 'scroll');
            $('#widgetgoogle').css('flex-shrink', '1');
            $("#widgettgoogle").css('border-radius', '5px');
            $("#widgetgoogle").append('<div class="row bg-dark"> <input class=" ml-auto pr-3 pt-3 pb-2 " type="image" alt="google" src="./images/croix.png" height="50rem" id="croixgoogle"></div>');
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
    // widget fermeture google search
    $(document).on('click', '#croixgoogle', function() {

        $("#widgetgoogle").css("background", "");
        $("#widgetgoogle").css('overflow', 'hidden');
        $("#widgetgoogle").remove();
        event.preventDefault();


    });
    var clicmaps = 0;
    // widget ouverture maps + requete
    $("#maps").click(function() {
        if (clicmaps == 0) {
            $("#back2").append(' <div class="col-md-3 mt-3 mr-3 mb-3 ml-5" id="widgetmaps"></div>');
        }
    });


    $(document).on('click', '#maps', function() {

        if (clicmaps == 0) {
            $("#widgetmaps").css('background', 'white');
            $("#widgetmaps").css('overflow', 'scroll');
            $("#widgetmaps").css('border-radius', '5px');
            $("#widgetmaps").append('<div class="row bg-dark"> <input class=" ml-auto pr-3 pt-3 pb-2 " type="image" alt="google" src="./images/croix.png" height="50rem" id="croixmaps"></div>');
            $("#widgetmaps").append('<h1 class="pt-3 h-25 text-center">Google Maps</h1>');
            $("#widgetmaps").append('<div class="text-center"><iframe  id="map" src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;q=bordeaux+(My%20Business%20Name)&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed" frameborder="0" scrolling="yes" marginheight="0" marginwidth="0"><a href="https://www.maps.ie/draw-radius-circle-map/"></a></iframe></div>');
            clicmaps = 1;
        }





    });

    $(document).on('click', '#widgetmaps', function() {
        $(this).draggable();
    });
    // widget fermeture maps
    $(document).on('click', '#croixmaps', function() {

        if (clicmaps == 1) {
            $("#widgetmaps").css("background", "");
            $("#widgetmaps").css('overflow', 'hidden');
            $("#widgetmaps").remove();
            event.preventDefault();
            clicmaps = 0;

        }



    });
    var clichorloge = 0;
    // widget ouverture horloge
    $("#Horloge").click(function() {
        if (clichorloge == 0) {
            $("#back2").append(' <div class="col-md-3 mt-3 mr-3 mb-3 ml-5" id="widgethorloge"></div>');
        }
    });



    $(document).on('click', '#Horloge', function date() {


        if (clichorloge == 0) {
            var d = new Date();
            $("#widgethorloge").css('background', 'white');
            $("#widgethorloge").css('border-radius', '5px');

            $("#widgethorloge").append('<div class="row bg-dark"> <input class=" ml-auto pr-3 pt-3 pb-2 " type="image" alt="meteo" src="./images/croix.png" height="50rem" id="croixHorloge"></div>');
            $("#widgethorloge").append('<h1 class="pt-3 h-25 text-center">Horloge</h1>');
            $("#widgethorloge").append('<p class="text-center" id="txthorloge">' + d + '</p>');
            event.preventDefault();
            clichorloge = 1;

        }

    });

    $(document).on('click', '#widgethorloge', function() {
        $(this).draggable();
    });
    // widget fermeture horloge
    $(document).on('click', '#croixHorloge', function() {

        if (clichorloge == 1) {

            $("#widgethorloge").css("background", "");
            $("#widgethorloge").remove();
            event.preventDefault();
            clichorloge = 0;
        }

    });

    var clicflickr = 0;
    // widget ouverture flickr
    $("#flickr").click(function() {
        if (clicflickr == 0) {
            $("#back2").append(' <div class="col-md-3 mt-3 mr-3 mb-3 ml-5 text-center" id="widgetflickr"></div>');
        }
    });


    $(document).on('click', '#flickr', function() {

        if (clicflickr == 0) {

            $("#widgetflickr").css('background', 'white');
            $("#widgetflickr").css('border-radius', '5px');
            $("#widgetflickr").css('overflow', 'scroll');
            $("#widgetflickr").append('<div class="row bg-dark"> <input class="ml-auto pr-3 pt-3 pb-2 " type="image" alt="flickr" src="./images/croix.png" height="50rem" id="croixflickr"></div>');
            $("#widgetflickr").append('<h1 class="pt-3 h-25 text-center">Flickr</h1>');
            $("#widgetflickr").append('<form class="form-inline ml-3" id="formflickr"></form>');
            $("#formflickr").append('<input type="name" class="form-control w-75" id="inputflickr" placeholder="Choisir image">');
            $("#formflickr").append('<input class="pl-3" type="image" alt="meteo" src="./images/loupe.png" height="40rem" id="loupeflickr">');
            event.preventDefault();
            clicflickr = 1;
        }


    });

    $(document).on('click', '#widgetflickr', function() {
        $(this).draggable();
    });

    // widget fermeture flickr
    $(document).on('click', '#croixflickr', function() {

        if (clicflickr == 1) {

            $("#widgetflickr").css("background", "");
            $("#widgetflickr").css('overflow', 'hidden');
            $("#widgetflickr").remove();
            event.preventDefault();
            clicflickr = 0;

        }


    });
    var loupeflickr = 0;

    // widget requete ajax flickr
    $(document).on('click', '#loupeflickr', function() {
        if (loupeflickr == 0) {
            var image = $('#inputflickr').val();

            $.ajax({
                url: 'https://www.flickr.com/services/rest/',
                data: {
                    method: 'flickr.photos.search',
                    api_key: 'add3d6c2a537a0914035db443f99ca09',
                    tags: image,
                    per_page: '5',
                    page: '1',
                    format: 'json',
                    nojsoncallback: '1'
                },
                dataType: 'json',
                success: function(apiResponse) {

                    for (i = 0; i <= 5; i++) {
                        $("#widgetflickr").append('<img class="pb-2 pt-3 " src="' + 'https://farm' + apiResponse.photos.photo[i].farm + '.staticflickr.com/' + apiResponse.photos.photo[i].server + '/' + apiResponse.photos.photo[i].id + '_' + apiResponse.photos.photo[i].secret + '_m.jpg' + '"/>');
                    }

                }
            });
            event.preventDefault();
        } else {
            $(document).ready(function() {

                $("#widgetflickr img").remove();
                var image = $('#inputflickr').val();
                $.ajax({
                    url: 'https://www.flickr.com/services/rest/',
                    data: {
                        method: 'flickr.photos.search',
                        api_key: 'add3d6c2a537a0914035db443f99ca09',
                        tags: image,
                        per_page: '5',
                        page: '1',
                        format: 'json',
                        nojsoncallback: '1'
                    },
                    dataType: 'json',
                    success: function(apiResponse) {

                        for (i = 0; i <= 5; i++) {
                            $("#widgetflickr").append('<img class="pb-2 pt-3 text-center" src="' + 'https://farm' + apiResponse.photos.photo[i].farm + '.staticflickr.com/' + apiResponse.photos.photo[i].server + '/' + apiResponse.photos.photo[i].id + '_' + apiResponse.photos.photo[i].secret + '_m.jpg' + '"/>');
                        }

                    }
                });
                event.preventDefault();
            });
        }
        loupeflickr++;
    });
});