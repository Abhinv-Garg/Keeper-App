import React from "react";
import FavoriteIcon from '@mui/icons-material/Favorite';

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      {/* <p>Copyright ©{year}</p> */}
      <p>Made with <FavoriteIcon id="FavoriteIcon" fontSize="small" /> by Abhinav</p>
    </footer>
  );
}

export default Footer;
