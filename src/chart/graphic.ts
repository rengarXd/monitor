
export function graphic(areaborder: any[]): any[] {
  if (areaborder && areaborder.length > 0) {
    return areaborder.map(element => {
      return JSON.parse(element.point)
    }).reverse();
  } else {
    return []
  }
} 