import React, { useEffect, useState } from "react";
import ProfileSection from "../ProfileSection/ProfileSection";
import ProfileNavBar from "../ProfileNavBar/ProfileNavBar";
import EditProfile from "../EditProfile/EditProfile.jsx";
import EditSnippet from "../EditSnippet/EditSnippet.jsx";
import "../../../../tailwind.css";
import Footer from "../../../Common/Footer/Footer";
import { useAuth } from "../../../../Context/AuthContext.jsx";

export default function ProfilePage({ language, lastPage, setLanguage }) {
  const [showProfileModal, setShowProfileModal] = useState(false);
  const [showSnippetModal, setShowSnippetModal] = useState(false);
  const [snippets, setSnippets] = useState([]);
  const [snippetData, setSnippetData] = useState(null);
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

  const popUpProfileModal = () => {
    console.log("Editing snippet in Profile Page:", snippetData);
    setShowProfileModal(true);
    console.log("Modal Opened");
  };
  const closeProfileModal = () => {
    setShowProfileModal(false);
  };

  const popUpSnippetModal = () => {
    setShowSnippetModal(true);
    console.log("Modal Opened");
  };
  const closeSnippetModal = () => {
    setShowSnippetModal(false);
  };
  const handleSnippetUpdate = (updatedSnippet) => {
    setSnippets((prevSnippets) =>
      prevSnippets.map((snippet) =>
        snippet.id === updatedSnippet.id ? updatedSnippet : snippet
      )
    );
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return <div>Loading....</div>;
  }

  return (
    <div className="h-screen pb-5">
      <ProfileNavBar
        lastPage={lastPage}
        language={language}
        setLanguage={setLanguage}
      />
      <ProfileSection
        name={user.name}
        userName={user.username}
        email={user.email}
        location={user.location}
        website={user.website}
        about={user.aboutMe}
        createdAt={user.createdAt}
        editProfileModal={popUpProfileModal}
        editSnippetModal={popUpSnippetModal}
        userId={user.userId}
        user={user}
        language={language}
        setSnippetData={setSnippetData}
        snippets={snippets}
        setSnippets={setSnippets}
        onUpdateSnippet={handleSnippetUpdate}
      />
      <Footer language={language} />
      {showProfileModal && (
        <EditProfile language={language} onClose={closeProfileModal} />
      )}
      {showSnippetModal && (
        <EditSnippet
          language={language}
          onClose={closeSnippetModal}
          snippetData={snippetData}
          setSnippetData={setSnippetData}
          setSnippets={setSnippets}
          onUpdateSnippet={handleSnippetUpdate}
        />
      )}
    </div>
  );
}
