
export const featured = ({parentElement, title, text}) => {

    if(!parentElement) return;
    
    parentElement.innerHTML += `
        <div class="featured-message">
                <p class="featured-message__title">${title}</p>
                <p class="featured-message__text">${text}</p>
            </div>`;
}