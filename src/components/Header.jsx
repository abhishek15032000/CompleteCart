import React from "react";
import { Badge, Container, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Dropdown from "react-bootstrap/Dropdown";
import { FaShoppingCart } from "react-icons/fa";
import { CartState } from "../Context/Context";
import { AiFillDelete } from "react-icons/ai";
import { Button } from "react-bootstrap";
const Header = () => {
  const {
    state: { cart },
    dispatch,
    productDispatch
  } = CartState();
  return (
    <Navbar bg="dark" variant="dark" style={{ height: 80 }}>
      <Container>
        <Navbar.Brand>
          <Link className="link" to="/">
            Shopping Cart
          </Link>
        </Navbar.Brand>
        <Navbar.Text className="search">
          <Form.Control
            style={{ width: 500 }}
            placeholder="Search a product"
            className="-auto"

            onChange={(e)=>{
              productDispatch({type:"FILTER_BY_SEARCH",payload:e.target.value})
            }}
          />
        </Navbar.Text>
        <Dropdown align="end">
          <Dropdown.Toggle variant="info" id="dropdown-autoclose-true">
            <FaShoppingCart color="black" fontSize="25px" />
            {cart.length > 0 ? (
              <Badge bg="black" pill>
                {cart.length}
              </Badge>
            ) : (
              ""
            )}
          </Dropdown.Toggle>
          <Dropdown.Menu style={{ minWidth: 320 }}>
            {cart.length > 0 ? (
              <>
                {cart.map((prod) => (
                  <span className="cartitem" key={prod.id}>
                    <img
                      src={prod.image}
                      className="cartItemImg"
                      alt={prod.name}
                    />
                    <div className="cartItemDetail">
                      <span>{prod.name}</span>
                      <span>₹ {prod.price.split(".")[0]}</span>
                    </div>
                    <AiFillDelete
                      fontSize="20px"
                      style={{ cursor: "pointer" }}
                      onClick={() =>
                        dispatch({
                          type: "REMOVE_FROM_CART",
                          payload: prod,
                        })
                      }
                    />
                  </span>
                ))}
                <Link to="/cart">
                  <Button style={{ width: "95%", margin: "0 10px" }}>
                    Go To Cart
                  </Button>
                </Link>
              </>
            ) : (
              <span style={{ padding: 10 }}> Cart is Empty </span>
            )}
          </Dropdown.Menu>
        </Dropdown>
      </Container>
    </Navbar>
  );
};

export default Header;
