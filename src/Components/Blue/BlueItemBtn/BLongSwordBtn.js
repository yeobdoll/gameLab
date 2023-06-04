import React from 'react';

function BLongSwordBtn({items, setItems, gold, setGold}) {
    const addItem = () => {
        if(items.length < 6){
            setItems([ ... items, {
            id: items.length,
            value: 3
            }])
            setGold(gold+350)
        }
}

    return(
        <img className="full btn"
            src={require('../../../img/LongSword.png').default}
            onClick={addItem}
        />
    );
}

export default BLongSwordBtn;