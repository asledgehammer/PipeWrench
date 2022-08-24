/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
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

      addContainer: (() => any) | any;

      addFireObject: (() => any) | any;

      addFuel: ((fuelAmt: any) => any) | any;

      addObject: (() => any) | any;

      changeFireLvl: (() => any) | any;

      fireRadius: (() => any) | any;

      fireRatio: (() => any) | any;

      fromModData: ((modData: any) => any) | any;

      fromObject: ((isoObject: any) => any) | any;

      getContainer: (() => any) | any;

      getFireObject: (() => any) | any;

      getObject: (() => any) | any;

      lightFire: (() => any) | any;

      processContainerItems: (() => any) | any;

      putOut: (() => any) | any;

      removeFireObject: (() => any) | any;

      removeObject: (() => any) | any;

      saveData: (() => any) | any;

      setFuel: ((fuelAmt: any) => any) | any;

      setSpriteName: ((spriteName: any) => any) | any;

      syncContainer: (() => any) | any;

      syncIsoFire: (() => any) | any;

      syncIsoObject: (() => any) | any;

      syncModData: (() => any) | any;

      syncSprite: (() => any) | any;

      toModData: ((modData: any) => any) | any;

      transferItemsToGround: (() => any) | any;
    }
  }
  export namespace lua.server.Camping.SCampfireGlobalObject {}
}
