// Script for handling expandable panels (projects and papers)
document.addEventListener('DOMContentLoaded', function() {
    // Function to handle expandable panels
    function setupExpandablePanels(itemSelector, arrowSelector) {
        const items = document.querySelectorAll(itemSelector);
        
        items.forEach(item => {
            item.addEventListener('click', function() {
                // Get the ID from the data attribute
                const dataAttr = itemSelector === '.project-item' ? 'data-project' : 'data-paper';
                const id = this.getAttribute(dataAttr);
                
                // Get the corresponding details panel
                const detailsPanel = document.getElementById(id);
                
                // Toggle the 'open' class on the details panel
                detailsPanel.classList.toggle('open');
                
                // Toggle the arrow direction
                const arrow = this.querySelector(arrowSelector);
                arrow.classList.toggle('open');
                
                // Close other open panels of the same type
                items.forEach(otherItem => {
                    if (otherItem !== item) {
                        const otherId = otherItem.getAttribute(dataAttr);
                        const otherDetailsPanel = document.getElementById(otherId);
                        if (otherDetailsPanel && otherDetailsPanel.classList.contains('open')) {
                            otherDetailsPanel.classList.remove('open');
                            otherItem.querySelector(arrowSelector).classList.remove('open');
                        }
                    }
                });
            });
        });
        // Commenting out the following code to prevent the first item from opening by default
        // Open the first item by default
        /*
        if (items.length > 0) {
            const firstItem = items[0];
            const dataAttr = itemSelector === '.project-item' ? 'data-project' : 'data-paper';
            const firstId = firstItem.getAttribute(dataAttr);
            const firstDetailsPanel = document.getElementById(firstId);
            
            firstDetailsPanel.classList.add('open');
            firstItem.querySelector(arrowSelector).classList.add('open');
        }
        */

        // All panels start closed by default - removed auto-opening of first panel //
    }
    
    // Setup project panels
    setupExpandablePanels('.project-item', '.project-arrow');
    
    // Setup paper panels
    setupExpandablePanels('.paper-item', '.paper-arrow');
});
