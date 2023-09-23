import React, { useState } from "react";

export default function UserInfo({setUsername, username}) {
  const [isDisabled, setIsDisabled] = useState(false);

  const handleOnChangeUsername = (e) => {
    const username = e.target.value;
    setUsername(username);
  };

  const handleLockInput = () => {
    setIsDisabled(!isDisabled)
  }

  return (
    <div className="username-wrapper">
      <p>Insert username:</p>
      <input onChange={handleOnChangeUsername} disabled={isDisabled} className="username-input" type="text" name="username" value={username} />
      <button onClick={handleLockInput}>
        { isDisabled ? 'Locked' : 'Lock'}
      </button>
    </div>
  );
}