import React from "react";
import Chart from "./chart";

import Research from "./reserach";
import { BEAUTY } from "./contansts";
import ProduceByReview from "./ProductByReview";
function App() {
  return (
    <>
      <Research data={BEAUTY} />
      <ProduceByReview data={BEAUTY} />
      <Chart />
    </>
  );
}

export default App;
