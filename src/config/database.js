module.exports= {
    dialect: 'postgres',
    host: 'localhost',
    username: 'postgres',
    password: 'admin',
    database: 'tasklist',
    define: {
        timestamps: true,
        underscored: true,
        underscoredAll: true
    }
}
