import { useContext } from 'react';
import styled from 'styled-components';
import { Data } from '../common/Data';
import Link from 'next/link';
import AppContext from "../Context/AppContext"


export default function RightNav ({ selectedLanguage, setSelectedLanguage, hamIsOn }) {
    
    const context = useContext(AppContext)
    
    
    

    

  return (
    <Ul hamIsOn={hamIsOn} >
    {
        Data.skills.menu[selectedLanguage].map((item, inx) => 
        <Li 
            key={inx}>
            <Link
                             
                href={item.href}>
                {item.name}
            </Link>
        </Li>
        
        )
    }
    </Ul>
  )
}

const Ul = styled.ul`
    list-style: none;

    @media (min-width: 900px) {
        a {
            color: #272F3E;
            font-size: 18px;
            font-weight: 600;
            font-stretch: 100%;
        }
        display: flex;
        flex-flow: row nowrap;         
    }
    
    @media (max-width: 900px) {
        flex-flow: column nowrap;
        background-color: #0D2538;
        position: fixed;
        transform: ${({ hamIsOn }) => hamIsOn ? 'translateX(0)' : 'translateX(100%)'};
        top: 0;
        right: 0;
        height: 100vh;
        width: 300px;
        padding-top: 3.5rem;
        transition: transform 0.3s ease-in-out;
        a {
            color: ${({ hamIsOn }) => hamIsOn ? '#FFE9B1' : "#112B3C"}; 
        }
    }
`;


const Li = styled.li`
    text-decoration: none;
    padding-left: 60px;
    ::after {
        content: '';
        display: block;
        width: 0;
        height: 3px;
        background: black;
        transition: width .2s;
    }
    :hover::after {
        width: 100%;
        transition: width .6s;
    }
`