import React, {useState} from 'react';
import BAhriBtn from './BlueImgBtn/BAhriBtn';
import BJhinBtn from './BlueImgBtn/BJhinBtn';
import BAnnieBtn from './BlueImgBtn/BAnnie';
import BEzrealBtn from './BlueImgBtn/BEzrealBtn';
import BKaynBtn from './BlueImgBtn/BKaynBtn';
import BLuxBtn from './BlueImgBtn/BLuxBtn';
import BRusianBtn from './BlueImgBtn/BRusianBtn';
import BEchoBtn from './BlueImgBtn/BEchoBtn';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp, faAngleDown } from "@fortawesome/free-solid-svg-icons";
import champlist from "../Total/champlist";

function BlueSelBox({setBLv, setBData}) {
    const [data, setData] = useState(0);
    const [lv, setLv] = useState(1);
    
    setBLv(lv)
    setBData(data)

    /*챔피언정보*/
    
    function increaseLv()
    {
        if(lv < 18)
        {
            setLv(lv+1);
        }
    }

    function decreaseLv()
    {
        if(lv > 1)
        {
            setLv(lv-1);
        }
    }

    return(
        //챔피언 버튼//
        
        <div className="BlueSelectingBox">
            <table>
                <tr>
                    <td><BJhinBtn setData={setData} /></td>
                    <td><BAhriBtn setData={setData} /></td>
                    <td><BEzrealBtn setData={setData} /></td>
                    <td><BEchoBtn setData={setData} /></td>
                </tr>          
                <tr>
                    <td><BAnnieBtn setData={setData} /></td>
                    <td><BKaynBtn setData={setData} /></td>
                    <td><BLuxBtn setData={setData} /></td>
                    <td><BRusianBtn setData={setData} /></td>
                </tr>

                <tr>
                    <td colSpan="2"> 
                    {data == 0 ? <div style={{height: 100, width: 100, backgroundColor: 'black', border: "solid white 3.5px", marginTop: 15}}><p style={{color: 'white'}}>Select Champion!</p></div>
                    : <div><img className='full portrait' src={champlist[data].src}/></div>}
                    </td>
                </tr>
                
            </table>

            <table>
                <tr>
                    <td><FontAwesomeIcon icon={faAngleDown} onClick={decreaseLv} className='lvHandler'/></td>
                    <td><p>Lv{lv}</p></td>
                    <td><FontAwesomeIcon icon={faAngleUp} onClick={increaseLv} className='lvHandler'/></td>
                </tr>
            </table>
    
        </div>
    );
}

export default BlueSelBox;