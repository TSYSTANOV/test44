import { addGoods, changeGood, getGoodById } from "./api.js";
import { checkFileReader } from "./checkFileReader.js";
import { btnClose, btnOpen, imgPreview, modalForm, modalWindowBlock } from "./elements.js";

async function openModal(id = 0){
    let dataID = null
    
    if(id){
        dataID = await getGoodById(id)
    }
    modalWindowBlock.classList.add('d-block')
    modalWindowBlock.addEventListener('click',()=>{
        if(event.target === modalWindowBlock){
            modalWindowBlock.classList.remove('d-block')
            modalForm.reset()
            return
        }
        if(event.target === btnClose){
            modalWindowBlock.classList.remove('d-block')
            modalForm.reset()
            return
        }
    })
    modalForm.querySelector('.modal-title').textContent = `Добавить новый товар`
    modalForm.querySelector('.modal-body').dataset.idGood = ''
    imgPreview.src = ''
    imgPreview.style.display = 'none'
    if(dataID){
        modalForm.querySelector('.modal-title').textContent = `Редактирование: ${dataID.title}`
        modalForm.querySelector('.modal-body').dataset.idGood = dataID.id
        modalForm.title.value = dataID.title
        modalForm.category.value = dataID.category
        modalForm.description.value = dataID.description
        modalForm.price.value = dataID.price
        modalForm.imagesave.value = dataID.image
        modalForm.display.value = dataID.display
        imgPreview.style.display = 'block'
        imgPreview.src = `http://localhost:3024/${dataID.image}`
    }
    modalForm.addEventListener('submit', async(event)=>{
        event.preventDefault()
        if(dataID){
            const data = [...new FormData(modalForm)]
            const objData = Object.fromEntries([...data])
            objData.image = objData.imagesave
            delete objData.imagesave
            objData.id = modalForm.querySelector('.modal-body').dataset.idGood
            changeGood(objData.id, objData)
            return
        }
        const data = [...new FormData(modalForm)]
        const objData = Object.fromEntries([...data])
        objData.image = objData.imagesave
        delete objData.imagesave
        const response = await addGoods(objData)
    
    })
    modalForm.image.addEventListener('change', async()=>{
 
        const result = await checkFileReader(modalForm.image.files[0])
       
        modalForm.imagesave.value = result
        imgPreview.style.display = 'block'
        imgPreview.src = result
        
    })
    
}


function modalWindow(){
btnOpen.addEventListener('click', ()=>{
    openModal()
})

}



export {modalWindow, openModal}