function openDetails(itemId) {
    const details = {
        'starter-1': { name: 'Starter 1', description: 'Description of Starter 1 <br><img src="/images_starters/notavilable.png" height="60%" width="40%" alt="image not available"</img><br><hr>', price: 'Rs 100' },
        'starter-2': { name: 'Starter 2', description: 'Description of Starter 2', price: 'Rs 100' },
        'starter-3': { name: 'Starter 3', description: 'Description of Starter 2', price: 'Rs 100' },
        'starter-4': { name: 'Starter 4', description: 'Description of Starter 2', price: 'Rs 100' },
        'starter-5': { name: 'Starter 5', description: 'Description of Starter 2', price: 'Rs 100' },

        'main-course-1': { name: 'Main Course 1', description: 'Description of Main Course 1', price: 'Rs 100' },
        'main-course-2': { name: 'Main Course 2', description: 'Description of Main Course 2', price: 'Rs 100' },
        'main-course-3': { name: 'Main Course 3', description: 'Description of Main Course 2', price: 'Rs 100' },
        'main-course-4': { name: 'Main Course 4', description: 'Description of Main Course 2', price: 'Rs 100' },
        'main-course-5': { name: 'Main Course 5', description: 'Description of Main Course 2', price: 'Rs 100' },

        // Add more details as needed
    };

    const detailsPage = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>${details[itemId].name} Details</title>
            <link rel="stylesheet" href="./css/style.css">
        </head>
        <body>
            <h2>${details[itemId].name}</h2>
            <p>Description: ${details[itemId].description}</p>
            <p>Price: ${details[itemId].price}</p>
            <form action="menu.html">
                <button type="submit">Go Back</button>
            </form>
            <script src="scripts.js"></script>
        </body>
        </html>
    `;

    const detailsWindow = window.open('', '_self');
    detailsWindow.document.write(detailsPage);
    detailsWindow.document.close();
}