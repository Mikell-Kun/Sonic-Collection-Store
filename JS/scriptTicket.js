// Function to decode URI component
function decodeURISafely(uri) {
    try {
        return decodeURIComponent(uri);
    } catch (e) {
        return uri;
    }
}

// Function to parse URL parameters
function getUrlParams() {
    const urlParams = new URLSearchParams(window.location.search);
    const content = urlParams.get('content');
    const total = urlParams.get('total');
    return { content, total };
}

// Function to render ticket content
function renderTicketContent() {
    const { content, total } = getUrlParams();
    const ticketContentDiv = document.getElementById('ticketContent');
    const totalPriceDiv = document.getElementById('totalPrice');
    if (content && total) {
        const items = decodeURISafely(content).split('\n');
        let html = '';
        items.forEach(item => {
            html += `<div class="ticket-item">${item}</div>`;
        });
        ticketContentDiv.innerHTML = html;
        totalPriceDiv.textContent = `Total: $${total}`;
    } else {
        ticketContentDiv.textContent = 'No purchase information available.';
        totalPriceDiv.textContent = 'Total: $0';
    }
}

// Call renderTicketContent when the page loads
renderTicketContent();