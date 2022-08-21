/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
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

      calculateHeights: (() => any) | any;

      clear: (() => any) | any;

      createChildren: (() => any) | any;

      getAPrompt: (() => any) | any;

      getBPrompt: (() => any) | any;

      getLBPrompt: (() => any) | any;

      getRBPrompt: (() => any) | any;

      getXPrompt: (() => any) | any;

      getYPrompt: (() => any) | any;

      isValidPrompt: (() => any) | any;

      onGainJoypadFocus: ((joypadData: any) => any) | any;

      onHeaderClick: (() => any) | any;

      onLoseJoypadFocus: ((joypadData: any) => any) | any;

      readFromObject: ((_player: any, _deviceObject: any, _deviceData: any, _deviceType: any) => any) | any;

      render: (() => any) | any;

      setExpanded: ((_bool: any) => any) | any;

      setFocus: ((_playerNum: any, _radioParent: any) => any) | any;
    }
  }
  export namespace lua.client.RadioCom.RadioWindowModules.RWMElement {}
}
