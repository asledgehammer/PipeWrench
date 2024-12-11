/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
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

      create(...__args: never[]): any;

      drawDatas(y: any, item: any, alt: any, ...__args: never[]): any;

      hideTooltip(...__args: never[]): any;

      onConfirmLeave(button: any, ...__args: never[]): any;

      onOptionMouseDown(button: any, x: any, y: any, ...__args: never[]): any;

      onServerOptionChange(option: any, newValue: any, ...__args: never[]): any;

      populateList(...__args: never[]): any;

      render(...__args: never[]): any;

      setVisible(visible: any, ...__args: never[]): any;
    }
  }
  export namespace lua.client.ISUI.AdminPanel.ISServerOptions {}
}
