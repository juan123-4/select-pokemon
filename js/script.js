const pokemonselect=document.getElementById("pokemon-select");
const Botonpokemon=document.getElementById("get-pokemon");
const contenedorPokemon=document.getElementById("Información_pokemon");

async function obtenerpokemones(nombrepokemon){
    const resultados= await  fetch(`https://pokeapi.co/api/v2/pokemon/${nombrepokemon}`);
const devolver= await  resultados.json();
return devolver;
}

function mostrarpokemon(pokemon){contenedorPokemon.innerHTML="";
    const divPokemon = 
    document.createElement('div');
    divPokemon.classList.add('nombre',"tipo","altura","peso");
    const imagen = pokemon.sprites.front_default;
    const nombre = pokemon.name;
    const tipo = pokemon.types.map(typeInfo => typeInfo.type.name).join(", "); 
    const altura = pokemon.height; 
    const peso = pokemon.weight;
    divPokemon.innerHTML = `
        <img src="${imagen}" alt="${nombre}">
        <p><span><b>NOMBRE: </b></span> ${nombre}</p>
        <p><span><b>TIPO: </b></span> ${tipo}</p>
        <p><span><b>ALTURA: </b></span> ${altura/10}m</p>
        <p><span><b>PESO: </b></span> ${peso/10}Kg</p>

    `;
    contenedorPokemon.appendChild(divPokemon);
};
Botonpokemon.addEventListener("click",async()=>{
    const nombrepokemon=pokemonselect.value;
    const total=await obtenerpokemones(nombrepokemon);
    mostrarpokemon(total)});

