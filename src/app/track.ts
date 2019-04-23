export class Track {
  get artists(): any[] {
    return this._artists;
  }

  get available_markets(): string[] {
    return this._available_markets;
  }

  get disc_number(): number {
    return this._disc_number;
  }

  get duration_ms(): number {
    return this._duration_ms;
  }

  get explicit(): boolean {
    return this._explicit;
  }

  get external_urls(): any[] {
    return this._external_urls;
  }

  get href(): string {
    return this._href;
  }

  get id(): string {
    return this._id;
  }

  get is_local(): boolean {
    return this._is_local;
  }

  get name(): string {
    return this._name;
  }

  get preview_url(): string {
    return this._preview_url;
  }

  get track_number(): number {
    return this._track_number;
  }

  get type(): string {
    return this._type;
  }

  get uri(): string {
    return this._uri;
  }
  private _artists: any[];
  private _available_markets: string[];
  private _disc_number: number;
  private _duration_ms: number;
  private _explicit: boolean;
​​​​  private _external_urls: any[];
  private _href: string;
  private _id: string;
​​​​  private _is_local: boolean;
​​​​  private _name: string;
​​​​  private _preview_url: string;
​​​​  private _track_number: number;
​​​​  private _type: string;
​​​​  private _uri: string;

  constructor(mArtists: any[], mAvailable_markets: string[], mDisc_number: number, mDuration_ms: number, mExplicit: boolean, mExternal_urls: any[], mHref: string, mid: string, mis_local: boolean, name: string, preview_url: string, track_number: number, type: string, uri: string ) {

     this._artists = mArtists;
     this._available_markets = mAvailable_markets;
     this._disc_number = mDisc_number;
     this._duration_ms = mDuration_ms;
     this._artists = mArtists;
     this._explicit = mExplicit;
     this._external_urls = mExternal_urls;
     this._href = mHref;
     this._id = mid;
     this._is_local = mis_local;
     this._name = name;
     this._preview_url = preview_url;
     this._track_number = track_number;
     this._type = type;
     this._uri = uri;

  }

}
