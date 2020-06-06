import { html } from 'lit-element';
import { DemoFeature } from './demo-feat';

export class DemoFeatureConnected extends DemoFeature {
  connectedCallback() {
    super.connectedCallback();

    if (!this.data) {
      this._fetchData();
      /* this.data = [
        {
          country: 'China',
          cases: {
            new: '+10',
            active: 959,
            critical: 63,
            recovered: 77207,
            total: 82798,
          },
          deaths: {
            new: null,
            total: 4632,
          },
          tests: {
            total: null,
          },
          day: '2020-04-23',
          time: '2020-04-23T09:47:35+00:00',
        },
      ]; */
    }
  }

  async _fetchData() {
    const response = await fetch(
      'http://localhost:3000/campgrounds',
      {
        method: 'GET',
        mode: 'cors', // no-cors, *cors, same-origin
        headers: {
          'x-rapidapi-host': 'covid-193.p.rapidapi.com',
          'x-rapidapi-key':
            '5af96d14dbmsh51fc4214ae8ceb1p1a3d43jsncd88f5576ae6',
        },
      }
    );
    
    const jsonResponse = await response.json();

    this.data = jsonResponse;
    console.log('this.data', this.data);
  }
}

customElements.define('demo-feat-connected', DemoFeatureConnected);
