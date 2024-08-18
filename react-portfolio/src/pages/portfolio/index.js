import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { dataportfolio, meta } from "../../content_option";
import StarsCanvas from "../../header/starCanvas";

export const Portfolio = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
      <StarsCanvas style={{ position: 'absolute', zIndex: +1 }} />
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4"> Portfolio </h1>{" "}
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <div className="mb-5 po_items_ho">
          {dataportfolio.map((data, i) => {
            return (
              <div key={i} className="po_item">
                <img
        src={data.img}
        alt={data.alt || 'Image'}
        style={{ 
          width: '100%', 
          height: '100%', 
          objectFit: 'cover', 
          position: 'absolute',
          top: 0,
          left: 0 
        }}
      />
                <div className="content">
                  <p>{data.description}</p>
                  <a href={data.link}>view project</a>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </HelmetProvider>
  );
};
