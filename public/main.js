$(document).ready(function(){

        $('#theForm').on("submit", function(event){//event handler on the SUBMIT button
            event.preventDefault()//Prevents default browser actions
            var endDate = $('#theDate').val()//this defines the value of the #theDate selector to a variable
        
            $.get(`/asteroids/?date=${endDate}`, function(data) {
                console.log(data)//getting data from NASA API which is defined in the server.js
                
                data = JSON.parse(data)//transfer data into from JSON String into Object so I can access the Object

                var asteroids = []//set up an array of asteroids that meet the following criteria
                for (var i = 0; i < data.near_earth_objects[endDate].length; i++) {
                    if (data.near_earth_objects[endDate][i].is_potentially_hazardous_asteroid === true) {
                        console.log(`${data.near_earth_objects[endDate][i].name} is hazardous`)
                        asteroids.push(data.near_earth_objects[endDate][i])
                    }
                }
                console.log(asteroids)//log the information on the page that is requested below
                for (var i = 0; i < asteroids.length; i++) {
                    $("#asteroids").append(`
                        <h2>Name: ${asteroids[i].name}</h2>
                    `)
                    $("#asteroids").append(`
                        <h2>Velocity per hour: ${asteroids[i].close_approach_data[0].relative_velocity.miles_per_hour} miles per hour</h2>
                    `)
                    $("#asteroids").append(`
                        <h2>Diameter: ${asteroids[i].estimated_diameter.feet.estimated_diameter_max} ft</h2>
                    `)
                    $("#asteroids").append(`
                        <h2>Distance from Earth: ${asteroids[i].close_approach_data["0"].miss_distance.miles} miles</h2>
                    `)
                }

            })
        })

        //1. submit the form with the date; 2. return API 3. return API with specific date info 
            //4. present the specific data for the specific date
    
    })
