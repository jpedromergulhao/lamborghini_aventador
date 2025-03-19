import React from "react";
import "./Footer.css";
import instagram from '../../assets/instagram.png';
import threads from '../../assets/threads.png';
import facebook from '../../assets/facebook.png';
import youtube from '../../assets/youtube.png';
import twitter from '../../assets/twitter.png';
import tiktok from '../../assets/tik-tok.png';
import linkedIn from '../../assets/linkedin.png';

function Footer() {
    return (
        <footer>
            <div className="linksContainer">
                <div className="links">
                    <a href="https://www.lamborghini.com/en-en/company#val-tab" target="_blank" rel="noopener noreferrer">COMPANY</a>
                    <a href="https://www.lamborghini.com/en-en/financials" target="_blank" rel="noopener noreferrer">FINANCIALS</a>
                    <a href="https://www.lamborghini.com/en-en/careers" target="_blank" rel="noopener noreferrer">CAREERS</a>
                    <a href="https://www.lamborghini.com/en-en/contact-us" target="_blank" rel="noopener noreferrer">CONTACT US</a>
                    <a href="https://www.lamborghini.com/en-en/sustainability" target="_blank" rel="noopener noreferrer">SUSTAINABILITY</a>
                    <a href="https://media.lamborghini.com/english" target="_blank" rel="noopener noreferrer">MEDIA CENTER</a>
                    <a href="https://www.lamborghini.com/en-en/privacy-legal" target="_blank" rel="noopener noreferrer">PRIVACY & LEGAL</a>
                    <a href="https://www.lamborghini.com/en-en/sitemap" target="_blank" rel="noopener noreferrer">SITE MAP</a>
                    <a href="https://newsletter.lamborghini.com/en" target="_blank" rel="noopener noreferrer">NEWSLETTER</a>
                    <a href="https://www.lamborghini.com/en-en/accessibility" target="_blank" rel="noopener noreferrer">ACCESSIBILITY</a>
                </div>

                <div className="socialMedia">
                    <a href="https://www.instagram.com/lamborghini/?hl=en" target="_blak" rel="noopener noreferrer">
                        <img className="icons" src={instagram} alt="instagram" loading="lazy" />
                    </a>
                    <a href="https://www.threads.net/@lamborghini" target="_blak" rel="noopener noreferrer">
                        <img className="icons" src={threads} alt="threads" loading="lazy" />
                    </a>
                    <a href="https://www.facebook.com/Lamborghini/" target="_blak" rel="noopener noreferrer">
                        <img className="icons" src={facebook} alt="facebook" loading="lazy" />
                    </a>
                    <a href="https://www.youtube.com/channel/UC9DXZC8BCDOW6pYAQKgozqw" target="_blak" rel="noopener noreferrer">
                        <img className="icons" src={youtube} alt="youtube" loading="lazy" />
                    </a>
                    <a href="https://twitter.com/Lamborghini" target="_blak" rel="noopener noreferrer">
                        <img className="icons" src={twitter} alt="twitter" loading="lazy" />
                    </a>
                    <a href="https://www.tiktok.com/@lamborghini?lang=en" target="_blak" rel="noopener noreferrer">
                        <img className="icons" src={tiktok} alt="tiktok" loading="lazy" />
                    </a>
                    <a href="https://www.linkedin.com/company/automobili-lamborghini-s-p-a-" target="_blak" rel="noopener noreferrer">
                        <img className="icons" src={linkedIn} alt="linkedIn" loading="lazy" />
                    </a>
                </div>
            </div>

            <p>
                Copyright © 2025 Automobili Lamborghini S.p.A. a company with sole shareholder subject to the management and coordination of AUDI AG.
                All rights reserved. VAT no. IT 00591801204
            </p>

            <div>
                Icons from
                <a href="https://www.flaticon.com/" title="Flaticon" rel="noopener noreferrer"> www.flaticon.com'</a>
            </div>

        </footer>
    )
}

export default Footer;