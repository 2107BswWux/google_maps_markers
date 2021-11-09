console.log(key);


function initMap(){
      // let wellington = {lat:-41.28666552, lng:174.772996908};

      map = new google.maps.Map(document.getElementById("map"), {
        zoom: 10,
        center: {lat:-41.28666552, lng:174.772996908},
      });

      setMarkers(map);
}

    let locations = [
      ["wellington", -41.28666552, 174.772996908,1],
      ["Auckland", -36.8509, 174.7645,2]
    ];

    function setMarkers(map){

        for(let i = 0; i < locations.length; i++){
          const location = locations[i];
          console.log(location);
          new google.maps.Marker({
            position: {lat:location[1], lng:location[2]},
            map,
            icon: image, 
            title: location[0],
            zIndex: location[3],
          });
        }
      }

      



      
    
     




// }