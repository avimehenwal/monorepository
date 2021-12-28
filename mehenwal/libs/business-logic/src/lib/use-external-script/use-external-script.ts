import { useState, useCallback, useEffect } from 'react';
import { IStates } from '../types'

type IHtmlScriptElement = HTMLScriptElement | null

/* Business Logic
 * 1. script should only be loaded at component load
 * 2. script should be removed when component is removed
 * 3. possible states = { loading, idle, ready, error }
*/
export const useExternalScript = (sourceUrl: string) => {
  let [state, setState] = useState<IStates>(sourceUrl ? IStates.Loading : IStates.Idle);

  useEffect(() => {
    if (!sourceUrl) {
      setState(IStates.Idle);
      return;
    }

    let scriptElement: IHtmlScriptElement = document.querySelector(`script[src="${sourceUrl}"]`);

    // const handleScript = (e: { type: Istate; }) => {
    //   console.log(e)
    //   setState(e.type === "load" ? "ready" : "error");
    // };
    const handleSuccess = () => {
      console.log(`external script is loaded ${sourceUrl}`)
      setState(IStates.Ready);
    };
    const handleError = () => {
      console.error(`external script Failed ${sourceUrl}`)
      setState(IStates.Error);
    };

    if (!scriptElement) {
      scriptElement = document.createElement("script")
      scriptElement.type = "application/javascript"
      scriptElement.async = true;

      // ? Add eventListeners before the source and append in the end
      scriptElement.addEventListener("load", handleSuccess);
      scriptElement.addEventListener("error", handleError);
      scriptElement.src = sourceUrl;
      document.body.appendChild(scriptElement);
    }
    scriptElement.addEventListener("load", handleSuccess);
    scriptElement.addEventListener("error", handleError);

    return () => {
      scriptElement?.removeEventListener("load", handleSuccess);
      scriptElement?.removeEventListener("error", handleError);
      scriptElement?.remove()
    };
  }, [sourceUrl]);

  return state;
};

export default useExternalScript;

/* Rationale
 * 1. load script only when its needed and not along with the page, everytime
 * 2. take full control of externalScript lifecycle
 * 3. Fallback if script is not lodable
*/