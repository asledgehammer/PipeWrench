/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.shared.StashDescriptions {
    export abstract class StashUtil {
      static [id: string]: any;

      addContainer:
        | ((containerType: any, containerSprite: any, containerItem: any, room: any, x: any, y: any, z: any) => any)
        | any;

      addStamp: ((symbol: any, text: any, mapX: any, mapY: any, r: any, g: any, b: any) => any) | any;

      /** @noSelf */
      static newStash: (name: any, type: any, item: any, customName: any) => any;
    }
  }
  export namespace lua.shared.StashDescriptions.StashUtil {}
}
