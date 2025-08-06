const token = 'a11cb1eb4d022a8a451968d8f832476c'

function buscarPersonaje() {
    document.getElementById("resultados").innerHTML=``;
    //const nombreUsar= prompt("Ingresar el nombre del personaje a buscar:");
    const nombreUsar = document.getElementById("nombreInput").value.trim();
    const xhr = new XMLHttpRequest();//La importaciÃ³n del XML
    const url = `https://superheroapi.com/api.php/${token}/search/${nombreUsar}`;//Acento Inverso ```
    xhr.open("GET", url, true);
    
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 3) {

            console.log("Cargando...");
        }
        else if (xhr.readyState === 4 && xhr.status === 200) {
            try {
               
                const daticos = JSON.parse(xhr.responseText);
                if (daticos.results && daticos.results.length > 0) {
                    for (let i = 0; i < daticos.results.length; i++) {
                        let division = document.getElementById("resultados");
                        division.innerHTML += `
                        <div class="card">
            <img src="${daticos["results"][i]["image"]["url"]}" alt="">
            <h3>${daticos["results"][i]["name"]}</h3>
            <p><strong>NombreCompleto: </strong>${daticos["results"][i]["biography"]["full-name"]}</p>
            <p><strong>Specie:</strong>${daticos["results"][i]["species"]}</p>
        </div>
                        `
                        console.log(daticos["results"][i]["name"]);
                    }
                }

            }
            catch (err) {
                console.log(err.message); //Si algo malo pasa simplemente imprima el error
            }
        }
    };
    xhr.send();
}