const mapPhone = document.querySelector('.map_phone');
const map = document.querySelector('.map');

const width = screen.width;

if( width <= 480) {
	if( mapPhone.classList.contains('hide') ) {
		mapPhone.classList.remove('hide');
		map.classList.add('hide');
	} else {
		mapPhone.classList.add('hide');
		map.classList.remove('hide');
	}
}