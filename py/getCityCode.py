#!/usr/bin/env python
import json

jf = open('js/all.city.list.json', 'rb')
city_info = json.load(jf)
desire_city = []
code = u'CN'
'''
    To find cities of your own country, just change the country code.
    eg.
        CN = China
        US = The United States
        RU = Russia
'''
for city in city_info:
    if city['country'] == code:
        desire_city.append(city)
    else:
        pass
cj = open('../js/[].city.list.json'.format(code.lower()), 'wb')
json.dump(desire_city, cj)
jf.close()
cj.close()
