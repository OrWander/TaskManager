//Adding h5 dynamically into DOM divs
function addTitlesToOuterDiv() {
    const titleDevlopment = document.createElement("h5");
    titleDevlopment.innerText = "Development";
    DOM.divDevelopmentRef.append(titleDevlopment);

    const titleDesign = document.createElement("h5");
    titleDesign.innerText = "Design";
    DOM.divDesignRef.append(titleDesign);

    const titleMarketing = document.createElement("h5");
    titleMarketing.innerText = "Marketing";
    DOM.divMarketingRef.append(titleMarketing);
}
