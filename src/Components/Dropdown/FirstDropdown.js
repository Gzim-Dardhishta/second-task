
import React, { useState } from 'react';
import Data from './FirstData';
import styled from 'styled-components';
import {IoIosArrowDown, IoIosArrowUp} from 'react-icons/io';

const FirstDropdown = () => {

    const AccordionSection = styled.div`
        background: #fff;
        border: 2px solid #d3d3d3d3;
        border-radius: 10px;
        width: 80%;
        margin: auto;
    `;

    const Wrap = styled.div`
        display: flex;
        justify-content: space-between;
        align-items: center;
        text-align: start;
        cursor: pointer;
        h1{
            padding: 2rem;
            font-size: 1.5rem;
        }
        span {
            position: absolute;
            right: 190px;
            font-size: 1.5em;
        }
    `;

    const Dropdown = styled.div`
        p {
            border-top: 1px solid #d3d3d3d3;
            width: 90%;
            margin: auto;
            padding: 20px 30px;
        }
    `;

    
    const [clicked, setClicked] = useState(false);
    const toggle = index => {
        if(clicked === index) {
            return setClicked(null);
        }
        setClicked(index);
    }
    
  return (
    <AccordionSection>
        {Data.map((item, index) => (
            <div>
                <Wrap onClick={() => toggle(index)} key={index}>
                    <h1>{ item.question }</h1>
                    <span>{ clicked === index ? <IoIosArrowUp/> : <IoIosArrowDown/>}</span>
                </Wrap>
                { clicked === index ? (
                    <Dropdown>
                        <p>{ item.answer }</p>
                    </Dropdown>
                ) : null}
            </div>
        ))}
    </AccordionSection>
  )
}

export default FirstDropdown;