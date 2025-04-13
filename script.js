// Function to change text content dynamically
function changeText() {
    const textElement = document.getElementById('dynamicText');
    textElement.textContent = 'Text changed! Great job interacting with the DOM!';
}

// Function to modify CSS styles
function changeStyle() {
    const styleBox = document.getElementById('styleBox');
    styleBox.style.backgroundColor = '#4caf50';
    styleBox.style.color = 'white';
    styleBox.style.padding = '20px';
    styleBox.style.border = '2px solid #333';
}

// Function to add a new element
function addElement() {
    const container = document.getElementById('elementContainer');
    const newElement = document.createElement('p');
    newElement.textContent = `New element added at ${new Date().toLocaleTimeString()}`;
    newElement.className = 'highlight';
    container.appendChild(newElement);
}

// Function to remove the last element
function removeElement() {
    const container = document.getElementById('elementContainer');
    const lastElement = container.lastChild;
    if (lastElement) {
        container.removeChild(lastElement);
    } else {
        alert('No elements to remove!');
    }
}