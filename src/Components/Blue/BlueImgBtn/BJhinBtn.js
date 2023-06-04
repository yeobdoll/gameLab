import React from 'react';

function BJhinBtn(props) {
    
    return(
        <img className="full btn"
            src={require('../../../img/Jhin.png').default}
            onClick={() => props.setData(1)}
        />
    );
}

export default BJhinBtn;