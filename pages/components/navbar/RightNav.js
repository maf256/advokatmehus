import React from 'react';
import styled from 'styled-components';
import { Data } from '../common/Data';
import Link from 'next/link';


export default function RightNav ({ hamIsOn,selectedLanguage, setSelectedLanguage}) {
    

  return (
    <Ul hamIsOn={hamIsOn}>
    {
        Data.skills.menu[selectedLanguage].map((item, inx) => 
        <li 
            className= "cool-link"
            key={inx}>
            <Link href={item.href}>
            {item.name}
            </Link>
        </li>
        
        )
    }
    </Ul>
  )
}

const Ul = styled.ul`
    a {
        color: #272F3E;
        font-size: 18px;
        font-weight: 600;
        font-stretch: 100%;
    }
    list-style: none;
    display: flex;
    flex-flow: row nowrap; 
    .cool-link {
        display: inline-block;
        text-decoration: none;
        padding-left: 60px;
    }

    .cool-link::after {
        content: '';
        display: block;
        width: 0;
        height: 3px;
        background: black;
        transition: width .2s;
    }

    .cool-link:hover::after {
        width: 100%;
        transition: width .6s;
    }

    @media (max-width: 768px) {
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