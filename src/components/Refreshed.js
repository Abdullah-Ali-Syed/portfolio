// Refreshed.js
import React, { useEffect } from 'react';

const Refreshed = ({ url }) => {
  useEffect(() => {
    // Redirect to the specified URL
    window.location.href = url;
  }, [url]);

  return (
    <div>
      Redirecting to: {url}
    </div>
  );
};

export default Refreshed;
