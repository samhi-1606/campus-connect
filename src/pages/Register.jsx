import { Link, useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();
  return (
    <div className="auth-page">
      <div className="auth-aside">
        <div className="logo"><span className="logo-mark">C</span><span><strong>Campus</strong>Find</span></div>
        <div className="auth-quote"><span>+</span><h2>Good campus communities look out for each other.</h2><p>Report what you lost. Report what you found. Let the right people connect.</p></div>
      </div>
      <div className="auth-main">
        <Link to="/" className="back-link">← Back to home</Link>
        <div className="auth-box">
          <span className="eyebrow">GET STARTED</span><h1>Create your account</h1><p className="muted">A college email keeps the community campus-specific.</p>
          <form onSubmit={(e) => { e.preventDefault(); navigate("/dashboard"); }}>
            <div className="two-col"><label>Full name<input required placeholder="Alex Morgan" /></label><label>Student ID<input required placeholder="STU-20481" /></label></div>
            <label>College email<input type="email" required placeholder="you@college.edu" /></label>
            <div className="two-col"><label>Password<input type="password" required placeholder="At least 8 characters" /></label><label>Confirm password<input type="password" required placeholder="Repeat password" /></label></div>
            <label className="check-label"><input type="checkbox" required /> I agree to use CampusFind respectfully and honestly.</label>
            <button className="button button-primary full">Create account</button>
          </form>
          <p className="auth-bottom">Already have an account? <Link to="/login">Log in</Link></p>
        </div>
      </div>
    </div>
  );
}