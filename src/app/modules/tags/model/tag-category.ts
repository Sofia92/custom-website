/**
 * User: sofia
 * Date: 2018/1/22
 * Version: 1.0.0
 * Description:
 */
export interface ITagCategoryInterface {
  id?: number;
  name?: string;
  enName?: string;
  category?: string;
  subCategory?: string;
}
export class TagCategory implements ITagCategoryInterface {
  id?: number;
  name?: string;
  enName?: string;
  category?: string;
  subCategory?: string;

  static createByJSON(json: ITagCategoryInterface): TagCategory {
    const {id, name, enName, category, subCategory} = json;
    return new TagCategory({id, name, enName, category, subCategory});
  }

  constructor(attr: ITagCategoryInterface = {}) {
    this.id = attr.id;
    this.name = attr.name;
    this.enName = attr.enName;
    this.category = attr.category;
    this.subCategory = attr.subCategory;
  }


}
