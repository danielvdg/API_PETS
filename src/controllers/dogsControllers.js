const DogDAO =  require('../dao/dogsDAO')

module.exports = (app,bd)=>{
 const DaoDogs = new DogDAO(bd);
 
 app.get('/pets/dogs', async (req,res)=>{
    try{
        const respotaVerDogs = await DaoDogs.VerDogs()
        res.send(respotaVerDogs)
    }catch(erro){

        res.send(erro)
    }

 })

 app.get('/pets/dogs/:id', async (req,res)=>{
    try{ 
        const id = req.params.id         
        const respostaVerUmDogs = await DaoDogs.VerUmDog(id)
        res.send(respostaVerUmDogs)
    }catch(erro){   

        res.send(erro)
    }

 })

 app.post('/pets/dogs/newDogs',async (req,res)=>{
     try {
         const body = req.body
         const info =[body.RACA,body.FOTO, body.IDADE,body.NOME,body.GENERO,body.RUA,body.NUMERO,body.CIDADE,body.ESTADO,body.TELEFONE]
        const respostaNewDog = await DaoDogs.NewDog(info)
        res.send(respostaNewDog)
     } catch (error) {
         res.send(error)
     }
 })

 app.delete('/pets/dogs/delete/:ID',async(req,res)=>{
    try {
    const id = req.params.ID
    const respostaDeleteDogs = await DaoDogs.DeleteDogs(id)
    res.send(respostaDeleteDogs)

    } catch (error) {
    res.send(error)

    }

 })

 app.put('/pets/dogs/edit/:ID',async(req,res)=>{
     try {
        const id = req.params.ID
        const body = req.body
        const info =[body.RACA,body.FOTO, body.IDADE,body.NOME,body.GENERO,body.RUA,body.NUMERO,body.CIDADE,body.ESTADO,body.TELEFONE]

        const respostaEditDog = await DaoDogs.EditDog(info,id)
        res.send(respostaEditDog)

     } catch (error) {
         res.send(error)
     }
 })



}