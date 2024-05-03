function onPageLoad(){

    fetch("http://localhost:8080/postagens")
    .then(function response(data){

        const promiseData= data.json()
        console.log(promiseData)
        
        promiseData.then(response=>{
        
            insertUsers(response.results)

         })
        
        insertUsers(data)
    })

    loadComponents()
}

function insertUsers (data){
    console.log(data)
}

function loadComponents(){

    console.log("loadComponents")


}