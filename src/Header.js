import React from "react";
//import Header from "./Header";
class Header extends React.Component{
    constructor(props)
    {
        super(props);
        this.state = {
            qty: this.props.iCount
        };
    }
    AddToCart(val)
    {
        this.setState({
            qty: this.state.qty+val
        });
        return(
            this.state.qty
        );
    }
    render()
    {
        return(
            <div></div>
        );
    }
}
export default Header;