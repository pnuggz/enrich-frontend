import bcrypt from "bcryptjs";

import { signupApi } from "../sharedApis/signupApi";

export const signupRequest = async signupData => {
  const parsedSignupData = await hashPasswordData(signupData);

  try {
    const fetch = await signupApi(parsedSignupData);

    return fetch;
  } catch (error) {
    return error;
  }
};

const hashPasswordData = signupData => {
  const password = signupData.password.value;

  if (password) {
    bcrypt.genSalt(10, (err, salt) => {
      if (err) {
        console.log(err);
        return false;
      }
      Object.assign(signupData, { password_salt: { value: salt } });

      bcrypt.hash(password, signupData.password_salt.value, (err, hash) => {
        if (err) {
          console.log(err);
          return false;
        }
        signupData.password.value = hash;
      });
    });

    return signupData;
  }
};
