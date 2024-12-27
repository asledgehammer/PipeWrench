/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.ISUI {
    /** @customConstructor ISDebugAvatarUI:new */
    export class ISDebugAvatarUI extends lua.client.ISUI.ISCollapsableWindow {
      [id: string]: any;
      static [id: string]: any;

      animal: any;

      animalList: any;

      animalObj: any;

      avatarBackgroundTexture: any;

      avatarHeight: any;

      avatarHeightBtn: any;

      avatarPanel: any;

      avatarWidth: any;

      avatarWidthBtn: any;

      avatarX: any;

      avatarY: any;

      breed: any;

      breedList: any;

      chr: any;

      currentDef: any;

      direction: any;

      dirLeft: any;

      dirRight: any;

      playerNum: any;

      xoffset: any;

      xOffsetMinus: any;

      xOffsetPlus: any;

      yoffset: any;

      yOffsetMinus: any;

      yOffsetPlus: any;

      zoom: any;

      zoomMinus: any;

      zoomPlus: any;

      constructor(player: any);

      changeHeight(button: any, ...__args: never[]): any;

      changeWidth(button: any, ...__args: never[]): any;

      create(...__args: never[]): any;

      doNewAnimal(animal: any, breed: any, ...__args: never[]): any;

      onChangeAvatarHeight(...__args: never[]): any;

      onChangeAvatarWidth(...__args: never[]): any;

      onChangeDir(button: any, x: any, y: any, ...__args: never[]): any;

      onChangeStuff(button: any, x: any, y: any, ...__args: never[]): any;

      onSelectAnimal(combo: any, ...__args: never[]): any;

      onSelectBreed(combo: any, ...__args: never[]): any;

      populateAnimalComboBox(...__args: never[]): any;

      populateBreedComboBox(...__args: never[]): any;
    }
  }
  export namespace lua.client.ISUI.ISDebugAvatarUI {}
}
