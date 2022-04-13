
//Extract data from API test
        // api url

        //Uncomment to use the api link
        const api_url = 
            "https://api.purpleair.com/v1/sensors/123817?api_key=6690E52E-B5BF-11EC-B330-42010A800004";
        
        // Defining async function
        async function getapi(url) {
            
            // Storing response
            const response = await fetch(url);
            // Storing data in form of JSON
            var data = await response.json();
            const { time_stamp, sensor:{latitude}, sensor:{longitude} } = data;

            document.getElementById('time').textContent = time_stamp;
            document.getElementById('lat').textContent = latitude;
            document.getElementById('lon').textContent = longitude;
            console.long(data);
        }
        // Calling that async function in a set interval
        //  setInterval(function() {
        //     getapi(api_url);
        //  }, 100000)