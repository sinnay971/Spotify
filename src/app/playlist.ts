export class Playlist {

  name: string;
  description: string;
  public: boolean;

  constructor (name: string, description: string, ispublic: boolean) {
    this.description = description;
    this.name = name;
    this.public = ispublic;
  }
}
