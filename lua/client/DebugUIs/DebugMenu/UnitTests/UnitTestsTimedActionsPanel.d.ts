/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.DebugUIs.DebugMenu.UnitTests {
    /** @customConstructor UnitTestsTimedActionsPanel:new */
    export class UnitTestsTimedActionsPanel extends lua.client.DebugUIs.DebugMenu.Base.ISDebugSubPanelBase {
      [id: string]: any;
      static [id: string]: any;

      tests: any;

      constructor(x: any, y: any, width: any, height: any, doStencil: any);

      createChildren(...__args: never[]): any;

      initialise(...__args: never[]): any;

      onRunAllButtonClick(_button: any, ...__args: never[]): any;

      onRunOneButtonClick(_button: any, ...__args: never[]): any;

      onStopButtonClick(_button: any, ...__args: never[]): any;

      onTicked(_index: any, _selected: any, _arg1: any, _arg2: any, _tickbox: any, ...__args: never[]): any;

      update(...__args: never[]): any;

      /** @noSelf */
      static onFail: (...__args: never[]) => any;

      /** @noSelf */
      static onStartTest: (name: any, ...__args: never[]) => any;

      /** @noSelf */
      static onSuccess: (...__args: never[]) => any;
    }

    export abstract class UnitTestsTimedActionsPanelTestResults {
      static [id: string]: any;
    }
  }
  export namespace lua.client.DebugUIs.DebugMenu.UnitTests.UnitTestsTimedActionsPanel {}
}
