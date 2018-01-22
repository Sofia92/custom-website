/* SystemJS module definition */
declare var module: NodeModule;
interface NodeModule {
  id: string;
}
declare namespace AppCommonModule {
  interface IPageInfoDataInterface {
    total?: number;
    size?: number;
    page?: number;
  }
}
