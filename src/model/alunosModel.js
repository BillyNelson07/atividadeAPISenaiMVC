const alunos = [
    {
        "id": 1,
        "nome": "Gabriel",
        "nota": 9
    },
    {
        "id": 2,
        "nome": "Eduardo",
        "nota": 7
    },
    {
        "id": 3,
        "nome": "Luigi",
        "nota": 8
    }
];

export function getAllAlunos() {
    return alunos;
};

export function addNewAluno(dadosAluno) {
    alunos.push(dadosAluno);
    return alunos;
    
};