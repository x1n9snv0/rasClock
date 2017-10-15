function arrayHasKey(array, key){
    for (var rawKey in array){
        if (key == rawKey){return true;}
    }
    return false;
}
function addProvence(){
    $.getJSON("js/city.json", function(data){
        var i = 0;
        var provArray = new Array();
        while(i<data.length){
            if (!arrayHasKey(provArray, data[i].pro_cn)){
                provArray[data[i].pro_cn] = data[i].pro_cn;
            }
            i++;
        }
        provArray.sort();
        var slt = document.createElement("select");
        slt.setAttribute("id", "slt_provence");
        slt.setAttribute("class", "cs-select cs-skin-elastic");
        var opt =document.createElement("option");
        opt.setAttribute("value", "");
        opt.setAttributeNode(document.createAttribute("disabled"));
        opt.setAttributeNode(document.createAttribute("selected"));
        opt.innerText="选择所在省份";
        slt.appendChild(opt);
        for (var provence in provArray){
            var opt = document.createElement("option");
            opt.setAttribute("value", provArray[provence]);
            opt.innerText=provArray[provence];
            slt.appendChild(opt);
        }
        var prov_sct = document.getElementById("slt_provence_sct");
        prov_sct.appendChild(slt);
        [].slice.call(document.querySelectorAll('select#slt_provence')).forEach(function(el){new SelectFx(el);});
    });
}