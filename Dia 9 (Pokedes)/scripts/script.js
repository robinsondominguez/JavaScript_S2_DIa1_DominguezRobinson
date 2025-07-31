const namePokemon = document.getElementById('pokemonName');
const idPokemon = document.getElementById('pokemonID');
const imagePokemon = document.getElementById('imagePokemon');

const form = document.getElementById('Searchs');
const input = document.getElementById('search');
const next = document.getElementById('next');
const prev = document.getElementById('prev');

let fetchPokemon = async (pokemon) => {
    const APIResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);

    if (APIResponse.status == 200) {
        const data = await APIResponse.json();
        return data;
    }
}

const renderPokemon = async (pokemon) => {
    namePokemon.
    idPokemon
    imagePokemon
}