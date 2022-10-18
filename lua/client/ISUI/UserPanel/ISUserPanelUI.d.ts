/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
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

      create: (() => any) | any;

      onOptionMouseDown: ((button: any, x: any, y: any) => any) | any;

      onShowConnectionInfo: ((option: any, enabled: any) => any) | any;

      onShowPingInfo: ((option: any, enabled: any) => any) | any;

      onShowServerInfo: ((option: any, enabled: any) => any) | any;

      render: (() => any) | any;

      setVisible: ((visible: any) => any) | any;

      updateButtons: (() => any) | any;
    }
  }
  export namespace lua.client.ISUI.UserPanel.ISUserPanelUI {}
}
