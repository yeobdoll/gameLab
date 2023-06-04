import React from 'react';

function RBFswordBtn({items, setItems, gold, setGold}) {
    
    const addItem = () => {
        if(items.length < 6){
            setItems([ ... items, {
            id: items.length,
            value: 5
            }])
            setGold(gold+1300)
        }
    }
    return(
        <img className="full btn"
            src={require('../../../img/BFsword.png').default}
            onClick={addItem}
        />
    );
}

export default RBFswordBtn;