
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
            const sens_id= data[0][0];
            const latitude = data[0][1];
            const longitude = data[0][2];
            const pm_cf_1= data[0][3];
            document.getElementById('lat').textContent = latitude;
            document.getElementById('lon').textContent = longitude;
        }
            


        

        
        
