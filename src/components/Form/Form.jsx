import React, { useEffect, useState } from 'react'
import {useForm} from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

import 'aos/dist/aos.css'

import './Form.css'

function Form(props) {
    
    const [form,setForm] = useState({})
    const [isSubmit,setIsSubmit] = useState(false)

    const onSubmit = data => {
        setForm(data)
        setIsSubmit(true)
        props.setIsSuccess(true)
    };

    const schema = yup.object({
        donation : yup.number().required().min(10),
        email : yup.string().email().required(),
        fullname : yup.string().matches(/^[a-zA-Z\s]+$/,"Name is Alphabet Only").required(),
        nric : yup.string().required().matches(/^[TFSG]\d{7}[A-Z]$/,"Invalid NRIC"),
        address : yup.string().min(10).max(60),
        phone_number : yup.string().min(10).matches(/^(08\d{8,12}$|\+62\d{7,11}$)/,"Invalid Phone Number")
        
    })

    const { register,watch,handleSubmit, formState:{ errors } } = useForm({
        resolver: yupResolver(schema)
      });

    useEffect(() => {
        console.log(form)
        console.log(errors)
    },[form,errors])

    let input = watch()

    console.log(isSubmit)

    return (
        <div id="form" data-aos="fade-left" className="form_wrapper">
            <h2>Donation Form</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="separator">
                    <div className="input_packing">
                        <p>Donation Amount</p>
                        <input type="number" placeholder="Donation" min={10} {...register("donation")}/>
                        <p>{input.donation || isSubmit ? errors.donation?.message : null}</p>
                    </div>
                    <div className="input_packing">
                        <p>Email Address</p>
                        <input type="email" placeholder="Email" {...register("email")}/>
                        <p>{input.email || isSubmit ? errors.email?.message : null}</p>
                    </div>
                </div>

                <div className="separator">
                    <div className="input_packing">
                        <p>Full Name</p>
                        <input type="text" placeholder="Full Name" {...register("fullname")}/>
                        <p>{input.fullName || isSubmit ? errors.fullname?.message : null}</p>
                    </div>
                    <div className="input_packing">
                        <p>NRIC</p>
                        <input type="text" placeholder="NRIC" {...register("nric")}/>
                        <p>{input.nric || isSubmit ? errors.nric?.message : null}</p>
                    </div>
                </div>
                
                <div className="input_packing_2">
                    <p>Phone Number</p>
                    <input type="text" placeholder="Phone Number" {...register("phoneNumber")}/>
                    <p>{input.phoneNumber || isSubmit ? errors.phone_number?.message : null}</p>
                </div>

                <div className="input_packing_3">
                    <p>Address</p>
                    <textarea type="text" placeholder="Address" {...register("address")}/>
                    <p>{input.address || isSubmit ? errors.address?.message : null}</p>
                </div>
                
                <div className="flex-center">
                    <button type="submit" value="Submit" onClick={() => setIsSubmit(true)}>Submit Donation</button>
                </div>
            </form>
        </div>
    )
}

export default Form