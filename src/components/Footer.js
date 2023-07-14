import React from 'react';

function copyright() {
    const currentYear = new Date().getFullYear();
    return (
        `&copy; ${currentYear} Tyler Montgomery <a href='https://github.com/ArKaes13' <i class="fa-brands fa-github"></a></i>`
    );
};

function Footer() {
    return (
        <footer className='footer'>
            <div className='footerHeader'>
                <h1 className='gradient_text'>Be among the first to step into the future</h1>
            </div>
            <div className='footerButton'>
                <p>Request Early Access</p>
            </div>
            <div className='footerLinksContainer'>
                <div className='footerLogo'>
                    <span>GPT-4</span>
                    <p>1400 Defense Pentagon, Arlington, VA 20301</p>
                </div>
                <div className='footerLinks'>
                    <h4>Links</h4>
                    <p>Overons</p>
                    <p>Social Media</p>
                    <p>Counters</p>
                    <p>Contact</p>
                </div>
                <div className='footerLinks'>
                    <h4>Company</h4>
                    <p>Terms & Conditions</p>
                    <p>Privacy Policy</p>
                    <p>Mission</p>
                </div>
                <div className='footerLinks'>
                    <h4>Get in touch</h4>
                    <p>1400 Defense Pentagon PO Box 3200, Arlington, VA</p>
                    <p>085-132567</p>
                    <p>info@payment.net</p>
                </div>
            </div>
            <div className='copyright'>
                <p dangerouslySetInnerHTML={{ __html: copyright() }}></p>
            </div>
        </footer>
    )
}

export default Footer;