import React from 'react';
import { withRouter } from 'react-router-dom';
import Button from '../Button/Button';

class Dish extends React.Component {
    gotoDetails= ()=> {
        let { dish } = this.props;
        let { name} = dish;
        this.props.history.push('/details/'+name);
    }
    render() {
        let { dish } = this.props;
        let {image, name, price} = dish;
        return (
            <div className='dish' onClick={this.gotoDetails}>
                <div className="dish__image">
                    <img src={image} alt={name} />
                </div>
                <div className="dish__details">
                    <div>
                        <p className="dish__name">{name}</p>
                        <p className="dish__price">{price}</p>
                    </div>
                    <div>
                        <Button text="Add to Bag" onClickHandler={()=> {}} />
                    </div>
                </div>
                
            </div>
        )
    }
}


export default withRouter(Dish);