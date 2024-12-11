/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.ISUI.Maps {
    /** @customConstructor ISTextBoxMap:new */
    export class ISTextBoxMap extends lua.client.ISUI.ISCollapsableWindowJoypad {
      [id: string]: any;
      static [id: string]: any;

      blackColor: any;

      character: any;

      colorButtonInfo: any;

      colorButtons: any;

      currentColor: any;

      defaultEntryText: any;

      entry: any;

      fontHgt: any;

      ISButtonA: any;

      ISButtonB: any;

      joypadIndex: any;

      joypadIndexY: any;

      mapUI: any;

      name: any;

      no: any;

      onclick: any;

      param1: any;

      param2: any;

      param3: any;

      param4: any;

      player: any;

      symbolsUI: any;

      target: any;

      text: any;

      tickBox: any;

      validateArgs: any;

      validateFunc: any;

      validateTarget: any;

      validateTooltipText: any;

      yes: any;

      constructor(
        x: any,
        y: any,
        width: any,
        height: any,
        text: any,
        defaultEntryText: any,
        target: any,
        onclick: any,
        player: any,
        param1: any,
        param2: any,
        param3: any,
        param4: any,
      );

      close(...__args: never[]): any;

      createChildren(...__args: never[]): any;

      destroy(...__args: never[]): any;

      isTranslation(...__args: never[]): any;

      onClick(button: any, ...__args: never[]): any;

      onCommandEntered(...__args: never[]): any;

      onGainJoypadFocus(joypadData: any, ...__args: never[]): any;

      onJoypadDirDown(joypadData: any, ...__args: never[]): any;

      onJoypadDirUp(joypadData: any, ...__args: never[]): any;

      onJoypadDown(button: any, joypadData: any, ...__args: never[]): any;

      onOtherKey(key: any, ...__args: never[]): any;

      prerender(...__args: never[]): any;

      render(...__args: never[]): any;

      selectColor(r: any, g: any, b: any, ...__args: never[]): any;

      setOnlyNumbers(onlyNumbers: any, ...__args: never[]): any;

      setValidateFunction(target: any, func: any, arg1: any, arg2: any, ...__args: never[]): any;

      setValidateTooltipText(text: any, ...__args: never[]): any;

      showTranslationTickBox(isTranslation: any, ...__args: never[]): any;

      updateButtons(...__args: never[]): any;
    }
  }
  export namespace lua.client.ISUI.Maps.ISTextBoxMap {}
}
