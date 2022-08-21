/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.ISUI.AdminPanel {
    /** @customConstructor ISAdminPanelUI:new */
    export class ISAdminPanelUI extends lua.client.ISUI.ISPanel {
      [id: string]: any;
      static [id: string]: any;

      static instance: any;

      adminModal: any;

      adminPowerBtn: any;

      beAdmin: any;

      buttonBorderColor: any;

      cancel: any;

      checkStatsBtn: any;

      climateOptionsBtn: any;

      dbBtn: any;

      itemListBtn: any;

      miniScoreboardBtn: any;

      nonpvpzoneBtn: any;

      packetCountsBtn: any;

      safezoneBtn: any;

      sandboxOptionsBtn: any;

      seeFactionBtn: any;

      seeOptionsBtn: any;

      seeSafehousesBtn: any;

      seeTicketsBtn: any;

      showStatisticsBtn: any;

      variableColor: any;

      zOffsetSmallFont: any;

      constructor(x: any, y: any, width: any, height: any);

      create: (() => any) | any;

      onOptionMouseDown: ((button: any, x: any, y: any) => any) | any;

      removeAdmin: (() => any) | any;

      render: (() => any) | any;

      setVisible: ((visible: any) => any) | any;

      updateButtons: (() => any) | any;

      /** @noSelf */
      static OnSafehousesChanged: () => any;
    }
  }
  export namespace lua.client.ISUI.AdminPanel.ISAdminPanelUI {}
}
