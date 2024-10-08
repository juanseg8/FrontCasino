import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import { faDiscord, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faPowerOff, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./styles.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { useHelpChat } from "../../contexts/ChatAyudaContext";
import axios from "axios";
import io from "socket.io-client";

const socket = io("http://localhost:5000");

function TopBar() {
  const location = useLocation();
  const isRegistroPage = location.pathname === "/register";
  const navigate = useNavigate();
  const [userData, setUserData] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const token = localStorage.getItem("token");
  const [balance, setBalance] = useState(0);
  const { setHelpChatOpen } = useHelpChat();

  useEffect(() => {
    if (token) {
      const fetchUserData = async () => {
        try {
          const config = {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          };
          const response = await axios.get(
            "http://localhost:5000/api/user",
            config
          );
          setUserData(response.data);
          setBalance(response.data.saldo); // Set initial balance
        } catch (error) {
          console.error("Error al obtener la información del usuario:", error);
        }
      };

      fetchUserData();
    }

    socket.on("balanceUpdate", (data) => {
      console.log("Nuevo saldo recibido del socket:", data); // Depura aquí
      setBalance(data.newBalance);
    });

    return () => {
      socket.off("balanceUpdate");
    };
  }, [token]);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      const response = await axios.post(
        "http://localhost:5000/api/users/login",
        {
          phoneNumber,
          password,
        }
      );
      const { token } = response.data;
      localStorage.setItem("token", token);
      const userResponse = await axios.get("http://localhost:5000/api/user", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setUserData(userResponse.data);
      setBalance(userResponse.data.saldo); // Update balance
      window.location.reload();
    } catch (error) {
      setError("Error al iniciar sesión. Verifica tus credenciales.");
      console.error("Error de inicio de sesión:", error);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/minijuegos");
    window.location.reload();
  };

  const handleRedirect = () => {
    navigate("/register"); // Cambia "/nueva-ruta" a la ruta a la que deseas redirigir
  };

  return (
    <Navbar
      style={{ backgroundColor: "#0B0E23" }}
      className="navbar-dark"
      expand="lg"
    >
      <div className="d-flex flex-column flex-lg-row justify-content-between align-items-center w-100">
        <div className="d-flex flex-row align-items-center">
          <Link to="/afiliados" className="ms-3 text-white">
            Afiliados
          </Link>
          <a
            href="#"
            className="ms-3"
            onClick={(e) => {
              e.preventDefault();
              setHelpChatOpen(true); // Abre el chat de ayuda
            }}
          >
            Contactanos
          </a>
          <FontAwesomeIcon
            icon={faDiscord}
            size="m"
            className="icon-hover ms-4"
          />
          <FontAwesomeIcon
            icon={faWhatsapp}
            size="m"
            className="icon-hover ms-3"
          />
        </div>

        <div className="d-flex flex-row justify-content-end align-items-center mt-2 mt-lg-0">
          {userData ? (
            <div className="d-flex text-white">
              {!isRegistroPage && (
                <Button
                  size="sm"
                  variant="danger"
                  className="mx-1 btn-logout"
                  onClick={handleLogout}
                >
                  <FontAwesomeIcon icon={faPowerOff} className="me-2" />
                </Button>
              )}

              <div className="d-flex">
                <Button variant="secondary" className="btn-custom mx-1">
                  <div className="d-flex text-white align-items-center h-100">
                    {balance} ARS
                  </div>
                </Button>

                <Button variant="secondary" className="btn-custom mx-1">
                  <div className="d-flex text-white align-items-center h-100">
                    <FontAwesomeIcon icon={faUser} className="me-2" />
                    {userData.userName}
                  </div>
                </Button>
              </div>

              {!isRegistroPage && (
                <Link to="/depositos" className="nav-link">
                  <Button
                    size="sm"
                    variant="primary"
                    className="mx-1 btn-custom animated-button"
                  >
                    Depositar
                  </Button>
                </Link>
              )}
            </div>
          ) : (
            <Form
              inline
              className="d-flex flex-column flex-lg-row"
              onSubmit={handleLogin}
            >
              <InputGroup className="mx-1">
                <Form.Control
                  size="sm"
                  placeholder="Teléfono"
                  aria-label="Teléfono"
                  aria-describedby="basic-addon1"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
              </InputGroup>
              <InputGroup className="mx-1">
                <Form.Control
                  size="sm"
                  type="password"
                  placeholder="Contraseña"
                  aria-label="Contraseña"
                  aria-describedby="basic-addon1"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </InputGroup>
              <Button
                size="sm"
                variant="primary"
                className="mx-1 btn-custom mt-2 mt-lg-0"
                type="submit"
              >
                Iniciar sesión
              </Button>
              {!isRegistroPage && (
                <Button
                  size="sm"
                  variant="warning"
                  className="mx-1 btn-custom mt-2 mt-lg-0"
                  onClick={handleRedirect}
                >
                  Registrarse
                </Button>
              )}
            </Form>
          )}
        </div>
      </div>
    </Navbar>
  );
}

export default TopBar;
