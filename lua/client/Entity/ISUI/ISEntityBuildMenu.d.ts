/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.Entity.ISUI {
    export abstract class ISEntityBuildMenu {
      static [id: string]: any;

      /** @noSelf */
      static addToolTip: (...__args: never[]) => any;

      /** @noSelf */
      static buildCategoryMenu: (_subMenu: any, _player: any, _list: any, ...__args: never[]) => any;

      /** @noSelf */
      static createMenu: (_player: any, _context: any, _subMenu: any, _worldObjects: any, ...__args: never[]) => any;

      /** @noSelf */
      static createToolTip: (_option: any, _player: any, info: any, ...__args: never[]) => any;

      /** @noSelf */
      static hasSomethingToBuild: (...__args: never[]) => any;

      /** @noSelf */
      static init: (_player: any, ...__args: never[]) => any;

      /** @noSelf */
      static onBuildEntity: (_player: any, _info: any, ...__args: never[]) => any;
    }
  }
  export namespace lua.client.Entity.ISUI.ISEntityBuildMenu {}
}
