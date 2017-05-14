import Database from 'stores/Database';

export default class RemoteDatabase extends Database {
  constructor(...args) {
    super(...args);
  }
  /* Commenting out because I want to show implementation,
  but ESLint throws error for unused var */
  save(/*key, value*/) {
  }
  get(/*key*/) {
  }
}