

export default function FormValidation(values) {

    const errors = {};

    const email_pattern = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const password_pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/

    if (values.username === " ") {
        errors.values = "Username is required";
    }

    if (values.email === " ") {
        errors.email = "Email is required";
        
    }
    else if (!email_pattern.test(values.email)) {
        errors.email = "Invalid Email"
    }

    if (values.password === " ") {
        errors.password = "Password is required";
    } else if (!password_pattern.test(values.password)) {
        errors.password = "Invalid Password";
        errors.salt_password = "Invalid Password";
    }  else if (values.password !== values.salt_password) {
        errors.password = "password doesn't match";
        errors.salt_password = "password doesn't match";
    } else if (values.password.length < 5 && values.password.length >12) {
        errors.password = "password doesn't match";
        errors.salt_password = "password doesn't match";
    }

    if (values.phonenumber === " ") {
        errors.phonenumber = "Phone number is required";
    } 
    return errors;
    
}