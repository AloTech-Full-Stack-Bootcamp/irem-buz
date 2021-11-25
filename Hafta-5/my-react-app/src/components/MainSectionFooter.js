import React from "react";

const MainSectionFooter = () => {
  return (
    <footer hidden="[count(todo) = 0]" class="footer">
      <meta property="todoDone" content="[count(todo where done)]" />
      <meta property="todoLeft" content="[count(todo where !done)]" />

      {/* This should be `0 items left` by default */}
      <span class="todo-count">
        <strong mv-value="todoLeft">0</strong>
        [if(todoLeft = 1, 'item', 'items')] left
      </span>

      <meta property="activeFilter" content="all" mv-storage="none" />
      <ul class="filters">
        <li>
          <a
            class="[if(activeFilter = 'all', 'selected')]"
            mv-action="set(activeFilter, 'all')"
          >
            All
          </a>
        </li>
        <li>
          <a
            class="[if(activeFilter = 'active', 'selected')]"
            mv-action="set(activeFilter, 'active')"
          >
            Active
          </a>
        </li>
        <li>
          <a
            class="[if(activeFilter = 'completed', 'selected')]"
            mv-action="set(activeFilter, 'completed')"
          >
            Completed
          </a>
        </li>
      </ul>
      {/* Hidden if no completed items are left ↓ */}
      <button
        hidden="[todoDone = 0]"
        class="clear-completed"
        mv-action="delete(todo where done)"
      >
        Clear completed
      </button>
    </footer>
  );
};

export default MainSectionFooter;
