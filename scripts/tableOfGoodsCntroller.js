import { deleteGood } from "./api.js"
import { bodyTable, headTable } from "./elements.js"
import { openModal } from "./modal.js"
import { renderGoods } from "./renderGoods.js"





function tableController (dataElements){
    console.log(dataElements)
    bodyTable.addEventListener('click',()=>{
        const idGoods = event.target.closest('tr').dataset.id
        if(event.target.classList.contains('btn-delete')){
            event.target.closest('tr').remove()
            deleteGood(idGoods)
            return
        }
        openModal(idGoods)
    })
    headTable.addEventListener('click',()=>{
        if(event.target.classList.contains('btn-sort')){
            switch (event.target.dataset.sort){
                case 'price':{
                    if(event.target.dataset.direction === 'up'){
                        dataElements.sort((a,b)=>{
                            return a.price > b.price ? -1 : 1
                        })
                        event.target.dataset.direction = 'down'
                    }else{
                        dataElements.sort((a,b)=>{
                            return a.price > b.price ? 1 : -1
                        })
                        event.target.dataset.direction = 'up'
                    }
                    bodyTable.innerHTML = ''
                    const elemsOfTable = renderGoods(dataElements)
                    bodyTable.append(...elemsOfTable)
                    break
                }
            }
        }
        
    })
}

export {tableController}