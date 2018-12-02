// @flow

import {
  FETCH_OFFERS_REQUEST,
  FETCH_OFFERS_SUCCESS,
  FETCH_OFFERS_FAILURE,
  CHANGE_TAB,
  UPDATE_SELECTED_USER,
  UPDATE_SELECTED_OFFER,
  CREATE_OFFER,
} from '../actions/offersActions';

const initialState = {
  fetching: false,
  fetched: false,
  offers: [],
  selectedUser: null,
  selectedOffer: null,
  tab: 0,
};

export default function reducer(state: any = initialState, action: any) {
  switch (action.type) {
    case FETCH_OFFERS_REQUEST: {
      return { ...state, fetching: true, fetched: false };
    }
    case FETCH_OFFERS_SUCCESS: {
      return { ...state, fetching: false, fetched: true, offers: action.offers }; 
    }
    case FETCH_OFFERS_FAILURE: {
      return { ...state, fetching: false, fetched: false };
    }
    case CHANGE_TAB: {
      return { ...state, tab: action.tab };
    }
    case UPDATE_SELECTED_USER: {
      return { ...state, selectedUser: action.selectedUser };
    }
    case UPDATE_SELECTED_OFFER: {
      return { ...state, selectedOffer: action.selectedOffer };
    }
    case CREATE_OFFER: {
      return { ...state, offers: [...state.offers, action.offers]}
    }
    default:
      return state;
  }
}