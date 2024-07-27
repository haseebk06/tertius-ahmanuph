import { useRef, useEffect } from "react";
import "./style.css";

const Albums = ({ showAlbums, hideAlbums }) => {
  const sidebarRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        hideAlbums();
      }
    }

    if (showAlbums) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showAlbums, hideAlbums]);

  return (
    <div
      ref={sidebarRef}
      className={`albums-container ${showAlbums ? "left-0" : "left-full"}`}
    >
      <h3>Albums</h3>
      <div className="divider"></div>
      <ul>
        <li>
          <a href="https://tertiusahmanuph.vercel.app/products/get-this-way">
            Get This Way
          </a>
        </li>
        <li>
          <a href="https://tertiusahmanuph.vercel.app/products/3am-on-31st">
            3am On Jan 31st
          </a>
        </li>
        <li>
          <a href="#">Lonely Homes</a>
        </li>
      </ul>
      <h5 onClick={hideAlbums}>Close</h5>
    </div>
  );
};

export default Albums;
