#!/usr/bin/env python
import xlrd
info = xlrd.open_workbook('../js/thinkpage_cities.xls')
# thinkpage_cities.xls can be downloaded at https://www.seniverse.com/data/thinkpage_cities.zip
city_table = info.sheet_by_index(1)
cid = city_table.col_values(0, 2887, 5435)
cpy = city_table.col_values(2, 2887, 5435)
# above is Chinese cities' index
out = open("../js/city.list.json", 'wb')
for py in cpy:
    out.write('{\n')
    out.write('\t"name": "{}",\n'.format(py))
    out.write('\t"id": "{}"\n'.format(cid[cpy.index(py)]))
    out.write('},\n')
    # out.write("{\t\n\t'name': '{}',\n\t'id': '{}'\n},\n".format(cid[cpy.index(py)], py))
out.close()
