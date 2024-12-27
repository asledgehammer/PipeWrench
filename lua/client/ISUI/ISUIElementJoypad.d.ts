/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.ISUI {
    /** @customConstructor ISUIElementJoypad:new */
    export class ISUIElementJoypad extends lua.client.ISUI.ISPanel {
      [id: string]: any;
      static [id: string]: any;

      __Class: any;

      playerNum: any;

      constructor(x: any, y: any, width: any, height: any);

      addChild(otherElement: any, ...__args: never[]): any;

      clearChildren(...__args: never[]): any;

      focusFirstJoypadElement(joypadData: any, ...__args: never[]): any;

      focusJoypadSelf(...__args: never[]): any;

      focusNextJoypadElement(joypadData: any, ...__args: never[]): any;

      focusPreviousJoypadElement(joypadData: any, ...__args: never[]): any;

      getAPrompt(...__args: never[]): any;

      getBPrompt(...__args: never[]): any;

      getLBPrompt(...__args: never[]): any;

      getRBPrompt(...__args: never[]): any;

      getXPrompt(...__args: never[]): any;

      getYPrompt(...__args: never[]): any;

      hasJoypadFocus(...__args: never[]): any;

      inheritingClassCall(_functionName: any, undefined: any, ...__args: never[]): any;

      isValidPrompt(...__args: never[]): any;

      onGainJoypadFocus(joypadData: any, ...__args: never[]): any;

      onJoypadDirDown(...__args: never[]): any;

      onJoypadDirLeft(...__args: never[]): any;

      onJoypadDirRight(...__args: never[]): any;

      onJoypadDirUp(...__args: never[]): any;

      onJoypadDown(button: any, ...__args: never[]): any;

      onLoseJoypadFocus(joypadData: any, ...__args: never[]): any;

      orderJoypadChildren(_recursive: any, ...__args: never[]): any;

      removeChild(otherElement: any, ...__args: never[]): any;

      setBucket(_bool: any, ...__args: never[]): any;

      setDefaultEventTarget(_target: any, ...__args: never[]): any;

      setEventCallback(_name: any, _func: any, _target: any, ...__args: never[]): any;

      setEventPromptText(_name: any, _text: any, ...__args: never[]): any;

      setFocusJoypadSelf(_bool: any, ...__args: never[]): any;

      setPlayerNum(_num: any, ...__args: never[]): any;

      setZOrder(_z: any, ...__args: never[]): any;

      unfocusJoypadSelf(...__args: never[]): any;

      unfocusRecursive(_focus: any, _playerNum: any, ...__args: never[]): any;

      static Inject: (_NewClass: any, _Class: any, undefined: any, ...__args: never[]) => any;

      static Wrap: (_Class: any, undefined: any, ...__args: never[]) => any;
    }
  }
  export namespace lua.client.ISUI.ISUIElementJoypad {}
}
