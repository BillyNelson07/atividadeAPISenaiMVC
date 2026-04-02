import pg from 'pg';
const {Pool} = pg;

const pool = new Pool({
    host: 'localhost',
    port: 5433,
    user: 'gabrielEduardo',
    password: '123dasilva4',
    database: 'atividade API'
})

export default pool;