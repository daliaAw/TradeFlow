import { useState } from "react";

import SignUpForm from "../../components/SignUpForm/SignUpForm";
import LoginForm from "../../components/LoginForm/LoginForm";

export default function AuthPage({ setUser, setBusinessUser, user }) {
  const [showSignUp, setShowSignUp] = useState(false);
  return (
    <main>
      <button onClick={() => setShowSignUp(!showSignUp)}>
        {showSignUp ? "Log In" : "Sign Up"}
      </button>
      {showSignUp ? (
        <>
        <h1>Sign Up Page</h1>
        <SignUpForm setUser={setUser} setBusinessUser={setBusinessUser} />
        </>
      ) : (
        <>
        <h1>Log In Page</h1>
        <LoginForm setUser={setUser} setBusinessUser={setBusinessUser} />
        </>
      )}
    </main>
  );
}
