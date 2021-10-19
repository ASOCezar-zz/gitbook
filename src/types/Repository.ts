import { IUser } from './User';

export interface IRepository {
  id: number;
  node_id: string;
  name: string;
  full_name: string;
  private: boolean;
  owner: IUser;
}
