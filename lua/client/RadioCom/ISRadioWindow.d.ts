/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
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

      addModule(_modulePanel: any, _moduleName: any, _enable: any, ...__args: never[]): any;

      clear(...__args: never[]): any;

      focusNext(_up: any, ...__args: never[]): any;

      focusSelf(...__args: never[]): any;

      getAPrompt(...__args: never[]): any;

      getBPrompt(...__args: never[]): any;

      getLBPrompt(...__args: never[]): any;

      getRBPrompt(...__args: never[]): any;

      getXPrompt(...__args: never[]): any;

      getYPrompt(...__args: never[]): any;

      isValidPrompt(...__args: never[]): any;

      onGainJoypadFocus(joypadData: any, ...__args: never[]): any;

      onJoypadDirDown(...__args: never[]): any;

      onJoypadDirLeft(...__args: never[]): any;

      onJoypadDirRight(...__args: never[]): any;

      onJoypadDirUp(...__args: never[]): any;

      onJoypadDown(button: any, ...__args: never[]): any;

      onLoseJoypadFocus(joypadData: any, ...__args: never[]): any;

      readFromObject(_player: any, _deviceObject: any, ...__args: never[]): any;

      setSubFocus(_newFocus: any, ...__args: never[]): any;

      stayOnSplitScreen(...__args: never[]): any;

      unfocusSelf(...__args: never[]): any;

      update(...__args: never[]): any;

      /** @noSelf */
      static activate: (_player: any, _deviceObject: any, ...__args: never[]) => any;

      /** @noSelf */
      static onEquip: (_player: any, _item: any, ...__args: never[]) => any;
    }
  }
  export namespace lua.client.RadioCom.ISRadioWindow {}
}
