import axios from 'axios';

export async function requestSignup(userData) {
  try {
    const res = await axios.post("/api/auth/signup", userData);
    console.log(res);
  } catch (err) {
    console.log(err);
  }
}

export async function requestLogin(userData) {
  try {
    const res = await axios.post("/api/auth/login", userData);
    console.log(res);
  } catch (err) {
    console.log(err);
  }
}
