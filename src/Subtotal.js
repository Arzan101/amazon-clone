import React from 'react'

function Subtotal() {
    return (
        <div className="subtotal">
           <p>subtotal (0 items): <strong>0</strong></p>
           <small className="subtotal__gift">
           <input type="checkbox" />
           This order contains a gift
           </small>
           <button>Proceed to buy</button>
        </div>
    )
}

export default Subtotal
