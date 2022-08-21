/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.Farming.TimedActions {
    /** @customConstructor ISPlantInfoAction:new */
    export class ISPlantInfoAction extends lua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      plant: any;

      playerNum: any;

      constructor(character: any, plant: any);
    }
  }
  export namespace lua.client.Farming.TimedActions.ISPlantInfoAction {}
}
