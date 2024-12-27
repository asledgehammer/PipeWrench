/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.ISUI.AdminPanel {
    /** @customConstructor ISUsersList:new */
    export class ISUsersList extends lua.client.ISUI.ISPanel {
      [id: string]: any;
      static [id: string]: any;

      static instance: any;

      add: any;

      close: any;

      datas: any;

      delete: any;

      player: any;

      constructor(x: any, y: any, width: any, height: any, player: any);

      closeModal(...__args: never[]): any;

      doContextMenu(item: any, x: any, y: any, ...__args: never[]): any;

      drawDatas(y: any, item: any, alt: any, ...__args: never[]): any;

      onAddUserClick(button: any, ...__args: never[]): any;

      onClick(button: any, ...__args: never[]): any;

      onClickOption(item: any, action: any, ...__args: never[]): any;

      onDeleteModalClick(button: any, ...__args: never[]): any;

      onRightMouse(x: any, y: any, ...__args: never[]): any;

      onSelectUser(_item: any, ...__args: never[]): any;

      onSetPasswordClick(button: any, username: any, ...__args: never[]): any;

      onSetRoleClickOption(item: any, role: any, ...__args: never[]): any;

      populateList(...__args: never[]): any;

      /** @noSelf */
      static onAddWarningPoint: (username: any, button: any, reason: any, amount: any, ...__args: never[]) => any;
    }
  }
  export namespace lua.client.ISUI.AdminPanel.ISUsersList {}
}
