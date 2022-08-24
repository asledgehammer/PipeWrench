/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.ISUI.AdminPanel {
    /** @customConstructor ISAdminMessage:new */
    export class ISAdminMessage extends lua.client.ISUI.ISPanel {
      [id: string]: any;
      static [id: string]: any;

      chatText: any;

      destroyOnClick: any;

      name: any;

      no: any;

      px: any;

      py: any;

      pz: any;

      text: any;

      yes: any;

      constructor(x: any, y: any, width: any, height: any, text: any, px: any, py: any, pz: any);

      destroy: (() => any) | any;

      onClick: ((button: any) => any) | any;

      update: (() => any) | any;

      updateButtons: (() => any) | any;

      /** @noSelf */
      static AddAdminMessage: (message: any, x: any, y: any, z: any) => any;

      /** @noSelf */
      static RecalculPositions: () => any;
    }
  }
  export namespace lua.client.ISUI.AdminPanel.ISAdminMessage {}
}
