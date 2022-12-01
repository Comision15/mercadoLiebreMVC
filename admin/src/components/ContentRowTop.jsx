import React from "react";
import { Categories } from "./categories/Categories";
import { LastProduct } from "./LastProduct";
import { Metrics } from "./metrics/Metrics";

export const ContentRowTop = () => {
  return (
    <div className="container-fluid">
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">Dashboard Comision 15</h1>
      </div>

      <Metrics />

      <div className="row">
        <LastProduct />
        <Categories />
      </div>
    </div>
  );
};
