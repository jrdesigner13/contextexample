import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../contexts/Context';

export const SignUp = () => {
  const { state, dispatch} = useContext(Context);
 
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: 'CHANGE_NAME',
      payload: {
        name: e.target.value
      }
    });

  }

  const handleAgeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: 'CHANGE_AGE',
      payload: {
        age: parseInt(e.target.value)
      }
    });
  }

  return (
    <div>
      <h3>SignUp screen, Welcome {state.user.name}.</h3>
      <br />
      <input
        type="text"
        placeholder='Type your name'
        value={state.user.name} 
        onChange={handleNameChange}
      />
      <input
        type="text"
        placeholder='Type your age'
        value={state.user.age} 
        onChange={handleAgeChange}
      />
      <Link to="/showData">Go to Show Data</Link>
    </div>
  );
}