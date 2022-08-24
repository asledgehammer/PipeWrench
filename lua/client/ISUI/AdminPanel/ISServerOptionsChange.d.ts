/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.ISUI.AdminPanel {
    /** @customConstructor ISServerOptionsChange:new */
    export class ISServerOptionsChange extends lua.client.ISUI.ISPanel {
      [id: string]: any;
      static [id: string]: any;

      booleanOption: any;

      buttonBorderColor: any;

      cancel: any;

      defaultBool: any;

      defaultText: any;

      entry: any;

      errorTxt: any;

      onclick: any;

      option: any;

      resetBtn: any;

      saveBtn: any;

      target: any;

      variableColor: any;

      zOffsetSmallFont: any;

      constructor(x: any, y: any, width: any, height: any, target: any, onclick: any, option: any);

      create: (() => any) | any;

      onOptionMouseDown: ((button: any, x: any, y: any) => any) | any;

      render: (() => any) | any;

      setVisible: ((visible: any) => any) | any;

      updateButtons: (() => any) | any;
    }
  }
  export namespace lua.client.ISUI.AdminPanel.ISServerOptionsChange {}
}
