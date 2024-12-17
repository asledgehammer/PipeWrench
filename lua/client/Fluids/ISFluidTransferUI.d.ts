/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.Fluids {
    /** @customConstructor ISFluidTransferUI:new */
    export class ISFluidTransferUI extends lua.client.ISUI.ISPanel {
      [id: string]: any;
      static [id: string]: any;

      static cheatSkill: any;

      static cheatTransfer: any;

      action: any;

      btnClose: any;

      btnSwap: any;

      btnTransfer: any;

      buttonBorderColor: any;

      container: any;

      disableSwap: any;

      disableTransfer: any;

      errorDefault: any;

      errorLabel: any;

      errorText: any;

      info: any;

      isIsoPanel: any;

      maxTransferLabel: any;

      maxTransferText: any;

      panelLeft: any;

      panelLeftText: any;

      panelLeftX: any;

      panelRight: any;

      panelRightText: any;

      panelRightX: any;

      player: any;

      slider: any;

      source: any;

      titleLabel: any;

      titleText: any;

      transferColor: any;

      transferringLabel: any;

      transferringText: any;

      variableColor: any;

      zOffsetSmallFont: any;

      constructor(x: any, y: any, width: any, height: any, _player: any, _container: any, source: any);

      createChildren(...__args: never[]): any;

      onButton(_btn: any, ...__args: never[]): any;

      onContainerAdd(_item: any, _panel: any, ...__args: never[]): any;

      onContainerRemove(_removedItem: any, _panel: any, ...__args: never[]): any;

      onContainerVerify(_item: any, _panel: any, ...__args: never[]): any;

      onRightMouseUp(x: any, y: any, ...__args: never[]): any;

      onSlider(_value: any, _slider: any, ...__args: never[]): any;

      render(...__args: never[]): any;

      setMaxTransfer(_value: any, ...__args: never[]): any;

      setTransferring(_value: any, ...__args: never[]): any;

      toggleCheatSkill(_b: any, ...__args: never[]): any;

      toggleCheatTransfer(_b: any, ...__args: never[]): any;

      update(...__args: never[]): any;

      validatePanel(_forceUpdate: any, ...__args: never[]): any;

      /** @noSelf */
      static OpenPanel: (_player: any, _container: any, _source: any, ...__args: never[]) => any;
    }
  }
  export namespace lua.client.Fluids.ISFluidTransferUI {}
}
