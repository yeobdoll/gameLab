import React from 'react';

function RAhriBtn(props) {
    
    return(
        <img className="full btn"
            src={require('../../../img/Ahri.png').default}
            onClick={() => props.setData(2)}
        />
        
    );
}

export default RAhriBtn;