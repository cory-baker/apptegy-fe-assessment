import axios, { type AxiosInstance } from 'axios';

class Api {
  private _axios: AxiosInstance;

  constructor() {
    this._axios = axios.create();
  }

  public async fetchRandomUser() {
    const res = await this._axios.get('https://randomuser.me/api/?nat=us&results=10');
    return res.data.results;
  }
  
  public async fetchWitchesAndWizards() {
    const res = await this._axios.get('https://potterapi-fedeperin.vercel.app/en/characters');
    return res.data;
  }
}

export const $api = new Api();