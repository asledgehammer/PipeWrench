/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.server.Movers.MoverStates {
    /** @customConstructor ISBaseState:new */
    export class ISBaseState extends lua.shared.ISBaseObject {
      [id: string]: any;
      static [id: string]: any;

      constructor();

      during(...__args: never[]): any;

      enter(...__args: never[]): any;

      exit(...__args: never[]): any;

      isFinished(...__args: never[]): any;
    }
  }
  export namespace lua.server.Movers.MoverStates.ISBaseState {}
}
