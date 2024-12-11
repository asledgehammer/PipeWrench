/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/server' {
  export namespace lua.server.Camping {
    /** @customConstructor SCampfireGlobalObject:new */
    export class SCampfireGlobalObject extends lua.server.Map.SGlobalObject {
      [id: string]: any;
      static [id: string]: any;

      exterior: any;

      fuelAmt: any;

      isLit: any;

      radius: any;

      spriteName: any;

      transmitContainer: any;

      transmitContainerTemp: any;

      transmitFire: any;

      transmitObject: any;

      transmitSprite: any;

      constructor(luaSystem: any, globalObject: any);

      addContainer(...__args: never[]): any;

      addFireObject(...__args: never[]): any;

      addFuel(fuelAmt: any, ...__args: never[]): any;

      addObject(...__args: never[]): any;

      changeFireLvl(...__args: never[]): any;

      fireRadius(...__args: never[]): any;

      fireRatio(...__args: never[]): any;

      fromModData(modData: any, ...__args: never[]): any;

      fromObject(isoObject: any, ...__args: never[]): any;

      getContainer(...__args: never[]): any;

      getFireObject(...__args: never[]): any;

      getObject(...__args: never[]): any;

      lightFire(...__args: never[]): any;

      processContainerItems(...__args: never[]): any;

      putOut(...__args: never[]): any;

      removeFireObject(...__args: never[]): any;

      removeObject(...__args: never[]): any;

      saveData(...__args: never[]): any;

      setFuel(fuelAmt: any, ...__args: never[]): any;

      setSpriteName(spriteName: any, ...__args: never[]): any;

      syncContainer(...__args: never[]): any;

      syncIsoFire(...__args: never[]): any;

      syncIsoObject(...__args: never[]): any;

      syncModData(...__args: never[]): any;

      syncSprite(...__args: never[]): any;

      toModData(modData: any, ...__args: never[]): any;

      transferItemsToGround(...__args: never[]): any;
    }
  }
  export namespace lua.server.Camping.SCampfireGlobalObject {}
}
