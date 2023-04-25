import { InfinitySpin } from "react-loader-spinner";

import React from "react";

export default function Loader() {
  return (
    <div className="flex justify-center items-center h-[75vh]">
      <InfinitySpin width="200" color="#f8f6f5" />;
    </div>
  );
}
