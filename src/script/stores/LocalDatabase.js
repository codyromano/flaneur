import Database from 'stores/Database';
import {isObject} from 'flaneur-utils';

export default class LocalDatabase extends Database {
  constructor(...args) {
    super(...args);
    this.local = window.localStorage;
  }
  getLocalKey(key) {
    return `${this.namespace}_${key}`;
  }
  isObject(key) {
    const localKey = this.getLocalKey(key);
    const flag = this.local.getItem(`${localKey}_isObject`);
    return flag == 'true';
  }
  save(key, value) {
    const localKey = this.getLocalKey(key);

    if (isObject(value)) {
      this.local.setItem(localKey, JSON.stringify(value));
      this.local.setItem(`${localKey}_isObject`, true);
    } else {
      this.local.setItem(localKey, value);
      this.local.setItem(`${localKey}_isObject`, false);
    }

    return new Promise(resolve => resolve());
  }
  get(key) {
    const localKey = this.getLocalKey(key);

    return new Promise((resolve, reject) => {
      const value = this.local.getItem(localKey);

      if (value === null) {
        resolve(null);
      } else if (this.isObject(key)) {
        try {
          const parsed = JSON.parse(value);
          resolve(parsed);
        } catch (err) {
          reject(`Error parsing local object with key :`, key, err);
        }
      } else {
        resolve(value);
      }
    });
  }
}