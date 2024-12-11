/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.RadioCom.StoryLineSounds {
    /** @customConstructor ISSLSounds:new */
    export class ISSLSounds extends lua.client.ISUI.ISPanel {
      [id: string]: any;
      static [id: string]: any;

      columns: any;

      filterEntry: any;

      filterText: any;

      lastText: any;

      playSoundButton: any;

      soundList: any;

      constructor(x: any, y: any, width: any, height: any);

      addSoundItem(_sound: any, ...__args: never[]): any;

      createChildren(...__args: never[]): any;

      loadSounds(_filter: any, ...__args: never[]): any;

      onResize(...__args: never[]): any;

      playSoundFromMainList(...__args: never[]): any;

      render(...__args: never[]): any;

      update(...__args: never[]): any;
    }
  }
  export namespace lua.client.RadioCom.StoryLineSounds.ISSLSounds {}
}
