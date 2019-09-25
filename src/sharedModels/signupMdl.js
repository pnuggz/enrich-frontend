import bcrypt from "bcryptjs";

import { signupApi } from "../sharedApis/signupApi";

export const signupRequest = async signupData => {
  try {
    const password = signupData.password.value;
    const passwordSalt = await genPasswordSalt();
    const hashedPassword = await hashPassword(password, passwordSalt);
    signupData.password.value = hashedPassword;
    signupData.password_salt = {
      value: passwordSalt
    };

    const fetch = await signupApi(signupData);
    return fetch;
  } catch (error) {
    return error;
  }
};

const genPasswordSalt = () => {
  return new Promise((res, rej) => {
    bcrypt.genSalt(10, (err, salt) => {
      if (err) {
        console.log(err);
        rej(err);
      }
      res(salt);
    });
  });
};

const hashPassword = (password, passwordSalt) => {
  return new Promise((res, rej) => {
    bcrypt.hash(password, passwordSalt, (err, hash) => {
      if (err) {
        console.log(err);
        rej(err);
      }
      res(hash);
    });
  });
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
