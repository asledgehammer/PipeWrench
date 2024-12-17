/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.ISUI.Hutch {
    /** @customConstructor ISHutch3DModel:new */
    export class ISHutch3DModel extends lua.client.ISUI.ISUI3DModel {
      [id: string]: any;
      static [id: string]: any;

      constructor(x: any, y: any, width: any, height: any);

      onRightMouseUp(x: any, y: any, ...__args: never[]): any;
    }

    /** @customConstructor ISHutchNestBox:new */
    export class ISHutchNestBox extends lua.client.ISUI.ISPanel {
      [id: string]: any;
      static [id: string]: any;

      avatar: any;

      chr: any;

      favoriteStar: any;

      hutchUI: any;

      index: any;

      playerNum: any;

      playerObj: any;

      possibleEggPosition: any;

      constructor(x: any, y: any, width: any, height: any, hutchUI: any, index: any);

      checkGrabBtn(btn: any, ...__args: never[]): any;

      createChildren(...__args: never[]): any;

      doNestStuff(...__args: never[]): any;

      getAnimal(...__args: never[]): any;

      getNest(...__args: never[]): any;

      initEggPos(...__args: never[]): any;

      onButtonGrab(...__args: never[]): any;

      onCheatAddAnimal(...__args: never[]): any;

      onCheatAddEgg(...__args: never[]): any;

      onCheatRemoveAnimal(...__args: never[]): any;

      onCheatRemoveEgg(...__args: never[]): any;

      onRightMouseUp(x: any, y: any, ...__args: never[]): any;

      render(...__args: never[]): any;
    }

    /** @customConstructor ISHutchRoost:new */
    export class ISHutchRoost extends lua.client.ISUI.ISPanel {
      [id: string]: any;
      static [id: string]: any;

      avatar: any;

      chr: any;

      favoriteStar: any;

      hutchUI: any;

      index: any;

      playerNum: any;

      playerObj: any;

      constructor(x: any, y: any, width: any, height: any, hutchUI: any, index: any);

      checkGrabBtn(btn: any, ...__args: never[]): any;

      createChildren(...__args: never[]): any;

      getAnimal(...__args: never[]): any;

      getBody(...__args: never[]): any;

      onButtonGrab(...__args: never[]): any;

      onCheatAddAnimal(...__args: never[]): any;

      onCheatRemoveAnimal(animal: any, ...__args: never[]): any;

      onForceEgg(animal: any, ...__args: never[]): any;

      onKill(animal: any, ...__args: never[]): any;

      onRightMouseUp(x: any, y: any, ...__args: never[]): any;

      render(...__args: never[]): any;
    }

    /** @customConstructor ISHutchUI:new */
    export class ISHutchUI extends lua.client.ISUI.ISCollapsableWindow {
      [id: string]: any;
      static [id: string]: any;

      static instance: any;

      avatarBackgroundTexture: any;

      avatarPanel: any;

      birdPooCleanBtn: any;

      boxCleanBtn: any;

      btnBorder: any;

      chickenEmptyTexture: any;

      chickenTexture: any;

      chr: any;

      closedDoorPanel: any;

      doorBtn: any;

      eggHatchDoorBtn: any;

      eggTexture: any;

      fgBar: any;

      fgBarOrange: any;

      fgBarRed: any;

      grabBtnList: any;

      grabEggsBtnList: any;

      hutch: any;

      nestBoxPanelList: any;

      nestBoxUI: any;

      playerNum: any;

      refreshNeeded: any;

      roostUI: any;

      constructor(x: any, y: any, width: any, height: any, hutch: any, player: any);

      add3DAnimal(panel: any, animal: any, chickenX: any, chickenY: any, ...__args: never[]): any;

      checkAnimal(
        index: any,
        chickenX: any,
        chickenY: any,
        rowY: any,
        rowHeight: any,
        btnGrabOffset: any,
        ...__args: never[]
      ): any;

      checkAnimalSit(panel: any, animal: any, ...__args: never[]): any;

      create(...__args: never[]): any;

      isKeyConsumed(key: any, ...__args: never[]): any;

      onCleanFloor(...__args: never[]): any;

      onCleanNest(...__args: never[]): any;

      onGrabNest(index: any, ...__args: never[]): any;

      onGrabRoost(index: any, ...__args: never[]): any;

      onKeyRelease(key: any, ...__args: never[]): any;

      onToggleDoor(...__args: never[]): any;

      onToggleEggHatchDoor(...__args: never[]): any;
    }
  }
  export namespace lua.client.ISUI.Hutch.ISHutchUI {}
}
