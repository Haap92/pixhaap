import React from 'react';
import "./footer.scss"
import logo from "../../../src/assets/img/logo.png";
import GH from "../../../src/assets/img/GH.png";
import LI from "../../../src/assets/img/LI.png";

const Footer = () => {
    return(
        
        <footer className='footRow'>
            <section className='footColumn'>
                        
                <div className='footSocialRow'>
                    <a href='https://github.com/Haap92' rel='noreferrer' target="_blank" ><img className='logoGH' src={GH} alt="Github Haap92" />
                    </a>
                    <a href='https://www.linkedin.com/in/hernanarismendi/' rel='noreferrer' target="_blank" ><img className='logoLI' src={LI} alt="Roloi" />
                    </a> 
                </div>
            </section>
            <section className='center'>
                <div  className='logo'>
                    <img src={logo} alt="Roloi" />
                </div> 
            </section>
            <section className='footSearch'>
                <div>
                    <form className='footSearching'>
                        <h3>Subscribe to our Newsletter!!</h3>
                        <div className='searchRow'>
                            <div className='formSearching'>        
                                <input
                                    type="e_mail"
                                    placeholder="Your Email"
                                />
                            </div>
                            <button className='GO'>
                                GO
                            </button>
                        </div>
                    </form>
                </div>
                <div className='legal'>
                    Copyright 2022. All Rights Reserved
                </div>
            </section>
        </footer>

    )
}

export default Footer