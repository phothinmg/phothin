import type { FC } from "../dependencies/deps.ts";
import { html, memo } from "../dependencies/deps.ts";

export const NavBar: FC = memo(() => (
  <div class="nav-div">
    <div class="nav-l">
      <div class="tooltip">
        <a href="" target="_blank" class="sc-link">
          <i class="fa fa-home"></i>
        </a>
        <span class="tooltiptext">Home</span>
      </div>
      <div class="tooltip">
        <a href="" target="_blank" class="sc-link">
          <i class="fa fa-folder-open"></i>
        </a>

        <span class="tooltiptext">All Posts</span>
      </div>
      <div class="tooltip"></div>
    </div>
    <div class="nav-r">
      <div class="dropdown">
        <button class="dropbtn">Theme</button>
        <div class="dropdown-content">
          <a href="#" data-theme-switcher="auto" data-tooltip="System">
            System
          </a>
          <a href="#" data-theme-switcher="light" data-tooltip="Light">
            Light
          </a>
          <a href="#" data-theme-switcher="dark" data-tooltip="Dark">
            Dark
          </a>
        </div>
      </div>
    </div>
    {html`
      <script src="https://cdn.jsdelivr.net/gh/phothinmg/master-repo@main/theme.min.js"></script>
      <script src="https://cdn.jsdelivr.net/gh/phothinmg/master-repo@main/modal.min.js"></script>
    `}
  </div>
));


