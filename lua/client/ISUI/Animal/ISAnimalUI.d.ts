/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.ISUI.Animal {
    /** @customConstructor ISAnimalAvatar:new */
    export class ISAnimalAvatar extends lua.client.ISUI.ISUI3DModel {
      [id: string]: any;
      static [id: string]: any;
    }

    /** @customConstructor ISAnimalUI:new */
    export class ISAnimalUI extends lua.client.ISUI.ISCollapsableWindow {
      [id: string]: any;
      static [id: string]: any;

      static btnOffset: any;

      ageBtn: any;

      animal: any;

      animalName: any;

      avatarBackgroundTexture: any;

      avatarDefinition: any;

      avatarHeight: any;

      avatarPanel: any;

      avatarWidth: any;

      avatarX: any;

      avatarY: any;

      chr: any;

      feedBtn: any;

      genderBtn: any;

      milkAnimalBtn: any;

      playerNum: any;

      refreshNeeded: any;

      renameBtn: any;

      skillLvl: any;

      xOffset: any;

      constructor(x: any, y: any, width: any, height: any, animal: any, player: any);

      attachAnimal(...__args: never[]): any;

      create(...__args: never[]): any;

      getClutchSizeText(...__args: never[]): any;

      getPregnantText(...__args: never[]): any;

      getUdderText(...__args: never[]): any;

      getWoolText(...__args: never[]): any;

      maxTextWidth(font: any, text: any, maxWidth: any, ...__args: never[]): any;

      onChangeGender(...__args: never[]): any;

      onMilkAnimal(...__args: never[]): any;

      onRenameAnimalClick(button: any, animal: any, ...__args: never[]): any;

      onSetAge(...__args: never[]): any;

      renameAnimal(...__args: never[]): any;

      updateAvatar(...__args: never[]): any;
    }
  }
  export namespace lua.client.ISUI.Animal.ISAnimalUI {}
}
