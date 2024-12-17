/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.shared {
    /** @customConstructor ISBaseObject:new */
    export class ISBaseObject {
      [id: string]: any;
      static [id: string]: any;

      __eventListeners: any;

      __index: any;

      constructor();

      addEventListener(_event: any, _callback: any, _target: any, ...__args: never[]): any;

      clearEventListeners(...__args: never[]): any;

      derive(type: any, ...__args: never[]): any;

      initialise(...__args: never[]): any;

      removeEventListener(_event: any, _callback: any, ...__args: never[]): any;

      triggerEvent(_event: any, undefined: any, ...__args: never[]): any;
    }
  }
  export namespace lua.shared.ISBaseObject {}
}
