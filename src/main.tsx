import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { Provider } from "@/components/ui/provider";
import { Theme } from "@chakra-ui/react";

function Main() {
  return (
    <Provider>
      <Theme>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </Theme>
    </Provider>
  );
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Main />
);
