import './Shoe.css';
import { Link } from 'react-router-dom';



const Shoe = (props) => {

    return (
        <div className='col'>
            <div className="card border border-0 shadow-lg h-100" id='product-details' >
                <img src={props.img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{props.name}</h5>
                    <p className="card-text">{props.text}</p>
                </div>
                <div className="m-3">
                    <h4>{props.price}</h4>
                    <Link to={`/shoes/${props.id}`}><div className="btn btn-warning" >
                        Buy Now
                    </div></Link>


                </div>
            </div>
        </div>
    );
};

export default Shoe;