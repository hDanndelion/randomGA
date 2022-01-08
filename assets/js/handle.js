const random = document.getElementsByTagName('button')[0];
var arrays = [...document.getElementsByTagName('li')];

random.onclick = () => {
    for (let i=1; i<=11; i++) {
        setTimeout(handleArrays, i*1500 );
    }

    
}

function handleArrays() {
    let index = [Math.floor(Math.random() * arrays.length)];

    arrays[index].classList.add('hidden');
    arrays.splice(index, 1);

    if (arrays.length == 1) {
        arrays[0].classList.add('active');

        const complete = arrays[0].getElementsByClassName('complete')[0];

        if (complete.innerText == 'Dann') {
            alert('Tiếc quá, mình k nhận giải của mình được, vui lòng random lại !')
            document.location.reload();
        }

        setTimeout(() => {
            alert(`Chúc mừng kẻ may mắn hôm nay :${complete.innerText}`);
        }, 1500);
    }
}