import React, { useState } from "react";

const appContext = React.createContext({
  contactClicked: false,
  onContactClick: () => {},
  workClicked: false,
  onWorkClick: () => {},
});

export const AppContextProvider = (props) => {
  const [contactClicked, setContactClicked] = useState(false);
  const [workClicked, setWorkClicked] = useState(false);
  const ContactClickHandler = () => {
    setContactClicked((prev) => !prev);
    console.log(contactClicked);
  };
  const WorkClickHandler = () => {
    setWorkClicked((previous) => !previous);
    console.log(workClicked);
  };

  return (
    <appContext.Provider
      value={{
        contactClicked: contactClicked,
        onContactClick: ContactClickHandler,
        workClicked: workClicked,
        onWorkClick: WorkClickHandler,
      }}
    >
      {props.children}
    </appContext.Provider>
  );
};

export default appContext;
