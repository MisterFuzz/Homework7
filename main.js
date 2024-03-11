let Foods = [];

let FoodObject = function (Name, Time, Temp, Desc) {
    this.name = Name;
    this.time = Time;
    this.temp = Temp;
    this.desc = Desc;
    this.ID = Foods.length + 1;
}

let selectedTemp = "";

document.addEventListener("DOMContentLoaded", function(event) {
    createList();

    document.getElementById("addButton").addEventListener("click", function() {
        Foods.push(new FoodObject(document.getElementById("foodName").value, 
        document.getElementById("cookTime").value, selectedTemp, document.getElementById("foodDesc").value));

        document.getElementById("foodName").value = "";
        document.getElementById("cookTime").value = "";
        document.getElementById("foodDesc").value = "";

        createList();
    });

    $(document).bind("change", "#select-temp", function (event, ui) {
        selectedTemp = document.getElementById("select-temp").value;
    });

    $(document).on("pagebeforeshow", "#show", function (event) { 
        createList();
    });

    $(document).on("pagebeforeshow", "#info", function (event) {   
        let localID = localStorage.getItem('info');
        Foods = JSON.parse(localStorage.getItem('Foods'));  
    
        console.log(Foods[localID - 1]);
       
        document.getElementById("Name").innerHTML = "Name: " + Foods[localID - 1].name;
        document.getElementById("Time").innerHTML = "Time: " + Foods[localID - 1].time;
        document.getElementById("Temp").innerHTML = "Temp: " + Foods[localID - 1].temp;
        document.getElementById("Desc").innerHTML = "Description: " + Foods[localID - 1].desc;
    });
});

function createList() {
    var myul = document.getElementById("myul");
    myul.innerHTML = "";

    Foods.forEach(function (element,) {
        var li = document.createElement('li');
        li.classList.add("food");
        li.setAttribute("food-info", element.ID);
        li.innerHTML = element.name + ":  " + element.time + "   " + element.temp;
        myul.appendChild(li);
        $("#myul").listview("refresh");
    });

    var liList = document.getElementsByClassName("food");
    let newFoods = Array.from(liList);
    newFoods.forEach(function(element) {
        element.addEventListener('click', function() {
            var info = this.getAttribute("food-info");
            localStorage.setItem("info", info);
            let stringFoods = JSON.stringify(Foods);
            localStorage.setItem("Foods", stringFoods);
            document.location.href = "index.html#info";
        });
    });
};