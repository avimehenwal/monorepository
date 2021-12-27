import React from "react";
import type { Engine, GraphvizOptions } from 'd3-graphviz'
import { graphviz } from 'd3-graphviz'

/* eslint-disable-next-line */
export interface DotProps { }

export function Dot(props: DotProps) {
  const graphRef = React.useRef<HTMLDivElement>(null)

  function afterLoad() {
    console.log('hpcc loaded')
    document.getElementById("graph").innerHTML = "Iframe is loaded.";
  }

  React.useEffect(() => {
    const script = document.createElement('script');
    script.type = "application/javascript/"
    script.id = "hpcc-js"
    script.addEventListener("load", afterLoad);
    script.addEventListener("error", function (err) { alert('Error loading hpcc') });
    script.src = "https://unpkg.com/@hpcc-js/wasm/dist/index.min.js"
    document.getElementsByTagName('head')[0].appendChild(script);

    return () => {
      console.count("EXIT the DOM")
      document.getElementById("hpcc-js")?.remove()
    }
  }, [])

  return (
    <div id="dot">
      <h1>Welcome to Dot!</h1>
      <p>changed</p>
      <div ref={graphRef} id="graph">
        graph
      </div>
    </div>
  );
}

export default Dot;
