/**  @noSelfInFile */

import { lua as sharedLua } from '@asledgehammer/pipewrench';

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.XpSystem.ISUI {
    /** @customConstructor HealthPanelAction:new */
    export class HealthPanelAction extends sharedLua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      args: any;

      handler: any;

      constructor(
        character: any,
        handler: any,
        arg1: any,
        arg2: any,
        arg3: any,
        arg4: any,
        arg5: any,
        arg6: any,
        arg7: any,
        arg8: any,
      );
    }

    /** @customConstructor ISHealthBodyPartListBox:new */
    export class ISHealthBodyPartListBox extends lua.client.ISUI.ISScrollingListBox {
      [id: string]: any;
      static [id: string]: any;

      constructor(x: any, y: any, width: any, height: any);

      onRightMouseUp(x: any, y: any, ...__args: never[]): any;
    }

    /** @customConstructor ISHealthBodyPartPanel:new */
    export class ISHealthBodyPartPanel extends lua.client.ISUI.BodyParts.ISBodyPartPanel {
      [id: string]: any;
      static [id: string]: any;

      constructor(character: any, x: any, y: any);

      cbSetSelected(bp: any, ...__args: never[]): any;
    }

    /** @customConstructor ISHealthPanel:new */
    export class ISHealthPanel extends lua.client.ISUI.ISPanelJoypad {
      [id: string]: any;
      static [id: string]: any;

      abutton: any;

      actions: any;

      allTextHeight: any;

      blockingAlpha: any;

      blockingMessage: any;

      bodyPartAction: any;

      bodyPartPanel: any;

      character: any;

      characterX: any;

      characterY: any;

      damagedParts: any;

      doctorLevel: any;

      fitness: any;

      healthPanel: any;

      listbox: any;

      otherPlayer: any;

      otherPlayerX: any;

      otherPlayerY: any;

      playerNum: any;

      progressBarLoaded: any;

      textRight: any;

      constructor(player: any, x: any, y: any, width: any, height: any);

      checkContainerItems(container: any, childContainers: any, handlers: any, ...__args: never[]): any;

      checkItems(handlers: any, ...__args: never[]): any;

      createChildren(...__args: never[]): any;

      doBodyPartContextMenu(bodyPart: any, x: any, y: any, ...__args: never[]): any;

      drawText(str: any, x: any, y: any, r: any, g: any, b: any, a: any, font: any, ...__args: never[]): any;

      dropItemsOnBodyPart(bodyPart: any, items: any, ...__args: never[]): any;

      getDamagedParts(...__args: never[]): any;

      getDoctor(...__args: never[]): any;

      getPatient(...__args: never[]): any;

      onGainJoypadFocus(joypadData: any, ...__args: never[]): any;

      onLoseJoypadFocus(joypadData: any, ...__args: never[]): any;

      render(...__args: never[]): any;

      setBodyPartAction(bodyPart: any, args: any, ...__args: never[]): any;

      setOtherPlayer(playerObj: any, ...__args: never[]): any;

      toPlayerInventory(playerObj: any, item: any, bodyPart: any, ...__args: never[]): any;

      update(...__args: never[]): any;

      updateBodyPartList(...__args: never[]): any;

      /** @noSelf */
      static DidPatientMove: (doctor: any, patient: any, patientX: any, patientY: any, ...__args: never[]) => any;

      /** @noSelf */
      static getBandageType: (bodyPart: any, ...__args: never[]) => any;

      /** @noSelf */
      static onCheat: (bodyPart: any, action: any, player: any, otherPlayer: any, ...__args: never[]) => any;

      /** @noSelf */
      static onCheatCurrentPlayer: (bodyPart: any, action: any, player: any, ...__args: never[]) => any;

      /** @noSelf */
      static onCheatHealthCommand: (module: any, command: any, args: any, ...__args: never[]) => any;

      /** @noSelf */
      static onCheatItem: (itemType: any, playerObj: any, ...__args: never[]) => any;

      /** @noSelf */
      static onCheatOtherPlayer: (bodyPart: any, action: any, player: any, otherPlayer: any, ...__args: never[]) => any;

      /** @noSelf */
      static setBodyPartActionForPlayer: (
        playerObj: any,
        bodyPart: any,
        action: any,
        jobType: any,
        args: any,
        ...__args: never[]
      ) => any;
    }

    /** @customConstructor ISNewHealthPanel:new */
    export class ISNewHealthPanel extends lua.client.ISUI.ISUIElement {
      [id: string]: any;
      static [id: string]: any;

      character: any;

      constructor(x: any, y: any, character: any);

      onClick(button: any, ...__args: never[]): any;
    }
  }
  export namespace lua.client.XpSystem.ISUI.ISHealthPanel {}
}
