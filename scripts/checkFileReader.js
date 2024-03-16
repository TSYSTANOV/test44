

export const checkFileReader = (src) =>{
    return new Promise((resolve, reject) => {
        const file = new FileReader()
        file.readAsDataURL(src)
        file.addEventListener('loadend',()=>{
            resolve(file.result)
        })
        
    })
}