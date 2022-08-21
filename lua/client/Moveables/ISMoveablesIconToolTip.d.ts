/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.Moveables {
    /** @customConstructor ISMoveablesIconToolTip:new */
    export class ISMoveablesIconToolTip extends lua.client.ISUI.ISPanel {
      [id: string]: any;
      static [id: string]: any;

      fontheight: any;

      marginOffset: any;

      subText: any;

      constructor(x: any, y: any, width: any, height: any, marginOffset: any);

      createChildren: (() => any) | any;

      render: (() => any) | any;
    }
  }
  export namespace lua.client.Moveables.ISMoveablesIconToolTip {}
}
