/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.DebugUIs {
    /** @customConstructor DebugScenarios:new */
    export class DebugScenarios extends lua.client.ISUI.ISPanel {
      [id: string]: any;
      static [id: string]: any;

      static instance: any;

      header: any;

      listbox: any;

      constructor(x: any, y: any, width: any, height: any);

      createChildren(...__args: never[]): any;

      drawItem(y: any, item: any, alt: any, ...__args: never[]): any;

      launchScenario(scenario: any, ...__args: never[]): any;

      onClickOption(option: any, ...__args: never[]): any;

      onResolutionChange(oldw: any, oldh: any, neww: any, newh: any, ...__args: never[]): any;

      /** @noSelf */
      static ongamestart: (...__args: never[]) => any;

      /** @noSelf */
      static onloadgs: (sq: any, ...__args: never[]) => any;
    }
  }
  export namespace lua.client.DebugUIs.DebugScenarios {
    /** @noSelf */
    export const doDebugScenarios: () => any;
  }
}
