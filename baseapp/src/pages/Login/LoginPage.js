import React from "react";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import './LoginPage.css'
const LoginPage = ()=>{

    const {login} = useContext(AuthContext);
    const [formData, setFormData] = useState({password: '', username:''});

    const [loading, setLoading] =  useState(false)


    const handleInputChange=(e)=>{
        // Update the corresponding form field value in the state
        setFormData({...formData, [e.target.name]:e.target.value})

    }

    const handleSubmit = async (e)=>{
        e.preventDefault();
        // during the submission, we set the loading to true
        setLoading(true)
        try {
            await login(formData)
            
        } catch (error) {
            console.error("Logging in fails: "+ error);
        }
        setLoading(false)

    }
    return (
        <>
        <form onSubmit={handleSubmit}>
            <input name="username" onChange={ handleInputChange} type="username"
             placeholder="Enter Username" value={formData.username} disabled={loading}></input>


            <input name="password" onChange={ handleInputChange} type="password"
             placeholder="Enter Password" value={formData.password}disabled={loading}></input>

             <>
             {loading && <div className="spinner"></div>}
             </>
            <button type="submit">{ loading?'Logging in ...': 'Login'}</button>
        </form>


        </>
    );
}


export default LoginPage;