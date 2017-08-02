/**

*/
function init() {
    'use strict';
    document.addEventListener("deviceready", onDeviceReady, false);
}


db = window.openDatabase("sl.db", "1.0", 'SL', 2 * 1024 * 1024);

db.transaction(function(tx) {
    'use strict';

    tx.executeSql("CREATE TABLE IF NOT EXISTS sl (name text, bonus text)", []);
}, function(err) {
    'use strict';

    alert('Wystąpił błąd');
});
/**
 * @param buttonElement
 */
function whichBtn(buttonElement) {

    var btnClick = buttonElement.id;
    var lv = $('#lv');
    var li = $('<li/>');
    var productVal = $('#produkt').val();
    var divP = $('<div/>', { class: "row" });
    var divC1 = $('<div/>', { class: "col s4" });
    var divC2 = $('<div/>', { class: "col s4" });
    var divC3 = $('<div/>', { class: "col s4" });

    var btnDel = $('<button/>', {
        class: "material-icons",
        text: 'close',
        click: function() {
            li.empty();
        }
    });
    var lvh = $('#lvhistory');

    // close
    if (btnClick === 'c') {
        $('#produkt').val('');
    }
    if (btnClick === 'add') {

        var getProduct;


        if (productVal === '') {
            alert('Wprowadź produkt');

        } else {
            // dodaje do bazy danych wybrany produkt

                    var msg1 = 'Czy dorzucić chipsy?';
                    var msg2 = 'Czy dorzucić piwo?';
                    var msg3 = 'Czy dorzucić masło?';
                    var msg4 = 'Czy dorzucić chleb?';
                    var msg5 = 'Czy dorzucić mleko?';
                    var msg6 = 'Czy dorzucić płatki?';
                    var msg7 = 'Czy dorzucić kiełbasę?';
                    var msg8 = 'Czy dorzucić ketchup?';
                    var msg9 = 'Czy dorzucić bekon?';
                    var msg10 = 'Czy dorzucić jaja?';
                    

            switch (productVal) {
                case 'piwo':

                    function onConfirm(buttonIndex) {
                        if (msg1) {
                            if (buttonIndex == 1) {
                                db.transaction(function(tx) {
                                    tx.executeSql('INSERT INTO sl (name, bonus) VALUES (?,?)', [productVal, 'chipsy']);
                                    alert('Produkt ' + productVal + ' dodany');

                                });

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
                                db.transaction(function(tx) {
                                    tx.executeSql('INSERT INTO sl (name) VALUES (?)', [productVal]);
                                    alert('Produkt ' + productVal + ' dodany');

                                });
                                window.plugins.toast.showWithOptions({
                                    message: 'Nie dodano chipsów',
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



                    function onConfirm2(buttonIndex) {
                        if (msg2) {
                            if (buttonIndex == 1) {

                                db.transaction(function(tx) {
                                    tx.executeSql('INSERT INTO sl (name, bonus) VALUES (?,?)', [productVal, 'piwo']);
                                    alert('Produkt ' + productVal + ' dodany');

                                });




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
                                db.transaction(function(tx) {
                                    tx.executeSql('INSERT INTO sl (name) VALUES (?)', [productVal]);
                                    alert('Produkt ' + productVal + ' dodany');

                                });
                                window.plugins.toast.showWithOptions({
                                    message: 'Nie dodano piwa',
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


                    function onConfirm3(buttonIndex) {
                        if (msg3) {
                            if (buttonIndex == 1) {
                                db.transaction(function(tx) {
                                    tx.executeSql('INSERT INTO sl (name, bonus) VALUES (?,?)', [productVal, 'masło']);
                                    alert('Produkt ' + productVal + ' dodany');

                                });



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
                                db.transaction(function(tx) {
                                    tx.executeSql('INSERT INTO sl (name) VALUES (?)', [productVal]);
                                    alert('Produkt ' + productVal + ' dodany');

                                });
                                window.plugins.toast.showWithOptions({
                                    message: 'Nie dodano masła',
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


                    function onConfirm4(buttonIndex) {
                        if (msg4) {
                            if (buttonIndex == 1) {


                                db.transaction(function(tx) {
                                    tx.executeSql('INSERT INTO sl (name, bonus) VALUES (?,?)', [productVal, 'chleb']);
                                    alert('Produkt ' + productVal + ' dodany');

                                });

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
                                db.transaction(function(tx) {
                                    tx.executeSql('INSERT INTO sl (name) VALUES (?)', [productVal]);
                                    alert('Produkt ' + productVal + ' dodany');

                                });
                                window.plugins.toast.showWithOptions({
                                    message: 'Nie dodano chleba',
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


                    function onConfirm5(buttonIndex) {
                        if (msg5) {
                            if (buttonIndex == 1) {

                                db.transaction(function(tx) {
                                    tx.executeSql('INSERT INTO sl (name, bonus) VALUES (?,?)', [productVal, 'mleko']);
                                    alert('Produkt ' + productVal + ' dodany');

                                });


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
                                db.transaction(function(tx) {
                                    tx.executeSql('INSERT INTO sl (name) VALUES (?)', [productVal]);
                                    alert('Produkt ' + productVal + ' dodany');

                                });
                                window.plugins.toast.showWithOptions({
                                    message: 'Nie dodano mleka',
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


                    function onConfirm6(buttonIndex) {
                        if (msg6) {
                            if (buttonIndex == 1) {

                                db.transaction(function(tx) {
                                    tx.executeSql('INSERT INTO sl (name, bonus) VALUES (?,?)', [productVal, 'płatki']);
                                    alert('Produkt ' + productVal + ' dodany');

                                });

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
                                db.transaction(function(tx) {
                                    tx.executeSql('INSERT INTO sl (name) VALUES (?)', [productVal]);
                                    alert('Produkt ' + productVal + ' dodany');

                                });
                                window.plugins.toast.showWithOptions({
                                    message: 'Nie dodano płatków',
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


                    function onConfirm7(buttonIndex) {
                        if (msg5) {
                            if (buttonIndex == 1) {


                                db.transaction(function(tx) {
                                    tx.executeSql('INSERT INTO sl (name, bonus) VALUES (?,?)', [productVal, 'mleko']);
                                    alert('Produkt ' + productVal + ' dodany');

                                });

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
                                db.transaction(function(tx) {
                                    tx.executeSql('INSERT INTO sl (name) VALUES (?)', [productVal]);
                                    alert('Produkt ' + productVal + ' dodany');

                                });
                                window.plugins.toast.showWithOptions({
                                    message: 'Nie dodano mleka',
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

                    navigator.notification.confirm(msg5, onConfirm7, 'Analiza koszykowa', ['Tak', 'Nie']);
                    break;
                case 'ketchup':

                    // ketchup -> kiełbasa


                    function onConfirm8(buttonIndex) {
                        if (msg7) {
                            if (buttonIndex == 1) {

                                db.transaction(function(tx) {
                                    tx.executeSql('INSERT INTO sl (name, bonus) VALUES (?,?)', [productVal, 'kiełbasa']);
                                    alert('Produkt ' + productVal + ' dodany');

                                });


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
                                db.transaction(function(tx) {
                                    tx.executeSql('INSERT INTO sl (name) VALUES (?)', [productVal]);
                                    alert('Produkt ' + productVal + ' dodany');

                                });
                                window.plugins.toast.showWithOptions({
                                    message: 'Nie dodano kiełbasy',
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

                    navigator.notification.confirm(msg7, onConfirm8, 'Analiza koszykowa', ['Tak', 'Nie']);
                    break;
                case 'sos czosnkowy':
                    // sos czosnkowy -> kiełbasa

                    

                    function onConfirm9(buttonIndex) {
                        if (msg7) {
                            if (buttonIndex == 1) {

                                db.transaction(function(tx) {
                                    tx.executeSql('INSERT INTO sl (name, bonus) VALUES (?,?)', [productVal, 'kiełbasa']);
                                    alert('Produkt ' + productVal + ' dodany');

                                });


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
                                db.transaction(function(tx) {
                                    tx.executeSql('INSERT INTO sl (name) VALUES (?)', [productVal]);
                                    alert('Produkt ' + productVal + ' dodany');

                                });
                                window.plugins.toast.showWithOptions({
                                    message: 'Nie dodano kiełbasy',
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

                    navigator.notification.confirm(msg7, onConfirm9, 'Analiza koszykowa', ['Tak', 'Nie']);
                    break;
                case 'musztarda':
                    // musztarda -> kiełbasa

                    

                    function onConfirm10(buttonIndex) {
                        if (msg7) {
                            if (buttonIndex == 1) {

                                db.transaction(function(tx) {
                                    tx.executeSql('INSERT INTO sl (name, bonus) VALUES (?,?)', [productVal, 'kiełbasa']);
                                    alert('Produkt ' + productVal + ' dodany');

                                });

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
                                db.transaction(function(tx) {
                                    tx.executeSql('INSERT INTO sl (name) VALUES (?)', [productVal]);
                                    alert('Produkt ' + productVal + ' dodany');

                                });
                                window.plugins.toast.showWithOptions({
                                    message: 'Nie dodano kiełbasy',
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

                    navigator.notification.confirm(msg7, onConfirm10, 'Analiza koszykowa', ['Tak', 'Nie']);
                    break;
                case 'kiełbasa':
                    // kiełbasa -> ketchup


                    function onConfirm11(buttonIndex) {
                        if (msg8) {
                            if (buttonIndex == 1) {

                                db.transaction(function(tx) {
                                    tx.executeSql('INSERT INTO sl (name, bonus) VALUES (?,?)', [productVal, 'ketchup']);
                                    alert('Produkt ' + productVal + ' dodany');

                                });


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
                                db.transaction(function(tx) {
                                    tx.executeSql('INSERT INTO sl (name) VALUES (?)', [productVal]);
                                    alert('Produkt ' + productVal + ' dodany');

                                });
                                window.plugins.toast.showWithOptions({
                                    message: 'Nie dodano ketchupu',
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

                    navigator.notification.confirm(msg8, onConfirm11, 'Analiza koszykowa', ['Tak', 'Nie']);
                    break;
                case 'jaja':
                    // jaja -> bekon


                    function onConfirm12(buttonIndex) {
                        if (msg9) {
                            if (buttonIndex == 1) {
                                db.transaction(function(tx) {
                                    tx.executeSql('INSERT INTO sl (name, bonus) VALUES (?,?)', [productVal, 'bekon']);
                                    alert('Produkt ' + productVal + ' dodany');

                                });



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
                                db.transaction(function(tx) {
                                    tx.executeSql('INSERT INTO sl (name) VALUES (?)', [productVal]);
                                    alert('Produkt ' + productVal + ' dodany');

                                });
                                window.plugins.toast.showWithOptions({
                                    message: 'Nie dodano bekonu',
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

                    navigator.notification.confirm(msg9, onConfirm12, 'Analiza koszykowa', ['Tak', 'Nie']);

                    break;
                case 'bekon':
                    // bekon -> jaja


                    function onConfirm13(buttonIndex) {
                        if (msg10) {
                            if (buttonIndex == 1) {


                                db.transaction(function(tx) {
                                    tx.executeSql('INSERT INTO sl (name, bonus) VALUES (?,?)', [productVal, 'jaja']);
                                    alert('Produkt ' + productVal + ' dodany');

                                });

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
                                db.transaction(function(tx) {
                                    tx.executeSql('INSERT INTO sl (name) VALUES (?)', [productVal]);
                                    alert('Produkt ' + productVal + ' dodany');

                                });
                                window.plugins.toast.showWithOptions({
                                    message: 'Nie dodano jaj',
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

                    navigator.notification.confirm(msg10, onConfirm13, 'Analiza koszykowa', ['Tak', 'Nie']);
                    break;
                default:
                    db.transaction(function(tx) {
                        tx.executeSql('INSERT INTO sl (name) VALUES (?)', [productVal]);
                        alert('Produkt ' + productVal + ' dodany');

                    });
                    break;
            }


        }






















    } else if (btnClick === 'rem') {
        var msg = 'Czy napewno usunąć listę?';

        function onConfirmRem(buttonIndex) {
            if (msg) {
                if (buttonIndex == 1) {

                    lv.empty();
                    db.transaction(function(tx) {
                        tx.executeSql('DELETE FROM sl');
                    });



                    window.plugins.toast.showWithOptions({
                        message: 'Usunięto listę',
                        duration: 'long',
                        position: 'bottom',
                        styling: {
                            opacity: 0.75,
                            backgroundColor: '#00FF00'
                        }
                    });
                } else if (buttonIndex == 2) {

                    window.plugins.toast.showWithOptions({
                        message: 'Nie usunięto',
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
        navigator.notification.confirm(msg, onConfirmRem, 'Usuń listę', ['Tak', 'Nie']);

    } else if (btnClick === 'remH') {
        lvh.empty();

    } else if (btnClick === 'load') {
        // pobiera wybrany produkt z bazy danych









        db.transaction(function(tx) {
            tx.executeSql('SELECT * FROM sl', [], function(tx, res) {
                for (var i = 0; i < res.rows.length; i++) {
                    getProduct = res.rows.item(i).name;
                    // dodaje do listy wybrany produkt
                    divC1.append(getProduct + '<br>');
                    divC3.append(btnDel);
                    li.append(divP);
                    lv.append(li);
                    divP.append(divC1).append(divC3);
                }
            });
        });

        // dodaje do historii


        var liH = $('<li/>');
        var divpH = $('<div/>', {
            class: "row"
        }).appendTo(liH);

        var divC1H = $('<div/>', {
            class: "col s6",
            text: productVal
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
            class: "col s6",
            text: customDate
        }).appendTo(divpH);



        lvh.append(liH);





    } else if (btnClick == 'load2') {

        db.transaction(function(tx) {
            tx.executeSql('SELECT * FROM sl', [], function(tx, res) {
                for (var i = 0; i < res.rows.length; i++) {
                    getProduct = res.rows.item(i).name;
                    getBonus = res.rows.item(i).bonus;
                    // dodaje do listy wybrany produkt
                    divC1.append(getProduct + '<br>');
                    divC2.append(getBonus + '<br>');
                    divC3.append(btnDel);
                    li.append(divP);
                    lv.append(li);

                    divP.append(divC1).append(divC2).append(divC3);
                }
            });
        });

    }
}






$(document).ready(function() {
    $('.modal').modal();
});