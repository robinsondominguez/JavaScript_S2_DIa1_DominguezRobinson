
function buscarPersonaje() {
    const nombre = prompt("Character Name:")
    const xhr = new XMLHttpRequest();
    const url = `https://rickandmortyapi.com/api/character?name=${nombre}`;
    console.log(url);
    xhr.open("GET",url,true);
    xhr.onreadystatechange = function() {
        if(xhr.readyState && xhr.responseText) {
            try{
                const daticos = JSON.parse(xhr.responseText)
                alert("The character is:\n Name: "+ daticos["results"][0]["name"]+" \n Status: "+daticos["results"][0]["status"]+ "\n  Specie: "+daticos["results"][0]["species"]);
            }
            catch(err){
                console.log(err.message);
            }
        }
    };
    xhr.send();
}

buscarPersonaje()