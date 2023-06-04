import React from 'react';

function BDaggerBtn({items, setItems, gold, setGold}) {
    const addItem = () => {
        if(items.length < 6){
            setItems([ ... items, {
            id: items.length,
            value: 7
            }])
            setGold(gold+300)
        }
}

    return(
        <img className="full btn"
            src={require('../../../img/Dagger.png').default}
            onClick={addItem}
        />
    );
}

export default BDaggerBtn;