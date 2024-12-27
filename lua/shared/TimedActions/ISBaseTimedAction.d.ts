/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.shared.TimedActions {
    /** @customConstructor ISBaseTimedAction:new */
    export class ISBaseTimedAction extends lua.shared.ISBaseObject {
      [id: string]: any;
      static [id: string]: any;

      _isAddingActions: any;

      _numAddedActions: any;

      action: any;

      caloriesModifier: any;

      character: any;

      maxTime: any;

      stopOnAim: any;

      stopOnRun: any;

      stopOnWalk: any;

      constructor(character: any);

      addAfter(action: any, ...__args: never[]): any;

      adjustMaxTime(maxTime: any, ...__args: never[]): any;

      begin(...__args: never[]): any;

      beginAddingActions(...__args: never[]): any;

      create(...__args: never[]): any;

      endAddingActions(...__args: never[]): any;

      forceCancel(...__args: never[]): any;

      forceComplete(...__args: never[]): any;

      forceStop(...__args: never[]): any;

      getDeltaModifiers(deltas: any, ...__args: never[]): any;

      getDuration(...__args: never[]): any;

      getJobDelta(...__args: never[]): any;

      isStarted(...__args: never[]): any;

      isUsingTimeout(...__args: never[]): any;

      isValid(...__args: never[]): any;

      isValidStart(...__args: never[]): any;

      overrideWeaponType(...__args: never[]): any;

      perform(...__args: never[]): any;

      resetJobDelta(...__args: never[]): any;

      restoreWeaponType(...__args: never[]): any;

      setActionAnim(_action: any, _displayItemModels: any, ...__args: never[]): any;

      setAnimVariable(_key: any, _val: any, ...__args: never[]): any;

      setCurrentTime(time: any, ...__args: never[]): any;

      setOverrideHandModels(_primaryHand: any, _secondaryHand: any, _resetModel: any, ...__args: never[]): any;

      setOverrideHandModelsString(_primaryHand: any, _secondaryHand: any, _resetModel: any, ...__args: never[]): any;

      setTime(time: any, ...__args: never[]): any;

      start(...__args: never[]): any;

      stop(...__args: never[]): any;

      update(...__args: never[]): any;

      waitToStart(...__args: never[]): any;
    }
  }
  export namespace lua.shared.TimedActions.ISBaseTimedAction {}
}
