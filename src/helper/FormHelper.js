
const emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const bdPhoneRegex = /^(?:\+88|88)?01[3-9]\d{8}$/;



export  const isValidBDPhone=(phone) =>{
    return bdPhoneRegex.test(phone);
}

export const isValidEmail = (email) => {
    return emailFormat.test(email);
};

export const   isEmpty=(value)=> {
        return value === null || value === undefined || value === '';
    }



