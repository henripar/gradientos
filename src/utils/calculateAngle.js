const calculateAngle = (direction) => {
  switch (direction) {
    case 0:
      return 90;
    case 45:
      return 45;
    case 90:
      return 0;
    case 135:
      return 315;
    case 180:
      return 270;
    case 225:
      return 225;
    case 270:
      return 180;
    case 315:
      return 135;
    default:
      return 0;
  }
};

export default calculateAngle;
