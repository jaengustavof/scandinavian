import { fleetCard } from "./fleet-card.js"
import { featured } from "./featured.js"
const data = [,
    { name: 'Suzuki Jimny', src: '/assets/images/Car.svg' },
    ,
    ,
    ,
    ,
];

export const stepTwo = ({ parentContainer, number }) => {
    parentContainer.innerHTML = '';

    const buildCards = (number) => {
        let result = '';
        for (let i = 0; i < number; i++) {
            if(data[i]) {
                result += fleetCard(data[i])
            }else {
                result += fleetCard()
            }
        }

        return result
    };
    parentContainer.innerHTML = `
        <div class="step-two">	
            ${buildCards(6)}
        </div>
    `;

    const parentElement = parentContainer.querySelector('.step-two');
    featured({ parentElement, title: '+52', text: 'Vehicles' });

};
