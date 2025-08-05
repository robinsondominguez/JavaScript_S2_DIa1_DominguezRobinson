function buscarPersonaje() {
    const inputSearch = document.getElementById('inputSearch');

    const xhr = new XMLHttpRequest();
    const url = `https://superheroapi.com/api/a11cb1eb4d022a8a451968d8f832476c/${Heroes_Name}`;

    console.log(url);

    xhr.open("GET",url,true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 3) {
            console.log('...')
        }else if (xhr.readyState == 4 && xhr.status == 200) {
            
        }
    }



}




