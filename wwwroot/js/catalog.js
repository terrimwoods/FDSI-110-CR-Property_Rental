

function fetchData(){

    $.ajax({
        url: "/catalog/getCatalog",
        type: "Get",
        success: function(data){
            console.log("Server responded with", data);

            // sort by lowest price first
           
           // data = data.sort((a, b)=> a -b);  //javascript mozilla array sort*/
            this.data = data.sort(function (a,b){
                if(a.price > b.price){
                    return -1;
                }else{
                    return 1;
                }
            });
            //travel the array
            // get each property
            // display property in html
            //console.log("It Works",data);
            //console.log(res);
            for(var i=0; i<data.length;i++){
                var property = data[i];

                var syntax =
                 `<div class = "item">
                    <label class = 'price'>$ ${property.price}</label>
                    <img src= "${property.imageUrl}">
                    <div class="info">
                        <label class = 'rooms'>${property.rooms}</label>
                        <div class="bedrooms"> 
                            <img src="/imgs/double-bed.png">
                        </div>
                        
                        <label class = 'bathroom'>${property.bathRooms}</label>
                        <div class="bath">
                            <img src= "/imgs/bath-48.png">
                        </div>
                        <div>
                            <label class = 'area'>${property.sqrFeet} ft</label>
                        </div>
                        <label class="desc">Description:</label>
                        <p>${property.description}</p>
                    </div>
                </div>`;
                 console.log(syntax);

                $("#catalogContainer").append(syntax);

               
            }
           

        },
        error: function(details){
            console.log("Error", details);
        }

    });

}



function init(){
    console.log("Catalog page");

    fetchData();

}

window.onload = init;