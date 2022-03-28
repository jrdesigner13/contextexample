import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../contexts/Context';

export const ShowData = () => {
  const { state, dispatch } = useContext(Context);
  return (
    <div>
      {state.user.name &&
        <>
          {state.user.name} is {state.user.age} years old.
        </>
      }
      {!state.user.name && 'Who are you ?'}
      <br />
      <Link to="/">back</Link>
    </div>
  );
}