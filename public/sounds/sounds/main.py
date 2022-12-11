
import os

import json

my = {}

for root, dirs, files in os.walk(os.getcwd()):
    for name in files:
        if '.wav' in name and 'ENGINE' in name:
            dirName = os.path.basename(os.path.dirname(root+'/'+name))
            if not dirName in my:
                my[dirName] = []
            my[dirName].append(name)

x = json.dumps(my)
f = open("test.json", "a")
f.write(x)
f.close()