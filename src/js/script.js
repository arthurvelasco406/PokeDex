const pokemonName = document.querySelector('.pokemon_nome');

const pokemonId = document.querySelector('.pokemon_id');

const pokemonImage = document.querySelector('.pokemon_imagem');

//const pokemonSom = document.querySelector('.pokemon_som');


const fetchPokemon = async (pokemon) => {

    const APIResponse = await fetch('https://pokeapi.co/api/v2/pokemon/'+pokemon);

    const data = await APIResponse.json();

    return data;
}

const renderPokemon = async (pokemon) => {

        const data = await fetchPokemon(pokemon);

        pokemonName.innerHTML = data.name;

        pokemonId.innerHTML = data.id;

        pokemonImage.src = data['sprites']['versions']['generation-v']['black-white']['animated']['front_default'];

        // Reproduzir os sons dos pokemmons
        // pokemonSom.setAttribute('src', data.cries.latest);
        
        console.log(data);


}

renderPokemon('25');