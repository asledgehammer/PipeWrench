/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
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

      createChildren(...__args: never[]): any;

      joypadSensitivityM(...__args: never[]): any;

      joypadSensitivityP(...__args: never[]): any;

      onControllerSelected(...__args: never[]): any;

      OnGamepadConnect(index: any, ...__args: never[]): any;

      OnGamepadDisconnect(index: any, ...__args: never[]): any;

      render(...__args: never[]): any;

      setControllerCombo(...__args: never[]): any;
    }
  }
  export namespace lua.client.ISUI.ISControllerTestPanel {}
}
