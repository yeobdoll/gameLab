import React from 'react';

function BPickaxeBtn({items, setItems, gold, setGold}) {
    const addItem = () => {
        if(items.length < 6){
            setItems([ ... items, {
            id: items.length,
            value: 4
            }])
            setGold(gold+875)
        }
}

    return(
        <img className="full btn"
            src={require('../../../img/Pickaxe.png').default}
            onClick={addItem}
        />
    );
}

export default BPickaxeBtn;