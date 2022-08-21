/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
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

      addMainGroup: ((_widget: any, _ignoreAddChild: any, _view: any) => any) | any;

      addNodeGroup: ((_widget: any, _view: any) => any) | any;

      addView: ((_viewID: any, _viewTable: any, _y: any) => any) | any;

      create: (() => any) | any;

      createChildren: (() => any) | any;

      onClickViewButton: ((_btn: any) => any) | any;

      onGainJoypadFocus: ((joypadData: any) => any) | any;

      onLoseJoypadFocus: ((joypadData: any) => any) | any;

      onResetButton: ((_btn: any) => any) | any;

      onToggleViewStyle: ((_btn: any) => any) | any;

      render: (() => any) | any;

      setJoypadButtons: (() => any) | any;

      setSelection: ((_node: any) => any) | any;

      setViewIndex: ((_index: any) => any) | any;

      setViewStyle: ((_viewStyle: any, _force: any) => any) | any;

      update: (() => any) | any;
    }
  }
  export namespace lua.client.XpSystem.ISUI.ISClothingInsPanel {}
}
