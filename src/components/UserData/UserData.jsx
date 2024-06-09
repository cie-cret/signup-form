import React from 'react'
import './UserData.css'
import { useForm } from 'react-hook-form';
import { DevTool } from '@hookform/devtools';
import { ErrorMessage } from '@hookform/error-message';
import ErrorIcon from '@mui/icons-material/Error';
import { TextField, Button } from '@mui/material';

const UserData = () => {

    const { 
        control, 
        register, 
        handleSubmit, 
        setError, 
        formState: { errors }, 
    } = useForm({
        criteriaMode: "all",
    });
    
    const onSubmit = (data) => console.log(data)

    // React.useEffect(() => {
    //     setError("fName", {
    //         types: {
    //             required: "First Name cannot be empty",
    //         },   
    //     })
    // }, [setError])

    return (

        <div>
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
            <div className="blank-box">
                
                <input
                    type="text"
                    id="userFName"
                    placeholder='First Name'
                    {...register("fName", { 
                        required: "First Name cannot be empty",
                        pattern: {
                            value: /^[a-zA-Z].{1,}$/,
                            message: "Looks like this is not a first name",
                        } })} />
                    <ErrorMessage
                        errors={errors}
                        name="fName"
                        render={({ messages }) => {
                            return messages? Object.entries(messages).map(([type, message]) => (
                                <span key={type} className='error-empty'>{message}</span>
                            ))
                        : null;
                        }}
                    />
                
                <input
                    type="text"
                    id="userLName"
                    placeholder='Last Name'
                    {...register("lName", { 
                        required: "Last Name cannot be empty", 
                        pattern: {
                            value: /^[a-zA-Z].{1,}$/,
                            message: "Looks like this is not a last name"
                        }
                        })} 
                    />
                    <ErrorMessage
                        errors={errors}
                        name="lName"
                        render={({ messages }) => {
                            return messages? Object.entries(messages).map(([type, message]) => (
                                <span key={type} className='error-empty'>{message}</span>
                            ))
                        : null;
                        }}
                    />

                <input
                    type="text"
                    id="userEmail"
                    placeholder='Email Address'
                    {...register("email", { 
                        required: "Email cannot be empty", 
                        pattern: {
                            value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/,
                            message: "Looks like this is not an email"
                        } 
                        })} 
                    />
                    <ErrorMessage
                        errors={errors}
                        name="email"
                        render={({ messages }) => {
                            return messages? Object.entries(messages).map(([type, message]) => ( // What is Object.entries??? REVISE!
                                <span key={type} className='error-empty'>{message}</span>
                            ))
                        : null;
                        }}
                    />
                
                <input
                    type="password"
                    id="userPassword"
                    placeholder='Password'
                    {...register("password", { 
                        required: "Password cannot be empty",
                        pattern: {
                            value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,}$/,
                            message: "Password must contain at least 8 characters with a number and an uppercase"
                        }
                     })} />
                    <ErrorMessage
                        errors={errors}
                        name="password"
                        render={({ messages }) => {
                            return messages? Object.entries(messages).map(([type, message]) => (
                                <span key={type} className='error-empty'>{message}</span>
                            ))
                        : null;
                        }}
                    />
            </div>

            <div className="claim-button">
                <button 
                    className="green-button button-text" 
                    type='submit'
                >
                    CLAIM YOUR FREE TRIAL</button>
            </div>

            <div className="flexCenter footer">
                <p>By clicking the button, you are agreeing to our <span><a href='$'>Terms and Services</a></span></p>
            </div>
        </form>
        {/* <DevTool control={control} /> */}
        </div>
    )
}

export default UserData;