import React from 'react'
import { RiMailLine } from '@remixicon/react'
import SlideUp from '../../../utlits/animations/slideUp'
import { DataService } from '../../../backendApi'


const ContactForm = () => {

    async function submitForm(e) {
        e.preventDefault()
        const form = document.getElementById('contactForm')
        const data = Object.fromEntries(new FormData(form).entries())
        const response = await DataService.formControllerSubmitForm(data)
        if (response.status === 200) {
            form.reset()
            document.getElementById('msgSubmit').classList.add('text-success')
            document.getElementById('msgSubmit').innerHTML = "Message Submitted Successfully"
        } else {
            document.getElementById('msgSubmit').classList.add('text-danger')
            document.getElementById('msgSubmit').innerHTML = "Message Submitted Failed"
        }
    }

    return (
        <div className="col-lg-8">
            <SlideUp>
                <div className="contact-form contact-form-area">
                    <form id="contactForm" className="contactForm" name="contactForm">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label htmlFor="name">Full Name</label>
                                    <input type="text" id="name" name="name" className="form-control" placeholder="Steve Milner" required={true} maxLength={25} data-error="Please enter your Name" />
                                    <label htmlFor="name" className="for-icon"><i className="far fa-user"></i></label>
                                    <div className="help-block with-errors"></div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label htmlFor="email">Email Address</label>
                                    <input type="email" id="email" name="email" className="form-control" placeholder="hi@mail.com" required={true} maxLength={35} data-error="Please enter your Email" />
                                    <label htmlFor="email" className="for-icon"><i className="far fa-envelope"></i></label>
                                    <div className="help-block with-errors"></div>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="form-group">
                                    <label htmlFor="message">Your Message</label>
                                    <textarea name="message" id="message" className="form-control" rows="4" placeholder="Write Your message" required={true} maxLength={250} data-error="Please Write your Message"></textarea>
                                    <div className="help-block with-errors"></div>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="form-group mb-0">
                                    <button type="submit" className="theme-btn" onClick={submitForm}>
                                        Send Message <i><RiMailLine size={15} /></i>
                                    </button>
                                    <div id="msgSubmit"></div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </SlideUp>
        </div>
    )
}

export default ContactForm