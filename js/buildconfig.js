function arrayHasKey(array, key){
    for (var rawKey in array){
        if (key == array[rawKey]){return true;}
    }
    return false;
}

function addProvence(){
    $.getJSON("js/city.json", function(data){
        var i = 0;
        var provArray = new Array();
        while(i<data.length){
            if (!arrayHasKey(provArray, data[i].pro_cn)){
                provArray.push(data[i].pro_cn);
            }
            i++;
        }
        provArray.sort();
        var slt = document.getElementById("slt_country");
        for (var provence in provArray){
            var opt = document.createElement("option");
            opt.setAttribute("value", provence);
            opt.innerText=provence;
            slt.appendChild(opt);
        }
    });
}