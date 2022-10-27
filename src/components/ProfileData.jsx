import React from "react";

/**
 * Renders information about the user obtained from MS Graph
 * @param props
 */
export const ProfileData = (props) => {
  return (
    <div id="profile-div">
      <p>
        <strong>First Name: </strong> {props.graphData.givenName}
      </p>
      <p>
        <strong>Last Name: </strong> {props.graphData.surname}
      </p>
      <p>
        <strong>Email: </strong> {props.graphData.userPrincipalName}
      </p>
      <p>
        <strong>Id: </strong> {props.graphData.id}
      </p>
      <p>
        <strong>AccessToken: </strong>{" "}
        <pre style={{ width: "80%", marginLeft: "4rem" }}>
          {sessionStorage.idToken}
        </pre>
        <strong>IDToken: </strong>{" "}
        <pre style={{ width: "80%", marginLeft: "4rem" }}>
          {sessionStorage.accessToken}
        </pre>
      </p>
    </div>
  );
};
