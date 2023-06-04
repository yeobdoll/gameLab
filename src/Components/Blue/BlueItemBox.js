import React, {useState} from 'react';
import BClothArmorBtn from './BlueItemBtn/BClothArmorBtn';
import BChainVestBtn from './BlueItemBtn/BChainVestBtn';
import BLongSwordBtn from './BlueItemBtn/BLongSwordBtn';
import BPickaxeBtn from './BlueItemBtn/BPickaxeBtn';
import BBFswordBtn from './BlueItemBtn/BBFswordBtn';
import BMagicMantleBtn from './BlueItemBtn/BMagicMantleBtn';
import BDaggerBtn from './BlueItemBtn/BDaggerBtn';
import BGiantBeltBtn from './BlueItemBtn/BGiantBeltBtn';

function BlueItemBox({setBinventory}) {

    const [items, setItems] = useState([])
    const [gold, setGold] = useState(0)
    const resetItem = () =>{
        setItems([])
        setGold(0)
    }

    setBinventory(items);
    
    const array = [
        {
            src: require("../../img/Dark.png").default,
            gold: 0
        },
        {
            src: require("../../img/ClothArmor.png").default,
            gold: 300
        },
        {
            src: require("../../img/ChainVest.png").default,
            gold: 800
        },
        {
            src: require("../../img/LongSword.png").default,
            gold: 350
        },
        {
            src: require("../../img/Pickaxe.png").default,
            gold: 875
        },
        {
            src: require("../../img/BFsword.png").default,
            gold: 1300
        },
        {
            src: require("../../img/MagicMantle.png").default,
            gold: 450
        },
        {
            src: require("../../img/Dagger.png").default,
            gold: 300
        },
        {
            src: require("../../img/GiantBelt.png").default,
            gold: 900
        }
    ]
    

    return(
        <div className="BlueItemBox">
            <div className="inventory">
                <table>
                    <tr>
                        <td><BClothArmorBtn items={items} setItems={setItems} gold={gold} setGold={setGold}/></td>
                        <td><BChainVestBtn items={items} setItems={setItems} gold={gold} setGold={setGold}/></td>
                        <td><BLongSwordBtn items={items} setItems={setItems} gold={gold} setGold={setGold}/></td>
                        <td><BPickaxeBtn items={items} setItems={setItems} gold={gold} setGold={setGold}/></td>
                    </tr>
                    <tr>
                        <td><BBFswordBtn items={items} setItems={setItems} gold={gold} setGold={setGold}/></td>
                        <td><BMagicMantleBtn items={items} setItems={setItems} gold={gold} setGold={setGold}/></td>
                        <td><BDaggerBtn items={items} setItems={setItems} gold={gold} setGold={setGold}/></td>
                        <td><BGiantBeltBtn items={items} setItems={setItems} gold={gold} setGold={setGold}/></td>
                    </tr>
                
                </table>
            </div>
        
            <div className="RealInventory">
                <table>
                    <tr>
                        <td>{items.length == 0 ? <div><img className='full selected' src={array[0].src}/></div>
                            : <div><img className='full selected' src={array[items[0].value].src}/></div>}</td>
                        <td>{items.length <= 1 ? <div><img className='full selected' src={array[0].src}/></div>
                            : <div><img className='full selected' src={array[items[1].value].src}/></div>}</td>
                        <td>{items.length <= 2 ? <div><img className='full selected' src={array[0].src}/></div>
                            : <div><img className='full selected' src={array[items[2].value].src}/></div>}</td>
                    </tr>

                    <tr>
                        <td>{items.length <= 3 ? <div><img className='full selected' src={array[0].src}/></div>
                            : <div><img className='full selected' src={array[items[3].value].src}/></div>}</td>
                        <td>{items.length <= 4 ? <div><img className='full selected' src={array[0].src}/></div>
                            : <div><img className='full selected' src={array[items[4].value].src}/></div>}</td>
                        <td>{items.length <= 5 ? <div><img className='full selected' src={array[0].src}/></div>
                            : <div><img className='full selected' src={array[items[5].value].src}/></div>}</td>
                    </tr>        
                </table>
            </div>
            <div className='reset_box'>
                <button onClick={resetItem} className="reset">reset</button>
                <p className='reset_p'>gold:{gold}</p>
            </div>
        </div>
        
    );
}

export default BlueItemBox;