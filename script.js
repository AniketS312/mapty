'use strict';

// prettier-ignore
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');

// let map,
//     mapEvent;


class Workout {
    date = new Date();
    id = (Date.now() + '').slice(-10)
    
    constructor(coords, distance, duration) {
        // this.date = ...
        // this.id = ...
        this.coords = coords; // [lat, lng]
        this.distance = distance; // in km
        this.duration = duration; // in min
    }
}

class Running extends Workout{
constructor(coords, distance, duration, cadence) {
    super()
    this.cadence = cadence;
    this.calcPace();
}

calcPace() {
    this.pace = this.duration / this.distance;
}
}

class Cycling extends Workout{
    constructor(coords, distance, duration, cadence) {
        super(coords, distance, duration)
        this.elevationGain = elevationGain;
        this.calcSpeed();
    }

    // Application Arch
    calcSpeed() {
        this.speed = this.distance / (this.duration / 60 )
        return this.speed
    }
}

const run1 = new Running([39, -12],  5.2, 24, 178);
const run1 = new Cycling([39, -12],  5.2, 24, 178);


    class App {
        #map;
        #mapEvent;

        constructor() {
            this._getPosition();

            form.addEventListener('submit', this._newWorkOut.bind(this));
            
            inputType.addEventListener('change', this._toggleElevationField)
        }

    _getPosition() {
    if (navigator.geolocation)
     navigator.geolocation.getCurrentPosition(
         this._loadMap.bind(this),
        function() {
        alert('Could not get your position.')
    });

        }
        
        _loadMap(position) {
                const { latitude, longitude } = position.coords;
                const coords = [latitude, longitude]
                this.#map = L.map('map').setView(coords, 13);
                L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
               }).addTo(this.#map);
           
           // Handling clicks on map
               this.#map.on('click', this._showForm.bind(this));
           
           }
        
        _showForm() {
            this.#mapEvent = mapE;
                   form.classList.remove('hidden');
                   inputDistance.focus();
        }

        _toggleElevationField() {
            inputElevation.closest('.form__row').classList.toggle('form__row--hidden');
            inputCadence.closest('.form__row').classList.toggle('form__row--hidden');
        }

        _newWorkOut(error) {
            // Display Marker
            error.preventDefault();
                console.log(this)
             // Xlear input fields
             inputDistance.value = inputCadence.value = inputDuration.value = inputCadence.value = '';
                        
                 // Display marker
             const { lat, lng } = this.#mapEvent.latlng
                L.marker([lat, lng])
                 .addTo(this.#map)
                .bindPopup(L.popup({
                      maxWidth: 250,
                       minWidth: 100, 
                      autoClose: false,
                      closeOnClick: false,
                       className: 'running-popup'
                  }))
                .setPopupContent('Workout')
                 .openPopup()
        }
    }

const app = new App();



