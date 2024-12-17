/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.shared.TimedActions {
    /** @customConstructor ISWashYourself:new */
    export class ISWashYourself extends lua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      forceProgressBar: any;

      sink: any;

      soaps: any;

      sound: any;

      useSoap: any;

      constructor(character: any, sink: any, soaps: any);

      complete(...__args: never[]): any;

      removeAllMakeup(...__args: never[]): any;

      removeMakeup(item: any, ...__args: never[]): any;

      stopSound(...__args: never[]): any;

      washPart(visual: any, part: any, ...__args: never[]): any;

      /** @noSelf */
      static GetRequiredSoap: (character: any, ...__args: never[]) => any;

      /** @noSelf */
      static GetRequiredWater: (character: any, ...__args: never[]) => any;
    }
  }
  export namespace lua.shared.TimedActions.ISWashYourself {}
}
