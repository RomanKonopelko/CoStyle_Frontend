import { store } from 'react-notifications-component';

const notificationError = {
  title: `Hello Guest!Try again!`,
  type: 'danger',
  container: 'top-right',
  animationIn: ['animate__animated animate__fadeIn'],
  animationOut: ['animate__animated animate__fadeOut'],
  dismiss: {
    duration: 3000,
    onScreen: true,
  },
};

export default function Notify(prop, name) {
  store.addNotification({
    ...notificationError,
    message: prop,
    title: `Hello ${name ? name : 'Guest'}!Try again!`,
  });
}
