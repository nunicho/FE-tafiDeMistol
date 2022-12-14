import { Navbar, Nav, Container, Button, Col } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import logo from "../../components/img/Logo.png";
import "../../components/style.css";

const Menu = ({
  saludoNavbarCliente,
  setSaludoNavbarCliente,
  clienteLogueado,
  setClienteLogueado,
  saludoNavbar,
  setSaludoNavbar,
  usuarioLogueado,
  setUsuarioLogueado,
}) => {
  const navegar = useNavigate();

  const logoutCliente = () => {
    navegar("/");
    localStorage.removeItem("tokenCliente");
    localStorage.removeItem("saludoCliente");
    setClienteLogueado({});
    setSaludoNavbarCliente("");
  };

  const logout = () => {
    navegar("/");
    localStorage.removeItem("tokenUsuario");
    localStorage.removeItem("saludo");
    setUsuarioLogueado({});
    setSaludoNavbar("");
  };

  return (
    <section className="bgTransparente fuente fs-6">
      <Container>
        <Navbar variant="dark" expand="lg" className="row m-0 p-0">
          <Col lg={6} className="text-lg-start text-center">
            <Navbar.Brand className="text-start m-0 p-0 " as={Link} to="/">
              <img src={logo} alt="Logo" className="w-50 m-0 p-0" />
            </Navbar.Brand>
          </Col>

          <Col>
            <Navbar.Toggle aria-controls="basic-navbar-nav" className="mb-2" />
            <Navbar.Collapse>
              <div className="text-light text-center pb-2 pt-1 mx-4 fuente fs-6 fw-bold">
                {saludoNavbarCliente}
              </div>

              <Nav className="me-auto text-center">
                <NavLink end className="nav-item nav-link" to="/">
                  Inicio
                </NavLink>
                {clienteLogueado.email ? (
                  <>
                    <NavLink end className="nav-item nav-link" to="/carta">
                      Nuestra Carta
                    </NavLink>
                    <Button
                      variant="danger"
                      className="fuente fs-5 mx-2"
                      onClick={logoutCliente}
                    >
                      Logout
                    </Button>
                  </>
                ) : (
                  <>
                    <NavLink
                      end
                      className="nav-item nav-link"
                      to="/loginCliente"
                    >
                      Login
                    </NavLink>
                    <NavLink end className="nav-item nav-link" to="/registro">
                      Registrarse
                    </NavLink>
                    <NavLink
                      end
                      className="nav-item nav-link"
                      to="/loginUsuario"
                    >
                      Administrador
                    </NavLink>
                  </>
                )}
              </Nav>
            </Navbar.Collapse>
            <Navbar.Collapse>
              <div className="text-light px-3 pb-2 fw-bold">{saludoNavbar}</div>
              <Nav className="me-auto text-center">
                {usuarioLogueado.email ? (
                  <>
                    <NavLink
                      end
                      className="nav-item nav-link"
                      to="/administrador"
                    >
                      Productos
                    </NavLink>
                    <NavLink
                      end
                      className="nav-item nav-link"
                      to="/adminUsuarios"
                    >
                      Usuarios
                    </NavLink>
                    <NavLink
                      end
                      className="nav-item nav-link"
                      to="/administrador/pedidosAdmin"
                    >
                      Pedidos
                    </NavLink>
                    <Button
                      variant="danger"
                      className="fuente fs-6 mx-2"
                      onClick={logout}
                    >
                      Logout
                    </Button>
                  </>
                ) : (
                  <></>
                )}
              </Nav>
            </Navbar.Collapse>
          </Col>
        </Navbar>
      </Container>
    </section>
  );
};

export default Menu;
