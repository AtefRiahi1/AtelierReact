import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Card } from "react-bootstrap";
import {
  decrement,
  increment,
  remove,
  selectWishlist,
  selectTotal,
} from "../redux/slices/wishlistSlice";

 function WishList() {
  const wishlist = useSelector(selectWishlist);
  const totalPrice = useSelector(selectTotal);
  const dispatch = useDispatch();

  return (
    <section className="h-100 h-custom" style={{ backgroundColor: "#eee" }}>
      <Container className="h-100 py-5">
        <Row className="justify-content-center align-items-center h-100">
          <Col>
            <Card
              className="shopping-wishlist"
              style={{ borderRadius: "15px", width: "80%" }}
            >
              <Card.Body className="text-black">
                <Row>
                  <Col lg="12" className="px-5 py-4">
                    <h3 className="mb-5 pt-2 text-center fw-bold text-uppercase">
                      Wishlist
                    </h3>

                    {wishlist.map((item) => {
                      return (
                        <div
                          key={item.id}
                          className="d-flex align-items-center mb-5"
                        >
                          <div className="flex-shrink-0">
                            <Card.Img
                              src={`/images/${item.img}`}
                              style={{ width: "150px" }}
                              alt="Generic placeholder image"
                            />
                          </div>

                          <div className="flex-grow-1 ms-3">
                            <h5 tag="h5" className="text-primary">
                              {item.name}
                            </h5>

                            <div className="d-flex align-items-center">
                              <p className="fw-bold mb-0 me-5 pe-3">
                                {item.price} DT
                              </p>

                              <button
                                className="RemoveItem"
                                onClick={() => dispatch(decrement(item))}
                              >
                                -
                              </button>
                              <input
                                className="nbParticipants fw-bold text-black def-number-input number-input safari_only"
                                min={0}
                                value={item.nbParticipants}
                                type="number"
                                readOnly
                              />
                              <button
                                className="AddItem"
                                onClick={() => dispatch(increment(item))}
                              >
                                +
                              </button>

                              <p className="fw-bold mb-0 me-5 pe-3">
                                Total Price : {item.nbParticipants * item.price}
                                DT
                              </p>
                              <button
                                className="RemoveWishlist"
                                onClick={() => dispatch(remove(item))}
                              >
                                X
                              </button>
                            </div>
                          </div>
                        </div>
                      );
                    })}

                    <hr
                      className="mb-4"
                      style={{
                        height: "2px",
                        backgroundColor: "#1266f1",
                        opacity: 1,
                      }}
                    />

                    <div
                      className="d-flex justify-content-between p-2 mb-2"
                      style={{ backgroundColor: "#e1f5fe" }}
                    >
                      <h5 tag="h5" className="fw-bold mb-0">
                        Total:
                      </h5>
                      <h5 tag="h5" className="fw-bold mb-0">
                        {totalPrice} DT{" "}
                      </h5>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
export default WishList  ; 