/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.ISUI.AdminPanel.LootZed {
    export abstract class LootZedTool {
      static [id: string]: any;

      /** @noSelf */
      static doRollItem_CalcChances: (
        containerDist: any,
        arg1: any,
        arg2: any,
        character: any,
        arg4: any,
        isJunk: any,
        arg6: any
      ) => any;

      /** @noSelf */
      static fillContainer_CalcChances: (container: any, player: any) => any;

      /** @noSelf */
      static fillContainerType_CalcChances: (roomDist: any, container: any, roomName: any, player: any) => any;

      /** @noSelf */
      static rollItem_CalcChances: (
        containerDist: any,
        container: any,
        doItemContainer: any,
        player: any,
        roomDist: any
      ) => any;

      /** @noSelf */
      static rollProceduralItem_CalcChances: (
        proceduralItems: any,
        container: any,
        arg2: any,
        character: any,
        roomDist: any
      ) => any;
    }
  }
  export namespace lua.client.ISUI.AdminPanel.LootZed.SpawnRateChecker {}
}
