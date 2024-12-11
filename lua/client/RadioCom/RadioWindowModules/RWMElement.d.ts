/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.RadioCom.RadioWindowModules {
    /** @customConstructor RWMElement:new */
    export class RWMElement extends lua.client.ISUI.ISPanelJoypad {
      [id: string]: any;
      static [id: string]: any;

      buttonTexture: any;

      drawJoypadFocus: any;

      fontheight: any;

      fontheightMed: any;

      headerButton: any;

      isExpanded: any;

      isJoypadWindow: any;

      overrideBPrompt: any;

      playerNum: any;

      radioParent: any;

      subpanel: any;

      titleText: any;

      constructor(x: any, y: any, width: any, height: any, subpanel: any, title: any, radioParent: any);

      calculateHeights(...__args: never[]): any;

      clear(...__args: never[]): any;

      createChildren(...__args: never[]): any;

      getAPrompt(...__args: never[]): any;

      getBPrompt(...__args: never[]): any;

      getLBPrompt(...__args: never[]): any;

      getRBPrompt(...__args: never[]): any;

      getXPrompt(...__args: never[]): any;

      getYPrompt(...__args: never[]): any;

      isValidPrompt(...__args: never[]): any;

      onGainJoypadFocus(joypadData: any, ...__args: never[]): any;

      onHeaderClick(...__args: never[]): any;

      onLoseJoypadFocus(joypadData: any, ...__args: never[]): any;

      readFromObject(_player: any, _deviceObject: any, _deviceData: any, _deviceType: any, ...__args: never[]): any;

      render(...__args: never[]): any;

      setExpanded(_bool: any, ...__args: never[]): any;

      setFocus(_playerNum: any, _radioParent: any, ...__args: never[]): any;
    }
  }
  export namespace lua.client.RadioCom.RadioWindowModules.RWMElement {}
}
