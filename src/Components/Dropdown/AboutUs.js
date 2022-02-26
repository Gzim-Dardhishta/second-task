import React, { useState } from 'react';
import { BsPersonCircle } from 'react-icons/bs';
import {IoIosArrowDown, IoIosArrowUp, IoIosArrowForward} from 'react-icons/io';
import "./about.css";

function AboutUs() {

    const [about, setAbout] = useState([
        {
            icon: <BsPersonCircle/>,
            title: 'About Us',
            articles: '4 articles in this Topic'
        }
    ]);

    const [qa, seQA] = useState([
        {
            question: 'How does Parkname seperate itself from other domain name parking companies',
            answer: 'Your domains are valuable online property. As in any investment, you want the most efficiet, easy way to make sure your property is going to be profitable. Do ypu own more than 1,000 domains? As a professional domainer, you will find everything you ned thought Parkname to generate maximum profitsfrom your domain portofolio.'
        },
        {
            question: 'Is Parkname Parking free?',
            answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque corporis odit id labore exercitationem quia qui eveniet quos ea fuga, incidunt in? Natus laborum maxime sed repellat tempora? Inventore, corrupti!'
        },
        {
            question: 'What you do?',
            answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque corporis odit id labore exercitationem quia qui eveniet quos ea fuga, incidunt in? Natus laborum maxime sed repellat tempora? Inventore, corrupti!'
        },
        {
            question: 'When was Parkname first founded?',
            answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque corporis odit id labore exercitationem quia qui eveniet quos ea fuga, incidunt in? Natus laborum maxime sed repellat tempora? Inventore, corrupti!'
        },
    ])

    // toggle for About Us --question list
    const [clicked, setClicked] = useState(false);
    const toggle = index => {
        if(clicked === index) {
            return setClicked(null);
        }
        setClicked(index);
    }

    // toogle for answers
    const [qclicked, setQClicked] = useState(false);
    const toggle1 = i => {
        if(qclicked === i) {
            return setQClicked(null);
        }
        setQClicked(i);
    }


  return (
    <div>
        <div className='accordian'>
            {about.map((item, index) => (
                <div>
                    <div className='wrapper' >
                        <div className='about' onClick={() => toggle(index)}>
                            <div className="icon">
                                {item.icon}
                            </div>
                            <div className='about-text'>
                                <h1>{item.title}</h1>
                                <p>{item.articles}</p>
                            </div>
                            <span>{ clicked === index ? <IoIosArrowUp/> : <IoIosArrowDown/> }</span>
                        </div>
                        { clicked === index ? (
                            <div>
                                {qa.map((item, i) => (
                                    <div className='border'>
                                        <div className='question' onClick={() => toggle1(i)}>
                                            <p>{item.question}</p>
                                            <span>{ qclicked === i ? <IoIosArrowUp/> : <IoIosArrowForward/> }</span>
                                        </div>

                                        { qclicked === i ? (
                                            <div className='answer'>
                                                <p>{ item.answer }</p>
                                            </div>
                                        ) : null}
                                    </div>
                                ))}
                            </div>
                        ) : null}

                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default AboutUs;