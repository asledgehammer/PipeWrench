/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.ISUI.UserPanel {
    /** @customConstructor ISUserPanelUI:new */
    export class ISUserPanelUI extends lua.client.ISUI.ISPanel {
      [id: string]: any;
      static [id: string]: any;

      static instance: any;

      buttonBorderColor: any;

      cancel: any;

      factionBtn: any;

      safehouseBtn: any;

      serverOptionBtn: any;

      showConnectionInfo: any;

      showPingInfo: any;

      showServerInfo: any;

      ticketsBtn: any;

      variableColor: any;

      zOffsetSmallFont: any;

      constructor(x: any, y: any, width: any, height: any, player: any);

      create(...__args: never[]): any;

      onOptionMouseDown(button: any, x: any, y: any, ...__args: never[]): any;

      onShowConnectionInfo(option: any, enabled: any, ...__args: never[]): any;

      onShowPingInfo(option: any, enabled: any, ...__args: never[]): any;

      onShowServerInfo(option: any, enabled: any, ...__args: never[]): any;

      render(...__args: never[]): any;

      setVisible(visible: any, ...__args: never[]): any;

      updateButtons(...__args: never[]): any;
    }
  }
  export namespace lua.client.ISUI.UserPanel.ISUserPanelUI {}
}
