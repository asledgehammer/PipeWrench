/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.Foraging {
    /** @customConstructor ISForageIcon:new */
    export class ISForageIcon extends lua.client.Foraging.ISBaseIcon {
      [id: string]: any;
      static [id: string]: any;

      catDef: any;

      itemDef: any;

      onClickContext: any;

      render3DTexture: any;

      renderWorldIcon: any;

      zoneData: any;

      zoneDef: any;

      constructor(_manager: any, _forageIcon: any, _zoneData: any);

      checkIsIdentified: (() => any) | any;

      doForage: ((_x: any, _y: any, _contextOption: any, _targetContainer: any) => any) | any;

      getNewCategoryItem: ((_catDef: any, _zoneData: any) => any) | any;

      onClickDiscard: ((_x: any, _y: any, _contextOption: any) => any) | any;
    }
  }
  export namespace lua.client.Foraging.ISForageIcon {}
}
