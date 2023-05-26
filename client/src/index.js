import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ProvideAuth } from "./context/authContext";
import { GoogleOAuthProvider } from "@react-oauth/google";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}>
    <React.StrictMode>
      <ProvideAuth>
        <App />
      </ProvideAuth>
    </React.StrictMode>
  </GoogleOAuthProvider>
);
