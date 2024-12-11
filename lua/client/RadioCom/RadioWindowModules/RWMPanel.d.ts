/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.RadioCom.RadioWindowModules {
    /** @customConstructor RWMPanel:new */
    export class RWMPanel extends lua.client.ISUI.ISPanelJoypad {
      [id: string]: any;
      static [id: string]: any;

      device: any;

      deviceData: any;

      deviceType: any;

      focusElement: any;

      overrideBPrompt: any;

      player: any;

      playerNum: any;

      radioParent: any;

      wrapParent: any;

      constructor(x: any, y: any, width: any, height: any);

      clear(...__args: never[]): any;

      createChildren(...__args: never[]): any;

      doWalkTo(...__args: never[]): any;

      getAPrompt(...__args: never[]): any;

      getBPrompt(...__args: never[]): any;

      getXPrompt(...__args: never[]): any;

      getYPrompt(...__args: never[]): any;

      isValidPrompt(...__args: never[]): any;

      readFromObject(_player: any, _deviceObject: any, _deviceData: any, _deviceType: any, ...__args: never[]): any;

      render(...__args: never[]): any;

      setFocus(_playerNum: any, _radioParent: any, _parent: any, ...__args: never[]): any;

      update(...__args: never[]): any;
    }
  }
  export namespace lua.client.RadioCom.RadioWindowModules.RWMPanel {}
}
