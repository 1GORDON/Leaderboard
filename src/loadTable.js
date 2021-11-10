const scoreData = [
  { name: 'name', score: 100 },
  { name: 'name', score: 53 },
  { name: 'name', score: 67 },
  { name: 'name', score: 51 },
  { name: 'name', score: 23 },
  { name: 'name', score: 98 },
];

const loadTable = () => {
  const table = document.querySelector('.scoreboard-table');
  scoreData.forEach((data) => {
    const tr = document.createElement('tr');
    tr.className = 'table-row';
    const td = document.createElement('td');
    td.className = 'table-data';
    td.innerHTML = `${data.name}: ${data.score}`;

    tr.appendChild(td);
    table.appendChild(tr);
  });
};
export default loadTable;