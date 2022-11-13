var formData = new FormData();
formData.append("type", type);

var myAPI = "/path-to-api.php";
var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var jsonData = JSON.parse(this.responseText);
        var items = jsonData.items;

        var i;
        for(i=0; i<items.length; i++) {
            let item = items[i];
            //-
        }
    }
};
xmlhttp.open("POST", myAPI, true);
xmlhttp.send(formData);