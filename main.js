(function() {
    var origin = {
        year: 1900,
        month: 1,
        date: 1,
        day: 1
    }
    var solarTerms = ["小寒", "大寒", "立春", "雨水", "惊蛰", "春分", "清明", "谷雨", "立夏", "小满", "芒种", "夏至", "小暑", "大暑", "立秋", "处暑", "白露", "秋分", "寒露", "霜降", "立冬", "小雪", "大雪", "冬至"];
    var arrSolar = [
        0x95, 0xB4, 0x96, 0xA5, 0x96, 0x97, 0x88, 0x78, 0x78, 0x69, 0x78, 0x87, //1900
        0x96, 0xB4, 0x96, 0xA6, 0x97, 0x97, 0x78, 0x79, 0x79, 0x69, 0x78, 0x77, //1901
        0x96, 0xA4, 0x96, 0x96, 0x97, 0x87, 0x79, 0x79, 0x79, 0x69, 0x78, 0x78, //1902
        0x96, 0xA5, 0x87, 0x96, 0x87, 0x87, 0x79, 0x69, 0x69, 0x69, 0x78, 0x78, //1903
        0x86, 0xA5, 0x96, 0xA5, 0x96, 0x97, 0x88, 0x78, 0x78, 0x79, 0x78, 0x87, //1904
        0x96, 0xB4, 0x96, 0xA6, 0x97, 0x97, 0x78, 0x79, 0x79, 0x69, 0x78, 0x77, //1905
        0x96, 0xA4, 0x96, 0x96, 0x97, 0x97, 0x79, 0x79, 0x79, 0x69, 0x78, 0x78, //1906
        0x96, 0xA5, 0x87, 0x96, 0x87, 0x87, 0x79, 0x69, 0x69, 0x69, 0x78, 0x78, //1907
        0x86, 0xA5, 0x96, 0xA5, 0x96, 0x97, 0x88, 0x78, 0x78, 0x69, 0x78, 0x87, //1908
        0x96, 0xB4, 0x96, 0xA6, 0x97, 0x97, 0x78, 0x79, 0x79, 0x69, 0x78, 0x77, //1909
        0x96, 0xA4, 0x96, 0x96, 0x97, 0x97, 0x79, 0x79, 0x79, 0x69, 0x78, 0x78, //1910
        0x96, 0xA5, 0x87, 0x96, 0x87, 0x87, 0x79, 0x69, 0x69, 0x69, 0x78, 0x78, //1911
        0x86, 0xA5, 0x96, 0xA5, 0x96, 0x97, 0x88, 0x78, 0x78, 0x69, 0x78, 0x87, //1912
        0x95, 0xB4, 0x96, 0xA6, 0x97, 0x97, 0x78, 0x79, 0x79, 0x69, 0x78, 0x77, //1913
        0x96, 0xB4, 0x96, 0xA6, 0x97, 0x97, 0x79, 0x79, 0x79, 0x69, 0x78, 0x78, //1914
        0x96, 0xA5, 0x97, 0x96, 0x97, 0x87, 0x79, 0x79, 0x69, 0x69, 0x78, 0x78, //1915
        0x96, 0xA5, 0x96, 0xA5, 0x96, 0x97, 0x88, 0x78, 0x78, 0x79, 0x77, 0x87, //1916
        0x95, 0xB4, 0x96, 0xA6, 0x96, 0x97, 0x78, 0x79, 0x78, 0x69, 0x78, 0x87, //1917
        0x96, 0xB4, 0x96, 0xA6, 0x97, 0x97, 0x79, 0x79, 0x79, 0x69, 0x78, 0x77, //1918
        0x96, 0xA5, 0x97, 0x96, 0x97, 0x87, 0x79, 0x79, 0x69, 0x69, 0x78, 0x78, //1919
        0x96, 0xA5, 0x96, 0xA5, 0x96, 0x97, 0x88, 0x78, 0x78, 0x79, 0x77, 0x87, //1920
        0x95, 0xB4, 0x96, 0xA5, 0x96, 0x97, 0x78, 0x79, 0x78, 0x69, 0x78, 0x87, //1921
        0x96, 0xB4, 0x96, 0xA6, 0x97, 0x97, 0x79, 0x79, 0x79, 0x69, 0x78, 0x77, //1922
        0x96, 0xA4, 0x96, 0x96, 0x97, 0x87, 0x79, 0x79, 0x69, 0x69, 0x78, 0x78, //1923
        0x96, 0xA5, 0x96, 0xA5, 0x96, 0x97, 0x88, 0x78, 0x78, 0x79, 0x77, 0x87, //1924
        0x95, 0xB4, 0x96, 0xA5, 0x96, 0x97, 0x78, 0x79, 0x78, 0x69, 0x78, 0x87, //1925
        0x96, 0xB4, 0x96, 0xA6, 0x97, 0x97, 0x78, 0x79, 0x79, 0x69, 0x78, 0x77, //1926
        0x96, 0xA4, 0x96, 0x96, 0x97, 0x87, 0x79, 0x79, 0x79, 0x69, 0x78, 0x78, //1927
        0x96, 0xA5, 0x96, 0xA5, 0x96, 0x96, 0x88, 0x78, 0x78, 0x78, 0x87, 0x87, //1928
        0x95, 0xB4, 0x96, 0xA5, 0x96, 0x97, 0x88, 0x78, 0x78, 0x79, 0x77, 0x87, //1929
        0x96, 0xB4, 0x96, 0xA6, 0x97, 0x97, 0x78, 0x79, 0x79, 0x69, 0x78, 0x77, //1930
        0x96, 0xA4, 0x96, 0x96, 0x97, 0x87, 0x79, 0x79, 0x79, 0x69, 0x78, 0x78, //1931
        0x96, 0xA5, 0x96, 0xA5, 0x96, 0x96, 0x88, 0x78, 0x78, 0x78, 0x87, 0x87, //1932
        0x95, 0xB4, 0x96, 0xA5, 0x96, 0x97, 0x88, 0x78, 0x78, 0x69, 0x78, 0x87, //1933
        0x96, 0xB4, 0x96, 0xA6, 0x97, 0x97, 0x78, 0x79, 0x79, 0x69, 0x78, 0x77, //1934
        0x96, 0xA4, 0x96, 0x96, 0x97, 0x97, 0x79, 0x79, 0x79, 0x69, 0x78, 0x78, //1935
        0x96, 0xA5, 0x96, 0xA5, 0x96, 0x96, 0x88, 0x78, 0x78, 0x78, 0x87, 0x87, //1936
        0x95, 0xB4, 0x96, 0xA5, 0x96, 0x97, 0x88, 0x78, 0x78, 0x69, 0x78, 0x87, //1937
        0x96, 0xB4, 0x96, 0xA6, 0x97, 0x97, 0x78, 0x79, 0x79, 0x69, 0x78, 0x77, //1938
        0x96, 0xA4, 0x96, 0x96, 0x97, 0x97, 0x79, 0x79, 0x79, 0x69, 0x78, 0x78, //1939
        0x96, 0xA5, 0x96, 0xA5, 0x96, 0x96, 0x88, 0x78, 0x78, 0x78, 0x87, 0x87, //1940
        0x95, 0xB4, 0x96, 0xA5, 0x96, 0x97, 0x88, 0x78, 0x78, 0x69, 0x78, 0x87, //1941
        0x96, 0xB4, 0x96, 0xA6, 0x97, 0x97, 0x78, 0x79, 0x79, 0x69, 0x78, 0x77, //1942
        0x96, 0xA4, 0x96, 0x96, 0x97, 0x97, 0x79, 0x79, 0x79, 0x69, 0x78, 0x78, //1943
        0x96, 0xA5, 0x96, 0xA5, 0xA6, 0x96, 0x88, 0x78, 0x78, 0x78, 0x87, 0x87, //1944
        0x95, 0xB4, 0x96, 0xA5, 0x96, 0x97, 0x88, 0x78, 0x78, 0x79, 0x77, 0x87, //1945
        0x95, 0xB4, 0x96, 0xA6, 0x97, 0x97, 0x78, 0x79, 0x78, 0x69, 0x78, 0x77, //1946
        0x96, 0xB4, 0x96, 0xA6, 0x97, 0x97, 0x79, 0x79, 0x79, 0x69, 0x78, 0x78, //1947
        0x96, 0xA5, 0xA6, 0xA5, 0xA6, 0x96, 0x88, 0x88, 0x78, 0x78, 0x87, 0x87, //1948
        0xA5, 0xB4, 0x96, 0xA5, 0x96, 0x97, 0x88, 0x79, 0x78, 0x79, 0x77, 0x87, //1949
        0x95, 0xB4, 0x96, 0xA5, 0x96, 0x97, 0x78, 0x79, 0x78, 0x69, 0x78, 0x77, //1950
        0x96, 0xB4, 0x96, 0xA6, 0x97, 0x97, 0x79, 0x79, 0x79, 0x69, 0x78, 0x78, //1951
        0x96, 0xA5, 0xA6, 0xA5, 0xA6, 0x96, 0x88, 0x88, 0x78, 0x78, 0x87, 0x87, //1952
        0xA5, 0xB4, 0x96, 0xA5, 0x96, 0x97, 0x88, 0x78, 0x78, 0x79, 0x77, 0x87, //1953
        0x95, 0xB4, 0x96, 0xA5, 0x96, 0x97, 0x78, 0x79, 0x78, 0x68, 0x78, 0x87, //1954
        0x96, 0xB4, 0x96, 0xA6, 0x97, 0x97, 0x78, 0x79, 0x79, 0x69, 0x78, 0x77, //1955
        0x96, 0xA5, 0xA5, 0xA5, 0xA6, 0x96, 0x88, 0x88, 0x78, 0x78, 0x87, 0x87, //1956
        0xA5, 0xB4, 0x96, 0xA5, 0x96, 0x97, 0x88, 0x78, 0x78, 0x79, 0x77, 0x87, //1957
        0x95, 0xB4, 0x96, 0xA5, 0x96, 0x97, 0x88, 0x78, 0x78, 0x69, 0x78, 0x87, //1958
        0x96, 0xB4, 0x96, 0xA6, 0x97, 0x97, 0x78, 0x79, 0x79, 0x69, 0x78, 0x77, //1959
        0x96, 0xA4, 0xA5, 0xA5, 0xA6, 0x96, 0x88, 0x88, 0x88, 0x78, 0x87, 0x87, //1960
        0xA5, 0xB4, 0x96, 0xA5, 0x96, 0x96, 0x88, 0x78, 0x78, 0x78, 0x87, 0x87, //1961
        0x96, 0xB4, 0x96, 0xA5, 0x96, 0x97, 0x88, 0x78, 0x78, 0x69, 0x78, 0x87, //1962
        0x96, 0xB4, 0x96, 0xA6, 0x97, 0x97, 0x78, 0x79, 0x79, 0x69, 0x78, 0x77, //1963
        0x96, 0xA4, 0xA5, 0xA5, 0xA6, 0x96, 0x88, 0x88, 0x88, 0x78, 0x87, 0x87, //1964
        0xA5, 0xB4, 0x96, 0xA5, 0x96, 0x96, 0x88, 0x78, 0x78, 0x78, 0x87, 0x87, //1965
        0x95, 0xB4, 0x96, 0xA5, 0x96, 0x97, 0x88, 0x78, 0x78, 0x69, 0x78, 0x87, //1966
        0x96, 0xB4, 0x96, 0xA6, 0x97, 0x97, 0x78, 0x79, 0x79, 0x69, 0x78, 0x77, //1967
        0x96, 0xA4, 0xA5, 0xA5, 0xA6, 0xA6, 0x88, 0x88, 0x88, 0x78, 0x87, 0x87, //1968
        0xA5, 0xB4, 0x96, 0xA5, 0x96, 0x96, 0x88, 0x78, 0x78, 0x78, 0x87, 0x87, //1969
        0x95, 0xB4, 0x96, 0xA5, 0x96, 0x97, 0x88, 0x78, 0x78, 0x69, 0x78, 0x87, //1970
        0x96, 0xB4, 0x96, 0xA6, 0x97, 0x97, 0x78, 0x79, 0x79, 0x69, 0x78, 0x77, //1971
        0x96, 0xA4, 0xA5, 0xA5, 0xA6, 0xA6, 0x88, 0x88, 0x88, 0x78, 0x87, 0x87, //1972
        0xA5, 0xB5, 0x96, 0xA5, 0xA6, 0x96, 0x88, 0x78, 0x78, 0x78, 0x87, 0x87, //1973
        0x95, 0xB4, 0x96, 0xA5, 0x96, 0x97, 0x88, 0x78, 0x78, 0x69, 0x78, 0x87, //1974
        0x96, 0xB4, 0x96, 0xA6, 0x97, 0x97, 0x78, 0x79, 0x78, 0x69, 0x78, 0x77, //1975
        0x96, 0xA4, 0xA5, 0xB5, 0xA6, 0xA6, 0x88, 0x89, 0x88, 0x78, 0x87, 0x87, //1976
        0xA5, 0xB4, 0x96, 0xA5, 0x96, 0x96, 0x88, 0x88, 0x78, 0x78, 0x87, 0x87, //1977
        0x95, 0xB4, 0x96, 0xA5, 0x96, 0x97, 0x88, 0x78, 0x78, 0x79, 0x78, 0x87, //1978
        0x96, 0xB4, 0x96, 0xA6, 0x96, 0x97, 0x78, 0x79, 0x78, 0x69, 0x78, 0x77, //1979
        0x96, 0xA4, 0xA5, 0xB5, 0xA6, 0xA6, 0x88, 0x88, 0x88, 0x78, 0x87, 0x87, //1980
        0xA5, 0xB4, 0x96, 0xA5, 0xA6, 0x96, 0x88, 0x88, 0x78, 0x78, 0x77, 0x87, //1981
        0x95, 0xB4, 0x96, 0xA5, 0x96, 0x97, 0x88, 0x78, 0x78, 0x79, 0x77, 0x87, //1982
        0x95, 0xB4, 0x96, 0xA5, 0x96, 0x97, 0x78, 0x79, 0x78, 0x69, 0x78, 0x77, //1983
        0x96, 0xB4, 0xA5, 0xB5, 0xA6, 0xA6, 0x87, 0x88, 0x88, 0x78, 0x87, 0x87, //1984
        0xA5, 0xB4, 0xA6, 0xA5, 0xA6, 0x96, 0x88, 0x88, 0x78, 0x78, 0x87, 0x87, //1985
        0xA5, 0xB4, 0x96, 0xA5, 0x96, 0x97, 0x88, 0x78, 0x78, 0x79, 0x77, 0x87, //1986
        0x95, 0xB4, 0x96, 0xA5, 0x96, 0x97, 0x88, 0x79, 0x78, 0x69, 0x78, 0x87, //1987
        0x96, 0xB4, 0xA5, 0xB5, 0xA6, 0xA6, 0x87, 0x88, 0x88, 0x78, 0x87, 0x86, //1988
        0xA5, 0xB4, 0xA5, 0xA5, 0xA6, 0x96, 0x88, 0x88, 0x88, 0x78, 0x87, 0x87, //1989
        0xA5, 0xB4, 0x96, 0xA5, 0x96, 0x96, 0x88, 0x78, 0x78, 0x79, 0x77, 0x87, //1990
        0x95, 0xB4, 0x96, 0xA5, 0x86, 0x97, 0x88, 0x78, 0x78, 0x69, 0x78, 0x87, //1991
        0x96, 0xB4, 0xA5, 0xB5, 0xA6, 0xA6, 0x87, 0x88, 0x88, 0x78, 0x87, 0x86, //1992
        0xA5, 0xB3, 0xA5, 0xA5, 0xA6, 0x96, 0x88, 0x88, 0x88, 0x78, 0x87, 0x87, //1993
        0xA5, 0xB4, 0x96, 0xA5, 0x96, 0x96, 0x88, 0x78, 0x78, 0x78, 0x87, 0x87, //1994
        0x95, 0xB4, 0x96, 0xA5, 0x96, 0x97, 0x88, 0x76, 0x78, 0x69, 0x78, 0x87, //1995
        0x96, 0xB4, 0xA5, 0xB5, 0xA6, 0xA6, 0x87, 0x88, 0x88, 0x78, 0x87, 0x86, //1996
        0xA5, 0xB3, 0xA5, 0xA5, 0xA6, 0xA6, 0x88, 0x88, 0x88, 0x78, 0x87, 0x87, //1997
        0xA5, 0xB4, 0x96, 0xA5, 0x96, 0x96, 0x88, 0x78, 0x78, 0x78, 0x87, 0x87, //1998
        0x95, 0xB4, 0x96, 0xA5, 0x96, 0x97, 0x88, 0x78, 0x78, 0x69, 0x78, 0x87, //1999
        0x96, 0xB4, 0xA5, 0xB5, 0xA6, 0xA6, 0x87, 0x88, 0x88, 0x78, 0x87, 0x86, //2000
        0xA5, 0xB3, 0xA5, 0xA5, 0xA6, 0xA6, 0x88, 0x88, 0x88, 0x78, 0x87, 0x87, //2001
        0xA5, 0xB4, 0x96, 0xA5, 0x96, 0x96, 0x88, 0x78, 0x78, 0x78, 0x87, 0x87, //2002
        0x95, 0xB4, 0x96, 0xA5, 0x96, 0x97, 0x88, 0x78, 0x78, 0x69, 0x78, 0x87, //2003
        0x96, 0xB4, 0xA5, 0xB5, 0xA6, 0xA6, 0x87, 0x88, 0x88, 0x78, 0x87, 0x86, //2004
        0xA5, 0xB3, 0xA5, 0xA5, 0xA6, 0xA6, 0x88, 0x88, 0x88, 0x78, 0x87, 0x87, //2005
        0xA5, 0xB4, 0x96, 0xA5, 0xA6, 0x96, 0x88, 0x88, 0x78, 0x78, 0x87, 0x87, //2006
        0x95, 0xB4, 0x96, 0xA5, 0x96, 0x97, 0x88, 0x78, 0x78, 0x69, 0x78, 0x87, //2007
        0x96, 0xB4, 0xA5, 0xB5, 0xA6, 0xA6, 0x87, 0x88, 0x87, 0x78, 0x87, 0x86, //2008
        0xA5, 0xB3, 0xA5, 0xB5, 0xA6, 0xA6, 0x88, 0x88, 0x88, 0x78, 0x87, 0x87, //2009
        0xA5, 0xB4, 0x96, 0xA5, 0xA6, 0x96, 0x88, 0x88, 0x78, 0x78, 0x87, 0x87, //2010
        0x95, 0xB4, 0x96, 0xA5, 0x96, 0x97, 0x88, 0x78, 0x78, 0x79, 0x78, 0x87, //2011
        0x96, 0xB4, 0xA5, 0xB5, 0xA5, 0xA6, 0x87, 0x88, 0x87, 0x78, 0x87, 0x86, //2012
        0xA5, 0xB3, 0xA5, 0xB5, 0xA6, 0xA6, 0x87, 0x88, 0x88, 0x78, 0x87, 0x87, //2013
        0xA5, 0xB4, 0x96, 0xA5, 0xA6, 0x96, 0x88, 0x88, 0x78, 0x78, 0x87, 0x87, //2014
        0x95, 0xB4, 0x96, 0xA5, 0x96, 0x97, 0x88, 0x78, 0x78, 0x79, 0x77, 0x87, //2015
        0x95, 0xB4, 0xA5, 0xB4, 0xA5, 0xA6, 0x87, 0x88, 0x87, 0x78, 0x87, 0x86, //2016
        0xA5, 0xC3, 0xA5, 0xB5, 0xA6, 0xA6, 0x87, 0x88, 0x88, 0x78, 0x87, 0x87, //2017
        0xA5, 0xB4, 0xA6, 0xA5, 0xA6, 0x96, 0x88, 0x88, 0x78, 0x78, 0x87, 0x87, //2018
        0xA5, 0xB4, 0x96, 0xA5, 0x96, 0x96, 0x88, 0x78, 0x78, 0x79, 0x77, 0x87, //2019
        0x95, 0xB4, 0xA5, 0xB4, 0xA5, 0xA6, 0x97, 0x87, 0x87, 0x78, 0x87, 0x86, //2020
        0xA5, 0xC3, 0xA5, 0xB5, 0xA6, 0xA6, 0x87, 0x88, 0x88, 0x78, 0x87, 0x86, //2021
        0xA5, 0xB4, 0xA5, 0xA5, 0xA6, 0x96, 0x88, 0x88, 0x88, 0x78, 0x87, 0x87, //2022
        0xA5, 0xB4, 0x96, 0xA5, 0x96, 0x96, 0x88, 0x78, 0x78, 0x79, 0x77, 0x87, //2023
        0x95, 0xB4, 0xA5, 0xB4, 0xA5, 0xA6, 0x97, 0x87, 0x87, 0x78, 0x87, 0x96, //2024
        0xA5, 0xC3, 0xA5, 0xB5, 0xA6, 0xA6, 0x87, 0x88, 0x88, 0x78, 0x87, 0x86, //2025
        0xA5, 0xB3, 0xA5, 0xA5, 0xA6, 0xA6, 0x88, 0x88, 0x88, 0x78, 0x87, 0x87, //2026
        0xA5, 0xB4, 0x96, 0xA5, 0x96, 0x96, 0x88, 0x78, 0x78, 0x78, 0x87, 0x87, //2027
        0x95, 0xB4, 0xA5, 0xB4, 0xA5, 0xA6, 0x97, 0x87, 0x87, 0x78, 0x87, 0x96, //2028
        0xA5, 0xC3, 0xA5, 0xB5, 0xA6, 0xA6, 0x87, 0x88, 0x88, 0x78, 0x87, 0x86, //2029
        0xA5, 0xB3, 0xA5, 0xA5, 0xA6, 0xA6, 0x88, 0x88, 0x88, 0x78, 0x87, 0x87, //2030
        0xA5, 0xB4, 0x96, 0xA5, 0x96, 0x96, 0x88, 0x78, 0x78, 0x78, 0x87, 0x87, //2031
        0x95, 0xB4, 0xA5, 0xB4, 0xA5, 0xA6, 0x97, 0x87, 0x87, 0x78, 0x87, 0x96, //2032
        0xA5, 0xC3, 0xA5, 0xB5, 0xA6, 0xA6, 0x88, 0x88, 0x88, 0x78, 0x87, 0x86, //2033
        0xA5, 0xB3, 0xA5, 0xA5, 0xA6, 0xA6, 0x88, 0x78, 0x88, 0x78, 0x87, 0x87, //2034
        0xA5, 0xB4, 0x96, 0xA5, 0xA6, 0x96, 0x88, 0x88, 0x78, 0x78, 0x87, 0x87, //2035
        0x95, 0xB4, 0xA5, 0xB4, 0xA5, 0xA6, 0x97, 0x87, 0x87, 0x78, 0x87, 0x96, //2036
        0xA5, 0xC3, 0xA5, 0xB5, 0xA6, 0xA6, 0x87, 0x88, 0x88, 0x78, 0x87, 0x86, //2037
        0xA5, 0xB3, 0xA5, 0xA5, 0xA6, 0xA6, 0x88, 0x88, 0x88, 0x78, 0x87, 0x87, //2038
        0xA5, 0xB4, 0x96, 0xA5, 0xA6, 0x96, 0x88, 0x88, 0x78, 0x78, 0x87, 0x87, //2039
        0x95, 0xB4, 0xA5, 0xB4, 0xA5, 0xA6, 0x97, 0x87, 0x87, 0x78, 0x87, 0x96, //2040
        0xA5, 0xC3, 0xA5, 0xB5, 0xA5, 0xA6, 0x87, 0x88, 0x87, 0x78, 0x87, 0x86, //2041
        0xA5, 0xB3, 0xA5, 0xB5, 0xA6, 0xA6, 0x88, 0x88, 0x88, 0x78, 0x87, 0x87, //2042
        0xA5, 0xB4, 0x96, 0xA5, 0xA6, 0x96, 0x88, 0x88, 0x78, 0x78, 0x87, 0x87, //2043
        0x95, 0xB4, 0xA5, 0xB4, 0xA5, 0xA6, 0x97, 0x87, 0x87, 0x88, 0x87, 0x96, //2044
        0xA5, 0xC3, 0xA5, 0xB4, 0xA5, 0xA6, 0x87, 0x88, 0x87, 0x78, 0x87, 0x86, //2045
        0xA5, 0xB3, 0xA5, 0xB5, 0xA6, 0xA6, 0x87, 0x88, 0x88, 0x78, 0x87, 0x87, //2046
        0xA5, 0xB4, 0x96, 0xA5, 0xA6, 0x96, 0x88, 0x88, 0x78, 0x78, 0x87, 0x87, //2047
        0x95, 0xB4, 0xA5, 0xB4, 0xA5, 0xA5, 0x97, 0x87, 0x87, 0x88, 0x86, 0x96, //2048
        0xA4, 0xC3, 0xA5, 0xA5, 0xA5, 0xA6, 0x97, 0x87, 0x87, 0x78, 0x87, 0x86, //2049
        0xA5, 0xC3, 0xA5, 0xB5, 0xA6, 0xA6, 0x87, 0x88, 0x78, 0x78, 0x87, 0x87 //2050
    ]
    var intlFestival = {
        "1-1": "元旦",
        "2-14": "情人节",
        "3-8": "妇女节",
        "3-12": "植树节",
        "3-15": "消费者权益日",
        "4-1": "愚人节",
        "4-22": "地球日",
        "5-1": "劳动节",
        "5-4": "五四青年节",
        "6-1": "儿童节",
        "6-5": "世界环境日",
        "7-1": "建党节",
        "8-1": "建军节",
        "9-3": "抗战胜利日",
        "9-10": "教师节",
        "10-1": "国庆节",
        "11-1": "万圣节",
        "11-25": "感恩节",
        "12-1": "艾滋病日",
        "12-24": "平安夜",
        "12-25": "圣诞节",
    };
    //按星期计算的节日
    var specFestival = {
        "5-2-7": "母亲节",
        "6-3-7": "父亲节"
    };
    //判断是否是闰年
    function isLeap(y) {
        return y % 4 == 0 && y % 100 || y % 400 == 0 ? 1 : 0;
    }
    // 计算该年某月天数
    function monthDay(y, m) {
        switch (m) {
            case 1:
            case 3:
            case 5:
            case 7:
            case 8:
            case 10:
            case 12:
                return 31;
            case 4:
            case 6:
            case 9:
            case 11:
                return 30;
            case 2:
                return 28 + isLeap(y);
        }
    }

    function addClass(obj, name) {
        if (obj.className.search(name) == -1) {
            if (obj.className)
                obj.className += " " + name;
            else
                obj.className = name;
        }
    }

    function removeClass(obj, name) {
        if (obj.className) {
            var reg = new RegExp("(\\s|^)" + name + "(\\s|$)")
            obj.className = obj.className.replace(reg, "");
        }
    }
    // 生成年和月的选择和选择本年本月
    (function() {
        var year = document.getElementById("year");
        var month = document.getElementById("month");
        var d = new Date();
        for (var i = 1900; i <= 2050; i++) {
            var option = document.createElement("option")
            option.innerHTML = i + "年"
            if (d.getFullYear() == i) {
                option.selected = true;
            }
            year.appendChild(option);
        }
        for (var i = 1; i <= 12; i++) {
            var option = document.createElement("option")
            option.innerHTML = i + "月"
            if (d.getMonth() + 1 == i) {
                option.selected = true;
            }
            month.appendChild(option);
        }
    })();
    //1900.1.1到某天天数
    function originToDay(y, m, d) {
        var sumDay = 0;
        for (var i = origin.year; i < y; i++) {
            sumDay += 365 + isLeap(i);
        }
        for (var i = 1; i < m; i++) {
            sumDay += monthDay(y, i);
        }
        for (var i = origin.day; i < d; i++) {
            sumDay += 1;
        }
        return sumDay;
    }

    function changeSelected(thisDate) {
        var flag = 1;
        for (var i = 1; i < 7; i++) {
            for (var j = 0; j < 7; j++) {
                var cal = document.getElementById("calendar");
                var calTab = cal.getElementsByTagName("table")[0];
                var c = calTab.children[0].children[i].children[j].children[0];
                removeClass(c, "selected");
                if (c.date == thisDate) {
                    addClass(c, "selected");
                    flag = 0;
                }
            }
        }
        if (flag) {
            var i = thisDate.lastIndexOf("-");
            changeSelected(thisDate.substring(0, i + 1) + 1);
        }
    }

    function addEvent(c) {
        c.onmouseover = function() {
            addClass(this, "active");
        }
        c.onmouseout = function() {
            removeClass(this, "active");
        }
        c.onclick = function() {
            var thisDate = this.date;
            var arr = this.date.split("-");
            if (parseInt(arr[0]) != 2051) {
                var year = document.getElementById("year");
                var month = document.getElementById("month");
                for (var i = 0; i < year.children.length; i++) {
                    if (parseInt(year.children[i].innerHTML) == parseInt(arr[0])) {
                        year.children[i].selected = true;
                        updateDate();
                        break;
                    }
                }
                for (var i = 0; i < month.children.length; i++) {
                    if (parseInt(month.children[i].innerHTML) == parseInt(arr[1])) {
                        month.children[i].selected = true;
                        updateDate();
                        break;
                    }
                }
            }
            changeSelected(thisDate);
        }
    }
    //判断某天是否为国际节假日
    function isFestival(m, d, s, w) {
        for (var i in intlFestival) {
            if (i == m + "-" + d) {
                return intlFestival[i];
            }
        }
        for (var i in specFestival) {
            if (i == m + "-" + s + "-" + w) {
                return specFestival[i];
            }
        }
        return "";
    }
    //判断是否为节气
    function isSolar(y, m, d) {
        var i = (y - origin.year) * 12 + m - 1;
        var p = arrSolar[i] >> 4;
        if (15 - p == d) {
            return solarTerms[2 * m - 2];
        }
        p = arrSolar[i] % 16;
        if (p + 15 == d) {
            return solarTerms[2 * m - 1];
        }
        return "";
    }
    //添加节气和节日
    function addFes(c, f, s) {
        var t = "";
        if (f && s) {
            t = f + " " + s;
        } else if (f) {
            t = f;
        } else {
            t = s;
        }
        c.innerHTML = t;
        c.title = t;
    }
    //更新日历
    function updateDate(flag) {
        var year = document.getElementById("year");
        var month = document.getElementById("month");
        var cal = document.getElementById("calendar");
        var calTab = cal.getElementsByTagName("table")[0];
        var indexY = year.selectedIndex;
        var indexM = month.selectedIndex;
        var y = parseInt(year.options[indexY].text);
        var m = parseInt(month.options[indexM].text);
        var sumDay = originToDay(y, m, 1);
        var nowDay = (sumDay + origin.day) % 7;
        nowDay = nowDay ? nowDay : 7;
        //上月
        var lastM = (m + 11) % 12;
        lastM = lastM ? lastM : 12;
        var lastY = lastM == 12 ? y - 1 : y;
        var lastMDay = monthDay(lastY, lastM);
        var td = new Date;
        var selectedDate = td.getDate();
        for (var i = 0; i < nowDay - 1; i++) {
            var c = calTab.children[0].children[1].children[i].children[0];
            var d = lastMDay + i - nowDay + 2;
            if (c.className.search("selected") > -1 && !flag) {
                selectedDate = c.date.split("-")[2];
            }
            c.date = lastY + "-" + lastM + "-" + d;
            c.className = "";
            var fes = isFestival(lastM, d, 1, i + 1);
            var solar = isSolar(lastY, lastM, d);
            addFes(c.children[1], fes, solar);
            c.children[0].innerHTML = d;
            c.children[0].className = "ntm";
            c.children[1].className = "ntm";
            addEvent(c);
        }
        //本月
        var mDay = monthDay(y, m);
        var p, q, n, f;
        for (p = 1, n = 1, f = nowDay - 1; n <= mDay; p++, f = 0) {
            for (q = f; q < 7 && n <= mDay; q++) {
                var c = calTab.children[0].children[p].children[q].children[0];
                if (c.className.search("selected") > -1 && !flag) {
                    selectedDate = c.date.split("-")[2];
                }
                c.className = "";
                if (n == td.getDate() && m == td.getMonth() + 1 && td.getFullYear() == y) {
                    c.className = "today";
                }
                c.date = y + "-" + m + "-" + n;
                var fes = isFestival(m, n, p, q + 1);
                var solar = isSolar(y, m, n);
                addFes(c.children[1], fes, solar);
                c.children[0].innerHTML = n++;
                c.children[0].className = "";
                if (q == 5 || q == 6) {
                    c.children[0].className = "red";
                }
                c.children[1].className = "red";
                addEvent(c);
            }
        }
        //下月
        var nextM = (m + 1) % 12;
        nextM = nextM ? nextM : 12;
        var nextY = nextM == 1 ? y + 1 : y;
        n = 1;
        for (var i = p - 1, f = q; i <= 6; i++, f = 0) {
            for (var j = f; j < 7; j++) {
                var c = calTab.children[0].children[i].children[j].children[0];
                if (c.className.search("selected" && !flag) > -1) {
                    selectedDate = c.date.split("-")[2];
                }
                c.className = "";
                c.date = nextY + "-" + nextM + "-" + n;
                var fes = isFestival(nextM, n, i - p + 2, j + 1);
                var solar = isSolar(nextY, nextM, n);
                addFes(c.children[1], fes, solar);
                c.children[0].innerHTML = n++;
                c.children[0].className = "ntm";
                c.children[1].className = "ntm";
                addEvent(c);
            }
        }
        changeSelected(y + "-" + m + "-" + selectedDate);
    }
    //转到上一年
    function prevYear() {
        var thisYear = document.getElementById("year");
        var option = thisYear.getElementsByTagName("option");
        var i = thisYear.selectedIndex;
        if (i != 0) {
            option[i - 1].selected = true;
            updateDate();
        }
    }
    //转到下一年
    function nextYear() {
        var thisYear = document.getElementById("year");
        var option = thisYear.getElementsByTagName("option");
        var i = thisYear.selectedIndex;
        if (i != option.length - 1) {
            option[i + 1].selected = true;
            updateDate();
        }
    }
    //转到上个月
    function prevMonth() {
        var thisYear = document.getElementById("year");
        var thisMonth = document.getElementById("month");
        var option1 = thisYear.getElementsByTagName("option");
        var option2 = thisMonth.getElementsByTagName("option")
        var i = thisYear.selectedIndex;
        var j = thisMonth.selectedIndex;
        if (i == 0 && j == 0) return;
        j = j ? j - 1 : 11;
        i = j == 11 ? i - 1 : i;
        option1[i].selected = true;
        option2[j].selected = true;
        updateDate();
    }
    //转到下个月
    function nextMonth() {
        var thisYear = document.getElementById("year");
        var thisMonth = document.getElementById("month");
        var option1 = thisYear.getElementsByTagName("option");
        var option2 = thisMonth.getElementsByTagName("option")
        var i = thisYear.selectedIndex;
        var j = thisMonth.selectedIndex;
        if (i == option1.length - 1 && j == option2.length - 1) return;
        j = j == 11 ? 0 : j + 1;
        i = j ? i : i + 1;
        option1[i].selected = true;
        option2[j].selected = true;
        updateDate();
    }
    var startX,startY;
    //触摸事件
    function touchStartFunc(e){
        e=e||event;
        e.preventDefault();
        var touch =e.touches[0];
        startX= Number(touch.pageX);
        startY=Number(touch.pageY);
    }
    function touchMoveFunc(){

    }
    function touchEndFunc(e){
        e=e||event;
        e.preventDefault();
        var touch=e.touches[0];
        if(x-startX>0){
            nextMonth();
        }
        else if(x-startx<0){
            prevMonth();
        }
    }
    var cal = document.getElementById("calendar");
    var aSel = cal.getElementsByTagName("select");
    for (var i = 0; i < aSel.length; i++) {
        aSel[i].onchange = updateDate;
    }
    var rtBtn = document.getElementById("rtToday");
    rtBtn.onclick = function() {
        var td = new Date();
        aSel[0].children[td.getFullYear() - origin.year].selected = true;
        aSel[1].children[td.getMonth() - origin.month + 1].selected = true;
        updateDate(1);
    }
    var prYear = document.getElementById("prevYear");
    var ntYear = document.getElementById("nextYear");
    var prMonth = document.getElementById("prevMonth");
    var ntMonth = document.getElementById("nextMonth");
    prYear.onclick = prevYear;
    ntYear.onclick = nextYear;
    prMonth.onclick = prevMonth;
    ntMonth.onclick = nextMonth;
    if(document.createEvent("TouchEvent")){
        cal.ontouchstart=touchStartFunc;
        cal.ontouchmove=touchMoveFunc;
        cal.ontouchsend=touchEndFunc;
    }
    updateDate();
})();
