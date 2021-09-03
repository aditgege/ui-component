import {Module} from 'vuex';
import type {VToastProps} from './VToast';

export interface ToastState {
  show: boolean;
  message: string;
  options: VToastProps;
}

export const toastModule = <R>(): Module<ToastState, R> => ({
  namespaced: true,
  state: () => ({
    show: true,
    message: 'hello',
    options: {
      color: 'black',
      timeout: 3000,
    },
  }),
  mutations: {
    show(state, {message, options}: {message: string; options: VToastProps}) {
      state.message = message;
      state.show = true;
      state.options = {...state.options, ...options};
    },
  },
  getters: {
    message: (state) => state.message,
    show: (state) => state.show,
    options: (state) => state.options,
  },
});
