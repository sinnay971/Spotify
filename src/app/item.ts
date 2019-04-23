import { Image } from "./image";

export class Item {
  private _album_type: string;
  public get album_type(): string {
    return this._album_type;
  }
  public set album_type(value: string) {
    this._album_type = value;
  }
  private _artists: any[];
  public get artists(): any[] {
    return this._artists;
  }
  public set artists(value: any[]) {
    this._artists = value;
  }
  private _external_url: any;
  public get external_url(): any {
    return this._external_url;
  }
  public set external_url(value: any) {
    this._external_url = value;
  }
  private _href: string;
  public get href(): string {
    return this._href;
  }
  public set href(value: string) {
    this._href = value;
  }
  private _id: string;
  public get id(): string {
    return this._id;
  }
  public set id(value: string) {
    this._id = value;
  }
  private _images: Image[];
  public get images(): Image[] {
    return this._images;
  }
  public set images(value: Image[]) {
    this._images = value;
  }
  private _name: string;
  public get name(): string {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }
  private _release_date: string;
  public get release_date(): string {
    return this._release_date;
  }
  public set release_date(value: string) {
    this._release_date = value;
  }
  private _release_date_precision: string;
  public get release_date_precision(): string {
    return this._release_date_precision;
  }
  public set release_date_precision(value: string) {
    this._release_date_precision = value;
  }
  private _total_tracks: number;
  public get total_tracks(): number {
    return this._total_tracks;
  }
  public set total_tracks(value: number) {
    this._total_tracks = value;
  }
  private _type: string;
  public get type(): string {
    return this._type;
  }
  public set type(value: string) {
    this._type = value;
  }
  private _uri: string;
  public get uri(): string {
    return this._uri;
  }
  public set uri(value: string) {
    this._uri = value;
  }

  constructor(mAlbum_type: string, mArtists: any[], mExternal_url: any, mHref: string, mId: string, mImages: Image[], mName: string, mReleasedate: string, mrelease_date_precision: string, mTotal_tracks: number, mType: string, mUri: string) {
    this.album_type = mAlbum_type;
    this.artists = mArtists;
    this.external_url = mExternal_url;
    this.href = mHref;
    this.id = mId;
    this.images = mImages;
    this.name = mName;
    this.release_date = mReleasedate;
    this.release_date_precision = mrelease_date_precision;
    this.total_tracks = mTotal_tracks;
    this.type = mType;
    this.uri = mUri;
  }
}
