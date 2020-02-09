
/**
 * Module dependencies.
 */

import actionTypes from '../action-types';

/**
 * Get a specific delivery.
 */

export function getDelivery(data) {
  return (dispatch) => {
    dispatch({ type: actionTypes.GET_DELIVERY, payload: data });
  };
}

/**
 * Reset a delivery.
 */

export function resetDelivery() {
  return (dispatch) => {
    dispatch({ type: actionTypes.RESET_DELIVERY });
  };
}
