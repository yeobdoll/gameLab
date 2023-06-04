// 이 패키지가 만들어놓은 커스터마이징 태그
import {Link} from 'react-router-dom'; 

// import mainNav from './mainNav.module.css';
import mainNav from './MainNavigation.module.css';

function MainNavigation() {
    return(

        <div className={mainNav.navbar}>
            <div className={mainNav.navbar_logo}>
                <Link to='/'>
                    <img className={mainNav.title} src={require('../../img/title2.png').default}/>
                </Link>
                
            </div>

            <ul className={mainNav.navbar_menu}>
                <li><Link to='/lab' className={mainNav.link}>연구실</Link></li>
                <li><Link to='/mini' className={mainNav.link}>미니게임</Link></li>
                <li><Link to='/record' className={mainNav.link}>기록실</Link></li>
            </ul>
            
            <ul className={mainNav.navbar_member}>
                <li><button className={mainNav.navbar_login}>로그인</button></li>
                <li><button>회원가입</button></li>
            </ul>
        </div>

    )
}

export default MainNavigation;


// function MainNavigation() {
//     return (
//         <nav className={mainNav.header}>
//             <div className={mainNav.logo}>GameLab</div>
//             <nav>
//                 <ul> 
//                     <li>
//                         <Link to='/lab'>연구실</Link>
//                     </li>
//                     <li>
//                         <Link to='/lab'>미니게임</Link>
//                     </li>
//                     <li>
//                         <Link to='/lab'>기록실</Link>
//                     </li>
//                 </ul>
//             </nav>
//         </nav>
            
        
//     );
// }