/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.shared {
    /** @customConstructor ISBaseObject:new */
    export class ISBaseObject {
      [id: string]: any;
      static [id: string]: any;

      __index: any;

      constructor();

      derive(type: any, ...__args: never[]): any;

      initialise(...__args: never[]): any;
    }
  }
  export namespace lua.shared.ISBaseObject {}
}
