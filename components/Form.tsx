import { useState } from "react";

export default function Form() {
  const [username, setUsername] = useState("");
  const [fullName, setFullName] = useState("");
  const [age, setAge] = useState(0);

  const onSubmit = () => {
    const payload = {
      UserName: username.toUpperCase(),
      FullName: fullName.toUpperCase(),
      Age: age
    };

    alert(`${JSON.stringify(payload)}`);
  }

  return (
    <div className="w-100">
      <div className="flex flex-col gap-2">
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="border border-black"
        />
        
        <label htmlFor="fullName">Full Name:</label>
        <input
          type="text"
          id="fullName"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          className="border border-black"
        />

        <label htmlFor="age">Age:</label>
        <input
          type="number"
          id="age"
          value={age}
          onChange={(e) => setAge(parseInt(e.target.value) || 0)}
          className="border border-black"
        />

        <button
          type="submit"
          className="border border-black bg-gray-200 w-20 hover:bg-gray-300"
          onClick={onSubmit}
        >
          Submit
        </button>
      </div>
    </div>  
  )
}