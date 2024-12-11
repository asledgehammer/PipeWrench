/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.Seasons.ISUI {
    /** @customConstructor ISWeather:new */
    export class ISWeather extends lua.client.ISUI.ISPanel {
      [id: string]: any;
      static [id: string]: any;

      images: any;

      moon: any;

      constructor(x: any, y: any, width: any, height: any);

      addImage(image: any, ...__args: never[]): any;

      addMoon(moonImage: any, ...__args: never[]): any;

      removeImages(...__args: never[]): any;

      removeMoon(...__args: never[]): any;
    }
  }
  export namespace lua.client.Seasons.ISUI.ISWeather {}
}
