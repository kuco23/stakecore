import React from 'react'
import { Link } from 'react-router-dom'
import { RiDownloadLine } from '@remixicon/react'
import SlideUp from '../../utlits/animations/slideUp'
import { ValidatorNodeLink, DelegationAddressLink } from '../utils/links'


const CallToAction = () => {
    return (
        <section className="call-to-action-area">
            <div className="container">
                <div className="row">
                    {/* <!-- START ABOUT TEXT DESIGN AREA --> */}
                    <div className="col-lg-12">
                        <SlideUp>
                            <div className="about-content-part call-to-action-part text-center">
                                <h2>Want to put your FLR to work and stake or delegate with us?</h2>
                                <p>Go to <Link to="https://portal.flare.network/staking">portal.flare.network</Link>{' '}
                                and stake FLR to Node Id {' '} <ValidatorNodeLink /> or delegate WFLR to address {' '} <DelegationAddressLink />.
                                </p>
                                <div className="hero-btns">
                                    <Link to="/contact" className="theme-btn">Delegate  <i><RiDownloadLine size={16} /></i></Link>
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

export default CallToAction