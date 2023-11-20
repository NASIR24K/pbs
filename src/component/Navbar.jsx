import React from 'react';
import { Container, Row, Col, InputGroup, FormControl, Badge } from 'react-bootstrap';
import '../CSS/Style.css';
import '../CSS/Footer.css';

const TopNav = () => {
  return (
    <Container className="mt-3">
      <div className="top-header fixed">
        <img src="./src/pbs/WebBannerTop20.gif" alt="Responsive GIF" className="img-fluid" />
      </div>
      <Row className="align-items-center">
        <Col md={3}>
          <img src="./src/pbs/logo.png" alt="Left Icon" className="img-fluid" />
        </Col>
        <Col md={6}>
          <div className="search-bar">
            <InputGroup>
              <FormControl type="text" placeholder="Search" />
              <InputGroup.Append>
                <InputGroup.Text>
                  <img src="./src/pbs/search_short.png" alt="Search Icon" className="img-fluid" />
                </InputGroup.Text>
              </InputGroup.Append>
            </InputGroup>
          </div>
        </Col>
        <Col md={3} className="text-right">
          <p className="text text-black mb-3">
            <i className="fas fa-phone" style={{ color: 'red' }}></i>+88 01313-770770
          </p>
          <br />
          <a
            style={{ color: 'black', cursor: 'pointer', textDecoration: 'none' }}
            className="wishlist_icon_div mt-0"
            title="Wishlist"
          >
            <img className="wishlist_icon" src="./src/pbs/wishlist_new.png" alt="Wishlist" />
            <Badge variant="warning" id="lblWishlistCountMob">
              0
            </Badge>
          </a>
          <a className="cardDiv mt-0 mx-3">
            <img className="img_my_cart" src="./src/pbs/cart.png" alt="Cart" />
            <Badge variant="warning">0</Badge>
          </a>
          <div className="text-right user_icon_div mt-0">
            <input type="hidden" id="hdnLoginStatus" value="" />
            <a style={{ color: 'black' }} href="/login">
              <img className="img_signin" src="./src/pbs/user.png" alt="User" />
            </a>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default TopNav;
