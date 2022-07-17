$.get('https://rss.nytimes.com/services/xml/rss/nyt/World.xml', function (data) {
    $(data).find("item").each(function () {

        let el = $(this);
        document.write("Output:");
        document.write("<br>");
        document.write("------------------------");
        document.write("<br>")
        document.write("Title   : " + el.find("title").text());
        document.write("<br>")
        document.write("Author  : " + el.find("dc\\:creator").text());
        document.write("<br>")
        document.write("Date    : " + el.find("pubDate").text());
        document.write("<br>")
        document.write("Description : " + el.find("description").text());
        document.write("<br>")

    });
});