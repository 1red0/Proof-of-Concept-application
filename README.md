1. Create a new project in your desired programming language

 

2. Create an API/method/function to parse an RSS (https://rss.nytimes.com/services/xml/rss/nyt/World.xml). Display the news list items or just one news item from the source to the user (title, dc:creator, pubDate, description)

e.g.    Output:  Title: Ukraine News: Russian Strike on Central Ukrainian City Kills at Least 23

        Author: The New York Times

        Date: Fri, 15 Jul 2022 09:00:34

        Description: The attack in Vinnytsia is the latest to hit a civilian target without an apparent military aim. The W.N.B.A. star Brittney Griner returned to a Russian court after pleading guilty to drug charges.

   

3. Our software versioning number is following the next template: [Major number].[Minor number].[BugFix number] (e.g. Empact v2.5.756)

Requirement: Create an API/method/function that will receive the version number as an input string and will parse the version to return the 3 containing numbers.

e.g. Input = "2.4.254"

desired Output = “Major=2; Minor=4; BugFix=254”