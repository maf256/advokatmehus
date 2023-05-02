import { Data } from '../common/Data';
import Link from 'next/link';
import Style from './RightNav.module.css'

export default function RightNav ({ selectedLanguage, setSelectedLanguage, hamIsOn, setHamIsOn }) {
  return (
    <ul className={hamIsOn ? `${Style.Ul} ${Style.UlhamIsOn}` : Style.Ul} hamIsOn={hamIsOn} >
    {
        Data.skills.menu[selectedLanguage].map((item, inx) => 
        <li
            className={Style.Li} 
            key={inx}>
            <Link
                className={Style.Link}
                onClick={()=> hamIsOn ? setHamIsOn(false) : null}
                href={item.href}>
                {item.name}
            </Link>
        </li>
        )
    }
    </ul>
  )
}

// const Ul = styled.ul`
//     list-style: none;
//     a {
//         letter-spacing: 2px;
//     }
//     @media (min-width: 900px) {
//         a {
//             color: #272F3E;
//             font-size: 16px;
//             font-weight: 600;
//             font-stretch: 100%;
//         }
//         display: flex;
//         flex-flow: row nowrap;         
//     }
    
//     @media (max-width: 900px) {
//         flex-flow: column nowrap;
//         background-color: #0D2538;
//         position: fixed;
//         transform: ${({ hamIsOn }) => hamIsOn ? 'translateX(0)' : 'translateX(100%)'};
//         top: 0;
//         right: 0;
//         height: 100vh;
//         width: 300px;
//         padding-top: 6rem;
//         transition: transform 0.3s ease-in-out;
//         a {
//             color: #FFE9B1;
//             letter-spacing: 2px;
//             font-size: 20px; 
//         }
//     }
// `;


// const Li = styled.li`
//     text-decoration: none;
//     padding-left: 35px;
//     ::after {
//         content: '';
//         display: block;
//         width: 0;
//         height: 3px;
//         background: black;
//         transition: width .2s;
//     }
//     :hover::after {
//         width: 100%;
//         transition: width .6s;
//     }
// `