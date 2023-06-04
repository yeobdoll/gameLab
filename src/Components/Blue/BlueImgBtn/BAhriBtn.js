import React from 'react';

function BAhriBtn(props) {
    
    return( 
        <img className="full btn"
            src={require('../../../img/Ahri.png').default}
            onClick={() => props.setData(2)}
        />
    );
}

export default BAhriBtn;