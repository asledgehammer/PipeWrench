/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.Entity.ISUI.Layouts {
    /** @customConstructor ISPartsLayout:new */
    export class ISPartsLayout extends lua.client.ISUI.ISPanel {
      [id: string]: any;
      static [id: string]: any;

      blueprintLogic: any;

      borderOuterColor: any;

      buttonDbgDecay: any;

      buttonRepair: any;

      colorBroken: any;

      colorOperational: any;

      colorSemiBroken: any;

      detailInnerColor: any;

      effBar: any;

      horzTexture: any;

      invalidColor: any;

      itemSlots: any;

      joypadMoveInterval: any;

      parentPanel: any;

      parts: any;

      player: any;

      playerNum: any;

      tagColor: any;

      textBroken: any;

      textColor: any;

      textOperational: any;

      textSemiBroken: any;

      title: any;

      vertTexture: any;

      constructor(x: any, y: any, _parentPanel: any, _blueprintLogic: any);

      createChildren(...__args: never[]): any;

      onButtonClick(_button: any, ...__args: never[]): any;

      render(...__args: never[]): any;

      setEfficiency(_efficiency: any, ...__args: never[]): any;

      update(...__args: never[]): any;
    }
  }
  export namespace lua.client.Entity.ISUI.Layouts.ISPartsLayout {}
}
