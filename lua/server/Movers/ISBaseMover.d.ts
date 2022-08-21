/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.server.Movers {
    /** @customConstructor ISBaseMover:new */
    export class ISBaseMover extends lua.shared.ISBaseObject {
      [id: string]: any;
      static [id: string]: any;

      javaObject: any;

      sprite: any;

      states: any;

      constructor();

      changeState: ((state: any) => any) | any;

      getSprite: (() => any) | any;

      init: (() => any) | any;

      placeInWorld: ((x: any, y: any, z: any) => any) | any;

      playAnim: ((name: any, seconds: any, looped: any, animate: any) => any) | any;

      postrender: ((col: any, bDoAttached: any) => any) | any;

      removeFromWorld: (() => any) | any;

      update: (() => any) | any;
    }
  }
  export namespace lua.server.Movers.ISBaseMover {}
}
