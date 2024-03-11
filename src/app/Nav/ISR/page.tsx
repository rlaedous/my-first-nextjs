import { Cat } from "@/types/types";
import React from "react";

const ISRPage = async () => {
  const response = await fetch(`https://catfact.ninja/fact`, {
    next: {
      revalidate: 5,
    },
  });
  const results = await response.json();
  console.log("results", results);

  return (
    <div className="mt-8">
      {results.fact}
      dddd
      {results.length}
    </div>
  );
};

export default ISRPage;
