/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.shared.Util {
    /** @customConstructor LuaList:new */
    export class LuaList extends lua.shared.ISBaseObject {
      [id: string]: any;
      static [id: string]: any;

      count: any;

      items: any;

      constructor();

      add: ((item: any) => any) | any;

      addAll: ((list: any) => any) | any;

      clear: (() => any) | any;

      contains: ((item: any) => any) | any;

      foreach: ((func: any, param1: any, param2: any, param3: any, param4: any) => any) | any;

      get: ((index: any) => any) | any;

      isEmpty: (() => any) | any;

      pop: (() => any) | any;

      remove: ((item: any) => any) | any;

      removeAt: ((index: any) => any) | any;

      removeRandom: (() => any) | any;

      size: (() => any) | any;

      sort: ((f: any) => any) | any;
    }
  }
  export namespace lua.shared.Util.LuaList {}
}
