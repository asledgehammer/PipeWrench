/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.shared.TimedActions {
    /** @customConstructor ISScything:new */
    export class ISScything extends lua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      item: any;

      radius: any;

      sq: any;

      constructor(character: any, item: any, sq: any, radius: any);

      complete(...__args: never[]): any;

      getGrass(sq: any, ...__args: never[]): any;
    }
  }
  export namespace lua.shared.TimedActions.ISScything {}
}
