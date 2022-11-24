/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.shared.TimedActions {
    /** @customConstructor ISBaseTimedAction:new */
    export class ISBaseTimedAction extends lua.shared.ISBaseObject {
      [id: string]: any;
      static [id: string]: any;

      action: any;

      caloriesModifier: any;

      character: any;

      maxTime: any;

      stopOnAim: any;

      stopOnRun: any;

      stopOnWalk: any;

      constructor(character: any);

      addAfter: ((action: any) => any) | any;

      adjustMaxTime: ((maxTime: any) => any) | any;

      begin: (() => any) | any;

      create: (() => any) | any;

      forceComplete: (() => any) | any;

      forceStop: (() => any) | any;

      getJobDelta: (() => any) | any;

      isValid: (() => any) | any;

      isValidStart: (() => any) | any;

      perform: (() => any) | any;

      resetJobDelta: (() => any) | any;

      setActionAnim: ((_action: any, _displayItemModels: any) => any) | any;

      setAnimVariable: ((_key: any, _val: any) => any) | any;

      setCurrentTime: ((time: any) => any) | any;

      setOverrideHandModels: ((_primaryHand: any, _secondaryHand: any, _resetModel: any) => any) | any;

      setOverrideHandModelsString: ((_primaryHand: any, _secondaryHand: any, _resetModel: any) => any) | any;

      setTime: ((time: any) => any) | any;

      start: (() => any) | any;

      stop: (() => any) | any;

      update: (() => any) | any;

      waitToStart: (() => any) | any;
    }
  }
  export namespace lua.shared.TimedActions.ISBaseTimedAction {}
}
