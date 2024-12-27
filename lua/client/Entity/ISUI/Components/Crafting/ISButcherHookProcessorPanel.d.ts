/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.Entity.ISUI.Components.Crafting {
    /** @customConstructor ISButcherHookProcessorPanel:new */
    export class ISButcherHookProcessorPanel extends lua.client.ISUI.ISPanel {
      [id: string]: any;
      static [id: string]: any;

      component: any;

      craftControl: any;

      craftControlDebug: any;

      craftProcessor: any;

      craftProgress: any;

      craftRecipeSelect: any;

      entity: any;

      fluidOutputs: any;

      itemInputs: any;

      itemOutputs: any;

      player: any;

      resourceContainer: any;

      tableLayout: any;

      constructor(
        x: any,
        y: any,
        width: any,
        height: any,
        player: any,
        entity: any,
        component: any,
        craftProcessor: any,
      );

      calculateLayout(_preferredWidth: any, _preferredHeight: any, ...__args: never[]): any;

      createChildren(...__args: never[]): any;

      createEnergySlotPanel(_style: any, ...__args: never[]): any;

      createFluidSlotPanel(_style: any, ...__args: never[]): any;

      createItemSlotPanel(_style: any, ...__args: never[]): any;

      onResize(...__args: never[]): any;

      render(...__args: never[]): any;

      update(...__args: never[]): any;
    }
  }
  export namespace lua.client.Entity.ISUI.Components.Crafting.ISButcherHookProcessorPanel {}
}
