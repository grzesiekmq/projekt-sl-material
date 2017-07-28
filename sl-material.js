function init() {
    document.addEventListener("deviceready", onDeviceReady, false);
}

function onDeviceReady() {
    // var db = window.sqlitePlugin.openDatabase({ name: "sl.db" });
    // 
    // db.transaction(function(tx) {
    // tx.executeSql("CREATE TABLE IF NOT EXISTS sl (name text primary key)");
    // }, function(err) {
    // alert('Wystąpił błąd');
    // });

    $(function() {

        $("input").keydown(function() {
            var productVal = $('#produkt').val();
            var products = ['bekon', 'bułki', 'chipsy', 'chleb', 'jaja', 'kawa', 'ketchup', 'kiełbasa', 'masło', 'mleko', 'musztarda',
                'piwo', 'płatki', 'sos czosnkowy'
            ];


            // *if* wpisany produkt to piwo, dorzuca do listy chipsy
            var li = $('<li/>');

            var lv = $('#lv');

            var divP = $('<div/>', {

                'class': "ui-grid-a"

            }).appendTo(li);
            localStorage.setItem('product', 'chipsy');

            var divC1 = $('<div/>', {

                'class': "ui-block-a"



            }).appendTo(divP);





            var divC2 = $('<div/>', {

                'class': "ui-block-b"

            }).appendTo(divP);

            switch (productVal) {
                case 'piwo':
                    var msg1 = 'Czy dorzucić chipsy?';

                    function onConfirm(buttonIndex) {
                        if (msg1 === 'Czy dorzucić chipsy?') {
                            if (buttonIndex == 1) {

                                lv.append(li);

                                window.plugins.toast.showWithOptions({
                                    message: 'Dodano chipsy do listy zakupów',
                                    duration: 'long',
                                    position: 'bottom',
                                    styling: {
                                        opacity: 0.75,
                                        backgroundColor: '#00FF00'
                                    }
                                });
                            } else if (buttonIndex == 2) {

                                window.plugins.toast.showWithOptions({
                                    message: 'Nie dodano',
                                    duration: 'long',
                                    position: 'bottom',
                                    styling: {
                                        opacity: 0.75,
                                        backgroundColor: '#FF0000'
                                    }
                                });
                            }
                        }
                    }
                    navigator.notification.confirm(msg1, onConfirm, 'Analiza koszykowa', ['Tak', 'Nie']);
                    break;
                    // *else if* na odwrót (do chipsów dorzuca piwo)
                case 'chipsy':


                    var msg2 = 'Czy dorzucić piwo?';

                    function onConfirm2(buttonIndex) {
                        if (msg2 == 'Czy dorzucić piwo?') {
                            if (buttonIndex == 1) {

                                var li = $('<li/>');
                                var lv = $('#lv');
                                var divP = $('<div/>', {
                                    'class': "ui-grid-a"
                                }).appendTo(li);
                                var divC1 = $('<div/>', {
                                    'class': "ui-block-a",
                                    text: 'piwo'
                                }).appendTo(divP);
                                var btnDel = $('<button/>', {
                                    'class': "ui-btn ui-icon-delete ui-btn-icon-notext ui-btn-inline",
                                    click: function() {
                                        li.empty();
                                    }
                                });

                                var divC2 = $('<div/>', {
                                    'class': "ui-block-b"
                                }).appendTo(divP).append(btnDel);

                                lv.append(li);

                                window.plugins.toast.showWithOptions({
                                    message: 'Dodano piwo do listy zakupów',
                                    duration: 'long',
                                    position: 'bottom',
                                    styling: {
                                        opacity: 0.75,
                                        backgroundColor: '#00FF00'
                                    }
                                });
                            } else if (buttonIndex == 2) {

                                window.plugins.toast.showWithOptions({
                                    message: 'Nie dodano',
                                    duration: 'long',
                                    position: 'bottom',
                                    styling: {
                                        opacity: 0.75,
                                        backgroundColor: '#FF0000'
                                    }
                                });
                            }
                        }
                    }

                    navigator.notification.confirm(msg2, onConfirm2, 'Analiza koszykowa', ['Tak', 'Nie']);
                    break;
                case 'chleb':
                case 'bułki':



                    // chleb lub bułki -> masło

                    var msg3 = 'Czy dorzucić masło?';

                    function onConfirm3(buttonIndex) {
                        if (msg3 == 'Czy dorzucić masło?') {
                            if (buttonIndex == 1) {

                                var li = $('<li/>');
                                var lv = $('#lv');
                                var divP = $('<div/>', {
                                    'class': "ui-grid-a"
                                }).appendTo(li);
                                var divC1 = $('<div/>', {
                                    'class': "ui-block-a",
                                    text: 'masło'
                                }).appendTo(divP);
                                var btnDel = $('<button/>', {
                                    'class': "ui-btn ui-icon-delete ui-btn-icon-notext ui-btn-inline",
                                    click: function() {
                                        li.empty();
                                    }
                                });

                                var divC2 = $('<div/>', {
                                    'class': "ui-block-b"
                                }).appendTo(divP).append(btnDel);

                                lv.append(li);

                                window.plugins.toast.showWithOptions({
                                    message: 'Dodano masło do listy zakupów',
                                    duration: 'long',
                                    position: 'bottom',
                                    styling: {
                                        opacity: 0.75,
                                        backgroundColor: '#00FF00'
                                    }
                                });
                            } else if (buttonIndex == 2) {

                                window.plugins.toast.showWithOptions({
                                    message: 'Nie dodano',
                                    duration: 'long',
                                    position: 'bottom',
                                    styling: {
                                        opacity: 0.75,
                                        backgroundColor: '#FF0000'
                                    }
                                });
                            }
                        }
                    }

                    navigator.notification.confirm(msg3, onConfirm3, 'Analiza koszykowa', ['Tak', 'Nie']);
                    break;
                case 'masło':
                    // masło -> chleb

                    var msg4 = 'Czy dorzucić chleb?';

                    function onConfirm4(buttonIndex) {
                        if (msg4 == 'Czy dorzucić chleb?') {
                            if (buttonIndex == 1) {

                                var li = $('<li/>');
                                var lv = $('#lv');
                                var divP = $('<div/>', {
                                    'class': "ui-grid-a"
                                }).appendTo(li);
                                var divC1 = $('<div/>', {
                                    'class': "ui-block-a",
                                    text: 'chleb'
                                }).appendTo(divP);
                                var btnDel = $('<button/>', {
                                    'class': "ui-btn ui-icon-delete ui-btn-icon-notext ui-btn-inline",
                                    click: function() {
                                        li.empty();
                                    }
                                });

                                var divC2 = $('<div/>', {
                                    'class': "ui-block-b"
                                }).appendTo(divP).append(btnDel);

                                lv.append(li);

                                window.plugins.toast.showWithOptions({
                                    message: 'Dodano chleb do listy zakupów',
                                    duration: 'long',
                                    position: 'bottom',
                                    styling: {
                                        opacity: 0.75,
                                        backgroundColor: '#00FF00'
                                    }
                                });
                            } else if (buttonIndex == 2) {

                                window.plugins.toast.showWithOptions({
                                    message: 'Nie dodano',
                                    duration: 'long',
                                    position: 'bottom',
                                    styling: {
                                        opacity: 0.75,
                                        backgroundColor: '#FF0000'
                                    }
                                });
                            }
                        }
                    }

                    navigator.notification.confirm(msg4, onConfirm4, 'Analiza koszykowa', ['Tak', 'Nie']);
                    break;
                case 'płatki':


                    // płatki -> mleko

                    var msg5 = 'Czy dorzucić mleko?';

                    function onConfirm5(buttonIndex) {
                        if (msg5 == 'Czy dorzucić mleko?') {
                            if (buttonIndex == 1) {

                                var li = $('<li/>');
                                var lv = $('#lv');
                                var divP = $('<div/>', {
                                    'class': "ui-grid-a"
                                }).appendTo(li);
                                var divC1 = $('<div/>', {
                                    'class': "ui-block-a",
                                    text: 'mleko'
                                }).appendTo(divP);
                                var btnDel = $('<button/>', {
                                    'class': "ui-btn ui-icon-delete ui-btn-icon-notext ui-btn-inline",
                                    click: function() {
                                        li.empty();
                                    }
                                });

                                var divC2 = $('<div/>', {
                                    'class': "ui-block-b"
                                }).appendTo(divP).append(btnDel);

                                lv.append(li);

                                window.plugins.toast.showWithOptions({
                                    message: 'Dodano mleko do listy zakupów',
                                    duration: 'long',
                                    position: 'bottom',
                                    styling: {
                                        opacity: 0.75,
                                        backgroundColor: '#00FF00'
                                    }
                                });
                            } else if (buttonIndex == 2) {

                                window.plugins.toast.showWithOptions({
                                    message: 'Nie dodano',
                                    duration: 'long',
                                    position: 'bottom',
                                    styling: {
                                        opacity: 0.75,
                                        backgroundColor: '#FF0000'
                                    }
                                });
                            }
                        }
                    }

                    navigator.notification.confirm(msg5, onConfirm5, 'Analiza koszykowa', ['Tak', 'Nie']);
                    break;
                case 'mleko':

                    // mleko -> płatki

                    var msg6 = 'Czy dorzucić płatki?';

                    function onConfirm6(buttonIndex) {
                        if (msg6 == 'Czy dorzucić płatki?') {
                            if (buttonIndex == 1) {

                                var li = $('<li/>');
                                var lv = $('#lv');
                                var divP = $('<div/>', {
                                    'class': "ui-grid-a"
                                }).appendTo(li);
                                var divC1 = $('<div/>', {
                                    'class': "ui-block-a",
                                    text: 'płatki'
                                }).appendTo(divP);
                                var btnDel = $('<button/>', {
                                    'class': "ui-btn ui-icon-delete ui-btn-icon-notext ui-btn-inline",
                                    click: function() {
                                        li.empty();
                                    }
                                });

                                var divC2 = $('<div/>', {
                                    'class': "ui-block-b"
                                }).appendTo(divP).append(btnDel);

                                lv.append(li);

                                window.plugins.toast.showWithOptions({
                                    message: 'Dodano płatki do listy zakupów',
                                    duration: 'long',
                                    position: 'bottom',
                                    styling: {
                                        opacity: 0.75,
                                        backgroundColor: '#00FF00'
                                    }
                                });
                            } else if (buttonIndex == 2) {

                                window.plugins.toast.showWithOptions({
                                    message: 'Nie dodano',
                                    duration: 'long',
                                    position: 'bottom',
                                    styling: {
                                        opacity: 0.75,
                                        backgroundColor: '#FF0000'
                                    }
                                });
                            }
                        }
                    }

                    navigator.notification.confirm(msg6, onConfirm6, 'Analiza koszykowa', ['Tak', 'Nie']);
                    break;
                case 'kawa':

                    // kawa -> mleko

                    var msg7 = 'Czy dorzucić mleko?';

                    function onConfirm7(buttonIndex) {
                        if (msg7 == 'Czy dorzucić mleko?') {
                            if (buttonIndex == 1) {

                                var li = $('<li/>');
                                var lv = $('#lv');
                                var divP = $('<div/>', {
                                    'class': "ui-grid-a"
                                }).appendTo(li);
                                var divC1 = $('<div/>', {
                                    'class': "ui-block-a",
                                    text: 'mleko'
                                }).appendTo(divP);
                                var btnDel = $('<button/>', {
                                    'class': "ui-btn ui-icon-delete ui-btn-icon-notext ui-btn-inline",
                                    click: function() {
                                        li.empty();
                                    }
                                });

                                var divC2 = $('<div/>', {
                                    'class': "ui-block-b"
                                }).appendTo(divP).append(btnDel);

                                lv.append(li);

                                window.plugins.toast.showWithOptions({
                                    message: 'Dodano mleko do listy zakupów',
                                    duration: 'long',
                                    position: 'bottom',
                                    styling: {
                                        opacity: 0.75,
                                        backgroundColor: '#00FF00'
                                    }
                                });
                            } else if (buttonIndex == 2) {

                                window.plugins.toast.showWithOptions({
                                    message: 'Nie dodano',
                                    duration: 'long',
                                    position: 'bottom',
                                    styling: {
                                        opacity: 0.75,
                                        backgroundColor: '#FF0000'
                                    }
                                });
                            }
                        }
                    }

                    navigator.notification.confirm(msg7, onConfirm7, 'Analiza koszykowa', ['Tak', 'Nie']);
                    break;
                case 'ketchup':

                    // ketchup -> kiełbasa

                    var msg8 = 'Czy dorzucić kiełbasę?';

                    function onConfirm8(buttonIndex) {
                        if (msg8 == 'Czy dorzucić kiełbasę?') {
                            if (buttonIndex == 1) {

                                var li = $('<li/>');
                                var lv = $('#lv');
                                var divP = $('<div/>', {
                                    'class': "ui-grid-a"
                                }).appendTo(li);
                                var divC1 = $('<div/>', {
                                    'class': "ui-block-a",
                                    text: 'kiełbasa'
                                }).appendTo(divP);
                                var btnDel = $('<button/>', {
                                    'class': "ui-btn ui-icon-delete ui-btn-icon-notext ui-btn-inline",
                                    click: function() {
                                        li.empty();
                                    }
                                });

                                var divC2 = $('<div/>', {
                                    'class': "ui-block-b"
                                }).appendTo(divP).append(btnDel);

                                lv.append(li);

                                window.plugins.toast.showWithOptions({
                                    message: 'Dodano kiełbasę do listy zakupów',
                                    duration: 'long',
                                    position: 'bottom',
                                    styling: {
                                        opacity: 0.75,
                                        backgroundColor: '#00FF00'
                                    }
                                });
                            } else if (buttonIndex == 2) {

                                window.plugins.toast.showWithOptions({
                                    message: 'Nie dodano',
                                    duration: 'long',
                                    position: 'bottom',
                                    styling: {
                                        opacity: 0.75,
                                        backgroundColor: '#FF0000'
                                    }
                                });
                            }
                        }
                    }

                    navigator.notification.confirm(msg8, onConfirm8, 'Analiza koszykowa', ['Tak', 'Nie']);
                    break;
                case 'sos czosnkowy':
                    // sos czosnkowy -> kiełbasa

                    var msg9 = 'Czy dorzucić kiełbasę?';

                    function onConfirm9(buttonIndex) {
                        if (msg9 == 'Czy dorzucić kiełbasę?') {
                            if (buttonIndex == 1) {

                                var li = $('<li/>');
                                var lv = $('#lv');
                                var divP = $('<div/>', {
                                    'class': "ui-grid-a"
                                }).appendTo(li);
                                var divC1 = $('<div/>', {
                                    'class': "ui-block-a",
                                    text: 'kiełbasa'
                                }).appendTo(divP);
                                var btnDel = $('<button/>', {
                                    'class': "ui-btn ui-icon-delete ui-btn-icon-notext ui-btn-inline",
                                    click: function() {
                                        li.empty();
                                    }
                                });

                                var divC2 = $('<div/>', {
                                    'class': "ui-block-b"
                                }).appendTo(divP).append(btnDel);

                                lv.append(li);

                                window.plugins.toast.showWithOptions({
                                    message: 'Dodano kiełbasę do listy zakupów',
                                    duration: 'long',
                                    position: 'bottom',
                                    styling: {
                                        opacity: 0.75,
                                        backgroundColor: '#00FF00'
                                    }
                                });
                            } else if (buttonIndex == 2) {

                                window.plugins.toast.showWithOptions({
                                    message: 'Nie dodano',
                                    duration: 'long',
                                    position: 'bottom',
                                    styling: {
                                        opacity: 0.75,
                                        backgroundColor: '#FF0000'
                                    }
                                });
                            }
                        }
                    }

                    navigator.notification.confirm(msg9, onConfirm9, 'Analiza koszykowa', ['Tak', 'Nie']);
                    break;
                case 'musztarda':
                    // musztarda -> kiełbasa

                    var msg10 = 'Czy dorzucić kiełbasę?';

                    function onConfirm10(buttonIndex) {
                        if (msg10 == 'Czy dorzucić kiełbasę?') {
                            if (buttonIndex == 1) {

                                var li = $('<li/>');
                                var lv = $('#lv');
                                var divP = $('<div/>', {
                                    'class': "ui-grid-a"
                                }).appendTo(li);
                                var divC1 = $('<div/>', {
                                    'class': "ui-block-a",
                                    text: 'kiełbasa'
                                }).appendTo(divP);
                                var btnDel = $('<button/>', {
                                    'class': "ui-btn ui-icon-delete ui-btn-icon-notext ui-btn-inline",
                                    click: function() {
                                        li.empty();
                                    }
                                });

                                var divC2 = $('<div/>', {
                                    'class': "ui-block-b"
                                }).appendTo(divP).append(btnDel);

                                lv.append(li);

                                window.plugins.toast.showWithOptions({
                                    message: 'Dodano kiełbasę do listy zakupów',
                                    duration: 'long',
                                    position: 'bottom',
                                    styling: {
                                        opacity: 0.75,
                                        backgroundColor: '#00FF00'
                                    }
                                });
                            } else if (buttonIndex == 2) {

                                window.plugins.toast.showWithOptions({
                                    message: 'Nie dodano',
                                    duration: 'long',
                                    position: 'bottom',
                                    styling: {
                                        opacity: 0.75,
                                        backgroundColor: '#FF0000'
                                    }
                                });
                            }
                        }
                    }

                    navigator.notification.confirm(msg10, onConfirm10, 'Analiza koszykowa', ['Tak', 'Nie']);
                    break;
                case 'kiełbasa':
                    // kiełbasa -> ketchup

                    var msg11 = 'Czy dorzucić ketchup?';

                    function onConfirm11(buttonIndex) {
                        if (msg11 == 'Czy dorzucić ketchup?') {
                            if (buttonIndex == 1) {

                                var li = $('<li/>');
                                var lv = $('#lv');
                                var divP = $('<div/>', {
                                    'class': "ui-grid-a"
                                }).appendTo(li);
                                var divC1 = $('<div/>', {
                                    'class': "ui-block-a",
                                    text: 'ketchup'
                                }).appendTo(divP);
                                var btnDel = $('<button/>', {
                                    'class': "ui-btn ui-icon-delete ui-btn-icon-notext ui-btn-inline",
                                    click: function() {
                                        li.empty();
                                    }
                                });

                                var divC2 = $('<div/>', {
                                    'class': "ui-block-b"
                                }).appendTo(divP).append(btnDel);

                                lv.append(li);

                                window.plugins.toast.showWithOptions({
                                    message: 'Dodano ketchup do listy zakupów',
                                    duration: 'long',
                                    position: 'bottom',
                                    styling: {
                                        opacity: 0.75,
                                        backgroundColor: '#00FF00'
                                    }
                                });
                            } else if (buttonIndex == 2) {

                                window.plugins.toast.showWithOptions({
                                    message: 'Nie dodano',
                                    duration: 'long',
                                    position: 'bottom',
                                    styling: {
                                        opacity: 0.75,
                                        backgroundColor: '#FF0000'
                                    }
                                });
                            }
                        }
                    }

                    navigator.notification.confirm(msg11, onConfirm11, 'Analiza koszykowa', ['Tak', 'Nie']);
                    break;
                case 'jaja':
                    // jaja -> bekon

                    var msg12 = 'Czy dorzucić bekon?';

                    function onConfirm12(buttonIndex) {
                        if (msg12 == 'Czy dorzucić bekon?') {
                            if (buttonIndex == 1) {

                                var li = $('<li/>');
                                var lv = $('#lv');
                                var divP = $('<div/>', {
                                    'class': "ui-grid-a"
                                }).appendTo(li);
                                var divC1 = $('<div/>', {
                                    'class': "ui-block-a",
                                    text: 'bekon'
                                }).appendTo(divP);
                                var btnDel = $('<button/>', {
                                    'class': "ui-btn ui-icon-delete ui-btn-icon-notext ui-btn-inline",
                                    click: function() {
                                        li.empty();
                                    }
                                });

                                var divC2 = $('<div/>', {
                                    'class': "ui-block-b"
                                }).appendTo(divP).append(btnDel);

                                lv.append(li);

                                window.plugins.toast.showWithOptions({
                                    message: 'Dodano bekon do listy zakupów',
                                    duration: 'long',
                                    position: 'bottom',
                                    styling: {
                                        opacity: 0.75,
                                        backgroundColor: '#00FF00'
                                    }
                                });
                            } else if (buttonIndex == 2) {

                                window.plugins.toast.showWithOptions({
                                    message: 'Nie dodano',
                                    duration: 'long',
                                    position: 'bottom',
                                    styling: {
                                        opacity: 0.75,
                                        backgroundColor: '#FF0000'
                                    }
                                });
                            }
                        }
                    }

                    navigator.notification.confirm(msg12, onConfirm12, 'Analiza koszykowa', ['Tak', 'Nie']);

                    break;
                case 'bekon':
                    // bekon -> jaja

                    var msg13 = 'Czy dorzucić jaja?';

                    function onConfirm13(buttonIndex) {
                        if (msg13 == 'Czy dorzucić jaja?') {
                            if (buttonIndex == 1) {

                                var li = $('<li/>');
                                var lv = $('#lv');
                                var divP = $('<div/>', {
                                    'class': "ui-grid-a"
                                }).appendTo(li);
                                var divC1 = $('<div/>', {
                                    'class': "ui-block-a",
                                    text: 'jaja'
                                }).appendTo(divP);
                                var btnDel = $('<button/>', {
                                    'class': "ui-btn ui-icon-delete ui-btn-icon-notext ui-btn-inline",
                                    click: function() {
                                        li.empty();
                                    }
                                });

                                var divC2 = $('<div/>', {
                                    'class': "ui-block-b"
                                }).appendTo(divP).append(btnDel);

                                lv.append(li);

                                window.plugins.toast.showWithOptions({
                                    message: 'Dodano jaja do listy zakupów',
                                    duration: 'long',
                                    position: 'bottom',
                                    styling: {
                                        opacity: 0.75,
                                        backgroundColor: '#00FF00'
                                    }
                                });

                            } else if (buttonIndex == 2) {

                                window.plugins.toast.showWithOptions({
                                    message: 'Nie dodano',
                                    duration: 'long',
                                    position: 'bottom',
                                    styling: {
                                        opacity: 0.75,
                                        backgroundColor: '#FF0000'
                                    }
                                });
                            }
                        }
                    }

                    navigator.notification.confirm(msg13, onConfirm13, 'Analiza koszykowa', ['Tak', 'Nie']);
                    break;
                default:
                    // alert('Produkt spoza listy');
                    break;
            }





        });
    });


}



function whichBtn(buttonElement) {

    var btnClick = buttonElement.id;
    var lv = $('#lv');
    var li = $('<li/>');
    var productVal = $('#produkt').val();
    var lvhistory = $('#lvhistory');


    if (btnClick === 'add') {



        // bierze z HTML-owej listy <ul> nazwy produktów i umieszcza w tablicy


        var products = ['bekon', 'bułki', 'chipsy', 'chleb', 'jaja', 'kawa', 'ketchup', 'kiełbasa', 'masło', 'mleko', 'musztarda',
            'piwo', 'płatki', 'sos czosnkowy'
        ];




        var getProduct;
        var retrievedProducts;







        if (productVal === '') {

        } else {
            // dodaje do localStorage wybrany produkt
            for (var i = 0; i < products.length; i++) {
                if (products[i] === productVal) {

                    localStorage.setItem('products', JSON.stringify(products[i]));
                }
            }









            /* kalendarz */

            // data w kalendarzu format YYYY-MM-DD

            var calDate = y + '-' + mth + '-' + day;






        }




    } else if (btnClick === 'rem') {
        localStorage.removeItem('products');
        lv.empty();
    } else if (btnClick === 'remH') {
        lvhistory.empty();

    } else if (btnClick === 'load') {
        // pobiera wybrany produkt z localStorage
        var divP = $('<div/>', { 'class': "row" });
        var btnDel = $('<button/>', {
            'class': "material-icons",
            'text': 'close',
            click: function() {
                li.empty();
            }
        });

        if (localStorage.getItem('products')) {
            retrievedProducts = localStorage.getItem('products');

            getProduct = JSON.parse(retrievedProducts);








            // dodaje do listy wybrany produkt


            console.log(getProduct);
            divP.appendTo(li);

            var divC1 = $('<div/>', {
                'class': "col s6"
            }).appendTo(divP);

            var divC2 = $('<div/>', {
                'class': "col s6"
            }).appendTo(divP).append(btnDel);

            var getChips = localStorage.getItem('product');



            divC1.append(getProduct);
            divC1.append(getChips);






            // dodaje do historii



            var liH = $('<li/>');
            var divpH = $('<div/>', {
                'class': "row"
            }).appendTo(liH);

            var divC1H = $('<div/>', {
                'class': "col s6",
                text: getProduct
            }).appendTo(divpH);

            var d = new Date();

            var day = d.getDate();
            var mth = d.getMonth() + 1;
            var y = d.getFullYear();

            var h = d.getHours();
            var m = ('0' + d.getMinutes()).slice(-2);

            var s = d.getSeconds();

            var customDate = day + '/' + mth + '/' + y + ' ' + h + ':' + m + ':' + s;

            var divC2H = $('<div/>', {
                'class': "col s6",
                text: customDate
            }).appendTo(divpH);



            lv.append(li);
            var lvh = lvhistory.append(liH);




        }
    }




}