
// [ {}, {}, {} ]  => { [], [], [] }

function dataFormater( data ) {
    var formated_data = {},
        keys = Object.keys( data[0] );  // [ 'author', 'date', 'description' ]


    // pertvarkome duomenis tinkamu formatu, pvz: { a:[], b: [], ... }
    for ( var i=0; i<data.length; i++ ) {
        keys = Object.keys( data[i] );
        keys.forEach( key => {
            if ( !Array.isArray( formated_data[key] ) ) {
                formated_data[key] = [];
            }
            formated_data[key].push( data[i][key] );
        });
    }

    return formated_data;
}

// data = {
//     author: ['Jonaitis', 'Marija', 'Juozas' ],
//     date: ['2019', '2019', '2019'],
//     description: ['Lorem upsim...', 'Lorem upsim...', 'Lorem upsim...']
// }




var todo = (function(){

    var books = [
        {
            author: 'Jonaitis',
            date: '2019',
            description: 'Lorem upsim...'
        },
        {
            author: 'Marija',
            date: '2018',
            description: 'Dolore'
        },
        {
            author: 'Juozas',
            date: '2000',
            description: 'Amen'
        }
    ];

    //cached DOM
    var $library = $('#biblioteka'),
        book_template = $library.find('#book_template').html();
    
    // bind events

    // pradinio turinio atvaizdavimas (tuscias TODO sarasas)
    render();
    
    // atvaizduoti
    function render() {
        var data = {
            author: [ books[0].author, books[1].author, books[2].author ],
            date: [ books[0].date, books[1].date, books[2].date ],
            description: [ books[0].description, books[1].description, books[2].description ]
        };
        // var data = dataFormater(books);
        return $library.html( HTML_template.render( book_template, data ) );
    }

    return {
        books: books
    }

})();