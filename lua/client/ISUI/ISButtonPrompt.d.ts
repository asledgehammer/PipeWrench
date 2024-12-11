/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.ISUI {
    /** @customConstructor ISButtonPrompt:new */
    export class ISButtonPrompt extends lua.client.ISUI.ISUIElement {
      [id: string]: any;
      static [id: string]: any;

      static test: any;

      aFunc: any;

      aParams: any;

      aPrompt: any;

      background: any;

      backgroundColor: any;

      bFunc: any;

      borderColor: any;

      bParams: any;

      bPrompt: any;

      buttonA: any;

      buttonB: any;

      buttonLB: any;

      buttonRB: any;

      buttonX: any;

      buttonY: any;

      h1: any;

      h2: any;

      isLoot: any;

      lbFunc: any;

      lbParams: any;

      lbPrompt: any;

      list: any;

      lmargin: any;

      movableIconPickup: any;

      movableIconPlace: any;

      movableIconRotate: any;

      movableIconScrap: any;

      player: any;

      rbFunc: any;

      rbParams: any;

      rbPrompt: any;

      rmargin: any;

      w1: any;

      w2: any;

      x1: any;

      x2: any;

      xFunc: any;

      xParams: any;

      xPrompt: any;

      y1: any;

      y2: any;

      yFunc: any;

      yParams: any;

      yPrompt: any;

      constructor(player: any);

      climbFence(...__args: never[]): any;

      climbInWindow(window: any, ...__args: never[]): any;

      climbOverWall(dir: any, ...__args: never[]): any;

      closeWindow(window: any, ...__args: never[]): any;

      cmdCloseVehicleDoor(playerObj: any, part: any, ...__args: never[]): any;

      cmdEnterVehicle(vehicle: any, seat: any, ...__args: never[]): any;

      cmdExitVehicle(...__args: never[]): any;

      cmdOpenVehicleDoor(playerObj: any, part: any, ...__args: never[]): any;

      cmdShowInventory(...__args: never[]): any;

      cmdShowLoot(...__args: never[]): any;

      cmdToggleLight(light: any, ...__args: never[]): any;

      cmdToggleStove(stove: any, ...__args: never[]): any;

      cmdUseVehicle(vehicle: any, part: any, ...__args: never[]): any;

      doAButtonDoorOrWindowOrWindowFrame(dir: any, obj: any, ...__args: never[]): any;

      doBButtonDoorOrWindowOrWindowFrame(dir: any, obj: any, ...__args: never[]): any;

      getBestAButtonAction(dir: any, ...__args: never[]): any;

      getBestBButtonAction(dir: any, ...__args: never[]): any;

      getBestLBButtonAction(dir: any, ...__args: never[]): any;

      getBestRBButtonAction(dir: any, ...__args: never[]): any;

      getBestXButtonAction(dir: any, ...__args: never[]): any;

      getBestYButtonAction(dir: any, ...__args: never[]): any;

      getTopOf(...__args: never[]): any;

      getXButtonObjects(dir: any, ...__args: never[]): any;

      interact(worldobjects: any, ...__args: never[]): any;

      isLootIcon(...__args: never[]): any;

      onAPress(...__args: never[]): any;

      onBPress(...__args: never[]): any;

      onJoypadButtonReleased(button: any, ...__args: never[]): any;

      onLBPress(...__args: never[]): any;

      onRBPress(...__args: never[]): any;

      onXPress(...__args: never[]): any;

      onYPress(...__args: never[]): any;

      openDeviceOptions(device: any, ...__args: never[]): any;

      openDoor(door: any, ...__args: never[]): any;

      openWindow(window: any, ...__args: never[]): any;

      setAPrompt(str: any, func: any, param1: any, param2: any, param3: any, param4: any, ...__args: never[]): any;

      setBPrompt(str: any, func: any, param1: any, param2: any, param3: any, param4: any, ...__args: never[]): any;

      setLBPrompt(str: any, func: any, param1: any, param2: any, param3: any, param4: any, ...__args: never[]): any;

      setRBPrompt(str: any, func: any, param1: any, param2: any, param3: any, param4: any, ...__args: never[]): any;

      setXPrompt(str: any, func: any, param1: any, param2: any, param3: any, param4: any, ...__args: never[]): any;

      setYPrompt(str: any, func: any, param1: any, param2: any, param3: any, param4: any, ...__args: never[]): any;

      sleep(...__args: never[]): any;

      smashWindow(window: any, ...__args: never[]): any;

      stopAction(...__args: never[]): any;

      testAButtonAction(dir: any, ...__args: never[]): any;

      testBButtonAction(dir: any, ...__args: never[]): any;
    }
  }
  export namespace lua.client.ISUI.ISButtonPrompt {}
}
