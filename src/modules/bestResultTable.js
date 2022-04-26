const bestResultTableGenerating = () => {
    const bestResultTable = document.querySelector('.best-result-table');
    let users = JSON.parse(localStorage.users);

    users.sort(function(prev,next) {
        if (prev.bestResult > next.bestResult) return -1;
        if (prev.bestResult < next.bestResult) return 1;

        if (prev.bestResultTime < next.bestResultTime) return -1;
        if (prev.bestResultTime > next.bestResultTime) return 1;
        return 0;
    });

    bestResultTable.innerHTML = `<div class="best-result-table__table-head table-cell table-head">
                                    <p class="table-cell__text just-text">№</p>
                                </div>
                                <div class="best-result-table__table-head table-cell table-head">
                                    <p class="table-cell__text just-text">Ник</p>
                                </div>
                                <div class="best-result-table__table-head table-cell table-head">
                                    <p class="table-cell__text just-text">Время</p>
                                </div>
                                <div class="best-result-table__table-head table-cell table-head">
                                    <p class="table-cell__text just-text">Счёт</p>
                                </div>`;

    for (let i = 0; i < 10; i++){
        if (users[i]){
            if (users[i].bestResultTime != '0:00'){
                bestResultTable.innerHTML += `<div class="best-result-table__table-head table-cell">
                                                <p class="table-cell__text just-text">${i+1}</p>
                                            </div>
                                            <div class="best-result-table__table-head table-cell">
                                                <p class="table-cell__text just-text">${users[i].login}</p>
                                            </div>
                                            <div class="best-result-table__table-head table-cell">
                                                <p class="table-cell__text just-text">${users[i].bestResultTime}</p>
                                            </div>
                                            <div class="best-result-table__table-head table-cell">
                                                <p class="table-cell__text just-text">${users[i].bestResult}%</p>
                                            </div>`
            } else{
                bestResultTable.innerHTML += `<div class="best-result-table__table-head table-cell">
                                                <p class="table-cell__text just-text">${i+1}</p>
                                            </div>
                                            <div class="best-result-table__table-head table-cell">
                                                <p class="table-cell__text just-text"></p>
                                            </div>
                                            <div class="best-result-table__table-head table-cell">
                                                <p class="table-cell__text just-text"></p>
                                            </div>
                                            <div class="best-result-table__table-head table-cell">
                                                <p class="table-cell__text just-text"></p>
                                            </div>`
            }
        } else{
            bestResultTable.innerHTML += `<div class="best-result-table__table-head table-cell">
                                            <p class="table-cell__text just-text">${i+1}</p>
                                        </div>
                                        <div class="best-result-table__table-head table-cell">
                                            <p class="table-cell__text just-text"></p>
                                        </div>
                                        <div class="best-result-table__table-head table-cell">
                                            <p class="table-cell__text just-text"></p>
                                        </div>
                                        <div class="best-result-table__table-head table-cell">
                                            <p class="table-cell__text just-text"></p>
                                        </div>`
        }
    }
}

export default bestResultTableGenerating;