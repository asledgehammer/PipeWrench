/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
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

      destroy(...__args: never[]): any;

      onClick(button: any, ...__args: never[]): any;

      update(...__args: never[]): any;

      updateButtons(...__args: never[]): any;

      /** @noSelf */
      static AddAdminMessage: (message: any, x: any, y: any, z: any, ...__args: never[]) => any;

      /** @noSelf */
      static RecalculPositions: (...__args: never[]) => any;
    }
  }
  export namespace lua.client.ISUI.AdminPanel.ISAdminMessage {}
}
