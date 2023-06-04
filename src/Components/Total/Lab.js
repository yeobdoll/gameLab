import React, {useState} from "react";
import BlueSelBox from "../Blue/BlueSelBox";
import BlueItemBox from "../Blue/BlueItemBox";
import RedSelBox from "../Red/RedSelBox";
import RedItemBox from "../Red/RedItemBox";
import champlist from "./champlist";
import itemlist from "./itemlist";
import Axios from 'axios';

function Lab()
{
    const[BLv, setBLv] = useState(1);
    const[RLv, setRLv] = useState(1);
    const[BData, setBData] = useState(0);
    const[RData, setRData] = useState(0);
    const[Binventory, setBinventory] = useState([]);
    const[Rinventory, setRinventory] = useState([]);
    
    const[timesA, setTimesA] = useState(0);
    const[timesB, setTimesB] = useState(0);

    const[damage, setDamage] = useState(0);
    const[getdamage, setGetdamage] = useState(0);

    const[num1, setNum1] = useState();
    const[num2, setNum2] = useState();

    const[cnt, setCnt] = useState(1);

    let Bhp=0, Bad=0, Barmor=0, Battspeed=0;
    let Rhp=0, Rad=0, Rarmor=0, Rattspeed=0;
    
    for(let i=0 ; i<Binventory.length ; i++)
    {
        if(Binventory[i].value==1){
            Barmor+=itemlist[1].armor;
            
        }
        else if(Binventory[i].value==2){
            Barmor+=itemlist[2].armor;
            
        }
        else if(Binventory[i].value==3){
            Bad+=itemlist[3].ad;
            
        }
        else if(Binventory[i].value==4){
            Bad+=itemlist[4].ad;
            
        }
        else if(Binventory[i].value==5){
            Bad+=itemlist[5].ad;
            
        }
        else if(Binventory[i].value==6){
            Barmor+=itemlist[6].armor;
            
        }
        else if(Binventory[i].value==7){
            Battspeed+=itemlist[7].attspeed;
            
        }
        else if(Binventory[i].value==8){
            Bhp+=itemlist[8].hp;

        }

    }   
    
    
    for(let i=0 ; i<Rinventory.length ; i++)
    {
        if(Rinventory[i].value==1){
            Rarmor+=itemlist[1].armor;
        }
        else if(Rinventory[i].value==2){
            Rarmor+=itemlist[2].armor;
        }
        else if(Rinventory[i].value==3){
            Rad+=itemlist[3].ad;
        }
        else if(Rinventory[i].value==4){
            Rad+=itemlist[4].ad;
        }
        else if(Rinventory[i].value==5){
            Rad+=itemlist[5].ad;
        }
        else if(Rinventory[i].value==6){
            Rarmor+=itemlist[6].armor;
        }
        else if(Rinventory[i].value==7){
            Rattspeed+=itemlist[7].attspeed;
        }
        else if(Rinventory[i].value==8){
            Rhp+=itemlist[8].hp;
        }

    }
    
    const TotalBlueChampData = [Math.round((champlist[BData].hp+champlist[BData].increasingHp*(BLv-1))*100)/100.0+parseInt(Bhp),
                                Math.round((champlist[BData].ad+champlist[BData].increasingAd*(BLv-1)))+parseInt(Bad),
                                Math.round((champlist[BData].armor+champlist[BData].increasingArmor*(BLv-1)))+parseInt(Barmor),
                                Math.round((champlist[BData].attspeed+champlist[BData].increasingAttspeed*(BLv-1))*1000)/1000.0]

    const TotalRedChampData = [Math.round((champlist[RData].hp+champlist[RData].increasingHp*(RLv-1))*100)/100.0+parseInt(Rhp),
                               Math.round((champlist[RData].ad+champlist[RData].increasingAd*(RLv-1)))+parseInt(Rad),
                               Math.round((champlist[RData].armor+champlist[RData].increasingArmor*(RLv-1)))+parseInt(Rarmor),
                               Math.round((champlist[RData].attspeed+champlist[RData].increasingAttspeed*(RLv-1))*1000)/1000.0]
    
    
    function attackBtoR()
    {
        setDamage(Math.round(TotalBlueChampData[1]*(1-(100/(100+TotalRedChampData[2])))));
        
    }

    function attackRtoB()
    {
        setGetdamage(Math.round(TotalRedChampData[1]*(1-(100/(100+TotalBlueChampData[2])))));
    }

    function resetTimesA()
    {
        setTimesA(0);
    }

    function resetTimesB()
    {
        setTimesB(0);
    }
    
    const createResult = () => {
        Axios.post('http://localhost:3001/create', {
            battle:cnt,
            name:champlist[BData].id,
            level: BLv,
            health: TotalBlueChampData[0],
            number_of_times: timesA
        }).then(() => {
            alert("success");
        })
    };

    const createResult1 = () => {
        Axios.post('http://localhost:3001/create', {
            battle1:cnt,
            name1:champlist[RData].id,
            level1: RLv,
            health1: TotalRedChampData[0]-damage*timesA,
            number_of_times1: 0
        }).then(() => {
            alert("success");
        })
    };
    return(
        <div className="labbox">
            <div className="total">
                <div className="box1">
                    <BlueSelBox setBLv={setBLv} setBData={setBData}/>
                    <BlueItemBox setBinventory={setBinventory} />
                    <RedItemBox setRinventory={setRinventory} />
                    <RedSelBox setRLv={setRLv} setRData={setRData} />
                </div>
                <div className="box2">
                    <div className="Left">
                        <div className="BlueStatTable">
                            <table border="1">
                                <thead>
                                    <tr align="center" backgroundColor="white">
                                        <th>구분</th>
                                        <th>기본 능력치<br/>(+레벨당 상승)</th>
                                        <th>아이템 적용시 능력치</th>
                                    </tr>
                                </thead>
                                
                                <tbody>
                                    <tr align="center" backgroundColor="white">
                                        <td>체력</td>
                                        <td>{TotalBlueChampData[0]}(+{champlist[BData].increasingHp})</td>
                                        <td>{Bhp}</td>
                                    </tr>    
                                    <tr align="center" backgroundColor="white">
                                        <td>공격력</td>
                                        <td>{TotalBlueChampData[1]}(+{champlist[BData].increasingAd})</td>
                                        <td>{Bad}</td>
                                    </tr>    
                                    <tr align="center" backgroundColor="white">
                                        <td>방어력</td>
                                        <td>{TotalBlueChampData[2]}(+{champlist[BData].increasingArmor})</td>
                                        <td>{Barmor}</td>
                                    </tr>    
                                    <tr align="center" backgroundColor="white">
                                        <td>공격 속도</td>
                                        <td>{TotalBlueChampData[3]}(+{Math.round(champlist[BData].increasingAttspeed*1000)/1000.0}%)</td>
                                        <td>{Battspeed}</td>
                                    </tr>      
                                </tbody>
                            </table>
                        </div>
                    </div>
                
            
                
                    <div className="right">

                        <div className="RedStatTable">
                            <table border="1">
                                <thead>
                                    <tr align="center" backgroundColor="white">
                                        <th>구분</th>
                                        <th>기본 능력치<br/>(+레벨당 상승)</th>
                                        <th>아이템 적용시 능력치</th>
                                    </tr>
                                </thead>
                            
                                <tbody>
                                    <tr align="center" backgroundColor="white">
                                        <td>체력</td>
                                        <td>{TotalRedChampData[0]}(+{champlist[RData].increasingHp})</td>
                                        <td>{Rhp}</td>
                                    </tr>    
                                    <tr align="center" backgroundColor="white">
                                        <td>공격력</td>
                                        <td>{TotalRedChampData[1]}(+{champlist[RData].increasingAd})</td>
                                        <td>{Rad}</td>
                                    </tr>    
                                    <tr align="center" backgroundColor="white">
                                        <td>방어력</td>
                                        <td>{TotalRedChampData[2]}(+{champlist[RData].increasingArmor})</td>
                                        <td>{Rarmor}</td>
                                    </tr>    
                                    <tr align="center" backgroundColor="white">
                                        <td>공격 속도</td>
                                        <td>{TotalRedChampData[3]}(+{Math.round(champlist[RData].increasingAttspeed*100*1000)/1000.0}%)</td>
                                        <td>{Rattspeed}</td>
                                    </tr>      
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                
                <div className="lab">
                    <div className="doAttack">
                        <p className="attack_p">공격하기</p>

                        <div className="BlueChampion"><img src={champlist[BData].src} className="full portrait"/>
                            <p style={{marginTop:15}}>hp:{TotalBlueChampData[0]}</p>
                        </div>

                        <div className="AttackBox">
                            <button className="AttackBtn_1" onClick={function(event){setTimesA(timesA+1); attackBtoR()}}>1회 공격하기</button><p className="times_p">횟수입력:</p>
                            <input className="inputTimes" type="number" min="0" max="9" onChange={(event) => {
                                setNum1(0)
                                setNum1(parseInt(event.target.value))
                            }}>
                            </input>
                            <button className="AttackBtn" onClick={function(event){setTimesA(timesA+num1); attackBtoR()}}>공격</button>
                        </div>

                        <div className="RedChampion">
                            <img src={champlist[RData].src} className='full portrait'/>
                            <p>hp:{TotalRedChampData[0]-damage*timesA >= 0 ? TotalRedChampData[0]-damage*timesA :"die"}</p>
                            <button onClick={resetTimesA} className="heal">회복하기</button>
                        </div>
                    </div>

                    <div className="GetAttack">
                        <p className="GetAttack_p">공격받기</p>

                        <div className="GetBlueChampion"><img src={champlist[BData].src} className='full portrait'/>
                            <p>hp:{TotalBlueChampData[0]-getdamage*timesB >= 0 ? TotalBlueChampData[0]-getdamage*timesB:"die"}</p>
                            <button onClick={resetTimesB} className="heal">회복하기</button>
                        </div>

                        <div className="GetAttackBox">
                            <button className="GetAttackBtn_1" onClick={function(event){setTimesB(timesB+1); attackRtoB()}}>1회 공격받기</button>
                            <p className="times_p">횟수입력:</p>
                            <input className="inputTimes" type="number" min="0" max="9" onChange={(event) => {
                                setNum2(0)
                                setNum2(parseInt(event.target.value))
                            }}>
                            </input>
                            <button className="GetAttackBtn" onClick={function(event){setTimesB(timesB+num2); attackRtoB()}}>공격받기</button>
                        </div>

                        <div className="RedChampion"><img src={champlist[RData].src} className='full portrait'/>
                            <p>hp:{TotalBlueChampData[0]}</p>                    
                        </div>
                    </div>
                </div>    
                <button className="heal" style={{marginTop:30}} onClick={function(event){setCnt(cnt+1); createResult(); createResult1(); resetTimesA(); resetTimesB()}}>저장하기</button>       
            </div>
        </div>
    );
}

export default Lab;