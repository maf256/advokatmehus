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
