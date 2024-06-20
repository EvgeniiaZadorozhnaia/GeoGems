import { useState } from 'react';
import styles from './AuthForm.module.css';
import { Input, Button } from '@chakra-ui/react';
import axiosInstance, { setAccessToken } from '../../axiosInstance';
import { useNavigate } from 'react-router-dom';

const { VITE_API } = import.meta.env;

export default function AuthForm({ title, type = 'signin', setUser }) {
  const [inputs, setInputs] = useState({});
  const navigate = useNavigate();

  const changeHandler = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    const res = await axiosInstance.post(`${VITE_API}/auth/${type}`, inputs);
    setUser(res.data.user);
    setAccessToken(res.data.accessToken);
    navigate('/')
  };

  return (
    <form onSubmit={submitHandler} className={styles.wrapper}>
      <h3 className={styles.head}>{title}</h3>
      <div className={styles.inputs}>
        {type === 'signin' && (
          <>
            <Input
              onChange={changeHandler}
              borderColor='#3f3e3e'
              type='email'
              name='email'
              value={inputs?.email}
              placeholder='eu.skorobogatowa@yandex.ru'
            />
            <Input
              onChange={changeHandler}
              borderColor='#3f3e3e'
              type='password'
              name='password'
              value={inputs?.password}
              placeholder='Пароль'
            />
          </>
        )}
        {type === 'signup' && (
          <>
            <Input
              onChange={changeHandler}
              borderColor='#3f3e3e'
              name='username'
              value={inputs?.name}
              placeholder='Евгения'
            />
            <Input
              onChange={changeHandler}
              borderColor='#3f3e3e'
              type='email'
              name='email'
              value={inputs?.description}
              placeholder='eu.skorobogatowa@yandex.ru'
            />
            <Input
              onChange={changeHandler}
              borderColor='#3f3e3e'
              type='password'
              name='password'
              value={inputs?.password}
              placeholder='Пароль'
            />
          </>
        )}
      </div>
      <div className={styles.btns}>
        {type === 'signin' && (
          <Button style={{width:'100px'}} type='submit' colorScheme='blue'>
            Вход
          </Button>
        )}
        {type === 'signup' && (
          <Button style={{width:'150px'}} type='submit' colorScheme='blue'>
            Регистрация
          </Button >
        )}
      </div>
    </form>
  );
}
