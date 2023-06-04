import React from 'react';

function REzrealBtn(props) {
    
    return(
        <img className="full btn"
            src={require('../../../img/Ezreal.png').default}
            onClick={() => props.setData(3)}
        />
    );
}

export default REzrealBtn;