/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/server' {
  export namespace lua.server.Movers.MoverStates {
    /** @customConstructor MoveToState:new */
    export class MoveToState extends lua.server.Movers.MoverStates.ISBaseState {
      [id: string]: any;
      static [id: string]: any;

      mover: any;

      x: any;

      y: any;

      z: any;

      constructor(mover: any, x: any, y: any, z: any);

      setTarget(x: any, y: any, z: any, ...__args: never[]): any;
    }
  }
  export namespace lua.server.Movers.MoverStates.MoveToState {}
}
