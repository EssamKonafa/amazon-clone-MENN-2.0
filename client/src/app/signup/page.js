'use client'
import React from 'react'
import { register } from '../../services/auth'
import Image from 'next/image'
import logo from '../signup/logo.png'
import * as Yup from 'yup'
import { useFormik } from "formik"
import { useNavigate } from "react-router-dom";
import { useRouter } from 'next/navigation'

function page() {

    const router = useRouter();

    const validationSchema = Yup.object({
        name: Yup.string().required('Enter your name'),
        email: Yup.string().required('Enter your email or mobile phone number'),
        password: Yup.string().required('Minimum 6 characters required'),
        reEnterPassword: Yup.string().required('type your password again')
    })

    const onSubmit = async (values) => {
        try {
            await register(values)
            router.push('/signin');
            // console.log('Registration successful');
        } catch (err) {
            console.error(err);
        }
    }

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            // phoneNumber:'',
            password: '',
            reEnterPassword: '',
        },
        validationSchema: validationSchema,
        onSubmit: onSubmit,
    })

    return (
        <>
            <div className='max-w-md mx-auto'>
                <Image
                    className='mx-auto m-4'
                    src={logo}
                    alt='logo'
                    width={100}
                    height={30}
                    onClick={() => router.push('/')}
                />

                <form onSubmit={formik.handleSubmit}>
                    <div className='border bg-white rounded-md p-4 '>
                        <h1 className='font-bold mb-3 text-xl'>Create account</h1>

                        <div className='mb-2'>
                            <label htmlFor='CAccount' className='block font-bold text-sm mb-1'>Your name</label>
                            <input
                                className='border rounded w-full py-1 px-3 focus:outline-none focus:shadow-outline '
                                type='text'
                                id='CAccount'
                                placeholder='First and last name'
                                {...formik.getFieldProps('name')}
                            />
                            <div className='text-red-500 text-xs mt-1'>
                                {formik.touched.name && formik.errors.name}
                            </div>
                        </div>

                        <div className='mb-2'>
                            <label htmlFor='MN' className='block font-bold text-sm mb-1'>Mobile number or email</label>
                            <input
                                className='border rounded w-full py-1 px-3 focus:outline-none focus:shadow-outline '
                                type='text'
                                id='MN'
                                {...formik.getFieldProps('email')}
                            />
                            <div className='text-red-500 text-xs mt-1'>
                                {formik.touched.email && formik.errors.email}
                            </div>
                        </div>

                        <div className='mb-2'>
                            <label htmlFor='PW' className='block font-bold text-sm mb-1'>Password</label>
                            <input
                                className='border rounded w-full py-1 px-3 focus:outline-none focus:shadow-outline '
                                type='password'
                                id='PW'
                                placeholder='At least 6 characters'
                                {...formik.getFieldProps('password')}
                            />
                            <div className='text-red-500 text-xs mt-1'>
                                {formik.touched.password && formik.errors.password}
                            </div>
                        </div>

                        <div className='mb-2'>
                            <label htmlFor='RPW' className='block font-bold text-sm mb-1'>Re-enter password</label>
                            <input
                                className='border rounded w-full py-1 px-3 focus:outline-none focus:shadow-outline '
                                type='password'
                                id='RPW'
                                {...formik.getFieldProps('reEnterPassword')}
                            />
                            <div className='text-red-500 text-xs mt-1'>
                                {formik.touched.reEnterPassword && formik.errors.reEnterPassword}
                            </div>
                        </div>

                        <button className='bg-amber-300 rounded p-1.5 w-full' type='submit'>Continue</button>

                        <p>
                            By creating an account, you agree to Amazon's Conditions of Use and Privacy Notice.
                        </p>

                        <hr className='border' />

                        <div>
                            Already have an account? Sign in
                        </div>

                        <div>
                            Buying for work? Create a free business account
                        </div>
                    </div>
                </form>
            </div>

            <div className='footer border-t text-center'>
                <span> Conditions of Use </span>
                <span> Privacy Notice </span>
                <span> help </span>
                <p>© 1996-2023, Amazon.com, Inc. or its affiliates</p>
            </div>
        </>
    )
}

export default page