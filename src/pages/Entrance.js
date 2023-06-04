import {Link} from 'react-router-dom'; 
import gate from './Entrance.module.css';

function Entrance() {
    return(
        <div className={gate.entrance}>
            <div className={gate.Jumbotron}>
                <h1 className={gate.hello}>소환사 여러분 반갑습니다</h1>

                <div className={gate.info1}>
                    <p>전적, 전략 유출 걱정 없는</p>
                    <p>무료 전투 시뮬레이터</p>
                </div>

                <div className={gate.info2}>
                    <p>게임 접속없이, 클릭 몇 번으로</p>
                    <p>상성 및 전략을 연구해보세요.</p>
                </div>
                <Link to='lab'>
                    <button className={gate.btn}>시작하기</button>
                </Link>
                <button className={gate.btn}>더 알아보기</button>
            </div>
        </div>
    )
}

export default Entrance;