
//Extract data from API test
        // api url

        //Uncomment to use the api link
        /*const api_url = 
            "https://api.purpleair.com/v1/groups/954/members?fields=latitude%2Clongitude%2Cpm2.5_cf_1&api_key=6690E52E-B5BF-11EC-B330-42010A800004";
        
        // Defining async function
        async function getapi(url) {
            
            // Storing response
            const response = await fetch(url)
            // Storing data in form of JSON
            var dataJS = await response.json()

            const {data} = dataJS;
            // Access the first element of the array within the json from the api_url
            const sens_id= data[0][0];
            const latitude = data[0][1];
            const longitude = data[0][2];
            const pm_cf_1= data[0][3];
            document.getElementById('lat').textContent = latitude;
            document.getElementById('lon').textContent = longitude;
        }*/

        function initMap(){
            var options = {
                zoom:11,
                center:{lat:35.9132, lng:-79.0558} 
            }
            var map = new google.maps.Map(document.getElementById('map'), options);

            //Create markers
            const icons = {

            }
            //Extract data from API test
            // api url

            //Uncomment to use the api link
            const api_url = 
                "https://api.purpleair.com/v1/groups/954/members?fields=latitude%2Clongitude%2Cpm2.5_cf_1&api_key=6690E52E-B5BF-11EC-B330-42010A800004";
            
            // Defining async function
            async function getapi(url) {
                
                // Storing response
                const response = await fetch(url)
                // Storing data in form of JSON
                var dataJS = await response.json()

                const {data} = dataJS;
                // Access the first element of the array within the json from the api_url
                for(let i = 0; i < data.length; i++) {
                    var color;
                    if(data[i][3] <= 12.0 ){
                        color = "#00CC00"
                    } else if(data[i][3] <= 35.4) {
                        color = "#FFFF00"
                    } else if(data[i][3] <= 55.4) {
                        color = "#EB8A14"
                    } else if(data[i][3] <= 150.4) {
                        color = "#FF0000"
                    } else if(data[i][3] <= 250.4) {
                        color = "#A10649"
                    } else {
                        color = "#7E0023"
                    } 
                    const marker = new google.maps.Marker({
                        position: new google.maps.LatLng(data[i][1], data[i][2]),
                        icon: {
                            path: google.maps.SymbolPath.CIRCLE,
                            scale: 12,
                            fillColor: color,
                            fillOpacity: 0.7,
                            strokeWeight: 0.4
                        },
                        map: map,
                        label: {color: '#000', fontSize: '12px', fontWeight: '600',text: data[i][3].toString()},
                    });

                    //This is just a placeholder, can change.
                    const contentString =
                        '<div id="content">' +
                        '<div id="siteNotice">' +
                        "</div>" +
                        '<h1 id="firstHeading" class="firstHeading">Uluru</h1>' +
                        '<div id="bodyContent">' +
                        "<p><b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large " +
                        "sandstone rock formation in the southern part of the " +
                        "Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi) " +
                        "south west of the nearest large town, Alice Springs; 450&#160;km " +
                        "(280&#160;mi) by road. Kata Tjuta and Uluru are the two major " +
                        "features of the Uluru - Kata Tjuta National Park. Uluru is " +
                        "sacred to the Pitjantjatjara and Yankunytjatjara, the " +
                        "Aboriginal people of the area. It has many springs, waterholes, " +
                        "rock caves and ancient paintings. Uluru is listed as a World " +
                        "Heritage Site.</p>" +
                        '<p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">' +
                        "https://en.wikipedia.org/w/index.php?title=Uluru</a> " +
                        "(last visited June 22, 2009).</p>" +
                        "</div>" +
                        "</div>";

                    const infowindow = new google.maps.InfoWindow({
                        content: contentString,
                    });
                    marker.addListener("click", () => {
                        infowindow.open({
                            anchor: marker,
                            map,
                            shouldFocus: false,
                        });
                    });
                }
            }
            getapi(api_url); 
        }
            


        

        
        
