/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.ISUI {
    /** @customConstructor ISWarManagerUI:new */
    export class ISWarManagerUI extends lua.client.ISUI.ISPanel {
      [id: string]: any;
      static [id: string]: any;

      static instance: any;

      acceptBtn: any;

      cancelBtn: any;

      closeBtn: any;

      datas: any;

      endBtn: any;

      itemheight: any;

      player: any;

      refuseBtn: any;

      scrollBarSpacing: any;

      constructor(x: any, y: any, width: any, height: any, player: any);

      closeModal(...__args: never[]): any;

      drawDatas(y: any, item: any, alt: any, ...__args: never[]): any;

      onClick(button: any, ...__args: never[]): any;

      onSelectWar(_item: any, ...__args: never[]): any;

      populateList(...__args: never[]): any;

      /** @noSelf */
      static OnWarUpdate: (...__args: never[]) => any;
    }
  }
  export namespace lua.client.ISUI.ISWarManagerUI {}
}
