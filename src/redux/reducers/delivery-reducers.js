
/**
 * Module dependencies.
 */

import actionTypes from '../action-types';
import deliveries from '../mockups/deliveries.json';

/**
 * `initialState`.
 */

const initialState = {
  item: null,
  loading: false,
  error: null
};

/**
 * Reducer `delivery`.
 */

export default function delivery(state = initialState, action) {
  switch (action.type) {
    case actionTypes.FETCH_DELIVERY:
      return {
        ...state,
        loading: true,
        error: null
      };

    case actionTypes.GET_DELIVERY:
      return {
        ...state,
        loading: false,
        item: deliveries.find((item) => item.id === action.payload)
      };

    case actionTypes.RESET_DELIVERY:
      return {
        ...state,
        loading: false,
        item: null
      };

    default:
      return state;
  }
}
