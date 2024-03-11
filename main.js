let Foods = [];

let FoodObject = function (Name, Time, Temp) {
    this.name = Name;
    this.time = Time;
    this.temp = Temp;
}

let selectedTemp = "";

document.addEventListener("DOMContentLoaded", function(event) {
    createList();

    document.getElementById("addButton").addEventListener("click", function() {
        Foods.push(new FoodObject(document.getElementById("foodName").value, 
        document.getElementById("cookTime").value, selectedTemp));

        document.getElementById("foodName").value = "";
        document.getElementById("cookTime").value = "";

        createList();
    });

    $(document).bind("change", "#select-temp", function (event, ui) {
        selectedTemp = document.getElementById("select-temp").value;
    });
});

function createList() {
    var myul = document.getElementById("myul");
    myul.innerHTML = "";

    Foods.forEach(function (element,) {
        var li = document.createElement('li');
        li.innerHTML = element.name + ":  " + element.time + "   " + element.temp;
        myul.appendChild(li);
    });
};