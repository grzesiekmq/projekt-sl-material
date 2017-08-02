$(function() {

    $('.autocomplete').autocomplete({

        data: {

            "bekon": "./img/bcn.png",

            "bułki": "./img/bulki.jpg",

            "chipsy": "./img/chipsy.jpg",

            "chleb": "./img/chleb.png",

            "jaja": "./img/jaja.jpg",

            "kawa": "./img/kawa.jpg",

            "ketchup": "./img/ketchup.jpg",

            "kiełbasa": "./img/kielbasa.jpg",

            "masło": "./img/maslo.jpg",

            "mleko": "./img/mleko.jpg",

            "musztarda": "./img/musztarda.jpeg",

            "piwo": "./img/piwo.png",

            "płatki": "./img/platki.jpg",

            "sos czosnkowy": "./img/sos czosnkowy.jpg"

        }

    });
    $('.autocomplete-content.dropdown-content').css({ 'position': 'absolute', 'z-index': 2 });
});