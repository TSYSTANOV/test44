import { getAllGoods } from "./api.js"
import { bodyTable } from "./elements.js"


async function getGoods(){
    const goods = await getAllGoods()
    const elemsOfTable = renderGoods(goods)
    bodyTable.append(...elemsOfTable)
    return goods
}



function renderGoods(data){

    return data.map((item)=>{
        const tr = document.createElement('tr')
        tr.className = 'table-row table-goods-item'
        tr.dataset.id = item.id
        tr.innerHTML = `
        <td>${item.id}</td>
              <td>${item.title}</td>
              <td>${item.category}</td>
              <td class="text-end">${item.price}</td>
              <td class="d-flex">
        </td>
        `
        const btnDelete = document.createElement('button')
        btnDelete.className = 'btn-table btn-delete'
        btnDelete.innerHTML = `
        <svg width="30" height="30">
        <use xlink:href="#delete" />
        </svg>`
        tr.append(btnDelete)
        return tr
    })
}




export {getGoods, renderGoods}