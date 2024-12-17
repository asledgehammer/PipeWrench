/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.ISUI.AdminPanel {
    /** @customConstructor ISServerOptionsChange:new */
    export class ISServerOptionsChange extends lua.client.ISUI.ISPanel {
      [id: string]: any;
      static [id: string]: any;

      booleanOption: any;

      buttonBorderColor: any;

      cancel: any;

      defaultBool: any;

      defaultOption: any;

      defaultText: any;

      entry: any;

      enumOption: any;

      errorTxt: any;

      onclick: any;

      option: any;

      resetBtn: any;

      saveBtn: any;

      target: any;

      variableColor: any;

      zOffsetSmallFont: any;

      constructor(x: any, y: any, width: any, height: any, target: any, onclick: any, option: any);

      create(...__args: never[]): any;

      onOptionMouseDown(button: any, x: any, y: any, ...__args: never[]): any;

      render(...__args: never[]): any;

      setVisible(visible: any, ...__args: never[]): any;

      updateButtons(...__args: never[]): any;
    }
  }
  export namespace lua.client.ISUI.AdminPanel.ISServerOptionsChange {}
}
