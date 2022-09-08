import axios from "axios";

const base_url=process.env.REACT_APP_BASE_URL
console.log(base_url);

export const getMahasiswa=async()=>{
    const res =await axios.get(`${base_url}/users`);
    return res;
}

export const getDetails=async(id)=>{
    const res =await axios.get(`${base_url}/users/${id}`);
    return res;
}

export const saveMhs=async(user)=>{
    const res =await axios.post(`${base_url}/users`,user);
    return res;
}

export const login=async(email, password)=>{
    const res =await axios.post(`${base_url}/login`,{email,password});
    return res;
}


