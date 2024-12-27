/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.Entity.ISUI.Components.Crafting {
    /** @customConstructor ISFurnaceLogicPanel:new */
    export class ISFurnaceLogicPanel extends lua.client.Entity.ISUI.Components.ISBaseComponentPanel {
      [id: string]: any;
      static [id: string]: any;

      craftControl: any;

      craftControlDebug: any;

      craftProgress: any;

      fuelInputs: any;

      fuelInputsGroupName: any;

      fuelOutputs: any;

      fuelOutputsGroupName: any;

      fuelTableLayout: any;

      furnaceInputs: any;

      furnaceInputsGroupName: any;

      furnaceOutputs: any;

      furnaceOutputsGroupName: any;

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

      createItemSlotPanel(_style: any, _drawProgress: any, ...__args: never[]): any;
    }
  }
  export namespace lua.client.Entity.ISUI.Components.Crafting.ISFurnaceLogicPanel {}
}
