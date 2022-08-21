/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.server.Movers {
    /** @customConstructor ISMoverStateMachine:new */
    export class ISMoverStateMachine extends lua.shared.ISBaseObject {
      [id: string]: any;
      static [id: string]: any;

      mover: any;

      moverInst: any;

      state: any;

      constructor(mover: any);

      changeState: ((_new_: any) => any) | any;

      getCurrent: (() => any) | any;

      init: (() => any) | any;

      update: (() => any) | any;
    }
  }
  export namespace lua.server.Movers.MoverStateMachine {}
}
