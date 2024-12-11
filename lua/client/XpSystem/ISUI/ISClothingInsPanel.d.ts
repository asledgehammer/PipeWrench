/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.XpSystem.ISUI {
    /** @customConstructor ISClothingInsPanel:new */
    export class ISClothingInsPanel extends lua.client.ISUI.ISPanelJoypad {
      [id: string]: any;
      static [id: string]: any;

      bFemale: any;

      bodyPartPanel: any;

      bpAnchorX: any;

      bpAnchorY: any;

      bpPanelX: any;

      bpPanelY: any;

      btnTextColor: any;

      colorScheme: any;

      coreHeatBar: any;

      coreRectangleH: any;

      coreTemperatureBar: any;

      currentViewID: any;

      defTextColor: any;

      labelCoreHeat: any;

      labelCoreHeatMax: any;

      labelCoreHeatMid: any;

      labelCoreHeatMin: any;

      labelCoreTemp: any;

      labelCoreTempMax: any;

      labelCoreTempMid: any;

      labelCoreTempMin: any;

      labelCurrentView: any;

      labelCurrentViewMax: any;

      labelCurrentViewMid: any;

      labelCurrentViewMin: any;

      legendBar: any;

      mainGroup: any;

      mainGroupViews: any;

      maxViewsY: any;

      nodeDetails: any;

      nodeGroup: any;

      nodeGroupViews: any;

      player: any;

      playerNum: any;

      refreshNeeded: any;

      selectedBodyPart: any;

      selectedViewIndex: any;

      titleColor: any;

      toggleAdvBtn: any;

      viewButtons: any;

      views: any;

      viewsAdvanced: any;

      viewsSimple: any;

      constructor(player: any, x: any, y: any, width: any, height: any);

      addMainGroup(_widget: any, _ignoreAddChild: any, _view: any, ...__args: never[]): any;

      addNodeGroup(_widget: any, _view: any, ...__args: never[]): any;

      addView(_viewID: any, _viewTable: any, _y: any, ...__args: never[]): any;

      create(...__args: never[]): any;

      createChildren(...__args: never[]): any;

      onClickViewButton(_btn: any, ...__args: never[]): any;

      onGainJoypadFocus(joypadData: any, ...__args: never[]): any;

      onLoseJoypadFocus(joypadData: any, ...__args: never[]): any;

      onResetButton(_btn: any, ...__args: never[]): any;

      onToggleViewStyle(_btn: any, ...__args: never[]): any;

      render(...__args: never[]): any;

      setJoypadButtons(...__args: never[]): any;

      setSelection(_node: any, ...__args: never[]): any;

      setViewIndex(_index: any, ...__args: never[]): any;

      setViewStyle(_viewStyle: any, _force: any, ...__args: never[]): any;

      update(...__args: never[]): any;
    }
  }
  export namespace lua.client.XpSystem.ISUI.ISClothingInsPanel {}
}
