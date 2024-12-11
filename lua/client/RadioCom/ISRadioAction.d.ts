/**  @noSelfInFile */

import { lua as sharedLua } from '@asledgehammer/pipewrench';

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.RadioCom {
    /** @customConstructor ISRadioAction:new */
    export class ISRadioAction extends sharedLua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      device: any;

      deviceData: any;

      mode: any;

      secondaryItem: any;

      constructor(mode: any, character: any, device: any, secondaryItem: any);

      isValidAddBattery(...__args: never[]): any;

      isValidAddHeadphones(...__args: never[]): any;

      isValidAddMedia(...__args: never[]): any;

      isValidMuteMicrophone(...__args: never[]): any;

      isValidMuteVolume(...__args: never[]): any;

      isValidRemoveBattery(...__args: never[]): any;

      isValidRemoveHeadphones(...__args: never[]): any;

      isValidRemoveMedia(...__args: never[]): any;

      isValidSetChannel(...__args: never[]): any;

      isValidSetVolume(...__args: never[]): any;

      isValidToggleOnOff(...__args: never[]): any;

      isValidTogglePlayMedia(...__args: never[]): any;

      isValidUnMuteVolume(...__args: never[]): any;

      performAddBattery(...__args: never[]): any;

      performAddHeadphones(...__args: never[]): any;

      performAddMedia(...__args: never[]): any;

      performMuteMicrophone(...__args: never[]): any;

      performMuteVolume(...__args: never[]): any;

      performRemoveBattery(...__args: never[]): any;

      performRemoveHeadphones(...__args: never[]): any;

      performRemoveMedia(...__args: never[]): any;

      performSetChannel(...__args: never[]): any;

      performSetVolume(...__args: never[]): any;

      performToggleOnOff(...__args: never[]): any;

      performTogglePlayMedia(...__args: never[]): any;

      performUnMuteVolume(...__args: never[]): any;
    }
  }
  export namespace lua.client.RadioCom.ISRadioAction {}
}
