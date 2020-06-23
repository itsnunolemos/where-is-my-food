
/**
 * Module dependencies.
 */

import './index.scss';
import PropTypes from 'prop-types';
import React from 'react';
import { Col, Container, Figure, Row } from 'react-bootstrap';

/**
 * `TrackDetails`.
 */

const TrackDetails = ({ item }) => {
  const { delivery, photo, rating, time, vehicle, name } = item;

  return (
    <div className="track">
      <div className="track__courier">
        <Container>
          <Row>
            <Col>
              <div className="track__courier__name">{name}</div>
              <div className="track__courier__vehicle">{vehicle}</div>
              <div className="track__courier__rating">
                <span role="img" aria-label="star">⭐</span>
                {rating}
              </div>

              <div className="track__courier__call">
                <span role="img" aria-label="phone">📞</span>
                Call
              </div>
            </Col>

            <Col>
              <div className="track__courier__photo">
                <Figure.Image
                  alt="171x180"
                  className="track__courier__profile"
                  fluid={false}
                  height={100}
                  roundedCircle={true}
                  src={photo}
                  width={100}
                />
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="track__info">
        <Container>
          <Row>
            <Col>
              <div className="track__info__time">
                <div className="track__info__note">Receive on:</div>
                <span role="img" aria-label="clock">🕐</span>
                {time} min
              </div>
            </Col>

            <Col>
              <div className="track__info__delivery">
                <div className="track__info__note">Delivery time:</div>
                <span role="img" aria-label="package">📦</span>
                {delivery}
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

/**
 * Prop types.
 */

TrackDetails.propTypes = {
  item: PropTypes.shape({
    delivery: PropTypes.string,
    name: PropTypes.string,
    photo: PropTypes.string,
    rating: PropTypes.string,
    time: PropTypes.string,
    vehicle: PropTypes.string
  }).isRequired
};

/**
 * Export `TrackDetails`.
 */

export default TrackDetails;
