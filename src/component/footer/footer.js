import React, {useState} from 'react';
import './footer.css'
import useMediaQuery from "@mui/material/useMediaQuery";

const Footer = () => {
    const [initialState, setInitialState] = useState()
    const mediaQuery = useMediaQuery('(max-width:750px)');
    return (
        <>
            <footer className="footer-section"  >
                <div className="container">
                    <div className="footer-cta pt-5 pb-5">
                        <div className="row footer_info_container">
                            <div className="col-xl-4 col-md-4 mb-30">
                                <div className="single-cta">
                                    <i className="fas fa-map-marker-alt"></i>
                                    <div className="cta-text">
                                        <h4>Location</h4>
                                        <span><a href="https://maps.app.goo.gl/B2r4h8UkeUD1mgFL7">улица Махтумкули 1, Тоshkent</a></span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-md-4 mb-30">
                                <div className="single-cta">
                                    <i className="fas fa-phone"></i>
                                    <div className="cta-text">
                                        <h4>Tell number</h4>
                                        <span><a href="tel:+998998002425">+998 99 800 24 25</a></span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-md-4 mb-30">
                                <div className="single-cta">
                                    <i className="far fa-envelope-open"></i>
                                    <div className="cta-text">
                                        <h4>Email</h4>
                                        <span><a href="mailto:office@thompsonwindowfilm.com">office@thompsonwindowfilm.com</a></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer-content pt-5 pb-5" style={{marginBottom:"100px"}}>
                        <div className="row">
                            <div className="col-xl-4 col-lg-4 mb-50">
                                <div className="footer-widget">
                                    <div className="footer-logo">

                                    </div>
                                    <div className="footer-text" style={{marginBottom: '30px'}}>
                                        {mediaQuery ? <iframe
                                            style={{border: "none"}}
                                            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2722.210328317328!2d69.3203425582207!3d41.30447959544493!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDHCsDE4JzE2LjMiTiA2OcKwMTknMTQuOCJF!5e0!3m2!1sru!2s!4v1719059142313!5m2!1sru!2s"
                                            width="100%" height="200px" allowFullScreen="" loading="lazy"
                                            referrerPolicy="no-referrer-when-downgrade"></iframe>
                                        :
                                            <iframe
                                                style={{border: "none"}}
                                                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2722.210328317328!2d69.3203425582207!3d41.30447959544493!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDHCsDE4JzE2LjMiTiA2OcKwMTknMTQuOCJF!5e0!3m2!1sru!2s!4v1719059142313!5m2!1sru!2s"
                                                width="100%" height="450" allowFullScreen="" loading="lazy"
                                                referrerPolicy="no-referrer-when-downgrade"></iframe>
                                        }

                                    </div>
                                    {/*<div className="footer-social-icon">*/}
                                    {/*    <span>Follow us</span>*/}
                                    {/*    <a href="#"><i className="fab fa-facebook-f facebook-bg"></i></a>*/}
                                    {/*    <a href="#"><i className="fab fa-twitter twitter-bg"></i></a>*/}
                                    {/*    <a href="#"><i className="fab fa-google-plus-g google-bg"></i></a>*/}
                                    {/*</div>*/}
                                </div>
                            </div>
                            {/*<div className="col-xl-4 col-lg-4 col-md-6 mb-30">*/}
                            {/*    <div className="footer-widget">*/}
                            {/*        <div className="footer-widget-heading">*/}
                            {/*            <h3>Useful Links</h3>*/}
                            {/*        </div>*/}
                            {/*        <ul>*/}
                            {/*            <li><a href="#">Home</a></li>*/}
                            {/*            <li><a href="#">about</a></li>*/}
                            {/*            <li><a href="#">services</a></li>*/}
                            {/*            <li><a href="#">portfolio</a></li>*/}
                            {/*            <li><a href="#">Contact</a></li>*/}
                            {/*            <li><a href="#">About us</a></li>*/}
                            {/*            <li><a href="#">Our Services</a></li>*/}
                            {/*            <li><a href="#">Expert Team</a></li>*/}
                            {/*            <li><a href="#">Contact us</a></li>*/}
                            {/*            <li><a href="#">Latest News</a></li>*/}
                            {/*        </ul>*/}
                            {/*    </div>*/}
                            {/*</div>*/}
                            {/*<div className="col-xl-4 col-lg-4 col-md-6 mb-50" style={{marginBottom: "50px"}}>*/}
                            {/*    <div className="footer-widget">*/}
                            {/*        <div className="footer-widget-heading">*/}
                            {/*            <h3>Subscribe</h3>*/}
                            {/*        </div>*/}
                            {/*        <div className="footer-text mb-25">*/}
                            {/*            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus*/}
                            {/*                accusantium aspernatur aut culpa cupiditate id illo ipsam ipsum molestiae*/}
                            {/*                mollitia!</p>*/}
                            {/*        </div>*/}
                            {/*        <div className="subscribe-form">*/}
                            {/*            <form action="#">*/}
                            {/*                <input type="tell" placeholder="Tell number"*/}
                            {/*                       value={initialState?.contacts}*/}
                            {/*                       onChange={e => {*/}
                            {/*                           const formattedValue = e.target.value.replace(/\D/g, ''); // faqat raqamlarni qabul qilish*/}
                            {/*                           let formattedNumber = '+998';*/}
                            {/*                           if (formattedValue.length > 3) {*/}
                            {/*                               formattedNumber += ' ' + formattedValue.substring(3, 5);*/}
                            {/*                           }*/}
                            {/*                           if (formattedValue.length > 5) {*/}
                            {/*                               formattedNumber += ' ' + formattedValue.substring(5, 8);*/}
                            {/*                           }*/}
                            {/*                           if (formattedValue.length > 8) {*/}
                            {/*                               formattedNumber += ' ' + formattedValue.substring(8, 10);*/}
                            {/*                           }*/}
                            {/*                           if (formattedValue.length > 10) {*/}
                            {/*                               formattedNumber += ' ' + formattedValue.substring(10, 12);*/}
                            {/*                           }*/}
                            {/*                           setInitialState({...initialState, contacts: formattedNumber});*/}
                            {/*                       }}/>*/}
                            {/*                <button><i className="fab fa-telegram-plane"></i></button>*/}
                            {/*            </form>*/}
                            {/*        </div>*/}
                            {/*    </div>*/}
                            {/*</div>*/}
                        </div>
                    </div>
                </div>
                {/*<div className="copyright-area">*/}
                {/*    <div className="container">*/}
                {/*        <div className="row">*/}

                {/*        </div>*/}
                {/*    </div>*/}
                {/*</div>*/}
            </footer>
        </>
    );
};

export default Footer;