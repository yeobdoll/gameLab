import React from 'react';

function REchoBtn(props) {
    
    return(
        <img className="full btn"
            src={require('../../../img/Echo.png').default}
            onClick={() => props.setData(4)}
        />
    );
}

export default REchoBtn;