/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.TimedActions {
    /** @customConstructor ISMedicalCheckAction:new */
    export class ISMedicalCheckAction extends lua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      forceProgressBar: any;

      otherPlayer: any;

      otherPlayerX: any;

      otherPlayerY: any;

      constructor(character: any, otherPlayer: any);

      /** @noSelf */
      static getHealthWindowForPlayer: (playerObj: any) => any;
    }
  }
  export namespace lua.client.TimedActions.ISMedicalCheckAction {}
}
