
export class LiveCache {
  public static startTime = 0;
  public static endTime = 0;
  public static viewsCount: any = 0;

  // MUX 1080p
  public static mux1080P = {
    isLiveEnd: false,  // For target after Host requested the "End Livestream" successful.
  };
}

