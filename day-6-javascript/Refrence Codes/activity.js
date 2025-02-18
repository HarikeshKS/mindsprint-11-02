class Product{
    constructor(id,name,price,category){

    }
}
class Cart{

    constructor(){
        this.cart=[]
    }
    addItem(product){
        //bydefault quantity will be 1
        cart.push({product,quantity:1})
    }
    removeItem(product){

    }
    updateItem(){
        //increase the quantity by 1
    }
    showTotalAmount(){

    }
}
const cart = new Cart();
cart.addItem(new Product(1,'Pen',10,'Stationary'))