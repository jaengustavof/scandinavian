export const stepFour = ({ parentContainer }) => {
    if(!parentContainer) return;

    parentContainer.innerHTML =  `
    <div class="step-four">
                    <div class="step-four__booking-steps">
                        <div class="step-number-container">
                            <div class="step-number">1</div>
                        </div>

                        <div class="split-line"></div>

                        <div class="step-number-container">
                            <div class="step-number">2</div>
                        </div>

                        <div class="split-line"></div>

                        <div class="step-number-container">
                            <div class="step-number">3</div>
                        </div>

                        <div class="split-line"></div>

                        <div class="step-number-container">
                            <div class="step-number">4</div>
                        </div>
                    </div>
                    <div class="step-four__confirmation-container">
                        <img src="./assets/images/check.svg" alt="Booking Confirmation icon">
                    </div>
                    <div class="step-four__text-container">
                        <div class="text-sklt"></div>
                        <div class="text-sklt"></div>
                    </div>
                </div>`;
                
}