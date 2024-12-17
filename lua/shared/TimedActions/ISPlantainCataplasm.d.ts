/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.shared.TimedActions {
    /** @customConstructor ISPlantainCataplasm:new */
    export class ISPlantainCataplasm extends lua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      bandagedPlayerX: any;

      bandagedPlayerY: any;

      bodyPart: any;

      doctorLevel: any;

      item: any;

      otherPlayer: any;

      constructor(character: any, otherPlayer: any, item: any, bodyPart: any);

      complete(...__args: never[]): any;
    }
  }
  export namespace lua.shared.TimedActions.ISPlantainCataplasm {}
}
