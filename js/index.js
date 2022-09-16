async function fetchPokemons(){

    const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=26&offset=1");

    const responseJson = await response.json();

    return responseJson.results;
}

async function fetchPokemon(url){

    const response = await fetch(url);

    const responseJson = await response.json();
    
    return responseJson;
}



async function populatePokemons(pokemons){

    const firstPokemon = pokemons[0]

    console.log({firstPokemon})

    const pokemon = await fetchPokemon(firstPokemon.url);

    console.log({pokemon})

    const pokemonHtml = `
            <li class="pokemons-itens">
                <div class="pokemons-card" data-pokemon-card-type-name="eletric">
                    <div class="pokemons-card-image-container">
                        <img height=200 src="${pokemon.sprites.front_default}" alt="Ivysaur" class="pokemons-card-image">
                    </div>
                    <div class="pokemons-card-info">
                        <h3 class="pokemons-card-name js-pokemon-card-name">
                            ${pokemon.name}
                        </h3>
                        <span class="pokemons-card-type">
                           ${pokemon.types[0].type.name}
                        </span>
                    </div>
                    <ul class="pokemons-card-atributes">
                        <li class="pokemons-card-atributes-item">
                            <span class="pokemons-card-atributes-name">
                                HP
                            </span>
                            <div class="pokemons-card-atributes-progress">
                                <div class="pokemons-card-atributes-progress-bar"></div>
                            </div>
                        </li>
                        <li class="pokemons-card-atributes-item">
                            <span class="pokemons-card-atributes-name">
                                Attack
                            </span>
                            <div class="pokemons-card-atributes-progress">
                                <div class="pokemons-card-atributes-progress-bar"></div>
                            </div>
                        </li>
                        <li class="pokemons-card-atributes-item">
                            <span class="pokemons-card-atributes-name">
                                Defense
                            </span>
                            <div class="pokemons-card-atributes-progress">
                                <div class="pokemons-card-atributes-progress-bar"></div>
                            </div>
                        </li>
                        <li class="pokemons-card-atributes-item">
                            <span class="pokemons-card-atributes-name">
                                Special Attack
                            </span>
                            <div class="pokemons-card-atributes-progress">
                                <div class="pokemons-card-atributes-progress-bar"></div>
                            </div>
                        </li>
                    </ul>
                </div>
            </li>
        `
            const pokemonListUl = document.querySelector(".pokemons-list");

            pokemonListUl.insertAdjacentHTML("beforeend", pokemonHtml);
}



async function main(){

    const pokemons = await fetchPokemons();

    populatePokemons(pokemons);

    console.log({pokemons})

}

main();