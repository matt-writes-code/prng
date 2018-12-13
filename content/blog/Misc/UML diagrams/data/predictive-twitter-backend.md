# UML diagram predictive twitter backend

```
Title: PREDICTIVE TWITTER API v1

participant front end
participant application.py
participant routes.py
participant main.py
participant trained\nML models
participant interest affinities\n+ word clouds dataset
participant Google NLP API
participant Crimson\nHexagon API
participant Twitter API

Note over application.py: starts app\nand listens\nto front end
Note over interest affinities\n+ word clouds dataset: has historical lists\nand word clouds over\n the past year
front end -->> application.py: sends json
application.py ->> routes.py: passes GET request
Note over routes.py: gets 1. content\nand 2.timestamp
routes.py -> main.py: process_tweet()
Note over main.py: load ML model
Note over main.py: preprocess json to\ngenerate model input
main.py -> trained\nML models: predict_from_row()
Note over trained\nML models: predict
trained\nML models -> main.py: sends back predictions\nfor Retweet Count, Reply Count\nPotential Impressions, and\nTotal Engagement
main.py --> Google NLP API: sends content to API
Note over Google NLP API: analyze sentiment and\nentities in content
Google NLP API --> main.py: sends sentiment score and entities list
main.py -> interest affinities\n+ word clouds dataset: compares entities against\naffinities and word clouds list
interest affinities\n+ word clouds dataset -> main.py: gets matching keywords list (TO BE IMPROVED)
main.py --> Crimson\nHexagon API: sends timestamp to API
Note over Crimson\nHexagon API: process word affinities\nfor timestamp
Crimson\nHexagon API --> main.py: sends list of word affinities
main.py --> Crimson\nHexagon API: sends timestamp to API
Note over Crimson\nHexagon API: process twitter metrics
Crimson\nHexagon API --> main.py: sends list of top hashtags and posts with highest retweets
main.py --> Twitter API: sends tweet id of top posts
Twitter API --> main.py: sends content of tweets
main.py --> Google NLP API: sends contents for parsing
Note over Google NLP API: analyze entities\nin contents
Google NLP API --> main.py: sends salient entities of top retweeted posts
Note over main.py: calculate context as a % of\ncurrent tweet entities /\ntop retweeted post\n entities
main.py --> Crimson\nHexagon API: sends request for one week of activity volume matching timestamp
Note over Crimson\nHexagon API: pokemon buzz\nmonitor processes\nactivity volume
Crimson\nHexagon API --> main.py: sends tweet volume by day and time on buzz monitor
Note over main.py: calculate best time as a %\nbased on historical records
main.py -> routes.py: returns json
routes.py --> front end: returns json
Note over front end: process json to\nshow results
```