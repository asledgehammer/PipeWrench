/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.shared.TimedActions {
    /** @customConstructor ISDropWorldItemAction:new */
    export class ISDropWorldItemAction extends lua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      isMultiple: any;

      item: any;

      rotation: any;

      sound: any;

      sq: any;

      xoffset: any;

      yoffset: any;

      zoffset: any;

      constructor(
        character: any,
        item: any,
        sq: any,
        xoffset: any,
        yoffset: any,
        zoffset: any,
        rotation: any,
        isMultiple: any,
      );

      complete(...__args: never[]): any;
    }
  }
  export namespace lua.shared.TimedActions.ISDropWorldItemAction {}
}
