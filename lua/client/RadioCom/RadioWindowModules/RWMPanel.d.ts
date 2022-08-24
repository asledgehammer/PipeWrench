/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
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

      clear: (() => any) | any;

      createChildren: (() => any) | any;

      doWalkTo: (() => any) | any;

      getAPrompt: (() => any) | any;

      getBPrompt: (() => any) | any;

      getXPrompt: (() => any) | any;

      getYPrompt: (() => any) | any;

      isValidPrompt: (() => any) | any;

      readFromObject: ((_player: any, _deviceObject: any, _deviceData: any, _deviceType: any) => any) | any;

      render: (() => any) | any;

      setFocus: ((_playerNum: any, _radioParent: any, _parent: any) => any) | any;

      update: (() => any) | any;
    }
  }
  export namespace lua.client.RadioCom.RadioWindowModules.RWMPanel {}
}
