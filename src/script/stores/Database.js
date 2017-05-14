export default class Db {
  constructor(namespace = 'main') {
    this.namespace = namespace;
  }
  /**
  * @returns Promise
  */
  save(key, value) {}
  /**
  * @returns Promise
  */
  get(key) {}
}