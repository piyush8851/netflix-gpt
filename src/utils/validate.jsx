export const checkValidateData = (email, password) => {
     const isEmailVaild = /^[^@]+@[^@]+\.[^@]+$/.test(email);
     const isPasswordValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password);

     if(!isEmailVaild) return "Email ID is not vaild";
     if(!isPasswordValid) return "Password is not vaild";

     return null;
}