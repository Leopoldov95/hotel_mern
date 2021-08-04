import React, { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import '../../styles/Checkout.scss'

const Checkout = () => {
    /* SYNTAX FOR FORM DATA
    const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
    */
    const dispatch = useDispatch();
    const [userDetails, setUserDetails] = useState({
        firstName: '',
        lastName: '',
        email: '',
        confirmEmail: '',
        phone: '',
        paymentType: 'VISA',
        cardNum: '0112358132134558',
    })
    const details = useSelector((state) => state.details);
    console.log(details);
    return (
        <div className='Checkout'>
            <section className='desc'>
            <h1 className="alt-font">DETAILS</h1>
            </section>
            <section className='info'>

            </section>
            <section className='details'>

            </section>
        </div>
    )
}

export default Checkout;