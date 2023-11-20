import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Sidebar from './Sidebar';
import HeroSection from './HeroSection';
import Content1 from './Content1';
import BookList from './Booklist';
import '../CSS/Style.css';
import '../CSS/Footer.css';
import BookList1 from './Booklist1';
import BookList2 from './Booklist2';
import BookList3 from './Booklist3';
import BookList4 from './Booklist4';
import BookList5 from './Booklist5';
import Footer from './Footer';

const Layout = () => {
  return (
    <Container>
      <Row>
        <Col md={3}>
       <Sidebar />
        </Col>
        <Col md={9}>
         <HeroSection />
         <Content1 />
         <BookList/>
         <BookList1/>
         <BookList2/>
         <BookList3/>
         <BookList4/>
         <BookList5/>
        </Col>
        <Footer/>
      </Row>
    </Container>
  );
}

export default Layout;
