const savedForms = []

export const enviarForm = (contactoForm) => {
return new Promise ((resolve) => {
    setTimeout(()=>{
        savedForms.push(contactoForm)
        resolve(contactoForm)
    },500)
} )

}

export const obtenerSavedForms = () =>{

    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(savedForms)
        })
    }

    )
}