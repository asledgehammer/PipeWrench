/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.NPCs.UI {
    /** @customConstructor TeamPicker:new */
    export class TeamPicker extends lua.client.ISUI.ISPanel {
      [id: string]: any;
      static [id: string]: any;

      a: any;

      b: any;

      c: any;

      except: any;

      group: any;

      headerText: any;

      leader: any;

      playButton: any;

      scriptOnOk: any;

      teamMembers: any;

      constructor(
        x: any,
        y: any,
        width: any,
        height: any,
        headerText: any,
        except: any,
        scriptOnOk: any,
        leaderInstance: any,
      );

      changeOption(option: any, ...__args: never[]): any;

      create(...__args: never[]): any;

      createChildren(...__args: never[]): any;

      onOptionMouseDown(button: any, x: any, y: any, ...__args: never[]): any;
    }
  }
  export namespace lua.client.NPCs.UI.TeamPicker {}
}
