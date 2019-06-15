import React from 'react';
import { withRouter } from 'react-router-dom';
import Button from '../Button/Button';


class FavDish extends React.Component {
    gotoDetails= ()=> {
        let { dish } = this.props;
        let { name} = dish;
        this.props.history.push('/details/'+name);
    }
    render() {
        let { dish } = this.props;
        let {image, name, price} = dish;
        return (
            <div className='favdish' onClick={this.gotoDetails}>
                <div className="favdish__image">
                    <img src={image} alt={name} />
                </div>
                <div className="favdish__details">
                    <div>
                        <p className="favdish__name">{name}</p>
                        <p className="favdish__price">{price}</p>
                    </div>
                    <div>
                        <Button text="Reorder" onClickHandler={()=> {}} />
                    </div>
                </div>
                
            </div>
        )
    }
}
export default withRouter(FavDish);