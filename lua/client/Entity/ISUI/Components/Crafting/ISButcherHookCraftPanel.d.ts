/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.Entity.ISUI.Components.Crafting {
    /** @customConstructor ISButcherHookCraftPanel:new */
    export class ISButcherHookCraftPanel extends lua.client.Entity.ISUI.Components.ISBaseComponentPanel {
      [id: string]: any;
      static [id: string]: any;

      processorPanel: any;

      constructor(
        x: any,
        y: any,
        width: any,
        height: any,
        player: any,
        entity: any,
        component: any,
        componentUiStyle: any,
      );
    }
  }
  export namespace lua.client.Entity.ISUI.Components.Crafting.ISButcherHookCraftPanel {}
}
