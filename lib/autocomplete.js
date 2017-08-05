$(function(){
    var options = {
    url: "lib/products.json",

    getValue: "name",

    list: {
        match: {
            enabled: true
        }
    }
};
});

$("#produkt").easyAutocomplete(options);