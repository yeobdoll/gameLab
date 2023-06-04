import React, {useState} from 'react';
import RAhriBtn from './RedImgBtn/RAhriBtn';
import RJhinBtn from './RedImgBtn/RJhinBtn';
import RAnnieBtn from './RedImgBtn/RAnnie';
import REzrealBtn from './RedImgBtn/REzrealBtn';
import RKaynBtn from './RedImgBtn/RKaynBtn';
import RLuxBtn from './RedImgBtn/RLuxBtn';
import RRusianBtn from './RedImgBtn/RRusianBtn';
import REchoBtn from './RedImgBtn/REchoBtn';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp, faAngleDown } from "@fortawesome/free-solid-svg-icons";
import champlist from "../Total/champlist";

function RedSelBox({setRLv, setRData}) {
    const [data, setData] = useState(0);
    const [lv, setLv] = useState(1);
    
    setRLv(lv)
    setRData(data)

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
        //챔피언 버튼
        
    <div className="RedSelectingBox"> 
        <table>
            <tr>
                <td><RJhinBtn setData={setData} /></td>
                <td><RAhriBtn setData={setData} /></td>
                <td><REzrealBtn setData={setData} /></td>
                <td><REchoBtn setData={setData} /></td>
            </tr>          
            <tr>
                <td><RAnnieBtn setData={setData} /></td>
                <td><RKaynBtn setData={setData} /></td>
                <td><RLuxBtn setData={setData} /></td>
                <td><RRusianBtn setData={setData} /></td>
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

export default RedSelBox;