/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.DebugUIs.DebugMenu.Fluids {
    /** @customConstructor ISFluidMixerViewPanel:new */
    export class ISFluidMixerViewPanel extends lua.client.ISUI.ISPanel {
      [id: string]: any;
      static [id: string]: any;

      addFluidButton: any;

      addFluidLabel: any;

      amountBox: any;

      canMix: any;

      clearFluidButton: any;

      createItemButton: any;

      entryBox: any;

      fluidBar: any;

      fluidContainer: any;

      list: any;

      listLabel: any;

      player: any;

      playerNum: any;

      searchText: any;

      selectedFluidItem: any;

      slider: any;

      warningLabel: any;

      constructor(x: any, y: any, width: any, height: any, player: any);

      addItem(item: any, ...__args: never[]): any;

      createChildren(...__args: never[]): any;

      drawFluidListItem(y: any, item: any, alt: any, ...__args: never[]): any;

      incY(_y: any, _obj: any, _margin: any, ...__args: never[]): any;

      onButtonClick(_button: any, ...__args: never[]): any;

      onFluidListSelected(_item: any, ...__args: never[]): any;

      onResize(_width: any, _height: any, ...__args: never[]): any;

      onSliderChange(_newval: any, _slider: any, ...__args: never[]): any;

      populate(...__args: never[]): any;

      render(...__args: never[]): any;

      /** @noSelf */
      static onTextChange: (box: any, ...__args: never[]) => any;
    }
  }
  export namespace lua.client.DebugUIs.DebugMenu.Fluids.ISFluidMixerViewPanel {}
}
