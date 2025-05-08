import { Link } from 'react-router-dom'
import Marquee from "react-fast-marquee"
import { RiGithubLine, RiTwitterXLine } from '@remixicon/react'
import { DelegationAddressLink, ValidatorNodeLink } from '../utils/links'
import profile from "../../assets/images/about/profile.svg"
import partner1 from "../../assets/images/client-logos/partner1.png"
import partner2 from "../../assets/images/client-logos/partner2.png"
import partner3 from "../../assets/images/client-logos/partner3.png"
import partner4 from "../../assets/images/client-logos/partner4.png"
import partner5 from "../../assets/images/client-logos/partner5.png"
import partner6 from "../../assets/images/client-logos/partner6.png"
import partner7 from "../../assets/images/client-logos/partner7.png"
import partner8 from "../../assets/images/client-logos/partner8.png"
import partner9 from "../../assets/images/client-logos/partner9.png"
import partner10 from "../../assets/images/client-logos/partner10.png"
import partner11 from "../../assets/images/client-logos/partner11.png"
import partner12 from "../../assets/images/client-logos/partner12.png"
import partner13 from "../../assets/images/client-logos/partner13.png"
import partner14 from "../../assets/images/client-logos/partner14.png"
import partner15 from "../../assets/images/client-logos/partner15.png"
import partner16 from "../../assets/images/client-logos/partner16.png"
import partner17 from "../../assets/images/client-logos/partner17.png"
import SlideUp from '../../utlits/animations/slideUp'


const Hero = () => {
    return (
        <section id="about" className="about-area">
            <div className="container">
                <div className="row">
                    {/* <!-- START ABOUT IMAGE DESIGN AREA --> */}
                    <div className="col-lg-4">
                        <SlideUp>
                            <div className="about-image-part">
                                <img src={profile} alt="About Me" />
                                <p style={{marginTop: 30, marginBottom: 40}}>Flare network validator, FTSO and FDC provider.
                                    Put your FLR to work by staking and delegating with us!</p>
                                <div className="about-social text-center">
                                    <ul>
                                        {/* <li><Link to=""><RiFacebookCircleFill size={20} /></Link></li> */}
                                        <li><Link target="_blank" to="https://x.com/stake_core"><RiTwitterXLine size={20} /></Link></li>
                                        {/* <li><Link to=""><RiLinkedinFill size={20} /></Link></li> */}
                                        <li><Link target="_blank" to="https://github.com/Stakecore"><RiGithubLine size={20} /></Link></li>
                                    </ul>
                                </div>
                            </div>
                        </SlideUp>
                    </div>
                    {/* <!-- / END ABOUT IMAGE DESIGN AREA -->
                    <!-- START ABOUT TEXT DESIGN AREA --> */}
                    <div className="col-lg-8">
                        <SlideUp>
                            <div className="about-content-part">
                                <p>Who are we?</p>
                                <h3>
                                    An infrastructure provider group that recognizes the importance of providing
                                    reliable data to an oracle-based chain.
                                </h3>
                                <div className="adress-field">
                                    <ul>
                                        <li className='d-flex align-items-center'>
                                            stake to our validator node {'\u00A0'} <ValidatorNodeLink />
                                        </li>
                                        <li className='d-flex align-items-center'>
                                            delegate to our address {'\u00A0'} <DelegationAddressLink />
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </SlideUp>
                        <SlideUp>
                            <div className="about-content-part-bottom">
                                <h2>Tokens we're providing prices for</h2>
                                <div className="company-list">
                                    <div className="scroller">
                                        <div className="scroller__inner">
                                            <Marquee>
                                                <img src={partner1} alt="" />
                                                <img src={partner2} alt="" />
                                                <img src={partner3} alt="" />
                                                <img src={partner4} alt="" />
                                                <img src={partner5} alt="" />
                                                <img src={partner6} alt="" />
                                                <img src={partner7} alt="" />
                                                <img src={partner8} alt="" />
                                                <img src={partner9} alt="" />
                                                <img src={partner10} alt="" />
                                                <img src={partner11} alt="" />
                                                <img src={partner12} alt="" />
                                                <img src={partner13} alt="" />
                                                <img src={partner14} alt="" />
                                                <img src={partner15} alt="" />
                                                <img src={partner16} alt="" />
                                                <img src={partner17} alt="" />
                                            </Marquee>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SlideUp>
                    </div>
                    {/* <!-- / END ABOUT TEXT DESIGN AREA --> */}
                </div>
            </div>
        </section>
    )
}

export default Hero