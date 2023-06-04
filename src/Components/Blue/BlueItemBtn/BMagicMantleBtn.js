import React from 'react';

function BMagicMantleBtn({items, setItems, gold, setGold}) {
    const addItem = () => {
        if(items.length < 6){
            setItems([ ... items, {
            id: items.length,
            value: 6
            }])
            setGold(gold+450)
        }
}

    return(
        <img className="full btn"
            src={require('../../../img/MagicMantle.png').default}
            onClick={addItem}
        />
    );
}

export default BMagicMantleBtn;