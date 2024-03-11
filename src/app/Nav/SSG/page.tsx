import React from "react";

import { Cat } from "@/types/types";

// SSG TEST : 아무것도 하지 않으면 SSG!
const SSG = async () => {
  // (1) 첫 번째 방법 : 아무 옵션도 부여 x
  const response = await fetch(`https://catfact.ninja/fact`);
  const results = await response.json();

  return (
    <div className="mt-8">
      {results.fact}
      {results.length}
    </div>
  );
};

export default SSG;
