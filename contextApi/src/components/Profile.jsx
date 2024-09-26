import React from 'react'
import UserContext from '../context/UserContext';
import { useContext} from 'react'

function Profile() {
     const {u} = useContext(UserContext);

    if(!u) {
        return <><h1>Not Logged In</h1></>
    }

  return (
    <div>
        Profile
        : {u.username}
    </div>
  )
}

export default Profile