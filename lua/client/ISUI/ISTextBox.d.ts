/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.ISUI {
    /** @customConstructor ISTextBox:new */
    export class ISTextBox extends lua.client.ISUI.ISPanelJoypad {
      [id: string]: any;
      static [id: string]: any;

      colorBtn: any;

      colorPicker: any;

      currentColor: any;

      defaultEntryText: any;

      entry: any;

      errorMsg: any;

      fontHgt: any;

      maxLines: any;

      multipleLine: any;

      name: any;

      no: any;

      numLines: any;

      onclick: any;

      param1: any;

      param2: any;

      param3: any;

      param4: any;

      player: any;

      showError: any;

      target: any;

      text: any;

      titlebarbkg: any;

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

      destroy(...__args: never[]): any;

      enableColorPicker(...__args: never[]): any;

      getMaxLines(...__args: never[]): any;

      onClick(button: any, ...__args: never[]): any;

      onColorPicker(button: any, ...__args: never[]): any;

      onGainJoypadFocus(joypadData: any, ...__args: never[]): any;

      onPickedColor(color: any, mouseUp: any, ...__args: never[]): any;

      render(...__args: never[]): any;

      setMaxLines(max: any, ...__args: never[]): any;

      setMultipleLine(multiple: any, ...__args: never[]): any;

      setNumberOfLines(numLines: any, ...__args: never[]): any;

      setOnlyNumbers(onlyNumbers: any, ...__args: never[]): any;

      setValidateFunction(target: any, func: any, arg1: any, arg2: any, ...__args: never[]): any;

      setValidateTooltipText(text: any, ...__args: never[]): any;

      showErrorMessage(show: any, errorMsg: any, ...__args: never[]): any;

      titleBarHeight(...__args: never[]): any;

      updateButtons(...__args: never[]): any;
    }
  }
  export namespace lua.client.ISUI.ISTextBox {}
}
