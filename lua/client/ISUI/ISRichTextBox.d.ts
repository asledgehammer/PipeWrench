/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.ISUI {
    /** @customConstructor ISRichTextBox:new */
    export class ISRichTextBox extends lua.client.ISUI.ISPanelJoypad {
      [id: string]: any;
      static [id: string]: any;

      chatText: any;

      defaultEntryText: any;

      entry: any;

      fontHgt: any;

      name: any;

      no: any;

      onclick: any;

      param1: any;

      param2: any;

      param3: any;

      param4: any;

      player: any;

      target: any;

      text: any;

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

      onClick: ((button: any) => any) | any;

      onGainJoypadFocus: ((joypadData: any) => any) | any;

      render: (() => any) | any;

      setOnlyNumbers: ((onlyNumbers: any) => any) | any;

      setValidateFunction: ((target: any, func: any, arg1: any, arg2: any) => any) | any;

      setValidateTooltipText: ((text: any) => any) | any;

      update: (() => any) | any;
    }
  }
  export namespace lua.client.ISUI.ISRichTextBox {}
}
