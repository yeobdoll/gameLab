import React, {useState} from 'react';
import RClothArmorBtn from './RedItemBtn/RClothArmorBtn';
import RChainVestBtn from './RedItemBtn/RChainVestBtn';
import RLongSwordBtn from './RedItemBtn/RLongSwordBtn';
import RPickaxeBtn from './RedItemBtn/RPickaxeBtn';
import RBFswordBtn from './RedItemBtn/RBFswordBtn';
import RMagicMantleBtn from './RedItemBtn/RMagicMantleBtn';
import RDaggerBtn from './RedItemBtn/RDaggerBtn';
import RGiantBeltBtn from './RedItemBtn/RGiantBeltBtn';


function RedItemBox({setRinventory}) {

    const [items, setItems] = useState([]);
    const [gold, setGold] = useState(0);
    const resetItem = () =>{
        setItems([])
        setGold(0);
    }
    
    setRinventory(items);
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
        <div className="RedItemBox">
        <div className="inventory">
            <table>
                <tr>
                    <td><RClothArmorBtn items={items} setItems={setItems} gold={gold} setGold={setGold}/></td>
                    <td><RChainVestBtn items={items} setItems={setItems} gold={gold} setGold={setGold}/></td>
                    <td><RLongSwordBtn items={items} setItems={setItems} gold={gold} setGold={setGold}/></td>
                    <td><RPickaxeBtn items={items} setItems={setItems} gold={gold} setGold={setGold}/></td>
                </tr>
                <tr>
                    <td><RBFswordBtn items={items} setItems={setItems} gold={gold} setGold={setGold}/></td>
                    <td><RMagicMantleBtn items={items} setItems={setItems} gold={gold} setGold={setGold}/></td>
                    <td><RDaggerBtn items={items} setItems={setItems} gold={gold} setGold={setGold}/></td>
                    <td><RGiantBeltBtn items={items} setItems={setItems} gold={gold} setGold={setGold}/></td>
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

export default RedItemBox;