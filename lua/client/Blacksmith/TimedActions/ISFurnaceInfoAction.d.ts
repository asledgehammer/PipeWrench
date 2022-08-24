/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.Blacksmith.TimedActions {
    /** @customConstructor ISFurnaceInfoAction:new */
    export class ISFurnaceInfoAction extends lua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      object: any;

      playerNum: any;

      constructor(character: any, object: any);
    }
  }
  export namespace lua.client.Blacksmith.TimedActions.ISFurnaceInfoAction {}
}
