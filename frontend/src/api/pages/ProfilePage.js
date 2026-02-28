import { useEffect, useState } from "react";
import { getProfile, updateProfile } from "../api/auth";

function ProfilePage() {
  const [profile, setProfile] = useState(null);
  const token = localStorage.getItem("token");

  useEffect(() => {
    async function fetchProfile() {
      const data = await getProfile(token);
      setProfile(data);
    }
    fetchProfile();
  }, [token]);

  if (!profile) return <p>Loading...</p>;

  return (
    <div>
      <h2>Your Profile</h2>
      <p>Username: {profile.user.username}</p>
      <p>Email: {profile.user.email}</p>
      <p>Bio: {profile.bio}</p>
    </div>
  );
}

export default ProfilePage;
