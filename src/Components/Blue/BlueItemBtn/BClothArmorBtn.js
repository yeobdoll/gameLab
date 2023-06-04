import React from 'react';

function BClothArmorBtn({items, setItems, gold, setGold}) {
    const addItem = () => {
        if(items.length < 6){
            setItems([ ... items, {
            id: items.length,
            value: 1
            }])
            setGold(gold+300)
        }
    }

    return(
        <img className="full btn"
            src={require('../../../img/ClothArmor.png').default}
            onClick={addItem}
        />
    );
}

export default BClothArmorBtn;