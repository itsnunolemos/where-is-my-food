
/**
 * Module dependencies.
 */

import Footer from '../components/footer';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import TrackDetails from '../components/track-details';
import { Container, Row, Col, Spinner } from 'react-bootstrap';
import { connect } from 'react-redux';
import { getDelivery, resetDelivery } from '../redux/actions/delivery-actions';

/**
 * `PageHomepage`.
 */

class PageHomepage extends Component {
  /**
   * State.
   */

  state = {
    inputFilled: false
  };

  /**
   * Get delivery.
   */

  handleGetDelivery = (event) => {
    const { getDelivery, resetDelivery } = this.props;
    const { value } = event.target;

    if (value.length) {
      this.setState({ inputFilled: true });
      getDelivery(value);
    } else {
      this.setState({ inputFilled: false });
      resetDelivery();
    }
  }

  /**
   * Render.
   */

  render() {
    const { deliveries: { item, loading } } = this.props;
    const { inputFilled } = this.state;

    return (
      <>
        <header>
          <div className="logo">
            <span role="img" aria-label="food">🍱 </span>
            Where is my <span>food</span>
          </div>
        </header>

        <main>
          <div className="content">
            <Container>
              <Row>
                <Col>
                  <h2>Your order code</h2>
                  <div className="search-track">
                    <input
                      className="input-track"
                      type="text"
                      name="tracking"
                      onChange={this.handleGetDelivery}
                      placeholder="Insert your order code"
                    />

                    <div className="search-track__check">
                      {!loading && item && inputFilled && (
                        <span className="search-track__check--green">✔</span>
                      )}

                      {!loading && !item && inputFilled && (
                        <span className="search-track__check--red">x</span>
                      )}
                    </div>
                  </div>

                  <p className="notes">Example: XfBi1XGI, BYaNQDiR, 4PlGZkOh</p>
                </Col>

                <Col className="hidden-sm">
                  <h3>Your service to find your food</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dapibus neque neque, id sagittis orci volutpat vitae. Donec enim lorem, ornare in nibh sit amet, eleifend imperdiet libero. Ut iaculis sit amet libero non suscipit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
                </Col>
              </Row>
            </Container>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#ffbd1b" fillOpacity="1" d="M0,64L120,58.7C240,53,480,43,720,53.3C960,64,1200,96,1320,112L1440,128L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"></path>
          </svg>
        </main>

        <section className="track-details">
          {loading && (
            <Spinner animation="grow" />
          )}

          {!loading && item && (
            <div key={item.id} >
              <h3>Delivery Information</h3>
              <TrackDetails
                item={item}
              />
            </div>
          )}
        </section>

        <footer>
          <Footer />
        </footer>
      </>
    );
  }
}

/**
 * Prop types.
 */

PageHomepage.propTypes = {
  deliveries: PropTypes.shape({
    error: PropTypes.object,
    item: PropTypes.array,
    loading: PropTypes.bool
  }).isRequired,
  getDelivery: PropTypes.func,
  resetDelivery: PropTypes.func
};

PageHomepage.defaultProps = {
  getDelivery: null,
  resetDelivery: null,
};

/**
 * State and dispatch props.
 */

const mapStateToProps = (state) => ({
  deliveries: state.deliveries
});

const mapDispatchToProps = (dispatch) => ({
  getDelivery: (id) => dispatch(getDelivery(id)),
  resetDelivery: () => dispatch(resetDelivery())
});

/**
 * Export `PageHomepage`.
 */

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PageHomepage);
