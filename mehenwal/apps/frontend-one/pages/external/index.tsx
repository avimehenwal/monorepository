import React from "react";
import { useExternalScript, IStates } from "@mehenwal/business-logic";


/* eslint-disable-next-line */
export interface ExternalProps { }

export function External(props: ExternalProps) {
  const externalScript = "https://code.jquery.com/jquery-3.6.0.slim.min.js"
  const state = useExternalScript(externalScript);

  return (
    <div>
      <h1>Welcome to External!</h1>
      <p>State = {state}</p>
      <div>
        {state === IStates.Loading && <p>Loading...</p>}
        {state === IStates.Ready && <h2>Component with script</h2>}
      </div>
    </div>
  );
}

export default External;
