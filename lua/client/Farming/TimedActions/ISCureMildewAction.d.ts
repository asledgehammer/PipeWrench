/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.Farming.TimedActions {
    /** @customConstructor ISCureMildewAction:new */
    export class ISCureMildewAction extends lua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      item: any;

      plant: any;

      uses: any;

      constructor(character: any, item: any, uses: any, plant: any, time: any);
    }
  }
  export namespace lua.client.Farming.TimedActions.ISCureMildewAction {}
}
