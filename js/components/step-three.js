import { featured } from "./featured.js"

export const stepThree = ({ parentContainer }) => {
    if(!parentContainer) return;

    parentContainer.innerHTML =  `
        <div class="step-three">
            <div class="step-three__waiver">
                <div class="waiver-image-container">
                    <img src="/assets/images/Image.svg" alt="waiver image" class="waiver-image-container__image">
                </div>
                <div class="waiver-text-container">
                    <h4 class="waiver-text-container__heading">Liability Waiver</h4>
                    <div class="waiver-text-container__sklt-one"></div>
                    <div class="waiver-text-container__sklt-two"></div>
                    <button class="waiver-text-container__cta"><p>Add</p></button>
                </div>
            </div>
            <div class="step-three__sklt-one">
                <div class="sklt-image-container"></div>
                <div class="sklt-text-container">
                    <div class="sklt-text-container__heading"></div>
                    <div class="sklt-text-container__text"></div>
                    <div class="sklt-text-container__button"></div>
                </div>
            </div>
            <div class="step-three__content">
                <div class="content-image">
                    <img src="/assets/images/Wifi.svg" alt="wifi image" class="content-image__image">
                </div>
                <div class="content-info">
                    <h3 class="content-info__title">Wifi</h3>
                    <div class="content-info__text"></div>
                </div>
                <button class="content-cta">Add</button>
            </div>
            <div class="step-three__sklt-two">
                <div class="sklt-two-image"></div>
                <div class="sklt-two-info">
                    <div class="sklt-two-info__title"></div>
                    <div class="sklt-two-info__text"></div>
                </div>
                <div class="sklt-two-cta"></div>
            </div>
        </div>`;

    const parentElement = parentContainer.querySelector('.step-three');
    featured({ parentElement, title: 'FREE', text: 'Insurance' });
}