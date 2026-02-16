(() => {
  const STORAGE_KEY = 'offlineKanbanV1';
  const COLUMNS = ['Backlog', 'To Do', 'Doing', 'Done', 'Blocked'];

  const boardEl = document.getElementById('board');
  const statusEl = document.getElementById('status');
  const exportBtn = document.getElementById('exportBtn');
  const importInput = document.getElementById('importInput');

  const createEmptyState = () =>
    COLUMNS.reduce((acc, column) => {
      acc[column] = [];
      return acc;
    }, {});

  const saveState = (state) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  };

  const setStatus = (message, isError = false) => {
    statusEl.textContent = message;
    statusEl.style.color = isError ? '#b91c1c' : '#6b7280';
  };

  const validateState = (candidate) => {
    if (!candidate || typeof candidate !== 'object' || Array.isArray(candidate)) {
      return false;
    }

    for (const column of COLUMNS) {
      if (!Array.isArray(candidate[column])) {
        return false;
      }
      if (!candidate[column].every((item) => typeof item === 'string')) {
        return false;
      }
    }

    return true;
  };

  const loadState = () => {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      return createEmptyState();
    }

    try {
      const parsed = JSON.parse(raw);
      if (validateState(parsed)) {
        return COLUMNS.reduce((acc, col) => {
          acc[col] = parsed[col].map((text) => text.trim()).filter(Boolean);
          return acc;
        }, {});
      }
      setStatus('Stored board data was invalid. A new board was created.', true);
      return createEmptyState();
    } catch {
      setStatus('Stored board data could not be read. A new board was created.', true);
      return createEmptyState();
    }
  };

  const buildCard = (text) => {
    const card = document.createElement('article');
    card.className = 'card';

    const textEl = document.createElement('p');
    textEl.className = 'card-text';
    textEl.textContent = text;

    const actions = document.createElement('div');
    actions.className = 'card-actions';

    const editBtn = document.createElement('button');
    editBtn.type = 'button';
    editBtn.textContent = 'Edit';

    const deleteBtn = document.createElement('button');
    deleteBtn.type = 'button';
    deleteBtn.textContent = 'Delete';
    deleteBtn.className = 'delete';

    editBtn.addEventListener('click', () => {
      const next = prompt('Edit card text:', textEl.textContent || '');
      if (next === null) {
        return;
      }
      const clean = next.trim();
      if (!clean) {
        setStatus('Card text cannot be empty.', true);
        return;
      }
      textEl.textContent = clean;
      persistFromDom();
      setStatus('Card updated.');
    });

    deleteBtn.addEventListener('click', () => {
      card.remove();
      persistFromDom();
      setStatus('Card deleted.');
    });

    actions.append(editBtn, deleteBtn);
    card.append(textEl, actions);
    return card;
  };

  const buildColumn = (name, cards) => {
    const column = document.createElement('section');
    column.className = 'column';
    column.dataset.column = name;

    const title = document.createElement('h2');
    title.textContent = name;

    const form = document.createElement('form');
    form.className = 'add-form';

    const input = document.createElement('input');
    input.className = 'add-input';
    input.placeholder = `Add to ${name}`;
    input.setAttribute('aria-label', `Add card in ${name}`);

    const addBtn = document.createElement('button');
    addBtn.type = 'submit';
    addBtn.textContent = 'Add';

    form.append(input, addBtn);

    const cardList = document.createElement('div');
    cardList.className = 'cards';

    cards.forEach((cardText) => {
      cardList.appendChild(buildCard(cardText));
    });

    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const clean = input.value.trim();
      if (!clean) {
        setStatus('Type a card title before adding.', true);
        return;
      }
      cardList.appendChild(buildCard(clean));
      input.value = '';
      persistFromDom();
      setStatus('Card added.');
    });

    column.append(title, form, cardList);
    return column;
  };

  const stateFromDom = () => {
    const state = createEmptyState();

    document.querySelectorAll('.column').forEach((columnEl) => {
      const columnName = columnEl.dataset.column;
      if (!COLUMNS.includes(columnName)) {
        return;
      }
      const cards = Array.from(columnEl.querySelectorAll('.card .card-text'))
        .map((el) => el.textContent.trim())
        .filter(Boolean);
      state[columnName] = cards;
    });

    return state;
  };

  const persistFromDom = () => {
    const next = stateFromDom();
    saveState(next);
  };

  const render = (state) => {
    boardEl.innerHTML = '';

    COLUMNS.forEach((column) => {
      boardEl.appendChild(buildColumn(column, state[column] || []));
    });

    if (window.Sortable) {
      boardEl.querySelectorAll('.cards').forEach((cardsEl) => {
        Sortable.create(cardsEl, {
          group: 'offline-kanban',
          animation: 150,
          ghostClass: 'drag-ghost',
          onEnd: () => {
            persistFromDom();
            setStatus('Board updated.');
          }
        });
      });
    } else {
      setStatus('SortableJS failed to load. Drag and drop is unavailable.', true);
    }
  };

  const exportData = () => {
    const state = stateFromDom();
    const blob = new Blob([JSON.stringify(state, null, 2)], {
      type: 'application/json'
    });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    const stamp = new Date().toISOString().replace(/[:.]/g, '-');
    link.href = url;
    link.download = `offline-kanban-${stamp}.json`;
    document.body.appendChild(link);
    link.click();
    link.remove();
    URL.revokeObjectURL(url);
    setStatus('Exported board JSON.');
  };

  const importData = async (file) => {
    if (!file) {
      return;
    }

    try {
      const text = await file.text();
      const parsed = JSON.parse(text);

      if (!validateState(parsed)) {
        setStatus('Import failed: JSON format is invalid for this board.', true);
        return;
      }

      const cleaned = COLUMNS.reduce((acc, col) => {
        acc[col] = parsed[col].map((card) => card.trim()).filter(Boolean);
        return acc;
      }, {});

      saveState(cleaned);
      render(cleaned);
      setStatus('Import successful.');
    } catch {
      setStatus('Import failed: file is not valid JSON.', true);
    }
  };

  exportBtn.addEventListener('click', exportData);
  importInput.addEventListener('change', async (event) => {
    const [file] = event.target.files || [];
    await importData(file);
    event.target.value = '';
  });

  const initial = loadState();
  render(initial);
  saveState(initial);
})();
