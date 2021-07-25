
module.exports = class DogsDAO{

    constructor(bd){
        this.bd = bd;
    }

    VerDogs(){
        return new Promise((resolve,reject)=> {
            const query = "SELECT * FROM DOGS"
            this.bd.all(query,(erro,res)=>{
                if(erro) reject(`Erro ao acessar o BD.${erro}`)
                else resolve(res)
            })
        })
    }

   VerUmDog(id){
       return new Promise ((resolve,reject)=>{
           const query = 'SELECT * FROM DOGS WHERE ID = (?)'
           this.bd.all(query,id,(erro,res)=>{
            if(erro) reject(`Erro ao acessar o BD.${erro}`)
            else resolve(res)
           })
       })
   }

   NewDog(info){
    return new Promise((resolve,reject)=>{
    const query = 'INSERT INTO DOGS (RACA, FOTO, IDADE, NOME, GENERO, RUA, NUMERO, CIDADE, ESTADO, TELEFONE) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)'
     const parametros = [info[0],info[1],info[2],info[3],info[4],info[5],info[6],info[7],info[8],info[9]]
     this.bd.run(query,parametros,(error,res)=>{
        if(error) reject(`Erro ao adicionar dog.${error}`)
        else resolve('Dog adicionado com sucesso')
     })

    })

   }
   
   DeleteDogs(id){
       return new Promise((resolve,reject)=>{
           const query = 'DELETE FROM DOGS WHERE ID = (?)'
           this.bd.run(query,id,(error,res)=>{
               if(error) reject(`Erro ao excluir dog`)
               else resolve('Dog excluido') 
           })
       })
    }

    EditDog(info,id){
        return new Promise((resolve,reject)=>{
            const query = 'UPDATE DOGS SET RACA = (?), FOTO = (?), IDADE = (?), NOME = (?), GENERO = (?), RUA = (?), NUMERO = (?), CIDADE = (?), ESTADO = (?), TELEFONE = (?) WHERE ID = (?)'
            const parametros = [info[0],info[1],info[2],info[3],info[4],info[5],info[6],info[7],info[8],info[9],id]
            this.bd.run(query,parametros,(error,res)=>{
                if(error) reject(`Erro ao editar dog`)
               else resolve('Dog Editado')
             })
            
        })
    }
}