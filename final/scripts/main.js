fetch ('json/places.json')
    .then(
        (response) => response.json()
    )
    .then(
        (places) => {
                places.forEach(
                    activities => {
                        console.log(places);
                    }
                )
            }
    )

var input = document.getElementById("saveServer");
    localStorage.setItem("server", input.val());
    var storedValue = localStorage.getItem("server");

                    