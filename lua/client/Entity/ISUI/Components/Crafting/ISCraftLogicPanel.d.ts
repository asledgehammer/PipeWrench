/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.Entity.ISUI.Components.Crafting {
    /** @customConstructor ISCraftLogicPanel:new */
    export class ISCraftLogicPanel extends lua.client.Entity.ISUI.Components.ISBaseComponentPanel {
      [id: string]: any;
      static [id: string]: any;

      craftControl: any;

      craftControlDebug: any;

      craftLogicComponent: any;

      craftProgress: any;

      energyInputs: any;

      energyOutputs: any;

      fluidInputs: any;

      fluidOutputs: any;

      inputsGroupName: any;

      itemInputs: any;

      itemOutputs: any;

      logic: any;

      outputsGroupName: any;

      recipeIconPanel: any;

      recipePanel: any;

      recipes: any;

      resourcesComponent: any;

      tableLayout: any;

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

      createEnergySlotPanel(_style: any, ...__args: never[]): any;

      createFluidSlotPanel(_style: any, ...__args: never[]): any;

      createItemSlotPanel(_style: any, ...__args: never[]): any;

      createRecipeIconPanel(...__args: never[]): any;

      createRecipePanel(...__args: never[]): any;
    }
  }
  export namespace lua.client.Entity.ISUI.Components.Crafting.ISCraftLogicPanel {}
}
