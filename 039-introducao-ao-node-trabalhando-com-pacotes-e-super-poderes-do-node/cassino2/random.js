// TODO: dando error no hub entregar perguntar someone
export default function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
