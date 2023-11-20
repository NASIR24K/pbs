import React from 'react';
import { Row, Col, Card, Button } from 'react-bootstrap';

const BookList3 = [

  {
    id: 1,
    title: 'মুনজেরিন শহীদের ইংরেজি শেখার তিনটি বই',
    author: 'মুনজেরিন শহীদ',
    image: './src/pbs/recent/1.jpg',
    price: 100,
  },
  {
    id: 2,
    title: 'ভ্যাট আইন ও বিধান: সহজ পাঠ (১ম এবং ২য়  খন্ড দুই... )',
    author: 'ডঃ আব্দুল মান্নান শিকদার, ',
    image: './src/pbs/recent/2.jpg',
    price: '১২৬৪',
  },
  {
    id: 3,
    title: 'খাদ্য অধিদপ্তর নিয়োগ সহকারী: লিখিত ও ভাইভা,',
    author: 'পাঞ্জেরী সম্পাদনা পর্ষদ,  ',
    image: './src/pbs/recent/3.jpg',
    price: '৩০০',
  },
  {
    id: 4,
    title: 'খাদ্য অধিদপ্তর নিয়োগ সহকারী: লিখিত ও ভাইভা,',
    author: 'পাঞ্জেরী সম্পাদনা পর্ষদ  ',
    image: './src/pbs/recent/4.jpg',
    price: '৩০০',
  },
  {
    id: 5,
    title: 'দারসুন দাখিল সুপার সাজেশন ও মডেল টেস্ট...., ,  ',
    author: 'দারসুন পাবলিকেশন্স (সম্পাদক)  ',
    image: './src/pbs/recent/5.jpg',
    price: '৪০০',
  },
  {
    id: 6,
    title: 'পাঞ্জেরী বাংলা দ্বিতীয় পত্র স্পেশাল সাপ্লিমেন্ট ++... ,  ',
    author: 'দারসুন পাবলিকেশন্স (সম্পাদক)  ',
    image: './src/pbs/recent/6.jpg',
    price: '৩০০',
  },
];

const Recent = () => {
  const handleAddToCart = (bookId) => {
    console.log(`Added book with ID ${bookId} to the cart`);
    
  };

  return (
    <Row id="multi-card">
      {BookList3.map((book) => (
        <Col md={3} key={book.id}>
          <a href="0#" style={{ textDecoration: 'none' }} className="yourCardId">
            <Card className="recent border-0" style={{ width: '250px', margin: '0', padding: '0' }}>
              {/* ... (Card content as per your existing structure) */}
              <Card.Body>
                <Card.Title className="book-name">{book.title}</Card.Title>
                <Card.Text className="writer-name text-wrap">{book.author}</Card.Text>
                <div className="price">
                  <span className="other-amount">৳</span>
                  <span className="dollar-icon">{book.price}</span>
                </div>
                <Button
                  variant="danger"
                  className="add-to-cart-button border-0"
                  onClick={() => handleAddToCart(book.id)}
                >
                  Add to Cart
                </Button>
              </Card.Body>
            </Card>
          </a>
        </Col>
      ))}
    </Row>
  );
};

export default BookList3;
