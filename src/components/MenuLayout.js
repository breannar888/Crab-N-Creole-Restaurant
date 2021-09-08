import "../css/menu.css";
//pull in data to dynamically render menu items
import MENU_DATA from "../textdata/menudata";

function MenuLayout() {
  return (
    <div className="menu-wrapper">
      {MENU_DATA.map((menu) => {
        return (
          <div className="menu-container">
            <div className="menu-conent">
              <h1>{menu.menutitle}</h1>
              <div>
                {menu.sectiontitle.map((section) => {
                  return (
                    <div className="menu-title">
                      <h2 className="section-title">{section.title}</h2>
                      {section.menuitems.map((items) => {
                        return (
                          <div className="items-container">
                            <div className="left-col">
                              <h3>{items.title}</h3>
                              <p>{items.description}</p>
                            </div>
                            <div className="right-col">
                              <div>{items.price}</div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default MenuLayout;
