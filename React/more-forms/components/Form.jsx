import React, {useState} from "react";


const Form = () => {
    let [firstName, setFirstName] = useState("");
    let [lastName, setLastName] = useState("");
    let [email, setEmail] = useState("");
    let [password, setPassword] = useState("");
    let [confirmPassword, setConfirmPassword] = useState("");




    return(
        <div className="container">
            <form>
                <div className="form-group">
                    <label>First Name </label>
                    <input onChange={(e)=> setFirstName(e.target.value)} type="text"/>
                    {
                        firstName.length < 2 ? <p className="text-danger">First Name must be at least 2 characters</p>: null
                    }
                </div><br />

                <div className="form-group">
                    <label>Last Name</label>
                    <input onChange={(e)=> setLastName(e.target.value)} type="text"/>
                    {
                        lastName.length < 2 ? <p className="text-danger">Last Name must be at least 2 characters</p>: null
                    }
                </div> <br />
                
                <div className="form-group">
                    <label>Email</label>
                    <input onChange={(e)=> setEmail(e.target.value)} type="text"/>
                    {
                        email.length < 5 ? <p className="text-danger">Email must be at least 5 characters</p>: null
                    }
                </div> <br />

                <div className="form-group">
                <label>Password </label>
                <input onChange={ (e) => setPassword(e.target.value)} type="password"/>
                {
                        password.length < 8 ? <p className="text-danger">Password must be at least 8 characters</p>: null
                    }
                </div><br />

                <div className="form-group">
                <label>Confirm Password </label>
                <input onChange={ (e) => setConfirmPassword(e.target.value)} type="password"/>
                {
                        confirmPassword !== password ? <p className="text-danger">Passwords must match</p>: null
                    }
                </div>

            </form>
            <hr />
            <p>Your Form Data</p>
            <p>First Name {firstName}</p>
            <p>Last Name {lastName}</p>
            <p>Email {email}</p>
            <p>Password {password}</p>
            <p>Confirm Password {confirmPassword}</p>

        </div>
    )

}


export default Form;