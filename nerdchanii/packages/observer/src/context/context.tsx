import { IStore } from '@type/types';
import { createContext } from 'react';

const TodoContext = createContext<IStore>({} as IStore);

export default TodoContext;