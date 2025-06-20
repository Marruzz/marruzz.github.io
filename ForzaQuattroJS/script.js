let turno = false;

const matrice = Array.from({ length: 6 }, () => Array(7).fill(null));

function CreoTabella() {
  const table = document.createElement("table");
  table.style.borderCollapse = "collapse";
  const tbody = document.createElement("tbody");

  for (let i = 0; i < 6; i++) {
    const row = document.createElement("tr");
    for (let j = 0; j < 7; j++) {
      const cell = document.createElement("td");
      cell.id = `cell-${i}-${j}`;
      cell.style.width = "50px";
      cell.style.height = "50px";
      cell.style.border = "3px solid black";
      cell.addEventListener("click", handleCellClick);
      row.appendChild(cell);
    }
    tbody.appendChild(row);
  }

  table.appendChild(tbody);
  document.body.appendChild(table);
}

function handleCellClick(event) {
  const cell = event.target;
  const [_, row, col] = cell.id.split("-");
  const y = parseInt(col);

  const primoPuntoNull = trovaPrimoPuntoNull(matrice, y);

  if (primoPuntoNull !== -1) {
    if (!turno) {
      aggiungiImmagine(primoPuntoNull, y, "Rosso.png", true);
      turno = true;
    } else {
      aggiungiImmagine(primoPuntoNull, y, "Giallo.png", false);
      turno = false;
    }

    if (controllaVittoria(primoPuntoNull, y)) {
      setTimeout(() => {
        alert(`Il giocatore ${turno ? "Rosso" : "Giallo"} ha vinto!`);
        resetMatrice();
      }, 100);
    }

    console.log(matrice);
  } else {
    console.log("La colonna è piena");
  }
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

function aggiungiImmagine(riga, colonna, src, valore) {
  const img = document.createElement("img");
  img.src = src;
  img.style.width = "auto";
  img.style.height = "100%";
  matrice[riga][colonna] = valore;
  document.getElementById(`cell-${riga}-${colonna}`).appendChild(img);
}

function resetMatrice() {
  for (let i = 0; i < 6; i++) {
    for (let j = 0; j < 7; j++) {
      matrice[i][j] = null;
      document.getElementById(`cell-${i}-${j}`).innerHTML = "";
    }
  }
  turno = false;
}

window.onload = CreoTabella;
