function init() {
    document.addEventListener("deviceready", onDeviceReady, false);
}

function onDeviceReady() {

    var main = function() {

        $("input").keydown(function() {
            var productVal = $('#produkt').val();

            // *if* wpisany produkt to piwo, dorzuca do listy chipsy
            if (productVal == 'piwo') {
                var msg1 = 'Czy dorzucić chipsy?';

                function onConfirm1(buttonIndex) {
                    if (msg1 == 'Czy dorzucić chipsy?') {
                        if (buttonIndex == 1) {

                            var li = $('<li/>');
                            var lv = $('#lv');
                            var divP = $('<div/>', {
                                'class': "ui-grid-a"
                            }).appendTo(li);
                            var divC1 = $('<div/>', {
                                'class': "ui-block-a",
                                text: 'chipsy'
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
                navigator.notification.confirm(msg1, onConfirm1, 'Analiza koszykowa', ['Tak', 'Nie']);

                // *else if* na odwrót (do chipsów dorzuca piwo)
            } else if (productVal == 'chipsy') {
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

            }

            // chleb lub bułki -> masło
            else if (productVal == 'chleb' || productVal == 'bułki') {
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
                // masło -> chleb
            } else if (productVal == 'masło') {
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

            }
            // płatki -> mleko
            else if (productVal == 'płatki') {
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
                // mleko -> płatki
            } else if (productVal == 'mleko') {
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
                // kawa -> mleko
            } else if (productVal == 'kawa') {
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
                // ketchup -> kiełbasa
            } else if (productVal == 'ketchup') {
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
                // sos czosnkowy -> kiełbasa
            } else if (productVal == 'sos czosnkowy') {
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
                // musztarda -> kiełbasa
            } else if (productVal == 'musztarda') {
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
                // kiełbasa -> ketchup
            } else if (productVal == 'kiełbasa') {
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
                // jaja -> bekon
            } else if (productVal == 'jaja') {
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
                // bekon -> jaja
            } else if (productVal == 'bekon') {
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

            }




        });
    };
    $(document).ready(main);

}

function whichBtn(buttonElement) {

    var btnClick = buttonElement.id;
    var lv = $('#lv');
    var li = $('<li/>');
    var productVal = $('#produkt').val();
    var lvhistory = $('#lvhistory');


    if (btnClick === 'add') {

        var liProducts = $('li.ui-li-static.ui-body-inherit.ui-li-has-thumb.ui-screen-hidden');

        // bierze z HTML-owej listy <ul> nazwy produktów i umieszcza w tablicy


        var products = [];




        var getProduct;
        var retrievedProducts;


        $(liProducts).each(function() {
            products.push($(this).text());

        });



        if (productVal === '') {} else {
            // dodaje do localStorage wybrany produkt
            for (var i = 0; i < products.length; i++) {
                if (products[i] === productVal) {

                    localStorage.setItem('products', JSON.stringify(products[i]))
                }
            }

        }

    } else if (btnClick === 'load') {
        var divP = $('<div/>', {
            'class': "ui-grid-a"
        });
        var btnDel = $('<button/>', {
            'class': "ui-btn ui-icon-delete ui-btn-icon-notext ui-btn-inline",
            click: function() {
                li.empty();
            }
        });




        // pobiera wybrany produkt z localStorage
        if (localStorage.getItem('products')) {
            retrievedProducts = localStorage.getItem('products');

            getProduct = JSON.parse(retrievedProducts);




            // dodaje do listy wybrany produkt



            divP.appendTo(li);

            var divC1 = $('<div/>', {
                'class': "ui-block-a"
            }).appendTo(divP);

            var divC2 = $('<div/>', {
                'class': "ui-block-b"
            }).appendTo(divP).append(btnDel);




            divC1.append(getProduct);




            // dodaje do historii



            var liH = $('<li/>');
            var divpH = $('<div/>', {
                'class': "ui-grid-a"
            }).appendTo(liH);

            var divC1H = $('<div/>', {
                'class': "ui-block-a",
                text: getProduct
            }).appendTo(divpH);

            var d = new Date();

            var day = d.getDate();
            var mth = d.getMonth() + 1;
            var y = d.getFullYear();

            var h = d.getHours();
            var m = d.getMinutes();
            var s = d.getSeconds();

            var customDate = day + '/' + mth + '/' + y + ' ' + h + ':' + m + ':' + s;

            var divC2H = $('<div/>', {
                'class': "ui-block-b",
                text: customDate
            }).appendTo(divpH);



            lv.append(li);
            var lvh = lvhistory.append(liH);

            /* kalendarz */

            // data w kalendarzu format YYYY-MM-DD

            var calDate = y + '-' + mth + '-' + day;


            $(document).ready(function() {
                $('#calendar').fullCalendar({
                    header: {
                        left: 'title',
                        center: 'month,basicDay',
                        right: 'today prev,next'
                    },
                    defaultView: 'month',
                    views: {
                        month: {
                            buttonText: 'miesiąc'
                        },
                        basicDay: {
                            buttonText: 'dzień'
                        },
                    },
                    buttonText: {
                        today: 'dzisiaj'
                    },
                    monthNames: ['Styczeń', 'Luty', 'Marzec', 'Kwiecień',
                        'Maj', 'Czerwiec', 'Lipiec', 'Sierpień', 'Wrzesień', 'Październik', 'Listopad', 'Grudzień'
                    ],
                    dayNames: ['Niedziela', 'Poniedziałek', 'Wtorek', 'Środa', 'Czwartek', 'Piątek', 'Sobota'],
                    dayNamesShort: ['Niedz', 'Pon', 'Wt', 'Śr', 'Czw', 'Pt', 'Sob'],
                    dayClick: function(date, allDay, jsEvent, view) {
                        $('#calendar').fullCalendar('gotoDate', date);
                        $('#calendar').fullCalendar('changeView', 'basicDay');
                    },
                    events: [{
                        title: getProduct,
                        start: calDate
                    }]
                });
            });



        }




    } else if (btnClick === 'rem') {
        localStorage.removeItem('products');
        lv.empty();
    } else if (btnClick === 'remH') {
        localStorage.removeItem('products');
        lvhistory.empty();

    }




}




$(document).on("pagecreate", function() {
    $("#mylist li").on("click", function() {
        $("#produkt").val($(this).text());
        $("#mylist li").addClass('ui-screen-hidden');
    });
});