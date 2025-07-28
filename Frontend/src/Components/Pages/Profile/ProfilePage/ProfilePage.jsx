import React, { useEffect, useState } from "react";
import ProfileSection from "../ProfileSection/ProfileSection";
import ProfileNavBar from "../ProfileNavBar/ProfileNavBar";
import { useAuth } from "../../../../Context/AuthContext.jsx";

export default function ProfilePage() {
  const [userData, setUserData] = useState(null);
  const { user } = useAuth();
  useEffect(() => {
    if (user) {
      setUserData(user);
    }
  }, [user]);

  if (!user) {
    return <div>Loading....</div>;
  }

  return (
    <div className="min-h-screen pb-5">
      <ProfileNavBar />
      <ProfileSection name={user.name} userName={user.username} />
    </div>
  );
}
