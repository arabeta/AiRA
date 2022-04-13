
//Extract data from API test
        // api url

        //Uncomment to use the api link
        const api_url = 
            "https://api.purpleair.com/v1/groups/954/members?fields=latitude%2Clongitude%2C2.5_um_count&api_key=6690E52E-B5BF-11EC-B330-42010A800004";
        
        // Defining async function
        async function getapi(url) {
            
            // Storing response
            const response = await fetch(url);
            // Storing data in form of JSON
            var dataJS = await response.json();
            const {time_stamp} = dataJS;
            //Access the array within the json from the api_url
            const latitude_2 = dataJS.data[0][1];
            const longitude_2 = dataJS.data[0][2];

            document.getElementById('time').textContent = time_stamp;
            document.getElementById('lat').textContent = latitude_2;
            document.getElementById('lon').textContent = longitude_2;
        }

        getapi(api_url);
