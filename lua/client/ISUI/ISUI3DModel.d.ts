/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.ISUI {
    /** @customConstructor ISUI3DModel:new */
    export class ISUI3DModel extends lua.client.ISUI.ISUIElement {
      [id: string]: any;
      static [id: string]: any;

      animateWhilePaused: any;

      dragX: any;

      mouseDown: any;

      constructor(x: any, y: any, width: any, height: any);

      getDirection: (() => any) | any;

      onMouseDown: ((x: any, y: any) => any) | any;

      reportEvent: ((event: any) => any) | any;

      setAnimateWhilePaused: ((animate: any) => any) | any;

      setAnimSetName: ((animSet: any) => any) | any;

      setCharacter: ((character: any) => any) | any;

      setDirection: ((dir: any) => any) | any;

      setDoRandomExtAnimations: ((doExt: any) => any) | any;

      setIsometric: ((iso: any) => any) | any;

      setOutfitName: ((name: any, female: any, zombie: any) => any) | any;

      setState: ((state: any) => any) | any;

      setSurvivorDesc: ((survivorDesc: any) => any) | any;

      setXOffset: ((xoffset: any) => any) | any;

      setYOffset: ((yoffset: any) => any) | any;

      setZoom: ((zoom: any) => any) | any;
    }
  }
  export namespace lua.client.ISUI.ISUI3DModel {}
}
