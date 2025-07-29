import React, { useEffect, useState } from "react";
import ProfileSection from "../ProfileSection/ProfileSection";
import ProfileNavBar from "../ProfileNavBar/ProfileNavBar";
import EditProfile from "../EditProfile/EditProfile.jsx";
import { useAuth } from "../../../../Context/AuthContext.jsx";

export default function ProfilePage({ language }) {
  const [userData, setUserData] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const { user } = useAuth();
  useEffect(() => {
    if (user) {
      console.log(user);
      setUserData(user);
    }
  }, [user]);

  const popUpModal = () => {
    setShowModal(true);
  };
  const closeModal = () => {
    setShowModal(false);
  };

  if (!user) {
    return <div>Loading....</div>;
  }

  return (
    <div className="h-screen pb-5">
      <ProfileNavBar />
      <ProfileSection
        name={user.name}
        userName={user.username}
        email={user.email}
        location={user.location}
        website={user.website}
        about={user.aboutMe}
        editProfileModal={popUpModal}
      />
      {showModal && <EditProfile language={language} onClose={closeModal} />}
    </div>
  );
}
