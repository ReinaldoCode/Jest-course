

export class StringUtils {
  public toUpperCase(arg: string){
    if(!arg){
      throw new Error('Invalid argument')
    }
    return toUpperCase(arg);
  }
}
export const toUpperCase = (arg: string) => {
  return arg.toUpperCase();
};

export type stringInfo = {
  lowerCase: string;
  upperCase: string;
  characters: string[];
  length: number;
  extraInfo: Object | undefined;
};

export const getStingInfo = (arg: string) => {
  return{
    lowerCase: arg.toLocaleLowerCase(),
    upperCase: arg.toUpperCase(),
    characters: Array.from(arg),
    length: arg.length,
    extraInfo: {},
  } as stringInfo
}
