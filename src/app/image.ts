export class Image {
  private _url: string;
  public get url(): string {
    return this.url;
  }
  public set url(value: string) {
    this.url = value;
  }
  private _width: number;
  public get width(): number {
    return this._width;
  }
  public set width(value: number) {
    this._width = value;
  }
  private _height: number;
  public get height(): number {
    return this._height;
  }
  public set height(value: number) {
    this._height = value;
  }

  constructor(mImage: string, mWdith: number, mheight: number) {
    this.url = mImage;
    this.height = mheight;
    this.width = mWdith;
  }
}

