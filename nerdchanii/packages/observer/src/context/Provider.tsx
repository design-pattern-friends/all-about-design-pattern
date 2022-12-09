import { IStore } from "@type/types";
import TodoContext from "@context/context";

function Provider({ store, children }: {
  store: IStore,
  children: React.ReactNode
}) {
  return (
    <TodoContext.Provider value={store}>
      {children}
    </TodoContext.Provider>

  );
};


export default Provider 
