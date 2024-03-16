import { modalWindow } from "./modal.js"
import { getGoods } from "./renderGoods.js"
import { tableController } from "./tableOfGoodsCntroller.js"




async function initApp(){
    modalWindow()
    const goodsOnPage = await getGoods()
    tableController(goodsOnPage)
}

initApp()