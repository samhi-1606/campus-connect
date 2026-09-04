import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import Logo from "../components/Logo";

export default function Login() {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const submit = (e) => { e.preventDefault(); setError(""); navigate("/dashboard"); };
  return (
    <div className="auth-page">
      <div className="auth-aside">
        <Logo />
        <div className="auth-quote"><span>“</span><h2>Sometimes finding something starts with simply asking.</h2><p>CampusFind keeps that asking private, organized and a little easier.</p></div>
      </div>
      <div className="auth-main">
        <Link to="/" className="back-link">← Back to home</Link>
        <div className="auth-box">
          <span className="eyebrow">WELCOME BACK</span><h1>Log in to CampusFind</h1><p className="muted">Use your college account to continue.</p>
          <form onSubmit={submit}>
            <label>College email<input type="email" placeholder="you@college.edu" required /></label>
            <label>Password<input type="password" placeholder="Enter your password" required /></label>
            {error && <div className="form-error">{error}</div>}
            <div className="form-row-between"><label className="check-label"><input type="checkbox" /> Remember me</label><a href="#forgot">Forgot password?</a></div>
            <button className="button button-primary full">Log in</button>
          </form>
          <p className="auth-bottom">New to CampusFind? <Link to="/register">Create an account</Link></p>
        </div>
      </div>
    </div>
  );
}