/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.ISUI {
    /** @customConstructor ISControllerTestPanel:new */
    export class ISControllerTestPanel extends lua.client.ISUI.ISPanel {
      [id: string]: any;
      static [id: string]: any;

      axisHgt: any;

      axisLabelWid: any;

      axisPadY: any;

      axisY: any;

      buttonGapX: any;

      buttonGapY: any;

      buttonWid: any;

      buttonX: any;

      combo: any;

      selectedController: any;

      smallFontHgt: any;

      constructor(x: any, y: any, width: any, height: any);

      createChildren: (() => any) | any;

      joypadSensitivityM: (() => any) | any;

      joypadSensitivityP: (() => any) | any;

      onControllerSelected: (() => any) | any;

      OnGamepadConnect: ((index: any) => any) | any;

      OnGamepadDisconnect: ((index: any) => any) | any;

      render: (() => any) | any;

      setControllerCombo: (() => any) | any;
    }
  }
  export namespace lua.client.ISUI.ISControllerTestPanel {}
}
