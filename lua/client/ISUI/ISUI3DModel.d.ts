/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.ISUI {
    /** @customConstructor ISUI3DModel:new */
    export class ISUI3DModel extends lua.client.ISUI.ISUIElement {
      [id: string]: any;
      static [id: string]: any;

      animateWhilePaused: any;

      dragX: any;

      mouseDown: any;

      constructor(x: any, y: any, width: any, height: any);

      clearVariable(key: any, ...__args: never[]): any;

      clearVariables(...__args: never[]): any;

      getCharacter(...__args: never[]): any;

      getDirection(...__args: never[]): any;

      getState(...__args: never[]): any;

      getVariable(key: any, ...__args: never[]): any;

      onMouseDown(x: any, y: any, ...__args: never[]): any;

      reportEvent(event: any, ...__args: never[]): any;

      setAnimateWhilePaused(animate: any, ...__args: never[]): any;

      setAnimSetName(animSet: any, ...__args: never[]): any;

      setCharacter(character: any, ...__args: never[]): any;

      setDirection(dir: any, ...__args: never[]): any;

      setDoRandomExtAnimations(doExt: any, ...__args: never[]): any;

      setIsometric(iso: any, ...__args: never[]): any;

      setOutfitName(name: any, female: any, zombie: any, ...__args: never[]): any;

      setState(state: any, ...__args: never[]): any;

      setSurvivorDesc(survivorDesc: any, ...__args: never[]): any;

      setVariable(key: any, value: any, ...__args: never[]): any;

      setXOffset(xoffset: any, ...__args: never[]): any;

      setYOffset(yoffset: any, ...__args: never[]): any;

      setZoom(zoom: any, ...__args: never[]): any;
    }
  }
  export namespace lua.client.ISUI.ISUI3DModel {}
}
