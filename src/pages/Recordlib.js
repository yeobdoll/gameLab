import React, { useState } from "react";
import lib from "./Recordlib.module.css";
import Axios from "axios";

function Recordlib() {
    const [BlueState, setBluestate] = useState([]);
    const [RedState, setRedstate] = useState([]);

    
    function getBlueResult()
    {
        Axios.get('http://localhost:3001/read').then((res) => {
            setBluestate(res.data);
        })

    }

    function getRedResult()
    {
        Axios.get('http://localhost:3001/read1').then((res) => {
            setRedstate(res.data);
        })
    }
    console.log(BlueState);
    console.log(RedState);
    return(
        <div className={lib.total}>
            <button onClick={function(event){getBlueResult(); getRedResult()}}>Click</button>
            <div className={lib.list}>
                {
                    BlueState.map((result) => {
                        return <div className={lib.list_item_blue}> <p>전투</p>{result.battle}, <p>챔피언 이름: </p>{result.name}, <p>챔피언 레벨: </p>{result.level}<p>Lv</p>, <p>챔피언 남은 체력: </p>{result.health}<p>hp</p>, <p>때린 횟수: </p>{result.number_of_times}<p>회</p> </div>;
                        
                    })
                }

                {
                    RedState.map((result) => {
                        return <div className={lib.list_item_red}> <p>전투</p>{result.battle}, <p>챔피언 이름: </p>{result.name}, <p>챔피언 레벨: </p>{result.level}<p>Lv</p>, <p>챔피언 남은 체력: </p>{result.health}<p>hp</p>, <p>때린 횟수: </p>{result.number_of_times}<p>회</p> </div>;
                    
                    })
                }

                
            </div>
            <div className="publish">
                {/* <input onChange={(e) => { (e.target.value) }}></input>
                <button onClick={() => {  }}>추가</button> */}
            </div>
        </div>
    )
}

export default Recordlib;