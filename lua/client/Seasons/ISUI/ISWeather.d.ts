/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.Seasons.ISUI {
    /** @customConstructor ISWeather:new */
    export class ISWeather extends lua.client.ISUI.ISPanel {
      [id: string]: any;
      static [id: string]: any;

      images: any;

      moon: any;

      constructor(x: any, y: any, width: any, height: any);

      addImage: ((image: any) => any) | any;

      addMoon: ((moonImage: any) => any) | any;

      removeImages: (() => any) | any;

      removeMoon: (() => any) | any;
    }
  }
  export namespace lua.client.Seasons.ISUI.ISWeather {}
}
