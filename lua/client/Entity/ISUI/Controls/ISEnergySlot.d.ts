/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.Entity.ISUI.Controls {
    /** @customConstructor ISEnergySlot:new */
    export class ISEnergySlot extends lua.client.ISUI.ISPanel {
      [id: string]: any;
      static [id: string]: any;

      enableIcon: any;

      energy: any;

      energyBar: any;

      energyBorderColorOrig: any;

      equalSpacing: any;

      icon: any;

      isVertical: any;

      margin: any;

      minimumBarSize: any;

      minimumHeight: any;

      minimumWidth: any;

      player: any;

      resource: any;

      styleBar: any;

      styleIcon: any;

      constructor(x: any, y: any, width: any, height: any, player: any, resource: any, styleIcon: any, styleBar: any);

      calculateLayout(_preferredWidth: any, _preferredHeight: any, ...__args: never[]): any;

      createChildren(...__args: never[]): any;

      render(...__args: never[]): any;

      setResource(_resource: any, ...__args: never[]): any;

      update(...__args: never[]): any;
    }
  }
  export namespace lua.client.Entity.ISUI.Controls.ISEnergySlot {}
}
