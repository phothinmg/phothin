import { type FC, memo } from "../dependencies/deps.ts";
import { NavBar } from "./Navigation.tsx";


export const Header: FC<{ siteName: string }> = memo(({ siteName }) => (
  <>
    <header
      class="container"
      style={"border-bottom: 0.3px solid rgb(224, 221, 221);"}
    >
      <nav>
        <ul>
          <li>
            <h3>{siteName}</h3>
          </li>
        </ul>
        <ul>
          <NavBar />
        </ul>
      </nav>
    </header>
  </>
));
