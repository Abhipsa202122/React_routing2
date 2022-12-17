import React,{Component} from 'react';
class ProductParam extends Component{
    render(){
        return(
            <div>
                <h1>ProductParam Component</h1>
                <h1>We have selected the component:{this.props.match.params.child}</h1>
            </div>
        )
    }

}
export default ProductParam;