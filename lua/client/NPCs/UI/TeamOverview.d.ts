/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.NPCs.UI {
    /** @customConstructor TeamOverview:new */
    export class TeamOverview extends lua.client.ISUI.ISCollapsableWindow {
      [id: string]: any;
      static [id: string]: any;

      a: any;

      b: any;

      c: any;

      group: any;

      leader: any;

      memberList: any;

      constructor(x: any, y: any, width: any, height: any, leaderInstance: any);

      drawMember: ((y: any, item: any, alt: any) => any) | any;
    }
  }
  export namespace lua.client.NPCs.UI.TeamOverview {}
}
