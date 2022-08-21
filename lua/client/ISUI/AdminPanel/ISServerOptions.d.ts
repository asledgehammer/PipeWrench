/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.ISUI.AdminPanel {
    /** @customConstructor ISServerOptions:new */
    export class ISServerOptions extends lua.client.ISUI.ISPanel {
      [id: string]: any;
      static [id: string]: any;

      buttonBorderColor: any;

      cancel: any;

      changeBtn: any;

      datas: any;

      filterEntry: any;

      modifying: any;

      player: any;

      saveBtn: any;

      tooltip: any;

      variableColor: any;

      zOffsetSmallFont: any;

      constructor(x: any, y: any, width: any, height: any, player: any);

      create: (() => any) | any;

      drawDatas: ((y: any, item: any, alt: any) => any) | any;

      hideTooltip: (() => any) | any;

      onConfirmLeave: ((button: any) => any) | any;

      onOptionMouseDown: ((button: any, x: any, y: any) => any) | any;

      onServerOptionChange: ((option: any, newValue: any) => any) | any;

      populateList: (() => any) | any;

      render: (() => any) | any;

      setVisible: ((visible: any) => any) | any;
    }
  }
  export namespace lua.client.ISUI.AdminPanel.ISServerOptions {}
}
