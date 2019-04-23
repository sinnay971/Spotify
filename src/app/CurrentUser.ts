
export class CurrentUser {

  private _birthdate: string;
  private _country: string;
  private _display_name: string;
  private _id: string;
  private _type: string;
  private _uri: string;

  get birthdate(): string {
    return this._birthdate;
  }

  set birthdate(value: string) {
    this._birthdate = value;
  }

  get country(): string {
    return this._country;
  }

  set country(value: string) {
    this._country = value;
  }

  get display_name(): string {
    return this._display_name;
  }

  set display_name(value: string) {
    this._display_name = value;
  }

  get id(): string {
    return this._id;
  }

  set id(value: string) {
    this._id = value;
  }

  get type(): string {
    return this._type;
  }

  set type(value: string) {
    this._type = value;
  }

  get uri(): string {
    return this._uri;
  }

  set uri(value: string) {
    this._uri = value;
  }

  constructor(birthday: string, country: string, display_name: string, id: string, type: string, uri: string){
    this.id = id;
    this.birthdate = birthday;
    this.country = country;
    this.display_name = display_name;
    this.uri = uri;
    this.type = type;
  }

}
