function getName (name){
    
    return {

        name: 'Baysangur',
    }
    

}

let user = getName('Baysangur')
console.log(user)


function getNames (name){
    
    return {

        firstName: 'Baysangur',
        lastName: 'Elbiev'

    }
    

}

let use = getNames('Baysangur','Elbiev')
console.log(use.firstName)
console.log(use.lastName)


function concatNames(obj,lastName){

    return{
        obj: 'Baysangur',
        lastName: 'Elbiev',
    }
}

let person = concatNames('Baysangur','lastName')
console.log(person.obj,'Elbiev')



const firstPerson = {
    firstname: 'Baysangur',
    lastname: 'Elbiev',
    fathername: undefined
  };
  
   
console.log(firstPerson.firstname)



const seconPerson = {
    firstname: 'Baysangur',
    lastname: 'Elbiev',
    fathername: undefined
  };
  
   
console.log(seconPerson.firstname + ' ' + seconPerson.lastname + ' ' + seconPerson.fathername )
    
   
        












