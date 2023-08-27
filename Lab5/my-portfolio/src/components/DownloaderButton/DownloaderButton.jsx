import React from 'react';
import DownloadLink from 'react-download-link';

function DownloaderButton() {
  return (
    <DownloadLink className="text-decoration-none text-white"
      label="Download PDF"
      filename="CV.pdf" 
      exportFile={() => fetch('/Lab5/y-portfolio/public/CV.pdf')}
    />
  );
}

export default DownloaderButton;
