/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.OptionScreens {
    /** @customConstructor ModOrderUI:new */
    export class ModOrderUI extends lua.client.ISUI.ISPanel {
      [id: string]: any;
      static [id: string]: any;

      datas: any;

      down: any;

      infoRichText: any;

      isNewGame: any;

      mapGroups: any;

      no: any;

      richText: any;

      save: any;

      selectedFaction: any;

      up: any;

      constructor(x: any, y: any, width: any, height: any);

      drawDatas(y: any, item: any, alt: any, ...__args: never[]): any;

      getActiveMods(...__args: never[]): any;

      onClick(button: any, ...__args: never[]): any;

      onMouseDownOutside(x: any, y: any, ...__args: never[]): any;

      populateList(...__args: never[]): any;

      render(...__args: never[]): any;

      updateButtons(...__args: never[]): any;
    }
  }
  export namespace lua.client.OptionScreens.ModOrderUI {}
}
