import React from 'react'

  export default function EvaluateExpression() { 
    let x=31; let y=30;
  return (
<div>
    <h1>Evaluate expression</h1>
    <h3>{x} {">"}{y}{':'}{x>y?'true':'false'}</h3>
</div>
  );
}

