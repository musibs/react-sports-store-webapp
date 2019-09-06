import React, {Component} from 'react'
import { ValidationForm } from '../forms/ValidationForms'

export class Checkout extends Component{

    constructor(props){
        super(props);
        this.defaultAttrs = {type: "text", required: true};
        this.formModel = [
            {label: "Name"},
            {label: "Email", attrs: {type: "email"}},
            {label: "Address"},
            {label: "City"},
            {label: "ZIP/Postal Code", name: "zip"},
            {label: "Country"}
        ]
    }

    handleSubmit = (formData) => {
        if(this.props.cart.length === 0){
            console.log(`Empty cart ${this.props.cart}`)
        }
        const order = { ...formData, products: this.props.cart.map(item => ({
            quantity: item.quantity, product_id: item.product.id})) }
        this.props.placeOrder(order);
        this.props.clearCart();
        this.props.history.push("/shop/cart");
    }


    handleCancel = () => {
        this.props.history.push("/shop/cart");
    }

    render(){
        return <div className="container-fluid">
                <div className="row">
                    <div className="col bg-dark text-white">
                        <div className="navbar-brand">SPORT STOTE</div>    
                    </div>   
                </div>
                <div className="row">
                    <div className="col m-2">
                        <ValidationForm
                            formModel={this.formModel}
                            defaultAttrs={this.defaultAttrs}
                            submitCallback={this.handleSubmit}
                            calcelCallback={this.handleCancel}
                            submitText="Place Order"
                            cancelTest="Return to Cart" />
                    </div>
                </div> 
        </div>
    }
}