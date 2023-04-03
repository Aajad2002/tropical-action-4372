import React, { useState } from 'react'
// import { auth } from './firebase';
import { auth } from './firbase';
import axios from "axios"
import OtpInput from "otp-input-react"
import { RecaptchaVerifier, signInWithPhoneNumber, } from 'firebase/auth';
import { Box, Button, Input, PinInput, PinInputField, Text } from '@chakra-ui/react';

import { useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Toaster, toast } from "react-hot-toast"
import Swal from 'sweetalert2'
import { async } from '@firebase/util';

export const Login = () => {
    const [ph, setph] = useState("")
    const [user, setuser] = useState("")
    const [otp, setotp] = useState("")
   

    const [change2, setchange2] = useState(true)


    ///
    const navigate = useNavigate()
 
const locatiion=useLocation()


   





    function onCatchVerify() {
        if (!window.recaptchaVerifier) {
            window.recaptchaVerifier = new RecaptchaVerifier('recaptcha-container', {
                'size': 'invisible',
                'callback': (response) => {

                    onSingup()
                },
                'expired-callback': () => {

                }
            }, auth);
        }
    }


    const onSingup = () => {
        onCatchVerify()
        setchange2(!change2)
        const appVerifier = window.recaptchaVerifier;

        const phoneformat = "+91" + ph

        signInWithPhoneNumber(auth, phoneformat, appVerifier)
            .then((confirmationResult) => {

                window.confirmationResult = confirmationResult;

                toast.success('Otp Send Successfully')

            }).catch((error) => {
                console.log(error)
            });
    }
    const wrongalert = async () => {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: "Wrong Otp",

        })
    }


    function onOtpVerify() {
        window.confirmationResult.confirm(otp).then(async (result) => {

            setuser(result.user)
            localStorage.setItem("isAuth",true)  
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Login Successful',
                showConfirmButton: false,
                timer: 1500
            })
            // navigate(location.state,{replace:true})
        }).catch((error) => {
            wrongalert()
        });
    }

    return (

        <>

            <div>


                <Box>
                    <Toaster toastOptions={{ duration: 900 }} />
                    <Box id="recaptcha-container" > </Box>

                    {change2 ? <Box w={"40%"}  margin={"auto"}>  <Input w={"100%"} mt={"3%"} type="number" placeholder='Enter Mobile Number' value={ph} onChange={(e) => setph(e.target.value)} />
                        <Button color="white" bg={"#721f1f"} w={"100%"} mt={"3%"} onClick={onSingup}>Send otp</Button> </Box> :
                        <Box style={{ width: "40%", margin: "auto", marginTop: "5%" }} >
                            <div style={{ width: "100%",display:"block", margin: "auto", marginLeft: "27%" }} >

                                <OtpInput
                                    value={otp}
                                    onChange={setotp}
                                    OTPLength={6}
                                    otpType="number"
                                    disabled={false}
                                    color="#333"
                                    inputStyles={{ border: "1px solid black", width: "30px" ,height:"30px", marginBottom: "3%" }}
                                    autofocus
                                ></OtpInput>
                            </div>

                            <Button w={"30%"} margin={"auto"} style={{display:"block"}} color="white" bg={"#721f1f"} onClick={onOtpVerify}>Verify</Button>
                        </Box>
                    }


                </Box>

                
               
            </div>

        </>
    )
}


