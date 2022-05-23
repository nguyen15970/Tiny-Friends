export const DetailProduct = (data) => {
    return{
        type:'Detail',
        payload:data
    }
}

export const AddtoCart = (data) =>{
    return{
        type:'Addtocart',
        payload:data
    }
}