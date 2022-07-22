import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  const linksLi = links.map((link) => {
    return <a key={link} href={`#${link}`}>{link}</a>;
  })
  return <nav>{linksLi}</nav>;
}

export default NavBar;
