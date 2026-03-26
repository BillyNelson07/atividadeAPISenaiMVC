const frutas = [

    {
        id: 1,
        nome: "Laranja",
        cor: "Laranja"
    },
    {
        id: 2,
        nome: "Kiwi",
        cor: "Verde"
    },
    {
        id: 3,
        nome: "Pitaia",
        cor: "Rosa"
    },
    {
        id: 4,
        nome: "Maçã",
        cor: "Vermelho"
    },
    {
        id: 5,
        nome: "Banana",
        cor: "Amarelo"
    },

];

export function getAllFrutas(){
    return frutas;
};

export function getFrutaById(idFruta){
    return frutas.find(fruta => fruta.id == idFruta);
};