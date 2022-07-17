// Get the URL and declare the function
$.get('https://rss.nytimes.com/services/xml/rss/nyt/World.xml', function (data) {
    
    document.write("Output:");
    document.write("<br>");

    // Find the <item> tag
    $(data).find("item").each(function () {

        let el = $(this);

    // Write the wanted OUTPUT in a HTML file. The OUTPUT will be put in the <body> tag
        
        document.write("---------------------------------------------------------------");
        document.write("<br>")

        // Find and write the Title
        document.write("Title   : " + el.find("title").text());
        document.write("<br>")

        // Find and write the Author/Creator
        document.write("Author  : " + el.find("dc\\:creator").text());
        document.write("<br>")

        // Find and write the Publication Date
        document.write("Date    : " + el.find("pubDate").text());
        document.write("<br>")

        // Find and write the Description
        document.write("Description : " + el.find("description").text());
        document.write("<br>")

    });
});