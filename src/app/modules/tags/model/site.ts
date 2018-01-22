/**
 * User: sofia
 * Date: 2018/1/22
 * Version: 1.0.0
 * Description:
 */
export interface ISiteInterface {
  id?: number;
  hostName?: string;
  title?: string;
  description?: string;
}

export class Site implements ISiteInterface {
  id?: number;
  hostName?: string;
  title?: string;
  description?: string;

  static createByJSON(json: ISiteInterface): Site {
    const {id, hostName, title, description} = json;
    return new Site({id, hostName, title, description});
  }

  constructor(attr: ISiteInterface) {
    this.id = attr.id;
    this.hostName = attr.hostName;
    this.title = attr.title;
    this.description = attr.description;
  }
}
