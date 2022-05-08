import styled from "styled-components";

const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0 24px;
  background-color: #121212;
  color: #fff;

  .nav__logo {
    font-size: 20px;
    font-weight: 400;
    text-transform: uppercase;
  }

  .nav__lists {
    display: flex;
  }

  .nav__item {
    cursor: pointer;
    padding: 14px 16px;
    transition: background-color 300ms ease-in-out, color 300ms ease-in-out;
  }

  .nav__link {
    color: #eee;
    text-decoration: none;
  }

  .nav__item:hover {
    background-color: white;
  }

  .nav__item:hover .nav__link {
    color: #121212;
  }

  .nav__link {
    font-weight: 300;
  }
`;

export default () => {
  return (
    <NavBar>
      <h5 className="nav__logo">Navbar</h5>

      <ul className="nav__lists">
        <li className="nav__item">
          <a className="nav__link" href="#">
            Login
          </a>
        </li>

        <li className="nav__item">
          <a className="nav__link" href="#">
            Register
          </a>
        </li>
      </ul>
    </NavBar>
  );
};
