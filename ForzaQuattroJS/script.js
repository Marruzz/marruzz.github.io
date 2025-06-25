let turno = false; // false = rosso, true = giallo

const matrice = Array.from({ length: 6 }, () => Array(7).fill(null));

function CreoTabella() {
  const gameBoard = document.getElementById("gameBoard");
  
  // Crea la griglia 6x7
  for (let i = 0; i < 6; i++) {
    const row = document.createElement("div");
    row.className = "flex justify-center space-x-2 mb-2";
    
    for (let j = 0; j < 7; j++) {
      const cell = document.createElement("div");
      cell.id = `cell-${i}-${j}`;
      cell.className = "w-16 h-16 bg-white rounded-full border-4 border-blue-600 cursor-pointer hover:bg-blue-50 transition-all duration-200 hover:scale-105 flex items-center justify-center shadow-lg";
      cell.addEventListener("click", handleCellClick);
      
      // Aggiunge l'effetto hover per la colonna
      cell.addEventListener("mouseenter", () => highlightColumn(j, true));
      cell.addEventListener("mouseleave", () => highlightColumn(j, false));
      
      row.appendChild(cell);
    }
    
    gameBoard.appendChild(row);
  }
  
  // Aggiungi event listeners per i pulsanti
  document.getElementById("resetBtn").addEventListener("click", resetGame);
  document.getElementById("playAgainBtn").addEventListener("click", resetGame);
  
  updatePlayerIndicator();
}

function highlightColumn(col, highlight) {
  for (let i = 0; i < 6; i++) {
    const cell = document.getElementById(`cell-${i}-${col}`);
    if (matrice[i][col] === null) {
      if (highlight) {
        cell.classList.add("bg-blue-100", "border-blue-400");
        cell.classList.remove("bg-white", "border-blue-600");
      } else {
        cell.classList.remove("bg-blue-100", "border-blue-400");
        cell.classList.add("bg-white", "border-blue-600");
      }
    }
  }
}

function updatePlayerIndicator() {
  const playerIndicator = document.getElementById("playerIndicator");
  if (!turno) {
    playerIndicator.innerHTML = `
      <div class="w-4 h-4 rounded-full bg-red-500 mr-2 animate-pulse"></div>
      Rosso
    `;
  } else {
    playerIndicator.innerHTML = `
      <div class="w-4 h-4 rounded-full bg-yellow-400 mr-2 animate-pulse"></div>
      Giallo
    `;
  }
}

function handleCellClick(event) {
  const cell = event.target;
  const [_, row, col] = cell.id.split("-");
  const y = parseInt(col);

  const primoPuntoNull = trovaPrimoPuntoNull(matrice, y);

  if (primoPuntoNull !== -1) {
    if (!turno) {
      aggiungiDisco(primoPuntoNull, y, "red", true);
      turno = true;
    } else {
      aggiungiDisco(primoPuntoNull, y, "yellow", false);
      turno = false;
    }

    updatePlayerIndicator();

    if (controllaVittoria(primoPuntoNull, y)) {
      setTimeout(() => {
        showVictoryModal(!turno);
      }, 500);
    } else if (isBoardFull()) {
      setTimeout(() => {
        showDrawModal();
      }, 500);
    }

    console.log(matrice);
  } else {
    // Animazione per colonna piena
    animateFullColumn(y);
  }
}

function animateFullColumn(col) {
  for (let i = 0; i < 6; i++) {
    const cell = document.getElementById(`cell-${i}-${col}`);
    cell.classList.add("animate-pulse", "bg-red-200");
    setTimeout(() => {
      cell.classList.remove("animate-pulse", "bg-red-200");
    }, 1000);
  }
}

function isBoardFull() {
  return matrice[0].every(cell => cell !== null);
}

function trovaPrimoPuntoNull(matrice, colonna) {
  for (let i = matrice.length - 1; i >= 0; i--) {
    if (matrice[i][colonna] === null) {
      return i;
    }
  }
  return -1;
}

function controllaVittoria(riga, colonna) {
  return (
    contaInDirezione(riga, colonna, 0, 1) +
      contaInDirezione(riga, colonna, 0, -1) >=
      3 ||
    contaInDirezione(riga, colonna, 1, 0) >= 3 ||
    contaInDirezione(riga, colonna, 1, 1) +
      contaInDirezione(riga, colonna, -1, -1) >=
      3 ||
    contaInDirezione(riga, colonna, 1, -1) +
      contaInDirezione(riga, colonna, -1, 1) >=
      3
  );
}

function contaInDirezione(riga, colonna, deltaRiga, deltaColonna) {
  const giocatoreCorrente = matrice[riga][colonna];
  let conta = 0;

  for (let i = 1; i < 4; i++) {
    const nuovaRiga = riga + deltaRiga * i;
    const nuovaColonna = colonna + deltaColonna * i;

    if (
      nuovaRiga >= 0 &&
      nuovaRiga < matrice.length &&
      nuovaColonna >= 0 &&
      nuovaColonna < matrice[0].length &&
      matrice[nuovaRiga][nuovaColonna] === giocatoreCorrente
    ) {
      conta++;
    } else {
      break;
    }
  }

  return conta;
}

function aggiungiDisco(riga, colonna, colore, valore) {
  const cell = document.getElementById(`cell-${riga}-${colonna}`);
  
  // Rimuovi le classi di hover
  cell.classList.remove("bg-white", "bg-blue-50", "bg-blue-100", "hover:bg-blue-50", "cursor-pointer", "hover:scale-105");
  cell.removeEventListener("click", handleCellClick);
  
  // Aggiungi il disco con animazione
  const disco = document.createElement("div");
  disco.className = `w-12 h-12 rounded-full border-4 border-white shadow-lg transform scale-0 transition-transform duration-300`;
  
  if (colore === "red") {
    disco.classList.add("bg-red-500");
  } else {
    disco.classList.add("bg-yellow-400");
  }
  
  cell.appendChild(disco);
  matrice[riga][colonna] = valore;
  
  // Animazione di entrata
  setTimeout(() => {
    disco.classList.remove("scale-0");
    disco.classList.add("scale-100");
  }, 100);
}

function showVictoryModal(isRedPlayer) {
  const modal = document.getElementById("victoryModal");
  const message = document.getElementById("victoryMessage");
  
  const playerName = isRedPlayer ? "🔴 Giocatore Rosso" : "🟡 Giocatore Giallo";
  message.textContent = `${playerName} ha vinto!`;
  
  modal.classList.remove("hidden");
  modal.classList.add("flex");
  
  // Animazione di entrata
  setTimeout(() => {
    modal.querySelector("div").classList.remove("scale-95");
    modal.querySelector("div").classList.add("scale-100");
  }, 100);
}

function showDrawModal() {
  const modal = document.getElementById("victoryModal");
  const message = document.getElementById("victoryMessage");
  
  message.textContent = "🤝 Pareggio! Nessun vincitore!";
  
  modal.classList.remove("hidden");
  modal.classList.add("flex");
  
  setTimeout(() => {
    modal.querySelector("div").classList.remove("scale-95");
    modal.querySelector("div").classList.add("scale-100");
  }, 100);
}

function resetGame() {
  // Nascondi il modal
  const modal = document.getElementById("victoryModal");
  modal.classList.add("hidden");
  modal.classList.remove("flex");
  modal.querySelector("div").classList.remove("scale-100");
  modal.querySelector("div").classList.add("scale-95");
  
  // Reset della matrice e UI
  resetMatrice();
}

function resetMatrice() {
  for (let i = 0; i < 6; i++) {
    for (let j = 0; j < 7; j++) {
      matrice[i][j] = null;
      const cell = document.getElementById(`cell-${i}-${j}`);
      cell.innerHTML = "";
      
      // Ripristina le classi originali
      cell.className = "w-16 h-16 bg-white rounded-full border-4 border-blue-600 cursor-pointer hover:bg-blue-50 transition-all duration-200 hover:scale-105 flex items-center justify-center shadow-lg";
      
      // Riattacca gli event listeners
      cell.addEventListener("click", handleCellClick);
      cell.addEventListener("mouseenter", () => highlightColumn(j, true));
      cell.addEventListener("mouseleave", () => highlightColumn(j, false));
    }
  }
  turno = false;
  updatePlayerIndicator();
}

window.onload = CreoTabella;
