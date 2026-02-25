// src/components/ProfileHeader.jsx
export function ProfileHeader({ name, profileImg, quote }) {
  return (
    <div className="bg-light border p-3 mb-4">
      <h2 className="h4">{name}</h2>
      
      <img
        className="img-fluid border mb-2"
        src={profileImg}
        alt={`${name}'s profile`}
      />

      <div className="d-flex align-items-center gap-3 my-3">
        <p className="small mb-0 flex-grow-1 font-italic">
          "{quote}"
        </p>

        {/* MySpace Online Now Icon */}
        <img
          className="online-now"
          style={{ height: "30px", width: "auto", flexShrink: 0 }}
          src="https://archive.org/download/myspaceon/myspaceon.gif"
          alt="online now icon"
        />
      </div>
    </div>
  );
}