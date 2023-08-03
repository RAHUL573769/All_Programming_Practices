import { useReducer } from "react";

const emailReducer = (state, action) => {
  if (action.type === "User Input") {
    return {
      value: action.value
    };
  }
};
function App() {
  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: ""
  });
  const emailChangeHandler = (e) => {
    e.preventDefault();

    dispatchEmail({
      type: "User Input",
      value: e.target.value
    });
    console.log(emailState);
  };
  return (
    <div className="App">
      <form>
        <label htmlFor="email">Email</label>

        <input type="email" name="" id="email" onChange={emailChangeHandler} />
        <br />
        <label htmlFor="password">Password</label>

        <input type="password" name="" id="password" />
        <br />
        <button type="submit">Log In</button>
      </form>
    </div>
  );
}

export default App;
