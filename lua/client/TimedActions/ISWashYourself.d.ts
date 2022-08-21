/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.TimedActions {
    /** @customConstructor ISWashYourself:new */
    export class ISWashYourself extends lua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      forceProgressBar: any;

      sink: any;

      soaps: any;

      sound: any;

      constructor(character: any, sink: any, soapList: any);

      removeAllMakeup: (() => any) | any;

      removeMakeup: ((item: any) => any) | any;

      stopSound: (() => any) | any;

      washPart: ((visual: any, part: any) => any) | any;

      /** @noSelf */
      static GetRequiredSoap: (character: any) => any;

      /** @noSelf */
      static GetRequiredWater: (character: any) => any;
    }
  }
  export namespace lua.client.TimedActions.ISWashYourself {}
}
