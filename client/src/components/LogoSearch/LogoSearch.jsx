import React from "react";
import Logo from "../../img/logo.png";
import './LogoSearch.css'
import { UilSearch } from '@iconscout/react-unicons'
const LogoSearch = () => {
  return (
    <div className="LogoSearch">
      <img src={Logo} alt="" />
      {/* <div className="Search">
          <input type="text" placeholder="#Explore"/>
          <div className="s-icon">
                <UilSearch/>
          </div>
      </div> */}
    </div>
  );
};

export default LogoSearch;



// import React,{useState } from "react";
// import Logo from "../../img/logo.png";
// import FollowersModal from "../FollowersModal/FollowersModal";
// import './LogoSearch.css'
// import { UilSearch } from '@iconscout/react-unicons'
// const LogoSearch = () => {
//   const [modalOpened, setModalOpened] = useState(false);
//   return (
//     <div className="LogoSearch">
//       <img src={Logo} alt="" />
//       <div className="Search">
//           <input onClick={() => setModalOpened(true)}   type="text" placeholder="#see all followers"/>
//           <div className="s-icon">
//                 <UilSearch/>
//                 <FollowersModal
//         modalOpened={modalOpened}
//         setModalOpened={setModalOpened}
//       />
//           </div>
//       </div>
//     </div>
//   );
// };

// export default LogoSearch;
