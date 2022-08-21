/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.server.Movers.MoverStates {
    /** @customConstructor ISBaseState:new */
    export class ISBaseState extends lua.shared.ISBaseObject {
      [id: string]: any;
      static [id: string]: any;

      constructor();

      during: (() => any) | any;

      enter: (() => any) | any;

      exit: (() => any) | any;

      isFinished: (() => any) | any;
    }
  }
  export namespace lua.server.Movers.MoverStates.ISBaseState {}
}
