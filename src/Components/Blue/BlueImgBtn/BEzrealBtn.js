import React from 'react';

function BEzrealBtn(props) {
    
    return(
        <img className="full btn"
            src={require('../../../img/Ezreal.png').default}
            onClick={() => props.setData(3)}
        />
    );
}

export default BEzrealBtn;