/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.RadioCom {
    /** @customConstructor ISRadioWindow:new */
    export class ISRadioWindow extends lua.client.ISUI.ISCollapsableWindow {
      [id: string]: any;
      static [id: string]: any;

      device: any;

      deviceData: any;

      deviceType: any;

      drawJoypadFocus: any;

      hotKeyPanels: any;

      isJoypadWindow: any;

      modules: any;

      overrideBPrompt: any;

      pin: any;

      player: any;

      playerNum: any;

      subFocus: any;

      constructor(x: any, y: any, width: any, height: any, player: any);

      addModule: ((_modulePanel: any, _moduleName: any, _enable: any) => any) | any;

      clear: (() => any) | any;

      focusNext: ((_up: any) => any) | any;

      focusSelf: (() => any) | any;

      getAPrompt: (() => any) | any;

      getBPrompt: (() => any) | any;

      getLBPrompt: (() => any) | any;

      getRBPrompt: (() => any) | any;

      getXPrompt: (() => any) | any;

      getYPrompt: (() => any) | any;

      isValidPrompt: (() => any) | any;

      onGainJoypadFocus: ((joypadData: any) => any) | any;

      onJoypadDirDown: (() => any) | any;

      onJoypadDirLeft: (() => any) | any;

      onJoypadDirRight: (() => any) | any;

      onJoypadDirUp: (() => any) | any;

      onJoypadDown: ((button: any) => any) | any;

      onLoseJoypadFocus: ((joypadData: any) => any) | any;

      readFromObject: ((_player: any, _deviceObject: any) => any) | any;

      setSubFocus: ((_newFocus: any) => any) | any;

      stayOnSplitScreen: (() => any) | any;

      unfocusSelf: (() => any) | any;

      update: (() => any) | any;

      /** @noSelf */
      static activate: (_player: any, _deviceObject: any) => any;

      /** @noSelf */
      static onEquip: (_player: any, _item: any) => any;
    }
  }
  export namespace lua.client.RadioCom.ISRadioWindow {}
}
