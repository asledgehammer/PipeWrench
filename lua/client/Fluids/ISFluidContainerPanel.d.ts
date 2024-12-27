/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.Fluids {
    /** @customConstructor ISFluidContainerPanel:new */
    export class ISFluidContainerPanel extends lua.client.ISUI.ISPanel {
      [id: string]: any;
      static [id: string]: any;

      borderOuterColor: any;

      container: any;

      containerBox: any;

      containerCopy: any;

      containerName: any;

      customTitle: any;

      detailInnerColor: any;

      doOwnerOutlines: any;

      doTitle: any;

      fluidBar: any;

      funcTarget: any;

      info: any;

      innerHeight: any;

      innerY: any;

      invalidColor: any;

      isInvalid: any;

      isLeft: any;

      isoHeight: any;

      itemDropBox: any;

      onContainerAdd: any;

      onContainerRemove: any;

      onContainerVerify: any;

      outlineColor: any;

      overrideAddFull: any;

      overrideRemoveFull: any;

      ownerTexture: any;

      pad: any;

      player: any;

      tagColor: any;

      textColor: any;

      textureList: any;

      title: any;

      constructor(x: any, y: any, _player: any, _container: any, _doTitle: any, _isLeft: any, _isoHeight: any);

      addItem(_items: any, ...__args: never[]): any;

      addItemAux(_item: any, ...__args: never[]): any;

      clickedDropBox(x: any, y: any, ...__args: never[]): any;

      createChildren(...__args: never[]): any;

      drawTextureIso(texture: any, x: any, y: any, a: any, r: any, g: any, b: any, ...__args: never[]): any;

      drawTextureOutlines(texture: any, x: any, y: any, ...__args: never[]): any;

      getContainer(...__args: never[]): any;

      getContainerOwner(...__args: never[]): any;

      getIsoObjectTextures(...__args: never[]): any;

      hasValidContainer(...__args: never[]): any;

      onClose(...__args: never[]): any;

      removeItem(...__args: never[]): any;

      render(...__args: never[]): any;

      renderText(
        _s: any,
        _x: any,
        _y: any,
        _r: any,
        _g: any,
        _b: any,
        _a: any,
        _font: any,
        _func: any,
        ...__args: never[]
      ): any;

      setContainerName(_name: any, ...__args: never[]): any;

      setInvalid(_b: any, ...__args: never[]): any;

      setIsLeft(_b: any, ...__args: never[]): any;

      setPanelLocked(_b: any, ...__args: never[]): any;

      setTitle(_title: any, ...__args: never[]): any;

      verifyItem(_item: any, ...__args: never[]): any;
    }
  }
  export namespace lua.client.Fluids.ISFluidContainerPanel {}
}
