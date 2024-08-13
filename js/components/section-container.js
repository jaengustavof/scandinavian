import { stepOne } from './step-one.js';
import { stepTwo } from './step-two.js';
import { stepThree } from './step-three.js';
import { stepFour } from './step-four.js';

export const sectionContainer = () => { 
    const steps = document.querySelectorAll('.sections-container__step');
    const parentContainer = document.querySelector('#bookingInfoContainer');
    
    const fadeOutContent = (element, callback) => {
        element.style.transition = 'opacity 0.5s ease-in-out';
        element.style.opacity = 0;
        setTimeout(() => {
            callback();
        }, 500); // This should match the transition duration
    };
    
    const fadeInContent = (element) => {
        element.style.opacity = 0;
        element.style.transition = 'opacity 0.5s ease-in-out';
        requestAnimationFrame(() => {
            element.style.opacity = 1;
        });
    };

    steps.forEach((step, index) => {
        step.addEventListener('click', () => {
            steps.forEach((step) => {
                step.classList.remove('sections-container__step--active');
            });
            step.classList.add('sections-container__step--active');

            fadeOutContent(parentContainer, () => {
                if (index === 0) {
                    stepOne({parentContainer});
                } else if (index === 1) {
                    stepTwo({parentContainer, number: 6});
                } else if (index === 2) {
                    stepThree({parentContainer});
                } else if (index === 3) {
                    stepFour({parentContainer});
                }

                fadeInContent(parentContainer);
            });
        });
    });
};
