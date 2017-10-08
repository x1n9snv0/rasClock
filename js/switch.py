#!/usr/bin/env python
import json
file_in = open('china-city-list.txt', 'rb')
city_list = []
city_info = file_in.readline()
while len(city_info) > 0:
    item = ['city_code',
            'en',
            'cn',
            'con_code',
            'con_en',
            'con_cn',
            'pro_en',
            'pro_cn',
            'superior_en',
            'superior_cn',
            'lon',
            'lat']
    city_dic = {}
    info = city_info.split('\t')
    for i in range(len(info)):
        city_dic[item[i]] = info[i]
    city_list.append(city_dic)
    city_info = file_in.readline()
file_out = open('city.json', 'wb')
json.dump(city_list, file_out, indent=4)
file_out.close()
file_in.close()
json_in = open('city.json', 'rb')
data = json.load(json_in)
print "*"

