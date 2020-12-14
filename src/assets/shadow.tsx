export function dropShadow(color: string = '#000') {
  return {
    shadowColor: color,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  };
}
