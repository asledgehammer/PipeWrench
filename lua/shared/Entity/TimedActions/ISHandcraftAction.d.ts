/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.shared.Entity.TimedActions {
    /** @customConstructor ISHandcraftAction:new */
    export class ISHandcraftAction extends lua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      actionScript: any;

      containers: any;

      craftBench: any;

      craftRecipe: any;

      isoObject: any;

      items: any;

      logic: any;

      manualInputs: any;

      onCancelFunc: any;

      onCancelTarget: any;

      onCompleteFunc: any;

      onCompleteTarget: any;

      onStartFunc: any;

      onStartTarget: any;

      sound: any;

      constructor(
        character: any,
        craftRecipe: any,
        containers: any,
        isoObject: any,
        craftBench: any,
        manualInputs: any,
        items: any,
      );

      serverStart(...__args: never[]): any;

      setOnCancel(_func: any, _target: any, ...__args: never[]): any;

      setOnComplete(_func: any, _target: any, ...__args: never[]): any;

      setOnStart(_func: any, _target: any, ...__args: never[]): any;

      /** @noSelf */
      static FromLogic: (handcraftLogic: any, ...__args: never[]) => any;

      /** @noSelf */
      static FromLogicMultiple: (handcraftLogic: any, ...__args: never[]) => any;
    }
  }
  export namespace lua.shared.Entity.TimedActions.ISHandcraftAction {}
}
