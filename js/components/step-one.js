export const stepOne = ({ parentContainer }) => {
    if(!parentContainer) return;

    parentContainer.innerHTML =  `
        <div class="step-one">
                    <div class="step-one__date initial">
                        <div class="date-container">
                            <p class="date-number">12</p>
                            <p class="date-text">FRI DAY</p>
                        </div>
                        <div class="sklt-one">
                            <div class="first-bar"></div>
                            <div class="second-bar"></div>
                        </div>
                        <div class="sklt-two">
                            <div class="first-bar"></div>
                            <div class="second-bar"></div>
                        </div>
                    </div>
                   

                    <div class="step-one__arrow">
                    </div>

                    <div class="step-one__date ending">
                        <p class="total-days">
                            10 Days selected
                        </p> 
                        <div class="date-container">
                            <p class="date-number">22</p>
                            <p class="date-text">SUN DAY</p>
                        </div>
                        <div class="sklt-one">
                            <div class="first-bar"></div>
                            <div class="second-bar"></div>
                        </div>
                        <div class="sklt-two">
                            <div class="first-bar"></div>
                            <div class="second-bar"></div>
                        </div>
                    </div>
                </div>
    `;
}