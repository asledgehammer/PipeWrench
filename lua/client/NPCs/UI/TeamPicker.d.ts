/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
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
        leaderInstance: any
      );

      changeOption: ((option: any) => any) | any;

      create: (() => any) | any;

      createChildren: (() => any) | any;

      onOptionMouseDown: ((button: any, x: any, y: any) => any) | any;
    }
  }
  export namespace lua.client.NPCs.UI.TeamPicker {}
}
