import React from 'react';

function BAnnieBtn(props) {
    
    return(
        <img className="full btn"
            src={require('../../../img/Annie.png').default}
            onClick={() => props.setData(5)}
        />
    );
}

export default BAnnieBtn;