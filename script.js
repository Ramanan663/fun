const fetchPokemon = () => {
    const url = `https://pokeapi.co/api/v2/pokemon/1`;
    fetch(url)
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            console.log(data);
        });
};
fetchPokemon(1);

/*document.addEventListener("click", fetchPokemon);
const pokimon = document.getElementById("pokimon_result");
const pokimon_numbers = 150;
const getpokimon = async(id) => {
    const url = ` https://pokeapi.co/api/v2/pokemon/ditto`;
    const res = await fetch(url);
    const pokemon = res.json();
    console.log(pokemon);
};
getpokimon(1);*/