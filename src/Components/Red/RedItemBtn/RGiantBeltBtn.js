import React from 'react';

function RGiantBeltBtn({items, setItems, gold, setGold}) {
    const addItem = () => {
        if(items.length < 6){
            setItems([ ... items, {
            id: items.length,
            value: 8
            }])

            setGold(gold+900)
        }
}

    return(
        <img className="full btn"
            src={require('../../../img/GiantBelt.png').default}
            onClick={addItem}
        />
    );
}

export default RGiantBeltBtn;