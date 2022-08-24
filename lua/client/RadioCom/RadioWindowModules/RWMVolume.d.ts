/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.RadioCom.RadioWindowModules {
    /** @customConstructor RWMVolume:new */
    export class RWMVolume extends lua.client.RadioCom.RadioWindowModules.RWMPanel {
      [id: string]: any;
      static [id: string]: any;

      earbudsTex: any;

      fontheight: any;

      hasEnabledHeadphones: any;

      headphonesTex: any;

      innerHeight: any;

      isMute: any;

      itemDropBox: any;

      marginBottom: any;

      marginLeft: any;

      marginRight: any;

      marginTop: any;

      speakerButton: any;

      textureSize: any;

      volume: any;

      volumeBar: any;

      constructor(x: any, y: any, width: any, height: any);

      addHeadphone: ((_items: any) => any) | any;

      onSpeakerButton: ((_ismute: any) => any) | any;

      onVolumeChange: ((_newVol: any) => any) | any;

      removeHeadphone: (() => any) | any;

      round: ((num: any, idp: any) => any) | any;

      toggleHeaphoneSupport: ((enable: any) => any) | any;

      verifyItem: ((_item: any) => any) | any;
    }
  }
  export namespace lua.client.RadioCom.RadioWindowModules.RWMVolume {}
}
