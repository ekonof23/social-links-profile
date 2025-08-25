export default function App() {
  return (
    <main className="profile-card">
      <img
        src="avatar-jessica.jpeg"
        alt="Profile avatar"
        className="profile-avatar"
      />
      <h1 className="profile-name">Jessica Randall</h1>
      <p className="profile-location">London, United Kingdom</p>
      <p className="profile-bio">"Front-end developer and avid reader."</p>

      <div className="links">
        <a href="#">GitHub</a>
        <a href="#">Frontend Mentor</a>
        <a href="#">LinkedIn</a>
        <a href="#">Twitter</a>
        <a href="#">Instagram</a>
      </div>
    </main>
  );
}
