#!/usr/bin/env python
import xlrd
info = xlrd.open_workbook('../js/weather_contrast_20170517.xls')
# xls_file can be downloaded at http://static.nowapi.com/download/weather_contrast_20170517.xls
city_table = info.sheet_by_index(0)
cid = city_table.col_values(2, 1)
cpy = city_table.col_values(3, 1)
out = open("../js/city.list.json", 'wb')
for py in cpy:
    out.write('{\n')
    out.write('\t"name": "{}",\n'.format(py.capitalize()))
    out.write('\t"id": "{}"\n'.format(int(cid[cpy.index(py)])))
    out.write('},\n')
out.close()
