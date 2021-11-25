import React from "react";
import MainSectionFooter from "./MainSectionFooter";

import MainSectionHeader from "./MainSectionHeader";

const MainSection = () => {
  return (
    <section
      mv-app="todoapp"
      class="todoapp"
      mv-bar="none"
      mv-storage="local"
      mv-autosave="3"
      mv-mode="edit"
      mv-init="#data"
    >
      <MainSectionHeader />
      {/* This section should be hidden by default and shown when there are todos */}
      <section hidden="[count(todo) = 0]" class="main">
        <input
          property="toggleAll"
          id="toggle-all"
          class="toggle-all"
          type="checkbox"
          checked="[todoLeft = 0]"
        />
        <label for="toggle-all" mv-action="set(done, !toggleAll)">
          Mark all as complete
        </label>

        <ul class="todo-list">
          <li
            mv-multiple="todo"
            class="[if(done, 'completed')]"
            hidden="[(done and activeFilter = 'active') or (!done and activeFilter = 'completed')]"
          >
            <div class="view">
              <input property="done" class="toggle" type="checkbox" />
              <label property="text">Taste JavaScript</label>
              <button class="destroy" mv-action="delete(todo)"></button>
            </div>
          </li>
        </ul>
      </section>
      {/* This footer should hidden by default and shown when there are todos */}
      <MainSectionFooter />
    </section>
  );
};

export default MainSection;
