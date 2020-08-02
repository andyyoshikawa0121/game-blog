import React from "react"
import { Link } from "gatsby"
import HeaderStyle from "./header.module.scss"

export default function Header({ isPc }) {
  return (
    <header>
      <div className={HeaderStyle.wrapper}>
      <div>
        <Link to="/">
          <h1 className={HeaderStyle.title}>Andy Gaming Blog</h1>
        </Link>
      </div>
      <nav>
        { !isPc &&
          <div className={HeaderStyle.menu_button}>
            <input type="checkbox" className="menu-button" />
            <span></span>
            <span></span>
            <span></span>
            <ul className={HeaderStyle.nav_contents}>
              <li><Link to="https://www.youtube.com/channel/UC8HLMxZzE4OAedpnQwiiRfg">YouTube</Link></li>
              <li><Link to="https://twitter.com/honey_king_andy">Twitter</Link></li>
              <li><Link to="/blogs">Blogs</Link></li>
              <li><Link to="/about_me">About Me</Link></li>
            </ul>
          </div>
        }
        { isPc &&
          <ul className={HeaderStyle.nav_contents}>
            <li><Link to="https://www.youtube.com/channel/UC8HLMxZzE4OAedpnQwiiRfg">YouTube</Link></li>
            <li><Link to="https://twitter.com/honey_king_andy">Twitter</Link></li>
            <li><Link to="/blogs">Blogs</Link></li>
            <li><Link to="/about_me">About Me</Link></li>
          </ul>
        }
      </nav>
      </div>
    </header>
  );
}