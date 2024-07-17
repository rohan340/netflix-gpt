export const validateLoginForm = (email, password, fullName)=>{
    console.log(fullName)
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
    const passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password);
    const fullNameRegex = /^[a-zA-Z]+(?: [a-zA-Z]+)*$/.test(fullName);

    if(!emailRegex) return "Email is not valid";
    if(!passRegex) return "Password is not valid"
    if(!fullNameRegex) return "Full Name is not valid"

    return null;
}