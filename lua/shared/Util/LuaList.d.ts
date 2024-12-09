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

      add(item: any, ...__args: never[]): any;

      addAll(list: any, ...__args: never[]): any;

      clear(...__args: never[]): any;

      contains(item: any, ...__args: never[]): any;

      foreach(func: any, param1: any, param2: any, param3: any, param4: any, ...__args: never[]): any;

      get(index: any, ...__args: never[]): any;

      isEmpty(...__args: never[]): any;

      pop(...__args: never[]): any;

      remove(item: any, ...__args: never[]): any;

      removeAt(index: any, ...__args: never[]): any;

      removeRandom(...__args: never[]): any;

      size(...__args: never[]): any;

      sort(f: any, ...__args: never[]): any;
    }
  }
  export namespace lua.shared.Util.LuaList {}
}
