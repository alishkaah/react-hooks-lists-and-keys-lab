import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  const link=links.map(lin=>
    <a key={lin} href={'#'+lin}>{lin}</a>
  )
  return <nav>
 {link}
  </nav>;
}

export default NavBar;
