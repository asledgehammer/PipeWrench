/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/server' {
  export namespace lua.server.Items {
    export abstract class ScriptItemInterface {
      static [id: string]: any;

      /** @noSelf */
      static cloneItemType: (newName: any, originalFullName: any, ...__args: never[]) => any;

      /** @noSelf */
      static instanceItemType: (item: any, ...__args: never[]) => any;

      /** @noSelf */
      static newItemType: (name: any, displayname: any, type: any, inventoryIcon: any, ...__args: never[]) => any;
    }
  }
  export namespace lua.server.Items.ScriptItemInterface {}
}
