/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
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

      drawDatas: ((y: any, item: any, alt: any) => any) | any;

      getActiveMods: (() => any) | any;

      onClick: ((button: any) => any) | any;

      onMouseDownOutside: ((x: any, y: any) => any) | any;

      populateList: (() => any) | any;

      render: (() => any) | any;

      updateButtons: (() => any) | any;
    }
  }
  export namespace lua.client.OptionScreens.ModOrderUI {}
}
