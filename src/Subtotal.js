import React from 'react'
import {useStateValue} from './StateProvider'
// import CurrencyFormat from 'react-currency-format';

function Subtotal() {
    const [{cart}, dispatch] =  useStateValue();
    return (
        <div className="subtotal">
           <p>subtotal ({cart.length} items): <strong>0</strong></p>
           <small className="subtotal__gift">
           <input type="checkbox" />
           This order contains a gift
           </small>
           <button>Proceed to buy</button>
        </div>
    )
}

export default Subtotal
