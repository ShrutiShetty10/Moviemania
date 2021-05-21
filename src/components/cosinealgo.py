import json
import urllib.request
import numpy as np
import operator
apiKey="5cc337521ad87c248ab7713c157b84ae"
movieID="157336"

url = "https://api.themoviedb.org/3/movie/"+movieID+"?api_key="+apiKey
data = urllib.request.urlopen(url).read().decode()

obj=json.loads(data)

if obj['adult']:
    a=1
else:
    a=0



genobj=obj['genres']
b=[]
for i in genobj:
    b.append(i['id'])


c=obj['popularity']
d=obj['vote_average']
e=obj['vote_count']

# url="https://api.themoviedb.org/3/movie/"+movieID+"/recommendations?api_key="+apiKey+"&language=en-US&page=1"
url="https://api.themoviedb.org/3/trending/all/week?api_key=5cc337521ad87c248ab7713c157b84ae&language=en-US"
data = urllib.request.urlopen(url).read().decode()

movies=json.loads(data)

recommendation={}

x=0
for movie in movies['results']:

    try:
        if movie['adult']:
            p = 1
        else:
            p = 0


        n=movie['genre_ids']

        q=0
        for i in b:
            if i in n:
                q+=1


        r = movie['popularity']
        s = movie['vote_average']
        t = movie['vote_count']

        x = np.array([a,len(b),c,d,e])
        y = np.array([p,q,r,s,t])

        dot = np.dot(x, y)
        norma = np.linalg.norm(x)
        normb = np.linalg.norm(y)
        cos = dot / (norma * normb)

        recommendation[movie['id']]=cos, movie['title']
    except:
        continue


{k: v for k, v in sorted(recommendation.items(), key=lambda item: item[1])}
recommendation=dict(sorted(recommendation.items(),key=operator.itemgetter(1)))

print(list(recommendation.items())[-3:])