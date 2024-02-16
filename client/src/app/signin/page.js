'use client'
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import Image from 'next/image'
import logo from '../signup/logo.png'
import { Formik, Form, Field, ErrorMessage } from "formik"
import Cookies from 'js-cookie';

function page() {

    const router = useRouter();
    const [isSignin, setIsSignin] = useState(false)

    const handleSignIn = async (values, { setSubmit, setErrors }) => {
        try {
            const response = await fetch('http://localhost:4000/user/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(values)
            })

            const signedinUser = await response.json()
            const userId = signedinUser.id
            if (response.ok) {
                Cookies.set('userId', userId, { expires: 7 })
                setIsSignin(true)
                router.push('/');
                // console.log('Token:', signedinUser.token);
                console.log(signedinUser);
                // console.log(response);
            } else {
                setErrors({ password: signedinUser.message })
            }

        } catch (error) {
            console.error('error signing in:', error);
        } finally {
            setSubmit(false)
        }

    }

    const handleSignOut = ()=>{
        Cookies.remove('userId')
        setIsSignin(false)
    }

    return (
        <div>
            <Image
                className='mx-auto m-4'
                src={logo}
                alt='logo'
                width={100}
                height={30}
                onClick={() => router.push('/')}
            />
            <Formik
                initialValues={{ email: '', password: '' }}
                validate={(values) => {
                    const errors = {}
                    if (!values.email) {
                        errors.email = 'required'
                    }
                    if (!values.password) {
                        errors.password = 'required'
                    }
                    return errors
                }}
                onSubmit={handleSignIn}
            >
                <div className='max-w-md mx-auto'>


                    <Form >
                        <div className='border bg-white rounded-md p-4 '>
                            <h1 className='font-bold mb-3 text-xl'>Sign in</h1>

                            <div className='mb-2'>
                                <label htmlFor='MN' className='block font-bold text-sm mb-1'>Name or Mobile number or email</label>
                                <Field
                                    className='border rounded w-full py-1 px-3 focus:outline-none focus:shadow-outline '
                                    type='text'
                                    id='MN'
                                    name='email'
                                />
                                <div className='text-red-500 text-xs mt-1'>
                                    <ErrorMessage name='email' />
                                </div>
                            </div>

                            <div className='mb-2'>
                                <label htmlFor='PW' className='block font-bold text-sm mb-1'>Password</label>
                                <Field
                                    className='border rounded w-full py-1 px-3 focus:outline-none focus:shadow-outline '
                                    type='password'
                                    id='PW'
                                    placeholder='At least 6 characters'
                                    name='password'
                                />
                                <div className='text-red-500 text-xs mt-1'>
                                    <ErrorMessage name='password' />
                                </div>
                            </div>

                            <button className='bg-amber-300 rounded p-1.5 w-full' type='submit'>Continue</button>

                            <p>
                                By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.
                            </p>


                            <div>
                                need help ?
                            </div>

                            <hr className='border' />

                            <div>
                                Buying for work? Create a free business account
                            </div>
                        </div>
                    </Form>
                    <p className='text-center'>new to amazon ?</p>
                    <button className='border shadow rounded w-full'>create yor amazon account</button>
                </div>


            </Formik>
            <div className='footer border-t text-center'>
                <span> Conditions of Use </span>
                <span> Privacy Notice </span>
                <span> help </span>
                <p>© 1996-2023, Amazon.com, Inc. or its affiliates</p>
            </div>
            <button onClick={handleSignOut}>Sign Out</button>
        </div>
    )
}

export default page