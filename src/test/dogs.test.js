const request = require('supertest')
const port = 3000

test('/pets/dogs', async()=>{
    await request(`http://localhost:${port}`)
    .get('/pets/dogs')
    .expect(200)
    .then((res) => console.log('passou no test'))
})

test('/pets/dogs/newDog',async()=>{
    await request(`http://localhost:${port}`)
    .post('/pets/dogs/newDogs')
    .send({
        "RACA": "beagle",
        "FOTO": "https://images.dog.ceo/breeds/finnish-lapphund/mochilamvan.jpg",
        "IDADE": "8",
        "NOME": "Totó",
        "GENERO": "male",
        "RUA": "Rua Cambará Branco ",
        "NUMERO": "121",
        "CIDADE": "São Bernardo",
        "ESTADO": "São Paulo",
        "TELEFONE": "(11) 4002-8922"
    })
    .expect(200)
    .then((res) => console.log('passou no test'))
})