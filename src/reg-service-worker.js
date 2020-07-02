import { register } from 'register-service-worker';

if (process.env.NODE_ENV === 'production') {
  register(`${process.env.BASE_URL}service-worker.js`, {
    ready() {
      console.log('covidnepal is registering...');
    },
    registered(registration) {
      console.log('covidnepal has been registered.');
      setInterval(() => {
        registration.update();
      }, 1000 * 60 * 20);
    },
    cached() {
      console.log('covidnepal has been cached for offline use.');
    },
    updatefound() {
      console.log('New content is downloading.');
    },
    updated(registration) {
      console.log('New updates available; please update.');
      document.dispatchEvent(
        new CustomEvent('swUpdated', { detail: registration })
      );
    },
    offline() {
      console.log('No internet connection found. covidnepal is running in offline mode.');
    },
    error(error) {
      console.error('Error during service worker registration:', error);
    },
  });
}