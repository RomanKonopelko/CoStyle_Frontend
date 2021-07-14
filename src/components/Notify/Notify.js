import { store } from 'react-notifications-component';

const notificationError = {
  type: 'danger',
  container: 'top-right',
  animationIn: ['animate__animated animate__fadeIn'],
  animationOut: ['animate__animated animate__fadeOut'],
  dismiss: {
    duration: 4000,
    onScreen: true,
  },
};

export default function Notify(prop, name) {
  store.addNotification({
    ...notificationError,
    message: prop,
    title: `Привет, дорогой ${
      name ? name : 'Гость'
    }! Что-то пошло не так, попробуй еще раз!`,
  });
}
