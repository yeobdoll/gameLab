import React from 'react';

function BRusianBtn(props) {
    
    return(
        <img className="full btn"
            src={require('../../../img/Rusian.png').default}
            onClick={() => props.setData(8)}
        />
    );
}

export default BRusianBtn;