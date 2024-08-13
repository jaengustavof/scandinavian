
export const fleetCard = (data = null) => { 

    return ` <div class="fleet-card ${!data ? 'sklt' : ''}">
        <div class="fleet-card__name">${!data ? '' : data.name}</div>
        ${!data ? 
            '<div class="fleet-card__image"></div>' : 
            `<img src=".${data.src}" alt="${data.name}" class="fleet-card__image"/>`}
        
        <div class="fleet-card__sklt-one"></div>
        <div class="fleet-card__sklt-two"></div>
        <div class="fleet-card__button">${!data ? '' : 'Book Now'}</div>
    </div>`;

}