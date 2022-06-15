import React from "react";

function MenuBar({ selected, setSelected }) {
  /*

  The 'span' tags below are the menu items. Think about the way a menu 
  should work. When you click a menu item, the button typically becomes
  'active' to indicate that it is currently selected. How could we achieve
  this programatically? What other behavior do we expect when we click
  on a menu item? Do we need state in this component, and if not, how can
  this component be made aware of what is currently the active menu item?

  */

  function handleClick(value) {
    // setSelected(e.target.className)
    setSelected(value)
  }

  return (
    <div className="ui four item menu">
      <span className={selected === "user" ? "item active" : "item"} >
        <i onClick={() => handleClick("user")} className="user large icon" />
      </span>

      < span className={selected === "photo" ? "item active" : "item"}>
        <i onClick={() => handleClick("photo")} className="photo large icon" />
      </span>

      <span className={selected === "cocktail" ? "item active" : "item"}>
        <i onClick={() => handleClick("cocktail")} className="cocktail large icon" />
      </span>

      <span className={selected === "themeisle" ? "item active" : "item"}>
        <i onClick={() => handleClick("themeisle")} className="themeisle large icon" />
      </span>
    </div>
  );
}

export default MenuBar;