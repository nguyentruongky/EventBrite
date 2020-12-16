import {add} from 'react-native-reanimated';

export class Event {
  name: string;
  id: string;
  url: string;
  images: Image[];
  startDate: Date;
  hostName: string;
  hostId: number;
  info?: string;
  pleaseNote?: string;
  venue: Venue;

  constructor(raw: any) {
    this.name = raw['name'];
    this.id = raw['id'];
    this.url = raw['url'];

    const imagesRaw = raw['images'] as [];
    this.images = imagesRaw.map((raw) => new Image(raw));

    let rawDate = raw['dates']['start']['dateTime'];
    rawDate = rawDate ?? raw['dates']['start']['localDate'];
    this.startDate = new Date(rawDate);

    this.hostId = raw['promoter']['id'];
    this.hostName = raw['promoter']['name'];

    this.info = raw['info'];
    this.pleaseNote = raw['pleaseNote'];

    const venueRaw = (raw['_embedded']['venues'] as [any])[0];
    this.venue = new Venue(venueRaw);
  }
}

export class Image {
  url: string;
  width: number;
  height: number;
  constructor(raw: any) {
    this.url = raw['url'];
    this.width = raw['width'];
    this.height = raw['height'];
  }
}

export class Venue {
  name: string;
  id: string;
  lat: number;
  long: number;
  address: string;
  constructor(raw: any) {
    this.name = raw['name'];
    this.id = raw['id'];
    this.lat = raw['location']['latitude'];
    this.long = raw['location']['longitude'];
    const address = raw['address']['line1'];
    const city = raw['city']['name'];
    const state = raw['state']['name'];
    this.address = `${address}, ${city}, ${state}`;
  }
}
