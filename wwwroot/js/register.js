function Property(name, room, baths, price, sqrFeet, image, desc){
    this.Name = name;
    this.Rooms = parseInt(room);
    this.BathRooms = parseInt(baths);
    this.Price = parseFloat(price);
    this.SqrFeet = parseInt(sqrFeet);
    this.ImageUrl = image;
    this.Description = desc;
}


function register() {
    console.log("Getting from data");
    var name = $("#name").val();
    var room = $("#rooms").val();
    var bathRooms = $("#bathroom").val();
    var price = $("#price").val();
    var sqrFeet = $("#SqrFeet").val();
    var image = $("#image").val();
    var desc = $("#description").val();

    var property = new Property(name, room, bathRooms, price, sqrFeet, image, desc);

    console.log(property);
    $.ajax({
        url: "/catalog/registerProperty",
        type: "Post",
        data: JSON.stringify(property),
        contentType: "application/json",
        success: function(res){
            console.log("Server Responded", res);
        },

        error: function(details){
            console.log("Error", details);
        }
    });
 
}
 

function init() {
    console.log("Register page");

    // events
    $("#btnSave").click(register);

}



window.onload = init;