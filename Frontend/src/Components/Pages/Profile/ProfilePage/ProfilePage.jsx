import React, { useEffect, useState } from "react";
import ProfileSection from "../ProfileSection/ProfileSection";
import ProfileNavBar from "../ProfileNavBar/ProfileNavBar";
import EditProfile from "../EditProfile/EditProfile.jsx";
import { useAuth } from "../../../../Context/AuthContext.jsx";

export default function ProfilePage({ language, lastPage }) {
  const [showModal, setShowModal] = useState(false);
  const [refreshKey, setRefreshKey] = useState(0);

  const { user, loading } = useAuth();

  // useEffect(() => {
  //   if (user) {
  //     console.log(user.name);
  //     console.log(user.email);
  //     console.log(user.location);
  //     console.log(user.aboutMe);
  //     console.log(user.website);
  //   }
  // });

  const popUpModal = () => {
    setShowModal(true);
    console.log("Modal Opened");
  };
  const closeModal = () => {
    setShowModal(false);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return <div>Loading....</div>;
  }

  return (
    <div className="h-screen pb-5">
      <ProfileNavBar lastPage={lastPage} />
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
