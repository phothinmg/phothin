import type { FC } from "../dependencies/deps.ts";
import { html, memo } from "../dependencies/deps.ts";

const ThemeModal: FC = memo(() => (
  <>
    <dialog id="modal-theme">
      <article>
        <header>
          <button
            aria-label="Close"
            rel="prev"
            data-target="modal-theme"
            onclick="toggleModal(event)"
          ></button>
          <p>Select Theme</p>
        </header>
        <a
          href="#"
          data-theme-switcher="auto"
          style="margin-right: 18px; text-decoration: none"
          data-tooltip="System"
        >
          <i class="fa-solid fa-gear"></i>
        </a>
        <a
          href="#"
          data-theme-switcher="light"
          style="margin-right: 18px; text-decoration: none"
          data-tooltip="Light"
        >
          <i class="fa-regular fa-sun"></i>
        </a>
        <a
          href="#"
          data-theme-switcher="dark"
          style="margin-right: 18px; text-decoration: none"
          data-tooltip="Dark"
        >
          <i class="fa-regular fa-moon"></i>
        </a>
        <footer></footer>
      </article>
    </dialog>
  </>
));

export const NavBar: FC = memo(() => (
  <>
    <nav>
      <ul>
        <li>
          <a href="/" class="outline secondary sc-link" data-tooltip="Home">
            <i class="fa fa-home"></i>
          </a>
        </li>
        <li>
          {" "}
          <a
            href="/posts"
            class="outline secondary sc-link"
            data-tooltip="Posts"
          >
            <i class="fa fa-folder-open"></i>
          </a>
        </li>
        <li>
          {" "}
          <a
            id="model"
            class="outline secondary  sc-link"
            data-target="modal-theme"
            onclick="toggleModal(event)"
            data-tooltip="Theme"
          >
            <i class="fa-solid fa-paint-roller"></i>
          </a>
        </li>
      </ul>
    </nav>
    <ThemeModal />
    {html`
      <script src="https://cdn.jsdelivr.net/gh/phothinmg/master-repo@main/theme.min.js"></script>
      <script src="https://cdn.jsdelivr.net/gh/phothinmg/master-repo@main/modal.min.js"></script>
    `}
  </>
));
