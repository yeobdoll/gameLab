import React from 'react';

function RChainVestBtn({items, setItems, gold, setGold}) {
    
    const addItem = () => {
        if(items.length < 6){
            setItems([ ... items, {
            id: items.length,
            value: 2
            }])
            setGold(gold+800)
        }
}

    return(
        <img className="full btn"
            src={require('../../../img/ChainVest.png').default}
            onClick={addItem}
        />
    );
}

export default RChainVestBtn;