import { useRef, useState } from 'react'
import styles from './Form.module.css'
import { Col, Row } from 'react-bootstrap'
import InputField from './InputField'
import TextareaField from './TextareaField'
import Button from '../../../button/Button'
import emailjs from '@emailjs/browser';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'

import Swal from 'sweetalert2'



export default function Form() {
    const form = useRef();

    const [formData, setFormData] = useState({
        con_name: '',
        con_email: '',
        con_sub: '',
        con_message: '',
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData((prev) => {
            return {
                ...prev,
                [name]: value
            }
        })
    }





    const submitForm = (e) => {
        const { con_name, con_email, con_sub, con_message } = formData
        e.preventDefault()
        if (con_name && con_email && con_sub && con_message) {
            // console.log(formData)

            // sweetalert2 auto close ============
            let timerInterval;
            Swal.fire({
                title: "Your data is processing!",
                html: "it will close in <b></b> milliseconds.",
                timer: 2000,
                timerProgressBar: true,
                didOpen: () => {
                    Swal.showLoading();
                    const timer = Swal.getPopup().querySelector("b");
                    timerInterval = setInterval(() => {
                        timer.textContent = `${Swal.getTimerLeft()}`;
                    }, 50);
                },
                willClose: () => {
                    clearInterval(timerInterval);
                }
            }).then((result) => {
                /* Read more about handling dismissals below */
                if (result.dismiss === Swal.DismissReason.timer) {
                    // console.log("I was closed by the timer");
                }
            });


            // emailjs ============
            emailjs
                .sendForm('service_iax1nsc', 'template_avme1ip', form.current, {
                    publicKey: 'a7nGRREp1nYLVAeCL',
                })
                .then(
                    () => {
                        // console.log('SUCCESS!');

                        // sweetalert2 ============
                        Swal.fire({
                            title: "Good job!",
                            text: "Your message sent successfully!",
                            icon: "success",
                            showConfirmButton: false,
                            timer: 3000
                        });
                    },
                    (error) => {
                        Swal.fire({
                            icon: "error",
                            title: "Oops...",
                            text: "Email sent faild! please check all",
                        });
                        // console.log('FAILED...', error.text);
                    },
                );





        } else {
            // alert('Please field the data')

            // sweetalert2 ============
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Please field the data",
            });
            // console.log(e.target.name)

        }
    }
    return (
        <form ref={form} onSubmit={submitForm} className={`${styles.contactForm} top_60`} method="POST" >
            <Row>
                <Col md={6}>
                    <InputField
                        id="con_name"
                        name="con_name"
                        className={`${styles.formInp} requie`}
                        type="text"
                        placeholder="Name"
                        onChange={handleChange}
                    />
                </Col>
                <Col md={6}>
                    <InputField
                        id="con_email"
                        name="con_email"
                        className={`${styles.formInp} requie`}
                        type="text"
                        placeholder="Email"
                        onChange={handleChange}
                    />
                </Col>
                <Col md={12}>
                    <InputField
                        id="con_sub"
                        name="con_sub"
                        className={`${styles.formInp} requie`}
                        type="text"
                        placeholder="Subject"
                        onChange={handleChange}
                    />
                </Col>
                <Col md={12}>
                    <TextareaField
                        name="con_message"
                        id="con_message"
                        className="requie"
                        placeholder="How can I help you?"
                        rows="8"
                        onChange={handleChange}
                    />

                    <Button id="con_submit"
                        className={`${styles.sitebtn} top_30`}
                        type="submit">
                        Submit

                        <FontAwesomeIcon icon={faAngleRight} className={`${styles.icon}`} />
                    </Button>
                </Col>

            </Row>
        </form>
    )
}
