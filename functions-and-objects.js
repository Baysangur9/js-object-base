function getName(messages){
    return (messages.name)
};







function getNames (obj)  {
    return [obj.firstname , obj.lastname];
};



function concatNames (obj,lastname){
    return`${obj.firstname} ${lastname}`
}




function correctName(firstPerson){
    if (firstPerson.fathername === undefined){
        return firstPerson.firstname
    }
    return`${firstPerson.firstname} ${firstPerson.lastname} ${firstPerson.fathername}`

}

console.log(correctName(firstPerson))













