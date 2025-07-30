
function buscarPersonaje() {
    document.getElementById("resultados");
    //const nombre = prompt("Character Name:")
    const nombreUsar = document.getElementById("nombreInput").value;
    const xhr = new XMLHttpRequest();
    const url = `https://rickandmortyapi.com/api/character?name=${nombre}`;
    console.log(url);
    xhr.open("GET", url, true);

    xhr.onreadystatechange = function () {
        if (xhr.readyState && xhr.responseText) {
            try {
                const daticos = JSON.parse(xhr.responseText);
                if (daticos.result && daticos.result.length > 0) {
                    for (let i = 0; i < daticos.result.length; i++) {
                        let division = document.getElementById("resultados");
                        division.innerHTML =
                            `
                        <div class="card">
                        <img src="https://rickandmortyapi.com/api/character/avatar/2.jpeg" alt="">
                        <h3>Morty</h3>
                        <p><strong>Estado:</strong>Vivo</p>
                        <p><strong>Especie:</strong>Humana</p>
                    </div>
                    `
                    console.log(daticos["results"][i]["name"])
                    }
                }
                //alert("The character is:\n Name: "+ daticos["results"][0]["name"]+" \n Status: "+daticos["results"][0]["status"]+ "\n  Specie: "+daticos["results"][0]["species"]);
            }
            catch (err) {
                console.log(err.message);
            }
        }
    };
    xhr.send();
}

buscarPersonaje()