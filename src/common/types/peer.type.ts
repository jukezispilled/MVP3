import { Game } from './game.type';
import { Direction, PlayerTeam } from './player.type';

export enum DataType {
  POSITIONS,
  GAME,
  DIRECTION,
  SHOOT,
  TEAM_CHANGE,
}

export type Data = {
  type: DataType;
};

export type PositionData = {
  type: DataType.POSITIONS;
  positions: {
    [key: string]: [number, number];
  };
};

export type GameData = {
  type: DataType.GAME;
  game: Game;
};

export type DirectionData = {
  type: DataType.DIRECTION;
  direction: Direction;
};

export type ShootData = {
  type: DataType.SHOOT;
};

export type TeamChangeData = {
  type: DataType.TEAM_CHANGE;
  team: PlayerTeam;
};
