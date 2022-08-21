/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.DebugUIs {
    /** @customConstructor DebugScenarios:new */
    export class DebugScenarios extends lua.client.ISUI.ISPanel {
      [id: string]: any;
      static [id: string]: any;

      static instance: any;

      header: any;

      listbox: any;

      constructor(x: any, y: any, width: any, height: any);

      createChildren: (() => any) | any;

      drawItem: ((y: any, item: any, alt: any) => any) | any;

      launchScenario: ((scenario: any) => any) | any;

      onClickOption: ((option: any) => any) | any;

      onResolutionChange: ((oldw: any, oldh: any, neww: any, newh: any) => any) | any;

      /** @noSelf */
      static ongamestart: () => any;

      /** @noSelf */
      static onloadgs: (sq: any) => any;
    }
  }
  export namespace lua.client.DebugUIs.DebugScenarios {
    /** @noSelf */
    export const doDebugScenarios: () => any;
  }
}
