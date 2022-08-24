/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
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
        param4: any
      );

      destroy: (() => any) | any;

      enableColorPicker: (() => any) | any;

      getMaxLines: (() => any) | any;

      onClick: ((button: any) => any) | any;

      onColorPicker: ((button: any) => any) | any;

      onGainJoypadFocus: ((joypadData: any) => any) | any;

      onPickedColor: ((color: any, mouseUp: any) => any) | any;

      render: (() => any) | any;

      setMaxLines: ((max: any) => any) | any;

      setMultipleLine: ((multiple: any) => any) | any;

      setNumberOfLines: ((numLines: any) => any) | any;

      setOnlyNumbers: ((onlyNumbers: any) => any) | any;

      setValidateFunction: ((target: any, func: any, arg1: any, arg2: any) => any) | any;

      setValidateTooltipText: ((text: any) => any) | any;

      showErrorMessage: ((show: any, errorMsg: any) => any) | any;

      titleBarHeight: (() => any) | any;

      updateButtons: (() => any) | any;
    }
  }
  export namespace lua.client.ISUI.ISTextBox {}
}
