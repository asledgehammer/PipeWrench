/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.server.Items {
    export abstract class ScriptItemInterface {
      static [id: string]: any;

      /** @noSelf */
      static cloneItemType: (newName: any, originalFullName: any) => any;

      /** @noSelf */
      static instanceItemType: (item: any) => any;

      /** @noSelf */
      static newItemType: (name: any, displayname: any, type: any, inventoryIcon: any) => any;
    }
  }
  export namespace lua.server.Items.ScriptItemInterface {}
}
