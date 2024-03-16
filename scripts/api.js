const BASE_URL = 'http://localhost:3024'


function getAllGoods(){
    return fetch(`${BASE_URL}/api/goods?nopage='true'`)
    .then(response => response.json())
}

function getGoodById(id){
    return fetch(`${BASE_URL}/api/goods/${id}`).then(response=>response.json())
    
}

function addGoods(goods){

    return fetch(`${BASE_URL}/api/goods`,{
        method:'POST',
        body:JSON.stringify(goods)
    }).then(response=>response.json())
}

function changeGood(id, goods){
    fetch(`${BASE_URL}/api/goods/${id}`,{
        method:'PATCH',
        body:JSON.stringify(goods)
    }).then(response=>response.json())
}

function deleteGood(id){
    return fetch(`${BASE_URL}/api/goods/${id}`,{
        method:'DELETE'
    })
    .then(resonse=>resonse.json())
}


export {getAllGoods, addGoods, deleteGood, getGoodById, changeGood}