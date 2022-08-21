/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.RadioCom {
    /** @customConstructor ISRadioAction:new */
    export class ISRadioAction extends lua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      device: any;

      deviceData: any;

      mode: any;

      secondaryItem: any;

      constructor(mode: any, character: any, device: any, secondaryItem: any);

      isValidAddBattery: (() => any) | any;

      isValidAddHeadphones: (() => any) | any;

      isValidAddMedia: (() => any) | any;

      isValidMuteMicrophone: (() => any) | any;

      isValidMuteVolume: (() => any) | any;

      isValidRemoveBattery: (() => any) | any;

      isValidRemoveHeadphones: (() => any) | any;

      isValidRemoveMedia: (() => any) | any;

      isValidSetChannel: (() => any) | any;

      isValidSetVolume: (() => any) | any;

      isValidToggleOnOff: (() => any) | any;

      isValidTogglePlayMedia: (() => any) | any;

      isValidUnMuteVolume: (() => any) | any;

      performAddBattery: (() => any) | any;

      performAddHeadphones: (() => any) | any;

      performAddMedia: (() => any) | any;

      performMuteMicrophone: (() => any) | any;

      performMuteVolume: (() => any) | any;

      performRemoveBattery: (() => any) | any;

      performRemoveHeadphones: (() => any) | any;

      performRemoveMedia: (() => any) | any;

      performSetChannel: (() => any) | any;

      performSetVolume: (() => any) | any;

      performToggleOnOff: (() => any) | any;

      performTogglePlayMedia: (() => any) | any;

      performUnMuteVolume: (() => any) | any;
    }
  }
  export namespace lua.client.RadioCom.ISRadioAction {}
}
