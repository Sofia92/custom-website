/**
 * User: sofia
 * Date: 2018/1/22
 * Version: 1.0.0
 * Description:
 */
interface IServerInterface {
  id?: number;
  name?: string;
  enName?: string;
  category?: string;
  subCategory?: string;
}
export class TagSerialize {
  static normalizeTags(tags: IServerInterface[]) {
    const tagsSet = new Set(tags.map(a => a.category)), results = []

    return results;
  }
}
